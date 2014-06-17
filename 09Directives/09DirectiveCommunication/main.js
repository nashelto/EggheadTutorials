var app = angular.module('app', []);


app.directive('country', function(){
	return {
		restrict: 'E',
		controller: function($scope){
			this.makeAnnouncement = function(message){
				console.log('Country Says: ' + message);
			};
		}
	};
});

app.directive('state', function(){
	return {
		restrict: 'E',
		require: '^country',
		controller: function($scope){
			this.makeLaw = function(law){
				console.log('The Law is: ' + law);
			}
		},
		link: function(scope, element, attrs, countryCtrl){
			countryCtrl.makeAnnouncement('the state can make announcements too!')
		}
	};
});

app.directive('city', function(){
	return {
		restrict: 'E',
		require: ['^country', '^state'],
		link: function(scope, element, attrs, ctrls){
			ctrls[1].makeLaw('Jump higher');
			ctrls[0].makeAnnouncement('Announcement from city');
		}
	};
});
