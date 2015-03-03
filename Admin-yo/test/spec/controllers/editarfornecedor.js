'use strict';

describe('Controller: EditarfornecedorCtrl', function () {

  // load the controller's module
  beforeEach(module('adminApp'));

  var EditarfornecedorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarfornecedorCtrl = $controller('EditarfornecedorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
