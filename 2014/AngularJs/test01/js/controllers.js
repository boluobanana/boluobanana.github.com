

var banana = angular.module('banana', []);

banana.controller('BananaListCtrl',function($scope) {
	$scope.bananas = [
	{'name': 'Tom',
	 'sizes': '34.',
	 'longs': '555'},
	{'name': 'June',
	 'sizes': '33.',
	 'longs': '555'},
	{'name': 'JJUe',
	'sizes': '55.',
	'longs': '5555'}
	];
	$scope.hello = 'hello,world!'
});