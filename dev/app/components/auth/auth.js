;(function() {
"use strict";

var app = angular.module('resto');
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
}());
