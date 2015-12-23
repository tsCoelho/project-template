/* globals bl */

console.log(bl.sayHello())

var app = angular.module('app',[]);

app.controller('cwCtrl', function($scope, $http,$rootScope){
	
	$scope.currentSection = 1

	$scope.changeSect = function(){
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
