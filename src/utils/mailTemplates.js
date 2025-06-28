export const getMailToUserTemplate = (fullName) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f5f3f7;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(128, 0, 128, 0.1);
        border-top: 6px solid #7e22ce;
      }
      .header {
        background-color: #7e22ce;
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: 1.5rem;
      }
      .content {
        padding: 30px;
        font-size: 1rem;
        color: #333;
      }
      .footer {
        background-color: #f3e8ff;
        color: #7e22ce;
        text-align: center;
        padding: 15px;
        font-size: 0.9rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Vibe Motion</div>
      <div class="content">
        <p>Hi <strong>${fullName}</strong>,</p>
        <p>We have received your request and will get back to you shortly.</p>
        <p>Thank you for reaching out!</p>
        <p>Warm regards,</p>
        <p><strong>Vibe Motion Team</strong></p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Vibe Motion. All rights reserved.
      </div>
    </div>
  </body>
</html>
`;
};

export const getMailToAdminTemplate = (detail) => {
  const { fullName, email, phone, message } = detail;
  return `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f5f3f7;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(128, 0, 128, 0.1);
        border-top: 6px solid #7e22ce;
      }
      .header {
        background-color: #7e22ce;
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: 1.5rem;
      }
      .content {
        padding: 30px;
        font-size: 1rem;
        color: #333;
      }
      .info-box {
        background-color: #f3e8ff;
        padding: 15px;
        border-radius: 6px;
        margin-bottom: 20px;
      }
      .info-box p {
        margin: 5px 0;
        color: #4b0082;
      }
      .footer {
        background-color: #f3e8ff;
        color: #7e22ce;
        text-align: center;
        padding: 15px;
        font-size: 0.9rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">New Contact Request</div>
      <div class="content">
        <p>Hi Admin,</p>
        <p>You’ve received a new contact request via the website. Details are below:</p>

        <div class="info-box">
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/> ${message}</p>
        </div>

        <p>Regards,</p>
        <p><strong>Vibe Motion Bot</strong></p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Vibe Motion. All rights reserved.
      </div>
    </div>
  </body>
</html>
`;
};
