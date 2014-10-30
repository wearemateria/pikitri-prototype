'use strict';

angular.module('prototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('instagram', {
        url: '/instagram',
        templateUrl: 'app/instagram/instagram.html',
        controller: 'InstagramCtrl'
      });
  });