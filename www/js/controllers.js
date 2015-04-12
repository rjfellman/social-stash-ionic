angular.module('starter.controllers', [])

.controller('StashesCtrl', function($scope) {

  $scope.stashes = JSON.parse(window.localStorage['stashes'] || '{}');
  console.log($scope.stashes);

})

.controller("FileController", function($scope, $ionicLoading) {
 
    $scope.download = function() {
 
    }
 
    $scope.load = function() {
    
    }
 
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
    var stashes = JSON.parse(window.localStorage['stashes'] || '[]');
    var post = {
      title: 'Thoughts',
      post: 'Today was a good day',
      date: 'Sept',
      id: (stashes.length + 1)
    };

    var stashes = JSON.parse(window.localStorage['stashes'] || '[]');
    stashes.push(post);

    window.localStorage['stashes'] = JSON.stringify(stashes);

    //var post = JSON.parse(window.localStorage['post'] || '{}');
    console.log('Creating post', $scope.newData);
    $scope.closeCreate();
    //  $localstorage.setObject('post', $scope.newData);
    
    //var post = $localstorage.getObject('post');
    console.log(stashes);
  };
});