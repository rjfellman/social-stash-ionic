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
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the create modal
  $scope.newData = {};

  // Create the create modal that we will use later
  $ionicModal.fromTemplateUrl('templates/create.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the create modal to close it
  $scope.closeCreate = function() {
    $scope.modal.hide();
  };

  // Open the create modal
  $scope.create = function() {
    $scope.modal.show();
  };

  // Perform the create action when the user submits the create form
  $scope.doCreate = function() {
    console.log('Creating post', $scope.newData);
    $scope.closeCreate();
    $localstorage.setObject('post', $scope.newData);
    
    var post = $localstorage.getObject('post');
  	console.log(post);
  };
});