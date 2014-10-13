var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', ['$scope', function($scope){
	$scope.title = "showBaby";
}])
myApp.directive('hello',function(){
	return{
		restrict: 'AE',
		transclude: true,
		template: '<div>'
				+ '<div class="showBox">{{title}}</div>'
				+ '<div class="showCent" id="showBox">baby</div>'
				+ '</div>',
		link :function(scope,element,attrs){
			element.bind('mouseenter', function(){
				var showCent = element[0].firstChild.lastChild;
				showCent.style.height = 38 +'px';
			});
			element.bind('mouseout', function(){
				var showCent = element[0].firstChild.lastChild;
				showCent.style.height = 0 + 'px';
			});

		}

	}
})