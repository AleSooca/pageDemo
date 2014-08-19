'use strict';

angular.module('pageDemoApp')
  .directive('tabs', function ($log, $timeout) {
		return {
			templateUrl: '/views/tabs.html',
			restrict: 'AEC',
			priority: 100,
			replace:true,
			controller: function($scope) {

				$scope.activeTab = 0;

				$scope.getActiveTab = function(tabIndex) {
      				return tabIndex == $scope.activeTab;
			    }

			    $scope.setActiveTab = function(e,tabIndex) {
			      //e.preventDefault();
			      $scope.activeTab = tabIndex;
			      if(tabIndex == 1 && !$scope.beenHere){
			        if($scope.initializeMap)$scope.initializeMap();
			        if($scope.setMarkers && $scope.data)$scope.setMarkers($scope.data);
			        $scope.beenHere = "yeah";
			      }
			    };
			}

		};
	});
