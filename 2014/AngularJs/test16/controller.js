var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', ['$scope', function($scope){
	$scope.title = "来看看我的宝贝吧！";
}])
myApp.directive('hello',function(){
	return{
		restrict: 'AE',
		transclude: true,
		template: '<div>'
				+ '<div class="showBox">{{title}}</div>'
				+ '<div class="showCent" id="showBox">我是宝贝</div>'
				+ '</div>',
		link :function(scope,element,attrs){
			element.bind('mouseenter', function(){
				var showCent = element[0].firstChild.lastChild;
				showCent.style.display = 'none';
			});
			element.bind('mouseout', function(){
				var showCent = element[0].firstChild.lastChild;
				showCent.style.display = 'block';
			});

		}

	}
})