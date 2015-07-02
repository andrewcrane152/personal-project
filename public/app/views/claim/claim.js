angular.module('tuneMyPiano')
.controller('claimCtrl', function($scope, mainService){
	
	$scope.gridOptions = {
		data: "leads",
		showGroupPanel: true,
		columnDefs: [{ field: "firstName", displayName: "First Name" }
		,			 { field: "city", displayName: "City" }
		,			 { field: "county", displayName: "County" }
		,			 { field: "state", displayName: "State" }
		,			 { field: "pianoKind", displayName: "Piano Type" }
		,			 { field: "pianoBrand", displayName: "Piano Brand" }
		,			 { field: "pianoAge", displayName: "Piano Age" }
		,			 { field: "lastTuned", displayName: "Last Tuned" }
		,			 { field: "tuning", displayName: "Tne" }
		,			 { field: "pitchRaise", displayName: "PRs" }
		,			 { field: "repairs", displayName: "Rep" }
		,			 { field: "internalCleaning", displayName: "Cln" }
		,			 { field: "regulation", displayName: "Reg" }
		,			 { field: "purchaseConsult", displayName: "PrC" }
		,			 { field: "estimate", displayName: "Est" }
		,			 { field: "appraisal", displayName: "Apr" }
		,			 { field: "other", displayName: "Oth" }
		,			 { field: "comment", displayName: "Comment" }
		,			 { field: "submittedAt", displayName: "Date Submitted" }
					]
	}

	$scope.getLeads = function(){
		mainService.readLead().then(function(response){
			var leadArr = [];
			for (var i = 0; i < response.data.length; i++){
				leadArr.push({
					firstName: response.data[i].firstName,
					city: response.data[i].city,
					county: response.data[i].county,
					state: response.data[i].state,
					pianoKind: response.data[i].pianoKind,
					pianoBrand: response.data[i].pianoBrand,
					pianoAge: response.data[i].pianoAge,
					lastTuned: response.data[i].lastTuned,
					tuning: response.data[i].tuning,
					pitchRaise: response.data[i].pitchRaise,
					repairs: response.data[i].repairs,
					internalCleaning: response.data[i].internalCleaning,
					regulation: response.data[i].regulation,
					purchaseConsult: response.data[i].purchaseConsult,
					estimate: response.data[i].estimate,
					appraisal: response.data[i].appraisal,
					other: response.data[i].other,
					comment: response.data[i].comment,
					submittedAt: response.data[i].submittedAt
				});
			}
			$scope.leads = leadArr;
		})
	} 


});