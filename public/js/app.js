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
      $scope.aboutMe = ["Hometown: Orange County, California","Currently Reside In: Honolulu, Hawaii","Before joining DevLeague's bootcamp, I was a total n00b. "];
      $scope.favTech = ["Angular","GraphQL"];
      $scope.questions = [];
      $scope.recommendations = [];
      $scope.favResources = [];
      $scope.toggleShow2 = false;
      $scope.toggleShow = false;
      $scope.toggleShow = true;
      $scope.myVar2 = " ";
      $scope.myVar = "selectedSummaryStyle";
      $scope.mattsVar = "selectedSummaryStyle";
      $scope.andysVar = " ";
      $scope.drewsVar = " ";
      $scope.andrewsVar = " ";
    };

    $scope.andysInfo = function(){
      $scope.aboutMe = ["Andyyyyyyyyyyyy"];
      $scope.favTech = ["Angular","D3"];
      $scope.questions = [];
      $scope.recommendations = [];
      $scope.favResources = [];
      $scope.toggleShow2 = false;
      $scope.toggleShow = false;
      $scope.toggleShow = true;
      $scope.myVar2 = " ";
      $scope.myVar = "selectedSummaryStyle";
      $scope.andysVar = "selectedSummaryStyle";
      $scope.mattsVar = " ";
      $scope.drewsVar = " ";
      $scope.andrewsVar = " ";
    };

    $scope.drewsInfo = function(){
      $scope.aboutMe2 = ["Drewwwwwwwwwwwww"];
      $scope.favTech2 = ["Angular","D3"];
      $scope.questions2 = [];
      $scope.recommendations2 = [];
      $scope.favResources2 = [];
      $scope.toggleShow = false;
      $scope.toggleShow2 = false;
      $scope.toggleShow2 = true;
      $scope.myVar = " ";
      $scope.myVar2 = "selectedSummaryStyle";
      $scope.drewsVar = "selectedSummaryStyle";
      $scope.mattsVar = " ";
      $scope.andysVar = " ";
      $scope.andrewsVar = " ";
    };

    $scope.andrewsInfo = function(){
      $scope.aboutMe2 = ["ANDrewwwwwwwwwwwww"];
      $scope.favTech2 = ["postgres","sql"];
      $scope.questions2 = [];
      $scope.recommendations2 = [];
      $scope.favResources2 = [];
      $scope.toggleShow = false;
      $scope.toggleShow2 = false;
      $scope.toggleShow2 = true;
      $scope.myVar = " ";
      $scope.myVar2 = "selectedSummaryStyle";
      $scope.andrewsVar = "selectedSummaryStyle";
      $scope.mattsVar = " ";
      $scope.andysVar = " ";
      $scope.drewsVar = " ";
    };

    $scope.showHide = false;
    $scope.pageNumber = 1;
    $scope.gotoNextPage = function() {
      $scope.pageNumber++;
    };
    $scope.testFrog = true;
}]);

// app , controller, scope, directives
