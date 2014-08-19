'use strict';

describe('Directive: rating', function () {

  // load the directive's module
  beforeEach(angular.mock.module('pageDemoApp'));

  var MainCtrl,
    scope,
    filter;

  beforeEach(angular.mock.inject(function ($controller, $rootScope, $filter) {
    scope = $rootScope.$new();
    
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      });

   filter = $filter('orderBy');
    
  }));

  it('should sort elements [Restaurant Ratings]', inject(function ($compile) {
    var mockedArray = [
      {ratings:{
        number : 10
      }},
      {ratings:{
        number : 5
      }},
      {ratings:{
        number : 65
      }},
      {ratings:{
        number : 23
      }}
    ];
    scope.data = mockedArray;
 
    scope.toggleRatingSort();

    scope.data = filter(scope.data, scope.ordering);    
    
    for(var i=0; i<3; i++){
      expect(scope.data[i].ratings.number).toBeLessThan(scope.data[i+1].ratings.number);
    }
  }));

   it('should sort elements [Names]', inject(function ($compile) {
    var mockedArray = [
      {
        Name:"Alessio"
      },
      {
        Name:"Paolo"
      },
      {
        Name:"Francesco"
      },
      {
        Name:"Jasmine"
      }

    ];
    scope.data = mockedArray;
    scope.toggleNameSorting();
    scope.data = filter(scope.data, scope.ordering);    
    for(var i=0; i<3; i++){
      expect(scope.data[i].Name).toBeLessThan(scope.data[i+1].Name);
    }
  }));
});
