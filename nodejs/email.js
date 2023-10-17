var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jesimar.arantes@gmail.com',
    pass: 'R@m1s3j8891'
  }
});

var mailOptions = {
  from: 'jesimar.arantes@gmail.com',
  to: 'jesimar.arantes@ufla.br',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
