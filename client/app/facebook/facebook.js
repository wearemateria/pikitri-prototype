'use strict';

angular.module('prototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('facebook', {
        url: '/facebook',
        templateUrl: 'app/facebook/facebook.html',
        controller: 'FacebookCtrl'
      });
  });