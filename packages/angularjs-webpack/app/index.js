import {module} from 'angular';
import {AppController} from './app.controller';
import {WebpackDemoCompoonent} from './demo.controller';

const app = module('webpack-demo',[])
  .controller('appController', AppController)
  .component('webpackDemo', WebpackDemoCompoonent);

export default app;