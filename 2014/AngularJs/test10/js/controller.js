var bookStoreCtrls = angular.module('bookStoreCtrls',[]);

bookStoreCtrls.controller('HelloCtrl',['$scope', function  ($scope) {
	$scope.greeting={
		text: 'Hello'
	};
	$scope.pageClass = 'hello';
}]);

bookStoreCtrls.controller('ListCtrl', ['$scope', function($scope){
	$scope.books = [{
		title: "<<aaaaa>>",
		author: "aaaa"
	},{
		title: "<<bbbbbbb>>",
		author: "bbbbb"
	},{
		title: "<<cccccc>>",
		author: "ccccc"
	}];
	$scope.pageClass = 'list';
}])