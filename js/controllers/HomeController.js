(function(angular){
  'use strict';
  
  var landing = angular.module('HomeModule',[]);
  
  landing.controller('HomeController',function($scope){
    $scope.msg = "Hello";
  });
  landing.controller('WorkController',function($scope){
    $scope.msg = "Hello";
  });
  landing.controller('CraftsController',function($scope){
    $scope.msg = "Hello";
  });
  landing.controller('AboutController',function($scope){
    $scope.msg = "Hello";
  });
  landing.controller('ContactController',function($scope){
    $scope.msg = "Hello";
  });
}(angular));
