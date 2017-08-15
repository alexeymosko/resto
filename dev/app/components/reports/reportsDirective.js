;(function() {
"use strict";

var app = angular.module('resto');
  app.directive('reports', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/reports/reportsTemplate.html',
      controller: ["$firebaseArray", "$scope", function($firebaseArray, $scope){
        var self = this;
        var ref = firebase.database().ref();
        var arr = $firebaseArray(ref.child("reports"));
        arr.$loaded().then(function() {
          self.reports = arr;
        });
        $scope.$on('addVoice', function(event, args){   //ловит событие (отправку отзыва)
          var o = {};
          o = {
            rank: args.rank,
            name: args.name,
            headline: args.headline,
            fulltext: args.text,
            text: args.text.slice(0,300)
          }; 
          console.log(o);
          ref.child("reports").child(self.reports.length).set(o);
          console.log(ref);
        });
      }],
      controllerAs: "reportsCtrl"
  	}
  });
}());
