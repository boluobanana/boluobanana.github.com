var bananaControllers = angular.module('bananaControllers', []);

bananaControllers.controller('BananaListCtrl', ['$scope', '$http',
	function  ($scope, $http) {
		$http.get('json/banana.json').success(function  (data) {
			$scope.bananas = data;
		});
		$scope.orderProp = 'age';
	}
	]);


bananaControllers.controller('BananaDetailCtrl',[
	'$scope', '$routeParams',
	function($scope, $routeParams){
		$scope.bananaId = $routeParams.bananaId;
	}])