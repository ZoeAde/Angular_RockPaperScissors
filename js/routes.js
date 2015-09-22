var appRoutes = angular.module('routes', ['ngRoute']);

appRoutes.config(function($routeProvider){
console.log("routes")
$routeProvider
  .when('/', {
    templateUrl: '../rps.html',
    controller: 'myController'
  });
});
