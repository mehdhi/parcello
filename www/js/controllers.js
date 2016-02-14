angular.module('starter.controllers', [])

    .controller('TrackNewCtrl', function ($scope, Orders, $http) {
        $scope.add = function (orderId) {
            var req = {
                method: 'GET',
                url: 'https://localhost/youapi/' + orderId,
               
            };
            // Make the API call
            $http(req).success(function (resp) {
                // Handle success
                var newOrder = {
                    id: resp.orderID,
                    name: 'Untitled',
                    description: '',
                    face: 'img/pending.png',
                    status: resp.delivered,
                    deliveryDate: '',
                    deliveryAddress: 'No. 19 Lily Avenue, Colombo 06',
                    senderInfo: 'Kapruka Pvt Ltd, SL, 0115326565',
                    currentLocation: resp.currentLocation
                };
                Orders.add(newOrder);
                console.log("Ionic Push: Push success!");
            }).error(function (error) {
                // Handle error 
                console.log("Ionic Push: Push error...");
            });
        }
    })

    .controller('DashboardCtrl', function ($scope, Orders) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.orders = Orders.all();
        $scope.remove = function (order) {
            Orders.remove(order);
        };
    })

    .controller('OrderDetailCtrl', function ($scope, $stateParams, Orders) {
        $scope.order = Orders.get($stateParams.orderId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            notify: true
        };
    });
