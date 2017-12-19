/*Ionic Starter App*/
angular.module('HezecomApp',[
      'ionic',
      'ngCordova',
      'jett.ionic.filter.bar',
      'ionic-modal-select',
      'ion-datetime-picker',
      'ion-floating-menu',
      'yaru22.angular-timeago',
      'ngStorage',
      'htsApp.controllers',
      'htsApp.services',
      'htsApp.constants'
    ])

.run(function($ionicPlatform , $rootScope, $location, HTSServices,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: 'No Internet Connection',
          content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
        })
            .then(function(result) {
              if(!result) {
                ionic.Platform.exitApp();
              }
            });
      }
    }
  });

  $rootScope.authStatus = false;
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    $rootScope.authStatus = toState.authStatus;
    if ($rootScope.authStatus===true && HTSServices.UsersAuth()===null) {
      $location.path('/dashboard');
    }
  });
})

.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    cache: false,
    templateUrl: 'app/templates/others/menu.html',
    controller: 'CategoryMenuCtrl'
  })
  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/news/headlines.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: false
  })
  .state('app.newsdetails', {
    url: '/news/:id',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/news/news-details.html',
		controller: 'NewsDetails'
      }
     },
	 authStatus: false
  })
  .state('app.category', {
    url: '/news/category/:id',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/news/category.html',
		controller: 'CategoriesCtrl'
      }
     },
	 authStatus: false
  })
  .state('app.iwitness', {
    url: '/iwitness',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/iwitness/View.html',
        controller: 'iWitnessCtrl'
      }
    },
    authStatus: false
  })
  .state('app.iwitnessDetails', {
    url: '/iwitness/:id',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/iwitness/Details.html',
        controller: 'iWitnessDetails'
      }
    },
    authStatus: false
  })
  .state('app.iwitnessadd', {
    url: '/iwitness/add/new',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/iwitness/Add.html',
        controller: 'iWitnessCtrl'
      }
    },
    authStatus: false
  })
  .state('app.events', {
    url: '/events',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/events/View.html',
        controller: 'EventsCtrl'
      }
    },
    authStatus: false
  })
  .state('app.eventsDetails', {
    url: '/events/:id',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/events/Details.html',
        controller: 'EventsDetails'
      }
    },
    authStatus: false
  })
  .state('app.stream', {
    url: '/stream',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/others/stream.html',
        controller: 'DefaultCtrl'
      }
    },
    authStatus: false
  })
  .state('app.aboutus', {
    url: '/aboutus',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/others/aboutus.html',
        controller: 'DefaultCtrl'
      }
    },
    authStatus: false
  })
  .state('app.contactus', {
    url: '/contactus',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/others/contactus.html',
        controller: 'DefaultCtrl'
      }
    },
    authStatus: false
  })
 /* .state('app.UserUpload', {
    url: '/profile/upload/:id',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/users/Upload.html',
        controller: 'UeserDetails'
      }
    },
    authStatus: true
  })*/

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'app/templates/others/settings.html',
            controller: 'SettingsCtrl'
          }
        },
        authStatus: false
      });
  $urlRouterProvider.otherwise('/app/dashboard');
});
