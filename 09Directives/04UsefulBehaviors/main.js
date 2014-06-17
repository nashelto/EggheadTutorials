var app = angular.module('behaviorApp', []);


app.directive('enter', function(){
	return function(scope, element, attrs){
		element.on('mouseenter', function(){
			element.addClass(attrs.enter);
		});
	}
});


app.directive('exit', function(){
	return function(scope, element, attrs){
		element.on('mouseleave', function(){
			element.removeClass(attrs.enter);
		});
	}
});