(function(angular){
  'use strict';
  
  var landing = angular.module('HomeModule',[]);
  
  landing.controller('HomeController',function($scope, $rootScope){
    $rootScope.activeNav = 1;
  });
  landing.controller('WorkController',function($scope, $rootScope){
    $rootScope.activeNav = 2;
  });
  landing.controller('CraftsController',function($scope, $rootScope){
    $rootScope.activeNav = 3;
  });
  landing.controller('AboutController',function($scope, $rootScope){
    $rootScope.activeNav = 4;
  });
  landing.controller('ContactController',function($scope, $rootScope){
    $rootScope.activeNav = 5;
  });
}(angular));
