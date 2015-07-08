angular.module('tuneMyPiano')
.controller('claimCtrl2', function($scope, mainService, getLeads){
	
	$scope.messages = getLeads;


	$scope.claimLead = function() {
		
	}

});