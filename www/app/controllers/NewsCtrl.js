
app.controller('DefaultCtrl', function() {

});

app.controller('CategoryMenuCtrl', function($scope ,$state, HTSServices,APP_SERVER) {
    $scope.HTSappLoader = function() {
        HTSServices.HezecomGetOne('news/category/menu/api/'+APP_SERVER.apikey).success(function (data) {
            $scope.categories = data.BlogCategory;
        });
    };
    $scope.HTSappLoader();
});

app.controller('DashCtrl', function($scope ,$state, HTSServices, $ionicFilterBar,$ionicLoading,$ionicPopup,APP_SERVER) {

    $scope.surl=APP_SERVER.url+'templates/uploads/main/';

    $scope.HTSappLoader = function() {
        $ionicLoading.show({template: 'Loading...'});
        HTSServices.HezecomGetOne('news/api/'+APP_SERVER.apikey).success(function (data) {
            $scope.news = data.data;
            $scope.totalItems = data.count;
            $scope.featured = data.featured;
            $ionicLoading.hide();
        });

    };
    $scope.HTSappLoader();

    $scope.PullRefresher= function()
    {
        $scope.HTSappLoader();
        $scope.$broadcast('scroll.refreshComplete');
    };
});

app.controller('NewsDetails', function($scope, $stateParams , HTSServices,$ionicLoading,$cordovaSocialSharing,StorageService,APP_SERVER) {
    var id = $stateParams.id;
    $scope.row = {};
    $scope.mainurl=APP_SERVER.url;
    $scope.surl=APP_SERVER.url+'templates/uploads/main/';
    /*Increase/Decrease Font*/
    $scope.size = 15;
    $scope.fontSize = "font-size-"+$scope.size;
    $scope.DetailsLoader = function(id) {
        $ionicLoading.show({template: 'Loading...'});
        HTSServices.HezecomGetOne('/news/api/news/' + id+'/'+APP_SERVER.apikey).success(function (data) {
            $scope.row = data.data;
        });
        $ionicLoading.hide();
    };
    $scope.DetailsLoader(id);

    /*$scope.storeBookmark = function(id) {
        $ionicLoading.show({template: 'Loading...'});
        HTSServices.HezecomGetOne('/blog/api/news/' + id).success(function (data) {
            $scope.row = data.data;
            if(typeof(Storage) != "undefined") {
                $localStorage.bookmark =  $scope.row;
                console.log($localStorage.bookmark);
                alert("Data stored!");
            } else {
                alert("LocalStorage not supported!");
            }
        });
        $ionicLoading.hide();
    };*/
    $scope.storeBookmark = function (id) {
        $ionicLoading.show({template: 'Loading...'});
        HTSServices.HezecomGetOne('/blog/api/news/' + id+'/'+APP_SERVER.apikey).success(function (data) {
            $scope.row = data.data;
            if(typeof(Storage) != "undefined") {
                StorageService.add($scope.row);
                //console.log($localStorage.bookmark);
                alert("Data stored!");
            } else {
                alert("LocalStorage not supported!");
            }
            $ionicLoading.hide();
        });
    };

    $scope.PullRefresher= function(id)
    {
        $scope.DetailsLoader(id);
        $scope.$broadcast('scroll.refreshComplete');
    };

    /*$scope.share = function(){
     window.plugins.socialsharing.share(null,null,null,$scope.row.link);
     };*/

    /*$scope.shareAnywhere = function() {
     $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
     };*/

});


app.controller('CategoriesCtrl', function($scope ,$state, HTSServices, $ionicFilterBar,$ionicLoading,$ionicPopup,APP_SERVER,$stateParams) {
    var id = $stateParams.id;

    $scope.category = id;
    $scope.surl=APP_SERVER.url+'templates/uploads/main/';
    $scope.HTSappLoader = function(id) {
        $ionicLoading.show({template: 'Loading...'});
        HTSServices.HezecomGetOne('news/category/api/'+id+'/'+APP_SERVER.apikey).success(function (data) {
            $scope.news = data.data;
            $scope.totalItems = data.count;
            $scope.featured = data.featured;
            $scope.CategoryLabel = data.CategoryLabel;
            $ionicLoading.hide();
        });
    };
    $scope.PullRefresher= function(id)
    {
        $scope.HTSappLoader(id);
        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.HTSappLoader(id);
});

