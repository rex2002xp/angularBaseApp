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
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    }).state('about', {
      url: '/',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    });
  });
