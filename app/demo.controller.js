import app from './index';
import template from './demo.html';

class AppController {
  constructor() {
    this.value = 0;
  }

  onClick() {
    this.value++;
  }
}

AppController.$inject = ['$scope'];
app.component('webpackDemo', {
  template,
  controller: AppController,
});

