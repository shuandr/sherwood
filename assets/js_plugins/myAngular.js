var app = angular.module('sherwoodMenu', ['ngRoute']);



app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});




app.controller('menuCtrl', function($scope, $http) {


    $http.get("assets/json/menu.json").then(function(response) {
        $scope.sherMenu = response.data;

    });

    $http.get("assets/json/alco_menu.json").then(function(response) {
        $scope.sherAlcoMenu = response.data;

    });


    // debugger;







});