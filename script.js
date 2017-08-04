var app = angular.module('AngularTest', []);
app.controller('Controller', function($scope, $http) {
	$scope.age = 0;
    $http.get('patients.json').then(function ($data) {
    	patients = $data.data.patients;
		$scope.patients = patients;
    });

    //Parse the string age to number to allow the orderBY function
    $scope.sorterFunc = function(patient){
        return parseInt(patient.age);
    };

    //Filter function that receives the ages from the input
    $scope.olderThan = function (age) {
        return function(item){
            if (parseInt(item.age) > age) return true;
        }
    };
});
