var app = angular.module('twitterApp', []);


app.directive('enter', function(){
	return function(scope, element, attrs){
		element.on('mouseenter', function(){
			scope.$apply(attrs.enter);
		});
	};
});


app.controller('AppCtrl', ['$scope', function($scope){
	$scope.loadMoreTweets = function(){
		alert('loading tweets');
	}
	$scope.deleteTweets = function(){
		alert('deleting tweets');
	}
}]);