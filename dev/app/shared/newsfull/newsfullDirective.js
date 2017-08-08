;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('newsfull', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/newsfull/newsfullTemplate.html',
      scope : {
        article:'=article'
      },
      controller: ["$firebaseObject", '$scope', '$sce', function($firebaseObject, $scope, $sce){
        var self = this;
        self.newsfull;
        var ref = firebase.database().ref();
        var obj = $firebaseObject(ref.child("news").child($scope.article));
        obj.$loaded().then(function() {
          self.newsfull = obj;
          $scope.fulltext = $sce.trustAsHtml(self.newsfull.fulltext);
        });
      }],
      controllerAs: "artclCtrl"
  	}
  });
}());
