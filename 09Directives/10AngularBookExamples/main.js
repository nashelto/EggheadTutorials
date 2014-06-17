var app = angular.module('app', []);


//because attribute directives are default
//the attribute for this directive is super-date-picker
app.directive('superDatePicker', function(){
	return function(scope, element, attrs){
		element.on('click', function(){
			alert('do some date picking stuff!!');
		});
	};
});


app.directive('anotherDatePicker', function(){
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			element.on('click', function(){
				alert('another date picker');
			})
		}
	}
});



app.directive('hello', function(){
	return {
		restrict: 'E',
		template: '<div>Hi there!</div>',
		replace: true
	};
});