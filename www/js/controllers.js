angular.module('starter.controllers', [])

.controller('StashesCtrl', function($scope) {
  $scope.stashes = [
    { 	
    	title: 'iOS Developers Conference', 
    	post: 'This is going to be a lot of fun! I am going to learn AngularJS and ionic',
    	date: 'Created September 12, 2012', 
    	id: 1 
    },
    { 
    	title: 'Philadelphia Eagles', 
    	post: 'The philadelphia Eagles are now 5-1!',
      	date: 'Created October 12, 2014', 
      	id: 2
  	}
  ];
});
