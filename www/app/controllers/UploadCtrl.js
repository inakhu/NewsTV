//app.controller('UploadCtrl', function($scope,$state, $stateParams , HTSServices) {

/*app.controller('UploadCtrl', function ($scope, $cordovaCamera, $ionicLoading, $localstorage) {
    $scope.data = { "ImageURI" :  "Select Image" };
    $scope.takePicture = function() {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URL,
            sourceType: Camera.PictureSourceType.CAMERA
        };
        $cordovaCamera.getPicture(options).then(
            function(imageData) {
                $scope.picData = imageData;
                $scope.ftLoad = true;
                $localstorage.set('fotoUp', imageData);
                $ionicLoading.show({template: 'Loading...', duration:500});
            },
            function(err){
                $ionicLoading.show({template: 'Error uploading...', duration:500});
            })
    };

    $scope.selectPicture = function() {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        };

        $cordovaCamera.getPicture(options).then(
            function(imageURI) {
                window.resolveLocalFileSystemURI(imageURI, function(fileEntry) {
                    $scope.picData = fileEntry.nativeURL;
                    $scope.ftLoad = true;
                    var image = document.getElementById('myImage');
                    image.src = fileEntry.nativeURL;
                });
                $ionicLoading.show({template: 'Loading...', duration:500});
            },
            function(err){
                $ionicLoading.show({template: 'Error uploading...', duration:500});
            })
    };

    $scope.uploadPicture = function() {
        $ionicLoading.show({template: 'uploading...'});
        var fileURL = $scope.picData;
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        options.chunkedMode = true;

        var params = {};
        params.value1 = "someparams";
        params.value2 = "otherparams";

        options.params = params;

        var ft = new FileTransfer();
        ft.upload(fileURL, encodeURI("http://www.yourdomain.com/upload.php"), viewUploadedPictures, function(error) {$ionicLoading.show({template: 'Errore di connessione...'});
            $ionicLoading.hide();}, options);
    };

    var viewUploadedPictures = function() {
        $ionicLoading.show({template: 'loading...'});
        server = "http://www.yourdomain.com/upload.php";
        if (server) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange=function(){
                if(xmlhttp.readyState === 4){
                    if (xmlhttp.status === 200) {
                        document.getElementById('server_images').innerHTML = xmlhttp.responseText;
                    }
                    else { $ionicLoading.show({template: 'Error uploading...', duration: 1000});
                        return false;
                    }
                }
            };
            xmlhttp.open("GET", server , true);
            xmlhttp.send()}
        $ionicLoading.hide();
    };

    $scope.viewPictures = function() {
        $ionicLoading.show({template: 'loading pictures...'});
        server = "http://www.yourdomain.com/upload.php";
        if (server) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange=function(){
                if(xmlhttp.readyState === 4){
                    if (xmlhttp.status === 200) {
                        document.getElementById('server_images').innerHTML = xmlhttp.responseText;
                    }
                    else { $ionicLoading.show({template: 'Error loading...', duration: 1000});
                        return false;
                    }
                }
            };
            xmlhttp.open("GET", server , true);
            xmlhttp.send()}
        $ionicLoading.hide();
    }
});*/

//$cordovaDevice, $cordovaFile, $ionicPlatform, $cordovaEmailComposer, $ionicActionSheet, ImageService, FileService)
app.controller('UploadCtrl', function($scope,$state, $stateParams , HTSServices,$cordovaCamera,$cordovaFile,APP_SERVER,$cordovaActionSheet,$cordovaDevice,$cordovaFileTransfer) {
    /*file/image upload*/
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
        // Destination URL localStorage.getItem("myusername")
        var url = AppBase+"upload/image/"+localStorage.getItem("myusername");
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
        $cordovaFileTransfer.upload(url, targetPath, options).success(function(result) {
            $scope.showAlert('Success', 'Image upload finished.');
        });
    };

    $scope.showAlert = function(title, msg) {
        var alertPopup = $ionicPopup.alert({
            title: title,
            template: msg
        });
    };



    /*UPLOAD STYLE TWO TESSY*/
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

            var server = AppBase+"upload/image",
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
