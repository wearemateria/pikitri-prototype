'use strict';

describe('Controller: InstagramCtrl', function () {

  // load the controller's module
  beforeEach(module('prototypeApp'));

  var InstagramCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstagramCtrl = $controller('InstagramCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
