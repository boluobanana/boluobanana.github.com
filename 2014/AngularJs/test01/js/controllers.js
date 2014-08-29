

var banana = angular.module('banana', []);

banana.controller('BananaListCtrl',function($scope) {
	$scope.bananas = [
	{'name': 'Tom',
	 'sizes': '34.'},
	{'name': 'June',
	 'sizes': '33.'},
	{'name': 'JJUe',
	'sizes': '55.'}
	];
});