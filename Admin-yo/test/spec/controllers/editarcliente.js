'use strict';

describe('Controller: EditarclienteCtrl', function () {

  // load the controller's module
  beforeEach(module('adminApp'));

  var EditarclienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarclienteCtrl = $controller('EditarclienteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
