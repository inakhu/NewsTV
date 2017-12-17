/**
 * Created by Hezecom on 5/12/2017.
 */
app.controller('SettingsCtrl', function($scope,$state,$ionicPopup,HTSServices) {

    $scope.data = {};
    $scope.HTSLSettingsUpdate = function () {
        HTSServices.HezecomPostNewInfo('settings/update', $scope.data)
            .success(function (data) {
                if (data.errors) {
                    $ionicPopup.alert({
                        title: 'Error Message:',
                        template: 'An error have occured'
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Success Message:',
                        template: 'Settings updated successfully'
                    });
                    $scope.HTSappLoader();
                }
            });
    };


    //$scope.pushNotification = { checked: true };
    $scope.fontsize = ['12','14', '15', '16', '18','20','22','24'];
    $scope.data = { app_enotify: 'On' };
    $scope.data = { user_sign: 'On' };
    $scope.data = { doctor_sign: 'Off' };
});