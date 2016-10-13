/* eslint no-console: 0 */
"use strict"

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mkdirp = require('mkdirp');
const fileUpload = require('express-fileupload');

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded( { extended:true } ));
app.use(bodyParser.json());
app.use(fileUpload());

if (isDeveloping) {
  mongoose.connect('mongodb://localhost/API');
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
  
  
  app.post('/uploadCommissionedPhoto', function(req, res) {
   
    var fileArray = [];
    const coverTitle = req.body.coverTitle.replace(/ /g,"_");
  
    mkdirp(path.join(__dirname,`/app/data/commissionedWork/photos/${coverTitle}`), function (err) {
      if (err) console.error('MKDIR ERR:', err);
      else console.log('MKDIR OK', coverTitle);
    });

    for (let file in req.files){
      if(req.files.hasOwnProperty(file) && req.files[file].data) fileArray.push(req.files[file]);
    }
    
    fileArray.forEach(
      file => {
        file.mv(
          path.join(__dirname, `/app/data/commissionedWork/photos/${coverTitle}/${file.name}`),
          err => {
            err ? console.log("MV ERR ", err) : console.log('MV OK:', file.name);
          });
      });
    
    const titles = Object.keys(req.body).map( prop =>  prop.startsWith('title') ? req.body[prop] : null );
    const imageData = fileArray
      .map( (file, index) =>
        ({ title: titles[index],
           url: `photos/${coverTitle}/${file.name}` }))
      .slice(1, fileArray.length-1);
  
    var category = new commissionedWorkImages({
      coverTitle: coverTitle,
      coverUrl: `photos/${coverTitle}/${fileArray[0].name}`,
      images: [...imageData]
    });

    category.save(err => {
      if (err) {
        return res.send('DB SAVE ERR: ', err);
      }
    });

      res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
      res.end();
    
  });
  
  
  
  app.post('/admin/commissionedwork/photos', function(req, res) {
    console.log('test', req.body);
  });
  
  
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
} else {

  app.use(express.static(__dirname + '/dist'));
  mongoose.connect('mongodb://heroku_d1c60rjq:sfq0ru8rn75mrrjq24sqtgp741@ds057066.mlab.com:57066/heroku_d1c60rjq')
  app.get('*', function response(req, res) {
    console.log('DIRDIRDIRDIRDIRDIRDIRDIRDIRDIRDIRDIRDIRDIRIDRIDIRDIRIDIRIDIRID', __dirname)
    res.sendFile('dist/index.html');
  });
  
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
