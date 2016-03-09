'use strict';

/**
 * @ngdoc overview
 * @name angularBaseApp
 * @description
 * # angularBaseApp
 *
 * Main module of the application.
 */
angular
  .module('angularBaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('base', {
      abstract: true,
      templateUrl: 'views/common/content.html'
    }).state('base.main', {
      url: '/main',
      templateUrl: 'views/empty_page.html',
      data: {
        pageTitle: 'Main'
      }
    });
  });
