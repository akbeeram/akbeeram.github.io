(function(angular){
  'use strict';
  
  var app = angular.module('akbeeram',['ngRoute','LandingModule']);
  app.config(function($routeProvider){
    $routeProvider
      .when("/",{
        templateUrl:'../partials/home.html'
      })
  });
}(angular));
