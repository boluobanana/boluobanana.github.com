var userInfoModule = angular.module('UserInfoModule',[])

userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
	$scope.userInfo = {
		email: '8878797879@email.com',
		password: '12341234',
		autoLogin: true
	};
	$scope.getFormData = function(){
		console.log($scope.userInfo);
	};
	$scope.setFormData = function(){
		$scope.userInfo = {
			email: '124134@125.com',
			password: '42134123',
			autoLogin: false
		};
	};
	$scope.resetFormData = function(){
		$scope.userInfo = {
			email: '8878797879@email.com',
			password: '12341234',
			autoLogin: true
		};
	} 
}]);

userInfoModule.controller('ColorCtrl', ['$scope', function($scope){
	$scope.isRed = false;
	$scope.isGreen = false;

	$scope.setRed = function(){
		$scope.setMessage = 'You have seen red!';
		$scope.isRed = true;
		$scope.isGreen = false;
	};
	$scope.setGreen = function(){
		$scope.setMessage = 'You have seen green!';
		$scope.isRed = false;
		$scope.isGreen = true;
	}
}]);

userInfoModule.controller('ShowCtrl',['$scope', function($scope){
	$scope.liShow = {show:true};
	$scope.showHide = function(){
		$scope.liShow.show = !$scope.liShow.show;
	};
}])
