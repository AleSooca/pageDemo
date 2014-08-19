'use strict';

describe('Directive: rating', function () {

  // load the directive's module
  beforeEach(module('pageDemoApp'));

  var el,
    scope, controller;

  beforeEach(angular.mock.inject(function ($controller, $rootScope, $compile, $httpBackend) {

    $httpBackend.whenGET("/views/rating.html").respond("rating.html");
    $httpBackend.expectGET("/views/rating.html");
    el = angular.element('<div rating="4.5"></div>');
    scope = $rootScope;
    $compile(el)(scope);
    controller = el.controller('rating');
    
    scope.$digest()

    scope = el.isolateScope() || el.scope();
    //console.log(scope);
  }));

  it('should return true', inject(function () {
    
    expect(scope).toBeDefined();
    expect(scope.rated(4)).toBe(true);
    expect(scope.rated(5)).toBe(false);
    expect(scope.half(4)).toBe(true);
  }));
});


