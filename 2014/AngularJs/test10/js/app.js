var bookStoreApp = angular.module('bookStoreApp', [
	'ngRoute', 'ngAnimate', 'bookStoreCtrls'
]);

bookStoreApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/hello', {
			templateUrl: 'hello.html',
			controller: 'HelloCtrl'
		}).when('/list', {
			templateUrl: 'list.html',
			controller: 'ListCtrl'
		}).otherwise({
			redirectTo: '/hello'
		})
	}
]);