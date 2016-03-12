'use strict';

angular.module('DA')
  .config( function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',   
      })
      .state('random', {
        url: '/random',
        templateUrl: 'views/random.html'
      })
      .state('search', {
        url: '/search/:word',
        templateUrl: 'views/search.html'
      })
      .state('browse', {
        url: '/browse/:letter',
        templateUrl: 'views/browse.html'
      })
      .state('stats', {
        url: '/stats',
        templateUrl: 'views/stats.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
     .state('intro', {
        url: '/intro',
        templateUrl: 'views/intro.html'
      })
      .state('abbrev', {
        url: '/abbrev',
        templateUrl: 'views/abbrev.html'
      })
      .state('geo', {
        url: '/geo',
        templateUrl: 'views/geo.html'
      })
      .state('history', {
        url: '/history',
        templateUrl: 'views/history.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html'
      })      
      ;

  });
