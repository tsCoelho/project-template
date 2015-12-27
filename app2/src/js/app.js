/* globals bl */

var app = angular.module('app',[]);

app.controller('cwCtrl', function($scope, $http,$rootScope){
	
	$scope.currentSection = 1
$scope.hello= function(){
	console.log('Hello from section2')
}
	$scope.changeSect = function(){
		$scope.currentSection = 2
	}
	
	$scope.printLog = function(a){
		console.log(a)
	
	}
	
	$scope.orderDate = function(item) {
    return new Date(item);
	};

	$scope.testFunc= function(pat){
		$scope.selPat = pat
		$scope.currentSection = 3
		console.log("Patient name is "+pat.name);
		
		if($scope.selPat.patID){
		$http({
			method: 'GET',
			url: 'http://localhost:9000/rep/report/'+$scope.selPat.patID
		}).then(function successCallback(response) {
		
		function processa(date){
			   var parts = date.split("/");
			   return new Date(parts[2], parts[1] - 1, parts[0]);
			}
		
		$scope.medRepHist = response.data;
		for(var i = 0; i < $scope.medRepHist.length;i++){
			$scope.medRepHist[i].newdate = processa($scope.medRepHist[i].date)
		}
		
		$scope.repID = $scope.medRepHist.length
		
		}, function errorCallback(response) {
		 
		});	

		}
		
		
		 $http({
				method: 'GET',
				url: 'http://localhost:9000/buffer'
			}).then(function successCallback(response) {
				
			$scope.medRepBuffer = response.data;

		  }, function errorCallback(response) {
			 
		  });
		
	}  
		
		
	$http({
		method: 'GET',
		url: 'http://localhost:9000/act'
	}).then(function successCallback(response) {
	
    $scope.act = response.data;

	}, function errorCallback(response) {
     
	});
	
	$http({
		method: 'GET',
		url: 'http://localhost:9000/act_rmb'
	}).then(function successCallback(response) {
	
    $scope.act_rmb = response.data;

	}, function errorCallback(response) {
     
	});

	$http({
		method: 'GET',
		url: 'http://localhost:9000/doctor'
	}).then(function successCallback(response) {
	
    $scope.data = response.data;

	}, function errorCallback(response) {
     
	});
	
	$http({
		method: 'GET',
		url: 'http://localhost:9000/request'
	}).then(function successCallback(response) {
	
    $scope.request = response.data;

  }, function errorCallback(response) {
     
  });
  
  $http({
		method: 'GET',
		url: 'http://localhost:9000/patient'
	}).then(function successCallback(response) {
		
    $scope.patient = response.data;

  }, function errorCallback(response) {
     
  });
  
	$scope.authUser = function(username,pass){
			
			var req = {
			method: 'POST',
			url: 'http://localhost:9000/login',
			headers: {
			'Content-Type': 'application/json'
			},
			data: { "user": username,
					"pass": pass
				 }
				 
			}
			$http(req).then(function successCallback(response) {
			
			$scope.authLogin = response.data;
			
			if ($scope.authLogin.isValid){
				$scope.doc = $scope.authLogin.doc
				$scope.default_mess=""
				$scope.currentSection = 2
			}else{
				$scope.default_mess="Username or Password Incorrect!"
			}
			
			}, function errorCallback(response) {
			 
			});	
		
		}	
				
	function convertDate(inputFormat) {
		  function pad(s) { return (s < 10) ? '0' + s : s; }
		  var d = new Date(inputFormat);
		  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
		}
		// Add Medical Act to Patient
		
		$scope.addmedReport = function(medR){
		
				$scope.selAct = medR;
				
				var req = {
				method: 'POST',
				url: 'http://localhost:9000/add/buffer/report',
				headers: {
				'Content-Type': 'application/json'
				},
				data: { "repID": $scope.repID++,
						"date": convertDate(new Date().getTime()),
						"docID": $scope.doc.docID,
						"patID": $scope.selPat.patID,
						"actID": $scope.selAct.actID,
						"actual_reimb_perc": ""
					 }
					 
				}
				$http(req).then(function successCallback(response) {
				
				
				$scope.medRepBuffer = response.data;
				
				}, function errorCallback(response) {
				 
				});	
					
				console.log('Add medical report request sent!')	
		
		//($scope.selAct.actID,$scope.selAct.policy_type)
		
		function computeReimb(act_rmb,actid,policytype){
			for (var i = 0; i<act_rmb.length;i++){
				if (actid === act_rmb[i].actID){
					if(policytype === act_rmb[i].policy_type){
					console.log('Found REIMBURSEMENT')
						return act_rmb[i].reimb_percentage
					}
				}
			}
			console.log('Didnt find reimb')
			return 1
		}
		
		
		
		$scope.selAct.reimb = computeReimb($scope.act_rmb,Number($scope.selAct.actID),Number($scope.selAct.policy_type))
		
		

		}
		
		$scope.dropmedReport = function(mrepID){
			console.log(mrepID)
					$http({
						method: 'DELETE',
						url: 'http://localhost:9000/buffer/'+mrepID
							}).then(function successCallback(response) {
								
							$scope.medRepBuffer = response.data;

						  }, function errorCallback(response) {
							 
		  });
			
			
			//$scope.medRepList.splice(index,1)
			// sera que se faz delete ?
		}
		
		$http({
		method: 'GET',
		url: 'http://localhost:9000/act'
	}).then(function successCallback(response) {
		
    $scope.medActList = response.data;

  }, function errorCallback(response) {
     
  });
  
  
  
  
  $scope.submitRequest = function(){
	  
	$scope.newreqID = $scope.request.length
	  
	for (var i = 0; i < $scope.medRepBuffer.length;i++){
		if ($scope.medRepBuffer[i].patID === $scope.selPat.patID) {
		  var req = {
					method: 'POST',
					url: 'http://localhost:9000/add/request',
					headers: {
					'Content-Type': 'application/json'
					},
					data: { 
							"reqID": $scope.newreqID++,
							"repID": $scope.medRepBuffer[i].repID,
							"status": "REQUESTED"
						 }
						 
					}
					$http(req).then(function successCallback(response) {
					
					
					//$scope.medRepHist = response.data;
					
					}, function errorCallback(response) {
					 
					});	
						
					console.log('Insurance request sent!')
					
					var req = {
					method: 'POST',
					url: 'http://localhost:9000/add/report',
					headers: {
					'Content-Type': 'application/json'
					},
					data: $scope.medRepBuffer[i]
						 
					}
					$http(req).then(function successCallback(response) {
					
					
					//$scope.medRepHist = response.data;
					
					}, function errorCallback(response) {
					 
					});	
					
						
					
		}
	}
	
	
		
		$http({
		method: 'DELETE',
		url: 'http://localhost:9000/buffer/pat/'+$scope.selPat.patID
			}).then(function successCallback(response) {
				
			$scope.medActList = response.data;

		  }, function errorCallback(response) {
			 
		  });
		  
		  
		  $http({
				method: 'GET',
				url: 'http://localhost:9000/request'
			}).then(function successCallback(response) {
			
			$scope.request = response.data;

		  }, function errorCallback(response) {
			 
		  });
				
	$scope.currentSection = 2
	  
  }
  
  
  
  
})
			
	//~ app.controller('loginCtrl', function($scope,$http,$rootScope){		
		//~ 
	//~ })
			
	//~ app.controller('medActCtrl', function($scope,$http){
		//~ 
//~ 
		//~ 
	//~ })
