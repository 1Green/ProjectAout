import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './config/routes';
require('../bower_components/slick-carousel/slick/slick-theme.scss');
require('../bower_components/slick-carousel/slick/slick.scss');
require('./styles/app.scss');

ReactDOM.render(Routes , document.getElementById('root'));
