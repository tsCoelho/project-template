/* globals bl */

console.log(bl.sayHello())

var app = angular.module('app',[]);

app.controller('cwCtrl', function($scope, $rootScope){
	
	$scope.currentSection = 1

	$scope.changeSect = function(){
		$scope.currentSection = 2
	}
	
	$scope.testFunc= function(pat){
		$scope.selPat = pat
		$scope.currentSection = 3
		console.log("Patient name is "+pat.name);
}  
			});
	

app.controller('actsCtrl', function($scope, $rootScope, $http){
	$http({
		method: 'GET',
		url: 'http://tiago-virtualbox:9000/act'
	}).then(function successCallback(response) {
	
    $scope.act = response.data;

  }, function errorCallback(response) {
     
  });
})	

app.controller('insuranceReqCtrl', function($scope, $rootScope, $http){
	$http({
		method: 'GET',
		url: 'http://tiago-virtualbox:9000/request'
	}).then(function successCallback(response) {
	
    $scope.request = response.data;

  }, function errorCallback(response) {
     
  });
  
})			
			
app.controller('patientCtrl', function($scope, $rootScope, $http){
	$http({
		method: 'GET',
		url: 'http://tiago-virtualbox:9000/patient'
	}).then(function successCallback(response) {
		
    $scope.patient = response.data;

  }, function errorCallback(response) {
     
  });
  
})			
