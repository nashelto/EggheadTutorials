var app = angular.module('superhero', []);


app.directive("superman", function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			alert('im working stronger!!')
		}
	};
});




app.directive("flash", function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			alert('im working faster!!')
		}
	};
});