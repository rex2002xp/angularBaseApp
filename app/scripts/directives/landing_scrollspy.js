'use strict';

/**
 * @ngdoc directive
 * @name angularBaseApp.directive:landingScrollspy
 * @description
 * # landingScrollspy - Directive for scrollspy in landing page
 */

/*jshint unused:false*/
function landingScrollspy(){
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
      });
    }
  };
}

angular.module('angularBaseApp')
  .directive('landingScrollspy', landingScrollspy);
