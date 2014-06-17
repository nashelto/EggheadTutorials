var app = angular.module('app', []);


app.factory('Data', function(){
	var data = {};
	data.message = "hello there, I'm data from the service";

	return data;
});


app.filter('reverse', ['Data', function(Data){
	return function(text){
		return text.split('').reverse().join('');
	}
}]);

app.controller('FirstCtrl', ['$scope', 'Data' ,function($scope, Data){
	$scope.data = Data;
}]);


app.controller('SecondCtrl', ['$scope', 'Data' ,function($scope, Data){
	$scope.data = Data;
}]);