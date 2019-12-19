const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
// const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser')
const config = require('./config')
const db = require('../src/firebaseInit')
const axios = require('axios');

// sgMail.setApiKey('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')


app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(serveStatic(__dirname + "/dist"));

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))



const port = process.env.PORT || 8080;



// app.post('/createmailer', function(req, res) {
//   console.log(req.body.mailto)
//   const msg = {
//     to: 'empower@4NTENT.com',
//     // to: 'hursungwoo@yahoo.com',
//     from: '4ntent@4NTENT.com',
//     subject: 'Someone created an Account',
//     text: 'An account was created by ' + req.body.mailto + '!',
//     html: '<strong>An account was created by ' + req.body.mailto + '!</strong>',
//   }
//   sgMail.send(msg)
// })

// app.post('/notifmailer', function(req, res) {
//   console.log(req.body.mailto, req.body.sender)
//   const msg = {
//     to: req.body.mailto,
//     from: '4ntent@4NTENT.com',
//     subject: 'You have a new message',
//     text: 'You have a new message from ' + req.body.sender + '! Please go to https://www.4ntent.com/ to view.',
//     html: '<strong>You have a new message from ' + req.body.sender + '! Please go to <a href="https://www.4ntent.com/"> https://www.4ntent.com/ </a> to view.</strong>',
//   }
//   sgMail.send(msg)
// })

// app.post('/signup', function(req, res) {
//   console.log(req.body.mailto, req.body.password)
//   const msg = {
//     to: req.body.mailto,
//     from: '4ntent@4NTENT.com',
//     subject: 'You have a new message',
//     text: 'You created an account the password is ' + req.body.password + ' Please go to https://www.4ntent.com/home to view.',
//     html: '<strong>You created an account the password is ' + req.body.password + ' Please go to <a href="https://www.4ntent.com/home"> https://www.4ntent.com/home/ </a> to view.</strong>',
//   }
//   sgMail.send(msg)
// })


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(port);
console.log('server started ' + port);
