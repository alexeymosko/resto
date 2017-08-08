;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('navbar', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/navbar/navbarTemplate.html',
  		controller: ['$scope', '$location', function($scope, $location){
			$scope.isActive = function(viewLocation) {
    			return viewLocation === $location.path();
			};
		}]
  	}
  });
}());
