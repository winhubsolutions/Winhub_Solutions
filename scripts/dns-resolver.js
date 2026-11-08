// Preload module to guarantee ultra-reliable DNS resolution for Neon PostgreSQL & external services
const dns = require('dns');

const PUBLIC_DNS = ['8.8.8.8', '1.1.1.1', '8.8.4.4', '1.0.0.1'];
dns.setServers(PUBLIC_DNS);

const originalLookup = dns.lookup;

// In-memory DNS cache
const dnsCache = new Map();
const TTL = 5 * 60 * 1000; // 5 minutes

function resolveFallback(hostname, callback) {
  const cached = dnsCache.get(hostname);
  if (cached && Date.now() - cached.timestamp < TTL) {
    return callback(null, cached.addresses);
  }

  dns.resolve4(hostname, (err, addresses) => {
    if (!err && addresses && addresses.length > 0) {
      dnsCache.set(hostname, { addresses, timestamp: Date.now() });
      return callback(null, addresses);
    }
    return callback(err || new Error(`Could not resolve ${hostname}`));
  });
}

dns.lookup = function (hostname, options, callback) {
  let cb = callback;
  let opt = options;

  if (typeof opt === 'function') {
    cb = opt;
    opt = {};
  } else if (typeof opt === 'number') {
    opt = { family: opt };
  } else if (!opt) {
    opt = {};
  }

  // Intercept neon.tech or hostnames that fail local resolver
  if (typeof hostname === 'string' && (hostname.includes('neon.tech') || hostname.includes('aws.neon'))) {
    resolveFallback(hostname, (err, addresses) => {
      if (!err && addresses && addresses.length > 0) {
        if (opt.all) {
          const results = addresses.map((ip) => ({ address: ip, family: 4 }));
          return cb(null, results);
        }
        return cb(null, addresses[0], 4);
      }
      return originalLookup.call(dns, hostname, opt, cb);
    });
    return;
  }

  // Standard lookup with fallback on failure
  originalLookup.call(dns, hostname, opt, (err, address, family) => {
    if (err && (err.code === 'EAI_AGAIN' || err.code === 'ENOTFOUND')) {
      resolveFallback(hostname, (resErr, addresses) => {
        if (!resErr && addresses && addresses.length > 0) {
          if (opt.all) {
            return cb(null, addresses.map((ip) => ({ address: ip, family: 4 })));
          }
          return cb(null, addresses[0], 4);
        }
        return cb(err, address, family);
      });
      return;
    }
    return cb(err, address, family);
  });
};

console.log('[DNS] Reliable public DNS preloader loaded (8.8.8.8, 1.1.1.1)');
