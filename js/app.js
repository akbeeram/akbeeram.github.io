(function(angular){
  'use strict';
  
  var app = angular.module('akbeeram',['ngRoute','HomeModule']);
  app.config(function($routeProvider){
    $routeProvider
      .when("/",{
        templateUrl:'../partials/home.html',
        controller:'HomeController'
      })
      .when("/work",{
        templateUrl:'../partials/work.html',
        controller:'WorkController'
      })
      .when("/crafts",{
        templateUrl:'../partials/crafts.html',
        controller:'CraftsController'
      })
      .when("/about",{
        templateUrl:'../partials/about.html',
        controller:'AboutController'
      })
      .when("/contact",{
        templateUrl:'../partials/contact.html',
        controller:'ContactController'
      })
  });
}(angular));
