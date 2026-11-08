const dns = require('node:dns');

try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch {}

const origLookup = dns.lookup;
dns.lookup = function (hostname, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  origLookup(hostname, options, (err, address, family) => {
    if (err && (hostname.includes('neon.tech') || err.code === 'ENOTFOUND' || err.code === 'EREFUSED' || err.code === 'EAI_AGAIN')) {
      dns.resolve4(hostname, (rErr, addresses) => {
        if (!rErr && addresses && addresses.length > 0) {
          if (options && options.all) {
            return callback(null, addresses.map((a) => ({ address: a, family: 4 })));
          }
          return callback(null, addresses[0], 4);
        }
        return callback(err, address, family);
      });
      return;
    }
    return callback(err, address, family);
  });
};

