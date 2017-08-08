;(function() {
"use strict";

var app = angular.module('resto');
app.controller("authCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.auth = Auth;
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
      console.log(firebaseUser);
    });
  }
]);
}());
