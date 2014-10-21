var myApp = angular.module('myApp', [
	'ui.router',
	'MyController'
]);

myApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

myApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index',{
			url: '/index',
			views:{
				'':{
					templateUrl: 'src/tpls/home.html'
				},
				'part1@index':{
					templateUrl: 'src/tpls/part1.html'
				},
				'part2@index':{
					templateUrl: 'src/tpls/part2.html'
				}
			}
		})
})

