const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("SMTP Configured for:", process.env.SMTP_MAIL);
console.log("SMTP Password Length:", process.env.SMTP_PASSWORD ? process.env.SMTP_PASSWORD.length : 0);

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});


transporter.verify(function (error, success) {
    if (error) {
        console.log("Transporter verification failed:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

app.post('/api/send-email', async (req, res) => {
    console.log("Received email request:", req.body);
    const { name, email, budget, details } = req.body;

    const mailOptions = {
        from: process.env.SMTP_MAIL, // Sender address (authenticated user)
        to: "nandkumarbirgad5@gmail.com", // Receiver address
        replyTo: email,
        subject: `New Hire Request from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      Budget: ${budget || 'Not specified'}
      Details: ${details}
    `,
        html: `
      <h3>New Hire Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>Details:</strong></p>
      <p>${details.replace(/\n/g, '<br>')}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
