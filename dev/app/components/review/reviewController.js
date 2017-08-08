;(function() {
"use strict";

var app = angular.module('resto');
app.controller("reviewController", ['$stateParams', function($stateParams) {
	this.reviewId = $stateParams.id;
	console.log(this.reviewId);
}]);
}());
