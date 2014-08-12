'use strict';

describe('Directive: rating', function () {

  // load the directive's module
  beforeEach(module('pageDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should return true', inject(function ($compile) {
    element = angular.element('<div rating="4.5"></div>');
    element = $compile(element)(scope);
    expect(scope.rated(4)).toBe(true);
    expect(scope.rated(5)).toBe(false);
    expect(scope.half(4)).toBe(true);
  }));
});
