'use strict';

/**
 * @ngdoc directive
 * @name angularBaseApp.directive:fitHeight
 * @description
 * # fitHeight - Directive for set height fit to window height
 */

/*jshint unused:false*/
function fitHeight(){
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.css('height', $(window).height() + 'px');
      element.css('min-height', $(window).height() + 'px');
    }
  };
}

angular.module('angularBaseApp')
  .directive('fitHeight', fitHeight);
