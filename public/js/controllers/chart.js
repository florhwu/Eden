var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.add = function() {
        console.log($scope.node);
        $http.post('/nodes', $scope.node);
    };

    $scope.new = function() {
        //TODO append to tree array
        //TODO call update
        console.log($scope.node.name)
        
    };

    $scope.delete = function(id) {
        $http.delete('/nodes'+ id);
    };

    $scope.edit = function(id) {
        $http.edit('/node' + id);
    };

}])