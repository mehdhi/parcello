angular.module('starter.controllers', [])

.controller('TrackNewCtrl', function($scope) {})

.controller('DashboardCtrl', function($scope, Orders) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.orders = Orders.all();
  $scope.remove = function(order) {
    Orders.remove(order);
  };
})

.controller('OrderDetailCtrl', function($scope, $stateParams, Orders) {
  $scope.order = Orders.get($stateParams.orderId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    notify: true
  };
});
