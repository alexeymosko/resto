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
        self.data;
        var ref = firebase.database().ref();
        console.log(ref);
        var obj = $firebaseObject(ref.child("menu_items").child($scope.review));
        var reviews = $firebaseArray(ref.child("menu_items").child($scope.review).child("reviews"));
        console.log(obj);
        obj.$loaded().then(function() {
          self.data = obj;
          console.log(self.data)     
        });
        $scope.$on('addReview', function(event, args){   //ловит событие (отправку отзыва)
          console.log(args);
          console.log($scope.$parent.$parent.$parent.firebaseUser.uid);
          var o = {};
          o[reviews.length] = {
            rank: args.rank,
            headline: args.headline,
            review: args.text,
            uid: $scope.$parent.$parent.$parent.firebaseUser.uid
          };
          reviews.$add(o);
          reviews.$save().then(function(ref) {
            console.log("success");
          }, function(error) {
              console.log(error);
          })
        });

      }],
      controllerAs: "rewCtrl"
  	}
  });