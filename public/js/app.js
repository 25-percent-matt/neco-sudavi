var counterApp = angular.module('counterApp', []);

/*counterApp.factory('arrowHider', ['$arrowHiderBoolean', function($arrowHiderBoolean) {
  var showArrow = true;
  $arrowHiderBoolean.arrowHider = function () {
    console.log('inside the factory' + showArrow);
    showArrow = !showArrow;
  };
}]);*/

counterApp.controller('divHideController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.loadBigFunction = function () {
      $scope.showHide = !$scope.showHide;
    };
    $scope.showHide = false;
    $scope.pageNumber = 1;
    $scope.gotoNextPage = function() {
      $scope.pageNumber++;
      console.log($scope.pageNumber);
    };
    $scope.testFrog = true;
    $scope.aboutMatt = ["Hometown: Orange County, California","Currently Reside In: Honolulu, Hawaii"];
    $scope.favTech = ["Angular","GraphQL"];
}]);

// app , controller, scope, directives
