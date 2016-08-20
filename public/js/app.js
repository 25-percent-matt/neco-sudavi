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
    };
    $scope.mattsInfo = function(){
      $scope.aboutMe = ["Hometown: Orange County, California","Currently Reside In: Honolulu, Hawaii"];
      $scope.favTech = ["Angular","GraphQL"];
      $scope.questions = [];
      $scope.recommendations = [];
      $scope.favResources = [];
      if($scope.showHide === $scope.showHide ){////////////???? whyyyy
        $scope.showHide = !$scope.showHide;
      }
    };
    $scope.andysInfo = function(){
      $scope.aboutMe = ["Andyyyyyyyyyyyy"];
      $scope.favTech = ["Angular","D3"];
      $scope.questions = [];
      $scope.recommendations = [];
      $scope.favResources = [];
      if($scope.showHide === $scope.showHide ){
        $scope.showHide = !$scope.showHide;
      }

    };
    $scope.showHide = false;
    $scope.pageNumber = 1;
    $scope.gotoNextPage = function() {
      $scope.pageNumber++;
    };
    $scope.testFrog = true;
}]);

// app , controller, scope, directives
