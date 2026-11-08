import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY || "";

export const resend = new Resend(apiKey);

export interface ContactNotificationPayload {
  inquiryId: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  budget?: string | null;
  message?: string | null;
  timestamp?: string;
}

export async function sendContactNotification(payload: ContactNotificationPayload) {
  const fromEmail = process.env.RESEND_DEFAULT_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.TEST_EMAIL || "winhubsolutions@gmail.com";

  const {
    inquiryId,
    name,
    email,
    phone,
    company,
    service,
    budget,
    message,
    timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  } = payload;

  const subject = `[New Project Lead] ${name} - ${service || "General Inquiry"} (${inquiryId})`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Client Inquiry</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0A0E; color: #FFFFFF; margin: 0; padding: 24px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #121217; border-radius: 16px; border: 1px solid #222228; overflow: hidden;">
          <!-- Header Banner -->
          <tr>
            <td style="padding: 28px 32px; background-color: #17171F; border-bottom: 1px solid #2A2A34;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #FF7120; letter-spacing: 2px;">
                      // WINHUB TELEMETRY DISPATCH
                    </span>
                    <h1 style="margin: 6px 0 0 0; font-size: 22px; font-weight: 800; color: #FFFFFF; text-transform: uppercase; letter-spacing: -0.5px;">
                      New Project Inquiry
                    </h1>
                  </td>
                  <td align="right">
                    <span style="font-family: monospace; font-size: 11px; background-color: rgba(255, 113, 32, 0.15); border: 1px solid rgba(255, 113, 32, 0.4); color: #FF7120; padding: 4px 10px; border-radius: 999px;">
                      ${inquiryId}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Core Details -->
          <tr>
            <td style="padding: 32px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; width: 35%; color: #888888; font-size: 13px; font-family: monospace; text-transform: uppercase;">
                    Client Name
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #FFFFFF; font-size: 14px; font-weight: 600;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #888888; font-size: 13px; font-family: monospace; text-transform: uppercase;">
                    Email Address
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; font-size: 14px;">
                    <a href="mailto:${email}" style="color: #FF7120; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #888888; font-size: 13px; font-family: monospace; text-transform: uppercase;">
                    Phone Number
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #FFFFFF; font-size: 14px;">
                    ${phone ? `<a href="tel:${phone}" style="color: #FFFFFF; text-decoration: none;">${phone}</a>` : '<span style="color: #666666;">Not Provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #888888; font-size: 13px; font-family: monospace; text-transform: uppercase;">
                    Organization / Company
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #FFFFFF; font-size: 14px;">
                    ${company || '<span style="color: #666666;">Not Provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #888888; font-size: 13px; font-family: monospace; text-transform: uppercase;">
                    Target Service
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #FF7120; font-size: 14px; font-weight: 700;">
                    ${service || "General Technical Consultation"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #888888; font-size: 13px; font-family: monospace; text-transform: uppercase;">
                    Estimated Budget
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1E1E26; color: #FFFFFF; font-size: 14px;">
                    ${budget || '<span style="color: #666666;">Standard Scope</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888888; font-size: 13px; font-family: monospace; text-transform: uppercase;">
                    Received At
                  </td>
                  <td style="padding: 10px 0; color: #AAAAAA; font-size: 13px; font-family: monospace;">
                    ${timestamp} (IST)
                  </td>
                </tr>
              </table>

              <!-- Message Block -->
              <div style="background-color: #17171F; border-radius: 12px; border: 1px solid #24242D; padding: 20px; margin-bottom: 24px;">
                <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 8px;">
                  Project Scope &amp; Client Message:
                </span>
                <p style="margin: 0; color: #E5E5E5; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                  ${message || "No additional project brief text provided."}
                </p>
              </div>

              <!-- Quick Reply Action Button -->
              <div style="text-align: center; margin-top: 10px;">
                <a href="mailto:${email}?subject=Re:%20Winhub%20Solutions%20Project%20Inquiry%20(${inquiryId})" style="display: inline-block; background-color: #FF7120; color: #FFFFFF; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-size: 13px; font-weight: bold; font-family: monospace; text-transform: uppercase; letter-spacing: 1px;">
                  Reply to Client Directly →
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0E0E12; border-top: 1px solid #1A1A22; text-align: center;">
              <p style="margin: 0; font-family: monospace; font-size: 11px; color: #666666;">
                Winhub Solutions • IT Services &amp; Digital Engineering • Automated Lead Relay
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject,
    html,
  });
}

