var app = angular.module('phoneApp', []);

app.controller('AppCtrl',['$scope', function($scope){

}]);

app.directive('panel', function(){
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		template: "<div class='panel'>this is a panel component <div ng-transclude></div></div>",
	}
})