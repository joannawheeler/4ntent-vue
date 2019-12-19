'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
const request = require('request')
const bodyParser = require("body-parser");
const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')
const paypal = require('paypal-rest-sdk');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Origin', ['http://localhost:8080', 'https://localhost:8080', 'http://www.4ntent.com', 'https://www.4ntent.com', 'http://4ntent.com', 'https://4ntent.com']);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port


//when a user creates an account
//required fields are EMAIL and PASSWORD, everything else is optional given the different ways to create an account
app.post('/signup', (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  console.dir(req.body)
  // if (!email) {
  //   console.log('the email was not provided with the post request')
  // }

  const data = {
    members: [{
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        'FNAME': firstName,
        'LNAME': lastName
      },
      // update_existing: true
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
  res.end('all done!')
})

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
