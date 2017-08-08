var app = angular.module('resto');
app.controller("newsfullController", ['$stateParams', function($stateParams) {
	this.articleId = $stateParams.id;
}]);