 var app = angular.module('resto');
  app.directive('menuList', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/menu/menuTemplate.html',
      controller: ["$firebaseArray", function($firebaseArray){
        var self = this;
        var ref = firebase.database().ref();
        var arr = $firebaseArray(ref.child("menu_items"));
        arr.$loaded().then(function() {
          self.dishes = arr;
          console.log(self.dishes);
        });
      }],
      controllerAs: "menuCtrl"
  	}
  });