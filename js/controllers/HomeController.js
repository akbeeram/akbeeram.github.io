(function(angular){
  'use strict';
  
  var landing = angular.module('HomeModule',[]);
  
  landing.controller('HomeController',function($scope, $rootScope){
    $rootScope.msg = "Hello1";
  });
  landing.controller('WorkController',function($scope, $rootScope){
    $rootScope.msg = "Hello2";
  });
  landing.controller('CraftsController',function($scope, $rootScope){
    $rootScope.msg = "Hello3";
  });
  landing.controller('AboutController',function($scope, $rootScope){
    $rootScope.msg = "Hello4";
  });
  landing.controller('ContactController',function($scope, $rootScope){
    $rootScope.msg = "Hello5";
  });
}(angular));
