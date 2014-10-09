var myApp = angular.module('myApp', []);

myApp.directive('superman', function(){
	return{
		restrict: 'AE',
		scope: {},
		controller: function($scope){
			$scope.abilities = [];
			this.addStrong = function(){
				$scope.abilities.push('strong');
			};
			this.addSpeed = function(){
				$scope.abilities.push('speed');
			};
			this.addLight = function(){
				$scope.abilities.push('light');
			};
		},
		link: function(scope,element,attrs){
			element.bind('mouseenter', function(){
				console.log(scope.abilities);
			});
		}
	}
});
myApp.directive('strong', function(){
	return{
		require: '^superman',
		link: function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addStrong();
		}
	}
})
myApp.directive('speed', function(){
	return{
		require: '^superman',
		link: function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addSpeed();
		}
	}
})
myApp.directive('light', function(){
	return{
		require: '^superman',
		link: function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addLight();
		}
	}
});