angular.module('order', ['ngMaterial'])
    .controller('orderCtrl', function($scope, $timeout, $mdBottomSheet, $mdToast) {

        $scope.showOrderInfo = function($event) {

            $mdBottomSheet.show({
                templateUrl: 'view/order.html',
                controller: 'OrderInfo',
                targetEvent: $event
            });
        };

    })
    .controller('OrderInfo', function($scope, $mdBottomSheet) {
        
    })