;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('review', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/review/reviewTemplate.html',
      scope : {
        review:'=review'
      },
      controller: ["$firebaseObject", "$firebaseArray", '$scope', function($firebaseObject, $firebaseArray, $scope){
        var self = this;
        self.user = $scope.$parent.$parent.$parent.firebaseUser;
        self.data;
        var ref = firebase.database().ref();
        var obj = $firebaseObject(ref.child("menu_items").child($scope.review));
        var reviews = $firebaseArray(ref.child("menu_items").child($scope.review).child("reviews"));
        obj.$loaded().then(function() {
          self.data = obj;  
        });
        $scope.$on('addReview', function(event, args){   //ловит событие (отправку отзыва)
          var o = {};
          o = {
            rank: args.rank,
            headline: args.headline,
            review: args.text,
            uid: self.user.uid
          }; 
          ref.child("menu_items").child($scope.review).child("reviews").child(reviews.length).set(o);
        });
      }],
      controllerAs: "rewCtrl"
  	}
  });
}());
