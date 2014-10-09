var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl',['$scope', function($scope){
	$scope.loadData = function(){
		console.log('数据加载中!!!');
	}
}])
myApp.controller('MyCtrl2',['$scope', function($scope){
	$scope.loadData2 = function(){
		console.log('数据加载中!!!2222');
	}
}])

myApp.directive('loader', function(){
	return{
		restrict:'AE',
		link: function(scope,element,attr){
			element.bind('mouseenter', function(){
				//scope.loadData();
				//scope.$apply('loadData()');
				scope.$apply(attr.howtoload);
			})
		}
	}
});

myApp.directive('hello', function(){
	return{
		restrict: 'AE',
		replace: true,
		template: '<div>aaaaa</div>'
	}
})