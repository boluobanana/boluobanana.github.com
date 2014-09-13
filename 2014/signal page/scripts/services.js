
angular.module('scotchApp.services', [])

/**
 * A simple example service that returns some data.
 */

// /*Cookie*/
// scotchApp.factory('Cookie', function($cookieStore) {
//   //获取token
//   var token = '';
//   if($cookieStore.get('tokenState')) {
//     token = $cookieStore.get('tokenState');
//   }
// })

// /*租户TenantAds*/
// scotchApp.factory('TenantAds', function($http, $q, $cookieStore) {
//   //获取token
//   var token = '';
//   if($cookieStore.get('tokenState')) {
//     token = $cookieStore.get('tokenState');
//   }

//   return {
//     get: function() {
//       var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

//       //获取token
//       var token = '';
//       if($cookieStore.get('tokenState')) {
//         token = $cookieStore.get('tokenState');
//       }

//       $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CTenantAds/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
//           success(function(data, status, headers, config) {
//               deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
//           }).
//           error(function(data, status, headers, config) {
//               deferred.reject(data);   // 声明执行失败，即服务器返回错误
//           });
//       return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
//     }
//   }
// })

/*优惠Promotions*/
scotchApp.factory('Promotions', function($http, $q, $cookieStore) {
  //获取token
  var token = '';
  if($cookieStore.get('tokenState')) {
    token = $cookieStore.get('tokenState');
  }

  return {
    getAll: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CPromotions/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getOne: function(promotionId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CPromotions/73213f9c-e695-420d-9398-2cc9fc2b8492/' + promotionId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    rankByPlace: function(promotionType) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/Rank/73213f9c-e695-420d-9398-2cc9fc2b8492?Type='+ promotionType +'&latitude=41.8&longitude=123.38&TypeTag=', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    rankByTime: function(promotionType, promotionTypeTag) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/Rank/73213f9c-e695-420d-9398-2cc9fc2b8492?Type='+ promotionType +'&TypeTag=' + promotionTypeTag, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getSubsidys: function(promotionId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CSubsidy/73213f9c-e695-420d-9398-2cc9fc2b8492?PromotionsId='+ promotionId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    postFavorites: function(data, siteId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'POST', url: apiUrl + 'api/Upp100/BaseApp/Common/CMyFavorites/73213f9c-e695-420d-9398-2cc9fc2b8492',
        data:{
          "type":"promotion",
          "content":data,
          "source":siteId

        },
        headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    }
  }
})

/*商家Shops*/
scotchApp.factory('Shops', function($http, $q, $cookieStore) {
  //获取token
  var token = '';
  if($cookieStore.get('tokenState')) {
    token = $cookieStore.get('tokenState');
  }

  return {
    getAll: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CShop/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getOne: function(shopId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CShop/73213f9c-e695-420d-9398-2cc9fc2b8492/' + shopId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    rankByPlace: function(shopType) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/Rank/73213f9c-e695-420d-9398-2cc9fc2b8492?Type='+ shopType +'&latitude=41.8&longitude=123.38&TypeTag=', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    rankByTime: function(shopType, shopTypeTag) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/Rank/73213f9c-e695-420d-9398-2cc9fc2b8492?Type='+ shopType +'&TypeTag=' + shopTypeTag, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getByPromotion: function(siteId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CPromotions/73213f9c-e695-420d-9398-2cc9fc2b8492?SiteId='+ siteId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getByActivity: function(siteId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CActivity/73213f9c-e695-420d-9398-2cc9fc2b8492?SiteId='+ siteId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getExt: function(siteId, shopType) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CShopExt/73213f9c-e695-420d-9398-2cc9fc2b8492?sid='+ siteId +'&Type='+ shopType, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    extApp: function(shopId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CExtApp/73213f9c-e695-420d-9398-2cc9fc2b8492/'+ shopId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    postFavorites: function(data, siteId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'POST', url: apiUrl + 'api/Upp100/BaseApp/Common/CMyFavorites/73213f9c-e695-420d-9398-2cc9fc2b8492',
        data:{
          "type":"shop",
          "content":data,
          "source":siteId

        },
        headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    }
  }
})

/*活动Activities*/
scotchApp.factory('Activities', function($http, $q, $cookieStore, Cookie) {
  //获取token
  var token = '';
  if($cookieStore.get('tokenState')) {
    token = $cookieStore.get('tokenState');
  }

  return {
    getAll: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CActivity/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getOne: function(activityId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CActivity/73213f9c-e695-420d-9398-2cc9fc2b8492/' + activityId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    rankByPlace: function(activityType) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/Rank/73213f9c-e695-420d-9398-2cc9fc2b8492?Type='+ activityType +'&latitude=41.8&longitude=123.38&TypeTag=', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    rankByTime: function(activityType, activityTypeTag) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/Rank/73213f9c-e695-420d-9398-2cc9fc2b8492?Type='+ activityType +'&TypeTag=' + activityTypeTag, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getExt: function(activityId, activityType) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CActivityExt/73213f9c-e695-420d-9398-2cc9fc2b8492?aid='+ activityId +'&Type='+ activityType, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    search: function(activityType, activityKey) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CSearch/73213f9c-e695-420d-9398-2cc9fc2b8492?Type=' + activityType + '&Key=' + activityKey, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    postFavorites: function(data, siteId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'POST', url: apiUrl + 'api/Upp100/BaseApp/Common/CMyFavorites/73213f9c-e695-420d-9398-2cc9fc2b8492',
        data:{
          "type":"activity",
          "content":data,
          "source":siteId

        },
        headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    }
  }
  
})

/*个人中心Member*/
scotchApp.factory('Member', function($http, $q, $cookieStore) {
  var userInformation;

  return {
    getInfo : function () {
      return userInformation;
    },
    updateInfo: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CMy/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
            // data.extData = eval("(" + data.extData + ")");
            // userInformation = data;
              userInformation = eval(data);
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    changeInfo: function(data) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'PUT', url: apiUrl + 'api/Upp100/BaseApp/Common/CMy/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token },data:data}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getSubsidys: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CMySubsidy/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getOrders: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CMyOrder/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getOrder: function(orderId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CMyOrder/73213f9c-e695-420d-9398-2cc9fc2b8492/' + orderId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getVoucher: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CVoucher/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getMemberCard: function() {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CMemberCard/73213f9c-e695-420d-9398-2cc9fc2b8492', headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getMemberCardDetail: function(membercardId) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CMemberCard/73213f9c-e695-420d-9398-2cc9fc2b8492/' + membercardId, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getFavorite: function(type) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/BaseApp/Common/CMyFavorites/73213f9c-e695-420d-9398-2cc9fc2b8492?type=' + type, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    },
    getPrize: function(prizeType) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

      //获取token
      var token = '';
      if($cookieStore.get('tokenState')) {
        token = $cookieStore.get('tokenState');
      }

      $http({method: 'GET', url: apiUrl + 'api/Upp100/TouPiao/Common/CUserPrize/73213f9c-e695-420d-9398-2cc9fc2b8492?prizeType=' + prizeType, headers: { "Authorization": "Bearer " + token }}, {cache: true}).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    }
  }
})
// /*搜索*/
scotchApp.factory('Search',function ($http,$q, $cookieStore,$state) {

  //获取token
  var token = '';
  if ($cookieStore.get('tokenState')) {
    token = $cookieStore.get('tokenState');
  }

  return {

    Search : function (type, key) {
      var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
      $http({
                method: 'GET',
                url: apiUrl + 'api/Upp100/BaseApp/Common/CSearch/73213f9c-e695-420d-9398-2cc9fc2b8492?Type=' + type + '&Key=' + key,
                headers: { "Authorization": "Bearer " + token }
          }).
          success(function(data, status, headers, config) {
              deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
          }).
          error(function(data, status, headers, config) {
              deferred.reject(data);   // 声明执行失败，即服务器返回错误
          });
      return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
    }
  }
})
;