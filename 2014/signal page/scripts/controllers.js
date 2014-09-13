angular.module('scotchApp.controllers',['ngRoute'])
scotchApp.controller('PromotionController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});
// scotchApp.controller('mainController', function($scope, Promotions, $stateParams, $cookieStore, $state, Member, upp100, $ionicLoading) {//依赖注入$stateParams获取路由上的值
// 		$scope.promotion = null;	//优惠详情model
// 		$scope.imgUrl = imgUrl;		//统一管理的图片地址
// 		$scope.buyState = "立即购买";//购买状态字
// 		$scope.havebuy = false;		//购买状态值
// 		$scope.subsidy = null;	//代金券model
// 		$scope.shop = null;	//商家信息model
// 		$stateParams.promotionId='cfc13de4-3f0f-4a46-be1e-a908f41d6785';
// 		var promise = Promotions.getOne($stateParams.promotionId);	// 同步调用，获得承诺接口
// 			promise.then(function(data) {	// 调用承诺API获取数据 .resolve
// 				var json = eval("(" + data.extData + ")");
// 				data.extData = json;
// 				$scope.promotion = data;

// 				$ionicSlideBoxDelegate.update();// ion-slide-box's bug -> refresh
// 				$scope.promotion.startTime = $scope.promotion.startTime.split('T')[0];
// 				$scope.promotion.endTime = $scope.promotion.endTime.split('T')[0];

// 				var promise = Shops.getOne($scope.promotion.extData.shopId);	// 同步调用，获得承诺接口
// 					promise.then(function(data) {	// 调用承诺API获取数据 .resolve
// 						var json = eval("(" + data.extData + ")");
// 						data.extData = json;
// 						$scope.shop = data;
// 					}, function(data) {	// 处理错误 .reject

// 					});

// 				$scope.showNotify = function() {
// 					return $sce.trustAsHtml($scope.promotion.extData.notify);
// 				};

// 				$scope.showStatement = function() {
// 					return $sce.trustAsHtml($scope.promotion.extData.statement);
// 				};
// 			}, function(data) {	// 处理错误 .reject

// 			});
// 	});

scotchApp.controller('ActivityController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('ShopController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});




