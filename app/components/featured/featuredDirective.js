var app = angular.module('resto');
  app.directive('featured', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/featured/featuredTemplate.html',
      controller: ["$firebaseArray", function($firebaseArray){
        var self = this;
        var ref = firebase.database().ref();
        var arr = $firebaseArray(ref.child("menu_items"));
        arr.$loaded().then(function() {
          self.dishes = arr.filter(function(el){
            return el.reviews;
          }).map(function(el, idx){
            el.avgRank = Math.floor(el.reviews.reduce(function(sum,el) {
                return sum + el.rank;
              }, 0) / el.reviews.length);
            return el;
          });
          console.log(self.dishes);        
        });
      }], controllerAs: "featuredCtrl"
    }
  });


