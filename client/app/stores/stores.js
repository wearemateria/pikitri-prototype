'use strict';

angular.module('prototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stores', {
        url: '/stores',
        templateUrl: 'app/stores/stores.html',
        controller: 'StoresCtrl'
      });
  });