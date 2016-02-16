angular.module('myApp', []);

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version',
  'ngMessages',
  'angular-flexslider'
])
.controller('MainCtrl', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('myApp').controller('FormCtrl', ['$scope', function($scope) {
    $scope.formInfo = {};
    $scope.saveData = function() {
      $scope.nameRequired = '';
      $scope.emailRequired = '';
      $scope.phoneRequired = '';
      $scope.messageRequired = '';

      if (!$scope.formInfo.Name) {
        $scope.nameRequired = 'Name Required';
      }

      if (!$scope.formInfo.Email) {
        $scope.emailRequired = 'Email Required';
      }

      if (!$scope.formInfo.Phone) {
        $scope.phoneRequired = 'Phone Required';
      }
      if (!$scope.formInfo.Message) {
        $scope.passwordRequired = 'Message Required';
      }
    };
}]);
