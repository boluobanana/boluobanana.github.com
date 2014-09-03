var bananaControllers = angular.module('bananaControllers', []);

bananaControllers.controller('BananaListCtrl', ['$scope', 'Banana',
	function  ($scope, Banana) {
		$scope.s = banana Banana.query();
		$scope.orderProp = 'age';
	}
	]);


bananaControllers.controller('BananaDetailCtrl',[
	'$scope', '$routeParams','Banana',
	function($scope, $routeParams, Banana){
		$scope.banana = Banana.get({bananaId: $routeParams.bananaId}, function(phone){
			$scope.mainImageUrl = banana.images[0];
		});
		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		};
		$scope.hello = function(name) {
        alert('Hello ' + (name || 'world') + '!');
    }
	}])