var app = angular.module('tuneMyPiano', ['ngRoute', 'ngGrid'])

app.config(function($routeProvider){
	console.log('app loaded');
	$routeProvider
	.when('/intro', {
		templateUrl: 'app/views/intro/intro.html',
		controller: 'introCtrl',
		resolve: {
			test: function(){
				return console.log("hello?");
			}
		}
	})
	.when('/request', {
		templateUrl: 'app/views/request/request.html',
		controller: 'requestCtrl'
	})
	.when('/claim', {
		templateUrl: 'app/views/claim/claim.html',
		controller: 'claimCtrl'
	})
	.when('/register', {
		templateUrl: 'app/views/register/register.html',
		controller: 'registerCtrl'
	})
	.otherwise({
		redirectTo: '/intro'
	})
})