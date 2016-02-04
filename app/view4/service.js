angular.module('concertsServices', []).factory('RemoteConcertService', function($http)){
    return{getConcert : getConcert};
    function getConcert(){
     return $http.get('concerts.json'); // returns a promise
    }
}});