'use strict';

describe('Controller: LookbookCtrl', function () {

  // load the controller's module
  beforeEach(module('prototypeApp'));

  var LookbookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LookbookCtrl = $controller('LookbookCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
