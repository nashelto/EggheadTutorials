var app = angular.module('app', []);

app.controller('FirstCtrl', [function($scope){
	$scope.data = {
		message: 'hi there'
	}
}]);