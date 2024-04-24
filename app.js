const nodemailer = require('nodemailer');
const html = `
<h1>hello world</h1>
<p>Hello world</p>
`;

async function main() {
   const transporter =  nodemailer.createTransport({
        host:'mail.openjavascript.info',
        port: 465,
        secure: true,
        auth: {
            user: '+++++++++++++++++++++++++',
        
        pass: '++++++++++++++++'
    }
    });
  const  info = await  transporter.sendMail({
from:'OpenJavascript <test@openjscript.info>',
to:'test2@openjscript.info',
subject:'Testing, testing, 123',
html:html,
    })
    console.log("Sent mail" + info.messageId);
}
main().catch(err => console.log(err));

//MULTIPLE USER

const nodemailer = require("nodemailer");

const maillist = [
  "****.bram@****.com",
  "****.shah@****.com",
  "****.styles@****.com",
];
// Defines recipients

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "***-example-person@gmail.com",
      pass: "your-password",
      // ⚠️ Use environment variables set on the server for these values when deploying
    },
  });

  let info = await transporter.sendMail({
    from: '"You" <***-example-person@gmail.com>',
    to: maillist, // Mails to array of recipients
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
  });

  console.log(info.messageId);
  console.log(info.accepted); // Array of emails that were successful
  console.log(info.rejected); // Array of unsuccessful emails
}

main().catch((err) => console.log(err));

//Attachments and images
const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "***-example-person@gmail.com",
      pass: "your-password",
      // ⚠️ Use environment variables set on the server for these values when deploying
    },
  });

  let info = await transporter.sendMail({
    from: '"You" <***-example-person@gmail.com>',
    to: "****.bram@****.com",
    subject: "Image test",
    html: `
    <h1>Hello world</h1>
    <p>Here's an image for you</p>
    <img src="cid:unique@gmail.com>"/>'
    `, // Embedded image links to content ID
    attachments: [
      {
        filename: "image.png",
        path: "./img1.jpg",
        cid: "unique@gmail.com", // Sets content ID
      },
    ],
  });

  console.log(info.messageId);
}

main().catch((err) => console.log(err));