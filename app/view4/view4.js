'use strict';

angular.module('myApp.view4', ['ngRoute', 'concertsServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', 'Concerts', function($scope, Concerts) {
  $scope.events = Concerts.all();

}]);
