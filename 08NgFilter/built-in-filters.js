var app = angular.module('app', []);


//inject our custom "samFilter" into our service so we can use it
app.factory('Avengers', ['samFilter', function(samFilter){
	var Avengers = {};
	
	Avengers.cast = [
		{name: 'Cobie Smulders', character: 'Agent Maria Hill'},
		{name: 'Samuel L. Jackson', character: 'Nick Fury'},
		{name: 'Gwyneth Paltro', character: 'Pepper Potts'},
		{name: 'Paul Bettany', character: 'Jarvis (voice)'},
		{name: 'Alexis Denisof', character: 'The Other'},
		{name: 'Tina Benko', character: 'NASA Scientist'},
		{name: 'Sam Stine', character: 'Other Dude'}
	];

	Avengers.cast = samFilter(Avengers);

	return Avengers;
}]);

//create a custom filter to filter for people named sam
app.filter('sam', function(){
	return function(Avengers){

		var filteredCast = [], i = 0;

		for(i; i<Avengers.cast.length; i++){
			if(Avengers.cast[i].name.toLowerCase().indexOf('sam') > -1){
				filteredCast.push(Avengers.cast[i]);
			}
		}
		return filteredCast;
	}
})

app.controller('AvengersCtrl', ['$scope', 'Avengers', function($scope, Avengers){
	$scope.avengers = Avengers;
}]);