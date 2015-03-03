'use strict';

describe('Controller: EditarprodutoCtrl', function () {

  // load the controller's module
  beforeEach(module('adminApp'));

  var EditarprodutoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarprodutoCtrl = $controller('EditarprodutoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
