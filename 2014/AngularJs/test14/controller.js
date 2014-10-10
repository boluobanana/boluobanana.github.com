var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor = "可口可乐";
}]);
myApp.directive('drink', function(){
	return{
		restrict: 'AE',
		scope:{
			flavor: '@'
		},
		template:'<div>{{flavor}}</div>'
		// ,
		// link: function(scope,element,attrs){
		// 	scope.flavor = attrs.flavor;
		// }
	}
});

var myApp2 = angular.module('myApp2', []);

myApp2.controller('MyCtrl2',['$scope', function($scope){
	$scope.ctrlFlavor = "可口可乐";
}]);
myApp2.directive('drink',function(){
	return{
		restrict: 'AE',
		scope: {
			flavor: '='
		},
		template: '<input ng-model="flavor" type="text">'
	}
})

var myApp3 = angular.module('myApp3', []);

myApp3.controller('MyCtrl3', ['$scope', function($scope){
	$scope.sayHello = function(name){
		alert('hello' + name);
	}
}]);
myApp3.directive('greeting', function(){
	return{
		restrict: 'AE',
		scope: {
			greet: '&'
		},
		template: '<input type="text" ng-model="userName"><br>'+
				  '<button ng-click="greet({name: userName})">button<br>'
	}
})