var app = angular.module('resto');
  app.directive('voiceform', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/voiceform/voiceformTemplate.html',
      controller:  ['$scope', function($scope){
        var self = this;
        this.voiceReady = {
          rank: 0,
        }
        this.setRank = function(num){
          self.voiceReady.rank = num;
        }
        this.submitForm = function(){
          $scope.$emit('addVoice', self.voiceReady);
          self.voiceReady = {
            rank: 0,
          }
          console.log("submitted");
        }
      }],
      controllerAs: "voiceformCtrl"
  	}
  });
  