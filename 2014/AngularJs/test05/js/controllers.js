var banana = angular.module('banana', [])

var BananaListCtrl = ['$scope', '$http', function  ($scope, $http) {
	$http.get('json/banana.json').success(function  (data) {
		$scope.bananas = data;
	})
	$scope.orderProp = 'age';
}]