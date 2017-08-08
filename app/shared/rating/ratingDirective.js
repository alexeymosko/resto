var app = angular.module('resto');
  app.directive('rating', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/rating/ratingTemplate.html',
  		scope : {
        stars:'@stars'
      },

    }

  });