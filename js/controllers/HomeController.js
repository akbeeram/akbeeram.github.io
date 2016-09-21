(function(angular){
  'use strict';
  
  var landing = angular.module('HomeModule',[]);
  
  landing.controller('HomeController',function($scope){
    $scope.msg = "Hello";
  });
}(angular));
