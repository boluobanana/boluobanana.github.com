
var banana = angular.module('banana', []);

// banana.controller('BananaListCtrl', function  ($scope, $http) {
	// $http.get('json/banana.json').success(function(data){
	// 	$scope.bananas = data.splice(0, 3);//只显示数据中前三个 原￥scope.banana = data;
	// });

	// $scope.orderProp = 'age';
// });

var BananaListCtrl = ['$scope', '$http', function  ($scope, $http) {
	$http.get('json/banana.json').success(function(data){
	$scope.bananas = data.splice(0, 3);//只显示数据中前三个 原￥scope.banana = data;
	});

	$scope.orderProp = 'age';
}]//指定依赖列表并且避免压缩问题——使用Javascript数组方式构造控制器：把要注入的服务放到一个字符串数组（代表依赖的名字）里，数组最后一个元素是控制器的方法函数：