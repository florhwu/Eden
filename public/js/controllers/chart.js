var app = angular.module('app', []);
// console.log("init from to true")

app.controller('formInfo', ['$scope', '$http', function($scope) {

    $scope.name = name;

    $scope.showForm = true;
    //$scope.showForm = form;

    $scope.refresh = function() {
        if ($scope.name != name || $scope.showForm != form) {
            console.log('page reloading');
            window.location.reload();
        } else {
            console.log('page ready')
        }
    };

}]);