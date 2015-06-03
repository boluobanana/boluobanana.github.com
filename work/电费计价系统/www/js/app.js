// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('welcome', {
            url: '/welcome',
            views: {
                'main': {
                    templateUrl: 'welcome.html',
                    controller: 'welcomeCtrl'
                }
            }
        })
  // setup an abstract state for the tabs directive
    
    .state('list', {
          url: "/list",
          // abstract: true,
          views: {
            'main' : {
                templateUrl: "templates/select.html",
                controller: 'selectCtrl'
            }
          }
          
      })
    
    .state('meter', {
      url: "/meter",
      
      views: {
        'main' : {
            templateUrl: "templates/meter/meter.html",
            controller: "meterCtrl"
        }
      }
      
  })
    .state('querys', {
      url: "/querys",
      
      views: {
        'main' : {
            templateUrl: "templates/querys/querys.html",
            controller: "querysCtrl"
        }
      }
  })
    .state('arrearge', {
      url: "/arrearge",
      
      views: {
        'main' : {
            templateUrl: "templates/querys/querysList/arrearge.html",
            controller: "arreargeCtrl"
        }
      }
  })
    .state('uncheckedList', {
      url: "/uncheckedList",
      
      views: {
        'main' : {
            templateUrl: "templates/querys/querysList/uncheckedList.html",
            controller: "uncheckedListCtrl"
        }
      }
  })
    .state('filerById', {
      url: "/filerById",
      views: {
        'main' : {
            templateUrl: "templates/querys/querysList/filerById.html",
            controller: "filerByIdCtrl"
        }
      }
  })
    .state('querysDetail', {
      url: "/:eleId/querysDetail",
      views: {
        'main' : {
            templateUrl: "templates/querys/querysList/querysDetail.html",
            controller: 'querysDetailCtrl'
        }
      }
  })
    .state('debtDetail', {
      url: "/:eleWd/debtDetail",
      views: {
        'main' : {
            templateUrl: "templates/querys/querysList/debtDetail.html",
            controller: 'debtDetailCtrl'
            
        }
      }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('welcome');

});
