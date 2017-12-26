
app.controller('iWitnessCtrl', function($scope,$localStorage, $stateParams , HTSServices,APP_SERVER,$cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $ionicPopup, $cordovaActionSheet,$ionicLoading,$state) {

    //view
    $scope.surl=APP_SERVER.url+'templates/uploads/main/';
    $scope.HTSappLoader = function() {
        $ionicLoading.show({template: 'Loading...'});
        HTSServices.HezecomGetOne('iwitness/api/'+APP_SERVER.apikey).success(function (data) {
            $scope.news = data.data;
            $scope.totalItems = data.count;
            $scope.featured = data.featured;
            $scope.advert = data.Advert;
            $ionicLoading.hide();
        });
    };
    $scope.PullRefresher= function()
    {
        $scope.HTSappLoader();
        $scope.$broadcast('scroll.refreshComplete');
    };
    $scope.HTSappLoader();

    /*add*/
    $scope.data = {};
    $scope.data.post_type='iwitness';
    $scope.data.post_status='Draft';
    /*$scope.data.post_image='video.jpg';*/
    $scope.data.post_image=$localStorage.filename;

    $scope.iWitnessForm = function () {
        HTSServices.HezecomPostNewInfo('iwitness/api/add/'+APP_SERVER.apikey, $scope.data)
            .success(function (data) {
                if (data.errors) {
                    $ionicPopup.alert({
                        title: 'Information',
                        template: data.errors
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Success Message:',
                        template: data.message
                    });
                    $state.go('app.iwitness');
                }
            });
    };
});

app.controller('iWitnessDetails', function($scope, $stateParams , HTSServices,VideoControl,$ionicLoading,$cordovaSocialSharing,StorageService,APP_SERVER) {
    var id = $stateParams.id;
    $scope.row = {};
    $scope.mainurl=APP_SERVER.url;
    $scope.surl=APP_SERVER.url+'templates/uploads/main/';
    /*Increase/Decrease Font*/
    $scope.size = 16;
    $scope.fontSize = "font-size-"+$scope.size;

    $scope.DetailsLoader = function(id) {
        $ionicLoading.show({template: 'Loading...'});
        HTSServices.HezecomGetOne('/iwitness/api/' + id+'/'+APP_SERVER.apikey).success(function (data) {
            $scope.row = data.data;
            $scope.vlink = data.vlink;
            $scope.advert = data.Advert;
        });
        $ionicLoading.hide();
    };
    $scope.DetailsLoader(id);

    $scope.PullRefresher= function(id)
    {
        $scope.DetailsLoader(id);
        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.$on(VideoControl.events.onPause, function (event) {
        var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
        iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        player = new YT.Player('player-controls', {
            playerVars: { 'showinfo': 0, 'rel': 0, 'controls': 1 },
            width: '100%',
            videoId: "rkUgoaco1Ac",
            events: {
                'onStateChange': onYouTubePlayerStateChange
            }
        });
        w.addEventListener('pause', triggerPause, false);
        function triggerPause () {
            player.stopVideo();
        }
    });

});
