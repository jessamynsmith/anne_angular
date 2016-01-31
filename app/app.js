var myApp = angular.module('myApp', ['BandService', 'bandServices']);

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version',
  'ngMessages'
])
.controller('MainCtrl', MainCtrl)
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
function MainCtrl() {

}

angular.module('bandForm', [])
.controller('formController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}])
.controller('bandService',function($scope,EventsService) {
  
  $scope.event = EventsService.getEvent();
    $scope.greeting = function(){
   return "Greetings " + $scope.event.hour() + $scope.event.date() + ' ' + $scope.event.venue();
   }
 });
