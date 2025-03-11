/**
 * Generates a styled HTML email template
 * @param {Object} data Form submission data
 * @returns {string} HTML email template with inline styles
 */
exports.generateEmailTemplate = (data) => {
  const { name, email, message } = data;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Message</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Helvetica', 'Arial', sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 10px; overflow: hidden;">
          <!-- Header -->
          <div style="background-color: #07bc0c; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Message</h1>
          </div>
          
          <!-- Sender Info -->
          <div style="padding: 20px; border-bottom: 1px solid #eaeaea;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; width: 100px; color: #686868; font-weight: bold;">From:</td>
                <td style="padding: 10px;">
                  <span style="font-weight: bold; color: #222222;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; color: #686868; font-weight: bold;">Email:</td>
                <td style="padding: 10px;">
                  <a href="mailto:${email}" style="color: #07bc0c; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>
          </div>
          
          <!-- Message Content -->
          <div style="padding: 20px;">
            <h2 style="color: #07bc0c; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Message:</h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; color: #333333; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; color: #686868; font-size: 12px;">
            <p style="margin: 5px 0;">
              This message was sent from your portfolio contact form.
            </p>
            <p style="margin: 5px 0;">
              © ${new Date().getFullYear()} Mohamed Ali CHOUIKH | Portfolio
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};
