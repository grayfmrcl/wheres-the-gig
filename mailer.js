const nodemailer = require('nodemailer');
const fs = require('fs')

function mailer(userMail){

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'odirobbani@gmail.com',
      pass: 'odi08101995ro'
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
  let HelperOptions = {
    from: '"odi" <odirobbani@gmail.com',
    to: `${userMail}`,
    subject: 'dd',
    text: 'wheres the gig',
    html: '<p>Click <a href="http://localhost:3000/sessions/recover/' + "recovery_token" + '">here</a> to reset your password</p>',
    attachments: [{   
        filename: 'wheresthegig.jpg',
        content: fs.createReadStream('/home/khodi/Documents/hacktiv8/wheres-the-gig/wtg.png')
    }]
  };
  
  
  
    transporter.sendMail(HelperOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("The message was sent!");
      console.log(info);
    });
  
}

module.exports = mailer