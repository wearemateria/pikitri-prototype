'use strict';

angular.module('prototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lookbook', {
        url: '/lookbook',
        templateUrl: 'app/lookbook/lookbook.html',
        controller: 'LookbookCtrl'
      });
  });