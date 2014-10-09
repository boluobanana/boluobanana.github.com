var myApp = angular.module('myApp', []);

myApp.run(function($templateCache) {
	$templateCache.put("hello.html","<div>hello everyone!!!!!!")
})
myApp.directive("hello", function($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get("hello.html"),
		replace: true
	}
});


var tranApp = angular.module('tranApp', []);

tranApp.directive('hi', function(){
	return{
		restrict: 'E',
		transclude: true,
		templateUrl: 'hello.html'
	}
})