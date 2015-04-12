angular.module('starter.controllers', [])

.controller('StashesCtrl', function($scope) {
  $scope.selectedPost = document.URL,
    parts = $scope.selectedPost.split('/'),
    lastPart = parts.pop() == '' ? parts[parts.length - 1] : parts.pop();

  $scope.setSelectedPost = function(selectedPost) {
    $scope.selectedPost = selectedPost;
  };

  $scope.stashes = JSON.parse(window.localStorage['stashes'] || '{}');
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {
  // Form data for the create modal
  $scope.newData = {};
  $scope.activeIndex = 0;

  // Create the create modal that we will use later
  $ionicModal.fromTemplateUrl('templates/create.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the create modal to close it
  $scope.closeCreate = function() {
    $scope.modal.hide();
    $scope.newData = {};
    $scope.$broadcast('newMessage', 0);
  };

  // Open the create modal
  $scope.create = function() {
    $scope.modal.show();
  };

  // Perform the create action when the user submits the create form
  $scope.doCreate = function() {
    var stashes = JSON.parse(window.localStorage['stashes'] || '[]');
    $scope.newData['id'] = (stashes.length);

    stashes.push($scope.newData);

    window.localStorage['stashes'] = JSON.stringify(stashes);

    $scope.closeCreate();
  };

  $scope.selectPost = function(index) {
    $scope.activeIndex = index;
  };

  $scope.deletePost = function(index) {
    var stashes = JSON.parse(window.localStorage['stashes'] || '[]');
    stashes.splice(1,1);
    window.localStorage['stashes'] = JSON.stringify(stashes);
  };

  $scope.$on('newMessage', function(event, messages) {
   console.log("WOW, a new message!!! ");
   $scope.$apply();
  }); 

  $scope.showAlert = function(index) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Delete Post',
     template: 'Are you sure you want to delete this post?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       $scope.deletePost(index);
     } else {
       console.log('You are not sure');
     }
   });
 };
});