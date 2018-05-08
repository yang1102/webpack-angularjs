export class AppController {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.value = 1000;
    console.log($scope, this);
  }

  addFunction(value) {
    this.$scope.value += value;
  }
}

AppController.$inject = ['$scope'];