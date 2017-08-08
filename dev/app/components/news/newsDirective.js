;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('news', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/news/newsTemplate.html',
      controller: ["$firebaseArray", function($firebaseArray){
        var self = this;
        var ref = firebase.database().ref();
        var arr = $firebaseArray(ref.child("news"));
        arr.$loaded().then(function() {
          self.news = arr;
        });
      }],
      controllerAs: "newsCtrl"
  	}
  });
}());
