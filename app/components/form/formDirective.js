var app = angular.module('resto');
  app.directive('formBlock', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/form/formTemplate.html',
      controller:  ['$scope', function($scope){
        var self = this;
        this.reviewReady = {
          rank: 0,
        }
        this.setRank = function(num){
          self.reviewReady.rank = num;
        }
        this.submitForm = function(){
          $scope.$emit('addReview', self.reviewReady)
        }
      }],
      controllerAs: "formCtrl"
  	}
  });