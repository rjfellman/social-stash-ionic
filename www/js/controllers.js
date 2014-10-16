angular.module('starter.controllers', [])

.controller('StashesCtrl', function($scope) {
  $scope.stashes = [
    { title: 'BMW Owners', id: 1 },
    { title: 'Miley Cyrus writes her songs', id: 2}
  ];
});
