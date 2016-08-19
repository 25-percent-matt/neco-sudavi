var app = angular.module('app', []);


var counterApp = angular.module('counterApp', ['ui.router']);
counterApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('state1', {
          url:"/state1",
          templateUrl: "partials/state1.html"
        })
        .state('state1.list', {
          url:"/list",
          templateUrl: "partials/state1.list.html",
          controller: function($scope) {
            makeChart();
            $scope.items = ['a', 'b', 'c', 'd'];
          }
        })
        .state('state2', {
          url:"/state2",
          templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
          url:"/list",
          templateUrl: "partials/state2.list.html",
          controller: function($scope) {
            $scope.things = ['a2', 'b2', 'c2', 'd2'];
          }
        });
    }
  ]);

counterApp.controller('divHideController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.loadBigFunction = function () {
      $scope.showHide = !$scope.showHide;
    };
    $scope.showHide = false;
}]);