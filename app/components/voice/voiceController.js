var app = angular.module('resto');
app.controller("voiceController", ['$stateParams', function($stateParams) {
	this.voiceId = $stateParams.id;
}]);