 var app = angular.module('resto');
  app.directive('menuList', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/menu/menuTemplate.html',
      scope: {
        count: "@count"
      },
      controller: ["$firebaseArray", "$scope", function($firebaseArray, $scope){
        var self = this;
        var ref = firebase.database().ref();
        var arr = $firebaseArray(ref.child("menu_items"));
        arr.$loaded().then(function() {
          if (+$scope.count <= 0) {
            self.dishes = arr;
          } 
          else {
            self.dishes = arr.filter(function(el,idx){
              return idx < +$scope.count;
              });
          }
        });
      }],
      controllerAs: "menuCtrl"
  	}
  });