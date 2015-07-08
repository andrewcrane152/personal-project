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

	.when('/claim2', {
		templateUrl: 'app/views/claim/claim2.html',
		controller: 'claimCtrl2',
		resolve: {
			getLeads: function($q, mainService){
				var deferred = $q.defer();
					console.log('resolve working');
					mainService.readLead().then(function(response){
					messages = response.data;
					deferred.resolve(messages);
				});
				return deferred.promise;
			}
		}
	})	

	.when('/register', {
		templateUrl: 'app/views/register/register.html',
		controller: 'registerCtrl'
	})

	.otherwise({
		redirectTo: '/intro'
	})

})