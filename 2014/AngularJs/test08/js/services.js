var bananaServices = angular.module('bananaServices', ['ngResource']);

bananaServices.factory('Banana', ['$resource',
	function  ($resource) {
		return $resource('json/:bananaId.json', {}, {
			query: {method:'GET', params:{bananaId:'bananas'}, isArray:true}
		})
	}
	])