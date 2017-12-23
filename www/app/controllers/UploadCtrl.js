app.controller('UploaderCtrl', function ($scope,$state,$localStorage, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $ionicPopup, $cordovaActionSheet,APP_SERVER) {
    $scope.image = null;
    var AppBase = APP_SERVER.url;
    // Present Actionsheet for switch beteen Camera / Library
    $scope.loadImage = function() {
        var options = {
            title: 'Select Image Source',
            buttonLabels: ['Load from Library', 'Use Camera'],
            addCancelButtonWithLabel: 'Cancel',
            androidEnableCancelButton : true
        };
        $cordovaActionSheet.show(options).then(function(btnIndex) {
            var type = null;
            if (btnIndex === 1) {
                type = Camera.PictureSourceType.PHOTOLIBRARY;
            } else if (btnIndex === 2) {
                type = Camera.PictureSourceType.CAMERA;
            }
            if (type !== null) {
                $scope.selectPicture(type);
            }
        });
    };

    // Take image with the camera or from library and store it inside the app folder
    // Image will not be saved to users Library.
    $scope.selectPicture = function(sourceType) {
        var options = {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imagePath) {
                // Grab the file name of the photo in the temporary directory
                var currentName = imagePath.replace(/^.*[\\\/]/, '');

                //Create a new name for the photo
                var d = new Date(),
                    n = d.getTime(),
                    newFileName =  n + ".jpg";

                // If you are trying to load image from the gallery on Android we need special treatment!
                if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
                    window.FilePath.resolveNativePath(imagePath, function(entry) {
                            window.resolveLocalFileSystemURL(entry, success, fail);
                            function fail(e) {
                                console.error('Error: ', e);
                            }

                            function success(fileEntry) {
                                var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
                                // Only copy because of access rights
                                $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
                                    $scope.image = newFileName;
                                }, function(error){
                                    $scope.showAlert('Error', error.exception);
                                });
                            }
                        }
                    );
                } else {
                    var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                    // Move the file to permanent storage
                    $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
                        $scope.image = newFileName;
                    }, function(error){
                        $scope.showAlert('Error', error.exception);
                    });
                }
            },
            function(err){
                // Not always an error, maybe cancel was pressed...
            })
    };

    // Returns the local path inside the app for an image
    $scope.pathForImage = function(image) {
        if (image === null) {
            return '';
        } else {
            return cordova.file.dataDirectory + image;
        }
    };

    $scope.uploadImage = function() {
        // Destination URL
        // var url = "http://localhost:8888/upload.php";
        var url = AppBase+"iwitness/api/upload/"+APP_SERVER.apikey;
        //var url = "https://devdactic.com/downloads/upload.php";

        // File for Upload
        var targetPath = $scope.pathForImage($scope.image);

        // File name only
        var filename = $scope.image;

        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params : {'fileName': filename}
        };

        $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
            $localStorage.filename =  filename;
            console.log($localStorage.filename);
            $state.go('app.iwitnessupdate');
            $scope.showAlert('Success', 'Image upload finished.');
        });
    };

    $scope.showAlert = function(title, msg) {
        var alertPopup = $ionicPopup.alert({
            title: title,
            template: msg
        });
    };

});




app.controller('UploadCtrl', function($scope,$state,$ionicPopup, $stateParams , HTSServices,$cordovaCamera,$cordovaFile,APP_SERVER,$cordovaActionSheet,$cordovaDevice,$cordovaFileTransfer) {
    /*file/image upload*/
    $scope.openPhotoLibrary = function() {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {

            //console.log(imageData);
            //console.log(options);
            var image = document.getElementById('tempImage');
            image.src = imageData;

            var server = APP_SERVER.url+"iwitness/api/upload/"+APP_SERVER.apikey,
                filePath = imageData;

            var date = new Date();

            var options = {
                fileKey: "file",
                fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
                chunkedMode: false,
                mimeType: "image/jpg"
            };

            $cordovaFileTransfer.upload(server, filePath, options).then(function(result) {
                console.log("SUCCESS: " + JSON.stringify(result.response));
                console.log('Result_' + result.response[0] + '_ending');
                alert("success");
                alert(JSON.stringify(result.response));

            }, function(err) {
                console.log("ERROR: " + JSON.stringify(err));
                //alert(JSON.stringify(err));
            }, function (progress) {
                // constant progress updates
            });


        }, function(err) {
            // error
            console.log(err);
        });
    };


});