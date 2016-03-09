'use strict';

/**
 * @ngdoc directive
 * @name angularBaseApp.directive:slimScroll
 * @description
 * # slimScroll - Directive for slimScroll with custom height
 */

/*jshint unused:false*/
function slimScroll($timeout){
  return {
    restrict: 'A',
    scope: {
      boxHeight: '@'
    },
    link: function(scope, element) {
      $timeout(function(){
        element.slimscroll({
          height: scope.boxHeight,
          railOpacity: 0.9
        });
      });
    }
  };
}

angular.module('angularBaseApp')
  .directive('slimScroll', slimScroll);
