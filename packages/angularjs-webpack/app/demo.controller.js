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
export const WebpackDemoCompoonent = {
  template,
  controller: AppController,
};