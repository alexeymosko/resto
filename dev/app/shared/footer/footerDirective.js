;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('footerBlock', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/footer/footerTemplate.html',
  		controller: function(){
  			this.year = new Date().getFullYear();
  			this.addresses = [
  				{
  					name: "New York Restaurant",
  					street: "3926 Anmore Road",
  					city: "New York, NY 10014",
  					telephone: "718-749-1714"
  				},
  				{
  					name: "France Restaurant",
  					street: "68, rue de la Couronne",
  					city: "75002 PARIS",
  					telephone: "02.94.23.69.56"
  				}
  			];
  			console.log(this.addresses);
  		}, controllerAs: "footerCtrl"
  	}
  });
}());
