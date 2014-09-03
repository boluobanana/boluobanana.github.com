var banana = angular.module('banana',[
	'ngRoute',
	'bananaControllers',
	'bananaServices'
]);

banana.config(['$routeProvider',
	function  ($routeProvider) {
		$routeProvider.
		when('/bananas',{
			templateUrl: 'banana-list.html',
			controller: 'BananaListCtrl'
		}).
		when('/bananas/:bananaId',{
			templateUrl: 'banana-detail.html',
			controller: 'BananaDetailCtrl'
		}).
		otherwise({
			redirectTo: '/bananas'
		})
	}])