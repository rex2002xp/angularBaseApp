'use strict';

/**
 * @ngdoc directive
 * @name angularBaseApp.directive:sideNavigation
 * @description
 * # sideNavigation
 */

/*jshint unused:false*/
function sideNavigation($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      // Call the metsiMenu plugin and plug it to sidebar navigation
      $timeout(function(){
      element.metisMenu();
      });
    }
  };
}

angular.module('angularBaseApp')
  .directive('sideNavigation', sideNavigation);
