var counterApp = angular.module('counterApp', []);

counterApp
  .config([/*provider*/, function(provider){
    provider.setEndpoint('http://neco-sudavi.com/graphiql');
  }])
  .run(['$rootScope','APP_VERSION', function($rootScope,APP_VERSION){
    $rootScope.version = APP_VERSION;
  }]);

/*counterApp.factory('arrowHider', ['$arrowHiderBoolean', function($arrowHiderBoolean) {
  var showArrow = true;
  $arrowHiderBoolean.arrowHider = function () {
    console.log('inside the factory' + showArrow);
    showArrow = !showArrow;
  };
}]);*/



// app , controller, scope, directives
