var app = angular.module('behaviorApp', []);


app.directive('enter', function(){
	return function(scope, element, attrs){
		element.on('mouseenter', function(){
			console.log("I'm inside of you");
		});
	}
});


app.directive('exit', function(){
	return function(scope, element, attrs){
		element.on('mouseleave', function(){
			console.log("I'm not interested in you anymore");
		});
	}
});