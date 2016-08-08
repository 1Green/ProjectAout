/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

mongoose.connect('mongodb://localhost/API');
app.use(bodyParser.urlencoded( { extended:true } ));
app.use(bodyParser.json());

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  
  
  
  
  // DEV USES

  
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(__dirname + '/app/data'));
  
  
  // API CONFIG
  
  
  //Commissioned Work Images
  
  const commissionedWorkImages = require('./models/commissionedWorkImages');
  commissionedWorkImages.methods(['get', 'put', 'post', 'delete']);
  commissionedWorkImages.register(app, '/API/commissionedWorkImages');
  
  //Commissioned Work Videos
  
  const commissionedWorkVideos = require('./models/commissionedWorkVideos');
  commissionedWorkVideos.methods(['get', 'put', 'post', 'delete']);
  commissionedWorkVideos.register(app, '/API/commissionedWorkVideos');
 
  
  // ROUTES
  
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
} else {
  
  app.use(express.static(__dirname + '/dist'));
  
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
