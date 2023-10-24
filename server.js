const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Define a route to handle POST requests to /sendImages
app.post('/sendImages', async (req, res) => {
  const { images } = req.body;
  console.log('Received image URLs from the client:', images);

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@forteimperiali.com",
      pass: "Forte123",
    },
  });

  const message = {
    from: 'info@forteimperiali.com',
    to: 'info@forteimperiali.com', // Replace with the recipient's email address
    subject: 'Images from Your Website',
    text: `Here are the images you requested:\n${images.join('\n')}`,
    html: `<b>Here are the images you requested:</b><br>${images.map((url) => `<img src="${url}"><br>`).join('')}`,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(message);
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.json({ message: 'Email sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/inde.html'); // Replace with the path to your HTML file.
  });

app.listen(port, () =>
  console.log(`Example app is listening at localhost:${port}`)
);
