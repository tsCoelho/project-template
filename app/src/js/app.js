/* globals bl */

var app = angular.module('app',[]);

app.controller('cwCtrl', function($scope, $http,$rootScope){
	
	$scope.currentSection = 1
	$scope.initSect = function(){
		
		document.body.style.backgroundColor = '#21B6A8';
		$scope.currentSection = 1
	}
	
	$scope.changeSect = function(){
		//$scope.currentSection = 2
		document.body.style.backgroundColor = "white";
		$scope.currentSection = 2 
	}
	
	$scope.printLog = function(a){
		console.log(a)
	
	}
	
	
	$scope.testFunc= function(pat){
		$scope.selPat = pat
		$scope.currentSection = 3
		console.log("Patient name is "+pat.name);
		}  
		
		
	$scope.data = [{"docID":0,"name":"Leonor Pereira","speciality":"Clínica Geral","user":"doc0","pass":"pass"},{"docID":1,"name":"João Santos","speciality":"Ortopedia","user":"doc1","pass":"pass"},{"docID":2,"name":"Guilherme Silva","speciality":"Neurocirurgia","user":"doc2","pass":"pass"},{"docID":3,"name":"Francisco Martins","speciality":"Pediatria","user":"doc3","pass":"pass"},{"docID":4,"name":"Leonor Ferreira","speciality":"Ortopedia","user":"doc4","pass":"pass"},{"docID":5,"name":"Matilde Santos","speciality":"Cardiologia","user":"doc5","pass":"pass"},{"docID":6,"name":"Mariana Silva","speciality":"Psiquiatria","user":"doc6","pass":"pass"},{"docID":7,"name":"Tomás Martins","speciality":"Pediatria","user":"doc7","pass":"pass"},{"docID":8,"name":"Matilde Ferreira","speciality":"Clínica Geral","user":"doc8","pass":"pass"},{"docID":9,"name":"Leonor Santos","speciality":"Neurocirurgia","user":"doc9","pass":"pass"}]
		
	$scope.default_mess="";
	
	$scope.myfunction=function(user,pass){
		
		for(var i=0; i<$scope.data.length; i++){
			if($scope.data[i].user === user){
				if($scope.data[i].pass === pass){
					$scope.login=true
					$scope.doc=$scope.data[i].name
					$scope.default_mess=""
					console.log('Sucess!')
					$scope.currentSection = 2 
					return
				}else{
					$scope.login=false
					console.log('Failed!')
					$scope.default_mess="Username or Password Incorrect!"
				}
			}else{ 
				console.log('Failed!')
				$scope.default_mess="Username or Password Incorrect!"
			}
		}
	};
	
	
	
		
	$http({
		method: 'GET',
		url: 'http://localhost:9000/act'
	}).then(function successCallback(response) {
	
    $scope.act = response.data;

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
  
	

			});
			
	app.controller('medActCtrl', function($scope,$http){
		$scope.medreplist = []
		
		$http({
		method: 'GET',
		url: 'http://localhost:9000/act'
	}).then(function successCallback(response) {
		
    $scope.medActList = response.data;

  }, function errorCallback(response) {
     
  });
		
	})
	

	
//~ 
//~ app.controller('actCtrl', function($scope, $http){
//~ 
//~ })	
//~ 
//~ app.controller('insuranceReqCtrl', function($scope, $rootScope, $http){
	//~ 
  //~ 
//~ })			
			//~ 
//~ app.controller('patientCtrl', function($scope, $rootScope, $http){
	//~ 
  //~ 
//~ })		
//~ 
//~ app.controller('newCtrl', function($scope, $rootScope, $http){
	//~ 
  //~ 
//~ })		
