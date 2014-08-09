'use strict';

angular.module('pageDemoApp')
  .controller('MainCtrl', function ($scope, $http) {
    
	$scope.getData = function () {
        $scope.key = '';
        $http.get('/data.json')
        .success(function(response, status, headers, config){
            $scope.data = response.Details;
            console.log ($scope.data)
        });
    }();

     // Use

  });
