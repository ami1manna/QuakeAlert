const nodemailer = require('nodemailer');

// Configure your email transport using a service like Gmail, SendGrid, etc.
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email password or application-specific password
  }
});

// Function to send an email
const sendEmail = (email, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text
  };

  return transporter.sendMail(mailOptions);
};

// Function to send SMS (can use an SMS service like Twilio)
// This is a placeholder and needs to be implemented separately if needed
const sendSMS = (phone, message) => {
  // Implement SMS sending logic here
};

const sendNotification = (phone, email, message) => {
  // Send SMS and Email notifications
  return Promise.all([
    sendSMS(phone, message), // Make sure you have implemented sendSMS
    sendEmail(email, 'Emergency Alert', message)
  ]);
};

module.exports = sendNotification;
