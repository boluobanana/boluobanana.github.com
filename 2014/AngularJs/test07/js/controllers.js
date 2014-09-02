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
	'$scope', '$routeParams','$http',
	function($scope, $routeParams, $http){
		$http.get('json/' + $routeParams.bananaId + '.json').success(function(data){
			$scope.banana = data;
			$scope.mainImageUrl = data.images[0];
		});
		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		}
	}])