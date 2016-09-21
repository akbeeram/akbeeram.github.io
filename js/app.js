(function(angular){
  'use strict';
  
  var app = angular.module('akbeeram',['ngRoute','LandingModule']);
  app.config(function($routeProvider){
    $routeProvider
      .when("/",{
        templateUrl:'../partials/home.html',
        controller:'LandingController'
      })
      .when("/work",{
        templateUrl:'../partials/work.html',
        controller:'LandingController'
      })
      .when("/crafts",{
        templateUrl:'../partials/crafts.html',
        controller:'LandingController'
      })
      .when("/about",{
        templateUrl:'../partials/about.html',
        controller:'LandingController'
      })
      .when("/contact",{
        templateUrl:'../partials/contact.html',
        controller:'LandingController'
      })
  });
}(angular));
