const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const path = require('path');
const nodemon = require('nodemon');
const config = require('../webpack.config.js');

const app = express();
const compiler = webpack(config);

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: '//localhost:3001/',
    writeToDisk: true,
  })
);

app.use(
  // FIXME:
  //  `webpack-hot-middleware` currently does not work reliably with Webpack 5:
  //  Ref: https://github.com/webpack-contrib/webpack-hot-middleware/pull/397
  require(`webpack-hot-middleware`)(compiler, {
    log: false,
    path: `/__webpack_hmr`,
    heartbeat: 10 * 1000,
  })
);

app.listen(3001, () => console.log('App is listening on port 3001!'));

nodemon({
  script: path.resolve(__dirname, '../src/server/server.js'),
  watch: [
    // path.resolve(__dirname, "../dist"),
    path.resolve(__dirname, '../src/server/server.js'),
  ],
});
