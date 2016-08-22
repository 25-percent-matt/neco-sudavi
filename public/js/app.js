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
    $scope.loadBigFunction = function (chartSelected) {
      $scope.showHide = !$scope.showHide;
      $scope[chartSelected] = !$scope[chartSelected];
    };
    $scope.returnHome = function () {
      $scope.showHide = !$scope.showHide;
      $scope.chartDegreeBigShow = false;
      $scope.chartMajorBigShow = false;
      $scope.chartHasDebtBigShow = false;
      $scope.chartEmploymentFieldBigShow = false;
      $scope.chartCurrentIncomeBigShow = false;
      $scope.chartNumChildrenBigShow = false;
      $scope.chartJobPrefBigShow = false;
    };
    $scope.showHide = false;
    $scope.pageNumber = 1;
    $scope.gotoNextPage = function() {
      $scope.pageNumber++;
    };
    $scope.gotoPrevPage = function() {
      $scope.pageNumber--;
      console.log($scope.pageNumber);
    };
    $scope.testFrog = true;
    $scope.aboutMatt = ["Hometown: Orange County, California","Currently Reside In: Honolulu, Hawaii"];
    $scope.favTech = ["Angular","GraphQL"];
}]);

// app , controller, scope, directives
