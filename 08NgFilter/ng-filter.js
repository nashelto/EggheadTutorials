var app = angular.module('app', []);


app.factory('Avengers', function(){
	var Avengers = {};
	
	Avengers.cast = [
		{name: 'Cobie Smulders', character: 'Agent Maria Hill'},
		{name: 'Samuel L. Jackson', character: 'Nick Fury'},
		{name: 'Gwyneth Paltro', character: 'Pepper Potts'},
		{name: 'Paul Bettany', character: 'Jarvis (voice)'},
		{name: 'Alexis Denisof', character: 'The Other'},
		{name: 'Tina Benko', character: 'NASA Scientist'}
	];

	return Avengers;
});

app.controller('AvengersCtrl', ['$scope', 'Avengers', function($scope, Avengers){
	$scope.avengers = Avengers;
}]);