/* globals bl */

var app = angular.module('app',[]);

app.controller('cwCtrl', function($scope, $http,$rootScope){
	
	$scope.currentSection = 1

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
			url: 'http://localhost:9000/report/'+$scope.selPat.patID
		}).then(function successCallback(response) {
		
		$scope.medRepHist = response.data;
		//~ for(var i = 0; i < $scope.medRepHist.length;i++){
			//~ $scope.medRepHist[i].date = new Date($scope.medRepHist[i].date)
		//~ }
		
		$scope.repID = $scope.medRepHist.length
		
		}, function errorCallback(response) {
		 
		});	

		}
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
	

			
			
			
		$scope.BuffermedRepList= []
			
	
		// Add Medical Act to Patient
		
		$scope.addmedReport = function(medR){
			
			console.log($scope.selPat)
			$scope.selAct = medR
			
			$scope.medRepList.push(medR)
		
		var req = {
		method: 'POST',
		url: 'http://localhost:9000/report',
		headers: {
		'Content-Type': 'application/json'
		},
		data: { "repID": $scope.repID++,
				"date": "27/12/2015",
				"docID": $scope.doc.docID,
				"patID": $scope.selPat.patID,
				"actID": $scope.selAct.actID,
				"actual_reimb_perc": ""
			 }
			 
		}
		$http(req).then(function successCallback(response) {
		
		
		//$scope.medRepHist = response.data;
		
		}, function errorCallback(response) {
		 
		});	
			
		console.log('Add medical report request sent!')	

			
		}
		
		$scope.dropmedReport = function(index){
			$scope.medRepList.splice(index,1)
		}
		
		$http({
		method: 'GET',
		url: 'http://localhost:9000/act'
	}).then(function successCallback(response) {
		
    $scope.medActList = response.data;

  }, function errorCallback(response) {
     
  });
  
  
  });
  
			
	//~ app.controller('loginCtrl', function($scope,$http,$rootScope){		
		//~ 
	//~ })
			
	//~ app.controller('medActCtrl', function($scope,$http){
		//~ 
//~ 
		//~ 
	//~ })
