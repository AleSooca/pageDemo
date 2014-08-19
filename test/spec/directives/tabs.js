'use strict';

describe('Directive: tabs', function () {

  // load the directive's module
  beforeEach(module('pageDemoApp'));

  var el,
    scope, controller;

  beforeEach(angular.mock.inject(function ($controller, $rootScope, $compile, $httpBackend) {

    $httpBackend.whenGET("/views/tabs.html").respond("tabs.html");
    $httpBackend.expectGET("/views/tabs.html");
    el = angular.element('<div tabs="4.5"></div>');
    scope = $rootScope;
    $compile(el)(scope);
    controller = el.controller('tabs');
    
    scope.$digest()

    scope = el.isolateScope() || el.scope();
    //console.log(scope);
  }));

  // it('should compile the HTML in place with ul and li', inject(function () {
  //   expect(scope).toBeDefined();
  //   expect(el('ul')).toBeDefined();
  //   expect(el('ul li')).toBeDefined();
  // }));

  it('should return the correct tab index', inject(function () {
    expect(scope).toBeDefined();
    scope.setActiveTab(null,1);
    expect(scope.getActiveTab(1)).toBe(true);
  }));
});


