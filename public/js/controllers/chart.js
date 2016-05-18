var app = angular.module('app', []);
// console.log("init from to true")

app.controller('formInfo', ['$scope', '$http', function($scope) {

    $scope.showForm = false;

    //refresh form
    $scope.refresh = function() {
        if ($scope.name != name || $scope.showForm != form) {
            console.log('page reloading');
            window.location.reload();
        } else {
            console.log('page ready')
        }
    };

    $scope.clicked = function() {
        $scope.showForm = true;
        $scope.name = name;
    }

}]);