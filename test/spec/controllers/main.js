'use strict';

describe('Directive: rating', function () {

  // load the directive's module
  beforeEach(angular.mock.module('pageDemoApp'));

  var MainCtrl,
    scope;

  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
     });
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
    $scope.toggleRatingSort();
    for(var i=0; i<3; i++){
      expect(scope.data[i].ratings.number).toBeGreater(scope.data[i+1].ratings.number);
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
    $scope.toggleNameSorting();
    for(var i=0; i<3; i++){
      expect(scope.data[i].Name).toBeGreater(scope.data[i+1].Name);
    }
  }));
});
