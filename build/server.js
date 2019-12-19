'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
const request = require('request')
const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

const port = process.env.PORT || config.dev.port
const autoOpenBrowser = !!config.dev.autoOpenBrowser
const proxyTable = config.dev.proxyTable

const app = express()

var paypal = require('paypal-rest-sdk');


const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})

//need to fix this to only allows requests from localhost when in dev, and only 4ntent.com when in prod
//see https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b for an explanation that also includes sending and receiving cors credentials

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Origin', ['http://localhost:8080', 'https://localhost:8080', 'http://www.4ntent.com', 'https://www.4ntent.com', 'http://4ntent.com', 'https://4ntent.com']);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(hotMiddleware)

// load the favicon
app.use('/favicon.ico', express.static(__dirname + '/../favicon.ico'));

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

// const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser')

// sgMail.setApiKey('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')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

//when a user creates an account
//required fields are EMAIL, everything else is optional given the different ways to create an account
app.post('/signup', (req, res) => {
  const email = req.body.email;
  console.dir(req)
  if (!email) {
    console.log('the email was not provided with the post request')
  }

  const data = {
    members: [{
      email_address: email,
      status: 'subscribed',
      // merge_fields: {
      //   FNAME: firstName,
      //   LNAME: lastName
      // }

    }]
  }

  const postData = JSON.stringify(data)
  //the 'us14' is the data center aka <dc>. this value is located at the end of your MAILCHIMP_API_KEY
  const options = {
    url: 'https://us14.api.mailchimp.com/3.0/lists/a92a09a054',
    method: 'POST',
    headers: {
      Authorization: "auth 8fd5dc296467abdbdd48a9865526d3b6-us14"
    },
    body: postData
  }

  request(options, (err, response, body) => {
    if (err) {
      console.log(err)
    } else {
      if (response.statusCode === 200) {
        console.log('successfully added user info to mailchimp with a body of: ' + body)
      } else {
        console.log(response.statusCode)
      }
    }
  })
})


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
//     text: 'You have a new message from ' + req.body.sender + '! Please go to https://www.4ntent.com/home to view.',
//     html: '<strong>You have a new message from ' + req.body.sender + '! Please go to <a href="https://www.4ntent.com/home"> https://www.4ntent.com/home </a> to view.</strong>',
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

console.log('server started ' + port);

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})



module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
