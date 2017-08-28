;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('gallery', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/gallery/galleryTemplate.html',
      controller: ["$firebaseObject", function($firebaseObject){
        var self = this;
        var ref = firebase.database().ref();
        var obj = $firebaseObject(ref.child("gallery-links"));
        obj.$loaded().then(function() {
          self.main = obj.main;
          self.list = obj.list;
          });
      }],
      controllerAs: "galleryCtrl"
  	}
  });
}());
