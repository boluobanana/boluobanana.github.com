var banana = angular.module('banana', []);

banana.controller('BananaListCtrl', function  ($scope) {
	$scope.bananas = [
	{'name': 'Tom',
	'sizes': '34',
	'age': 1},
	{'name': 'June',
	'sizes': '55',
	'age': 2},
	{'name': 'JJJe',
	'sizes': '555',
	'age': 3}
	];
	$scope.orderProp = 'age';
})