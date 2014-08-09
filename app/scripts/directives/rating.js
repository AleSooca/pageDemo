'use strict';

angular.module('pageDemoApp')
  .directive('rating', function ($log, $timeout) {
		return {
			templateUrl: '/views/rating.html',
			restrict: 'A',
			scope: { rating: '=' },
			priority: 100,
			controller: function($scope) {
				$scope.rated = function(i) {
					return i <  parseFloat($scope.rating)
				};
			}

		};
	});

