(function(angular){
  'use strict';
  
  angular.module('akbeeram')
  .directive('headerDirective',function(){
    return {
      restrict:'AEC',
      templateUrl:'../partials/header.html'  
    
    }
  });
});
