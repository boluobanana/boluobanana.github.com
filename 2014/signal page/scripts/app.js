	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(['$routeProvider',
		function  ($routeProvider) {
			$routeProvider.
			when('/promotion',{
				templateUrl : 'views/promotion.html',
				controller  : 'PromotionController'
			}).
			when('/activity',{
				templateUrl : 'views/activity.html',
				controller  : 'ActivityController'
			}).
			when('/shop',{
				templateUrl : 'views/shop.html',
				controller  : 'ShopController'
			}).
			otherwise({
				redirectTo: '/promotion'
			})
		}])

	// 		// route for the home page
	// 		.when('/promotion', {
	// 			templateUrl : 'pages/promotion.html',
	// 			controller  : 'PromotionController'
	// 		})

	// 		// route for the about page
	// 		.when('/activity', {
	// 			templateUrl : 'pages/activity.html',
	// 			controller  : 'ActivityController'
	// 		})

	// 		// route for the contact page
	// 		.when('/shop', {
	// 			templateUrl : 'pages/shop.html',
	// 			controller  : 'ShopController'
	// 		});
	// });

	// create the controller and inject Angular's $scope

	