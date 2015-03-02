'use strict';

describe('Controller: EditarusuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('adminApp'));

  var EditarusuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarusuarioCtrl = $controller('EditarusuarioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
