const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  // Check if request method is POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Parse the request body
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return { statusCode: 400, body: "Bad Request: Invalid JSON" };
  }

  // Validate required fields
  if (!data.name || !data.email || !data.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  try {
    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use a different service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // This should be an app password, not your regular password
      },
    });

    // Set up email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "chouikhdaly215@gmail.com", // Your email address where you want to receive messages
      subject: `Portfolio Contact: Message from ${data.name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending email" }),
    };
  }
};
