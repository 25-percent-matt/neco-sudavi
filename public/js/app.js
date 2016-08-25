var counterApp = angular.module('counterApp', [])
  .controller('divHideController', ['$scope', function($scope) {
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
    $scope.showHide = false;
    $scope.pageNumber = 1;
    $scope.gotoNextPage = function() {
      $scope.pageNumber++;
    };
    $scope.testFrog = true;
    $scope.aboutMatt = ["Hometown: Orange County, California","Currently Reside In: Honolulu, Hawaii"];
    $scope.favTech = ["Angular","GraphQL"];
  }])
  .controller('Ctrl1', ['$scope', function($scope) {
      $scope.searchDynamic = 'Enter State';
      $scope.updateChart = function () {
        fillChartDynamic($scope.searchDynamic);
      };
  }]);