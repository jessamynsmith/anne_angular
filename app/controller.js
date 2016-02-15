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
