'use strict';

/**
 * @ngdoc directive
 * @name angularBaseApp.directive:fullScroll
 * @description
 * # fullScroll - Directive for slimScroll with 100%
 */

/*jshint unused:false*/
function fullScroll($timeout){
  return {
    restrict: 'A',
    link: function(scope, element) {
      $timeout(function(){
        element.slimscroll({
        height: '100%',
        railOpacity: 0.9
        });
      });
    }
  };
}

angular.module('angularBaseApp')
  .directive('fullScroll', fullScroll);
