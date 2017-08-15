;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('voiceBlock', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/voice/voiceTemplate.html',
      scope : {
        voice:'=voice'
      },
      controller: ["$firebaseObject", '$scope', '$sce', function($firebaseObject, $scope, $sce){
        var self = this;
        self.voice;
        var ref = firebase.database().ref();
        var obj = $firebaseObject(ref.child("reports").child($scope.voice));
        obj.$loaded().then(function() {
          self.voice = obj;
          $scope.fulltext = $sce.trustAsHtml(self.voice.fulltext);
        });
      }],
      controllerAs: "vcCtrl"
  	}
  });
}());
