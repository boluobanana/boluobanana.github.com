var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl',['$scope',function($scope){
	$scope.title = '点击文本'
	}
]);
myApp.directive('hello',function(){
	return{
		restrict: 'AE',
		transclude: true,
		template: '<div>'
				+ '<div ng-mouseenter="showCent()" ng-mouseout="hideCent()" class="showBox">{{title}}</div>'
				+ '<div ng-show="showState" class="showCent" ng-transclude></div>'
				+ '</div>',
		link: function(scope,element,attrs){
			scope.showState = false;
			scope.showCent = function(){
				scope.showState = true;
			};
			scope.hideCent = function(){
				scope.showState = false;
			}
			// scope.showState = false;
			// element.bind('mouseenter', function(){
			// 	scope.showState = true;
			// 	console.log("aaaaa")
			// });
			// element.bind('mouseout', function(){
			// 	scope.showState = false;
			// });
		}
	}
})