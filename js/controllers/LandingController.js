(angular)(){
  'use strict';
  
  var landing = angular.module('LandingModule',[]);
  
  landing.controller('LandingController',function($scope){
    $scope.msg = "Hello";
  });
}
