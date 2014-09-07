/// deklarasi module
var demoApp = angular.module('demoApp', ['ngRoute']);


// configuration routeprovider
demoApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'SimpleController',
        templateUrl: 'Partials/view1.html'
      })
    .when('/view2',
      {
        controller: 'SimpleController',
        templateUrl: 'Partials/view2.html'
      })
    .otherwise({ redirectTo: '/' });
  });


// define controller
demoApp.controller('SimpleController', function($scope)
  {
    $scope.customers = [
      {name: 'nur',city: 'jakarta'},
      {name: 'rizal', city: 'singapur'},
      {name: 'diva', city: 'us'}
    ];

    $scope.addCustomer = function () {
      $scope.customers.push(
      {
        name: $scope.newCustomer.name,
        city: $scope.newCustomer.city
      });
    };
});
