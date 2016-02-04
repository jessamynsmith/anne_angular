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

.controller('FormCtrl', ['$scope', function($scope) {
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
  }])
  .controller('FormCtrl2', [function() {

  }]);
angular.module('concertControllers')
.controller('RemoteConcertController',function($scope,RemoteConcertService) 
{
      //  
        $scope.concert = {};
        RemoteConcertService.getConcert()
                        .then( function(result) {
                              //promise complete
                              $scope.concert=concert.data;
                              })
                        .catch( function(error) { console.log('error', error)});
        $scope.showConcert = function(){
          return ($scope.concerts ? $scope.concerts=false : $scope.concerts=true)
        }
  $scope.aGradeFilter = function (subject) {
            return (subject.marks > 74);
  }
});