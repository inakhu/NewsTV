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



    /*Video Uplaod*/

    $scope.openVideoLibrary = function() {
        var options = {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType:navigator.camera.MediaType.VIDEO
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
                mimeType: "video/mpeg"
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




app.controller('UploadCtrl', function($rootScope, $scope, $cordovaCamera, $cordovaFileTransfer,APP_SERVER) {
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





   /* function onLoad() {
        document.addEventListener("deviceready",onDeviceReady,false);
    }*/
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    function uploadFile(mediaFile,method) {
        var ft = new FileTransfer(),
            path = mediaFile,
            name = "video.3gp";
        var options = new FileUploadOptions();
        options.chunkedMode = false;
        options.fileKey = "file";
        options.fileName = name;
        options.mimeType = "video/mpeg";
        ft.upload(path,
            APP_SERVER.url+"iwitness/api/upload/"+APP_SERVER.apikey,
            function(r) {
                alert('Success ' + r.response);
            },
            function(error) {
                alert('Error ' + path + ': ' + error.code);
            },
            options);
    }
    function onPhotoURISuccess(imageURI) {
        uploadFile(imageURI,"library");
    }
    function getVideo(source, type) {
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality:
            50, destinationType: destinationType.FILE_URI, sourceType: source,
            mediaType: type});
    }
    function onFail(message) {
        alert('Error');
    }

    /*VIDEO UPLOAD*/
    /*$scope.upload = function() {
        var options = {
            fileKey: "avatar",
            fileName: "filename.mp4",
            chunkedMode: false,
            mimeType: "video/mp4"
        };
        var server = APP_SERVER.url+"iwitness/api/upload/"+APP_SERVER.apikey,

        $cordovaFileTransfer.upload("http://www.samplewebsite.com/upload", "file:/storage/....mp4", options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
        });
    }*/
    function uploadVideo() {
    document.addEventListener('deviceready', function () {
        var fileURL = sessionStorage.getItem('lastVideoUploaded');
            var alertPopup = $ionicPopup.alert({
                title: 'Video about to upload!',
                template: fileURL
            });
        var fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
        if(fileURL.substring(0, 4) == "http") {
            fileURL = encodeURI(fileURL);
        }
        sessionStorage.setItem('profilePhoto', fileName);

        function win(r) {
            var alertPopup = $ionicPopup.alert({
                title: 'Video Uploaded!',
                template: "Don't worry, you can always change it! Now save your profile!"
            });
            $state.go('app.iwitnessupdate');
        }

        function fail(error) {
            var alertPopup = $ionicPopup.alert({
                title: 'Errore!',
                template: JSON.stringify(error)
            });
        }

        var uri = encodeURI("http://yourpage.php");

        var params = {};
        params.comesFrom = "challenge";
        params.user = $scope.data.userCompleto;
        var options = new FileUploadOptions();
        options.fileKey = "fileToSave";
        options.fileName = fileName;
        options.chunkedMode = false;
        options.headers = {
            Connection: "close"
        };
        options.mimeType = "video/mpeg"; //retrieve the correct mime type
        options.params = params;


        var ft = new FileTransfer();
        ft.onprogress = function(progressEvent) {
            if (progressEvent.lengthComputable) {
              loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
            } else {
              loadingStatus.increment();
            }
        };
        ft.upload(fileURL, uri, win, fail, options);
    }, false);
}






//another
    function getNewVideo() {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(uploadPhoto, function(message) {
                alert('get picture failed');
            },{
                quality: 50,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
                mediaType:navigator.camera.MediaType.VIDEO
            }
        );

    }

    function uploadPhoto(imageURI) {
        var options = new FileUploadOptions();
        options.fileKey="file";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType = "video/mpeg";
        options.mimeType = "video/mp4";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://demo.makitweb.com/phonegap_camera/upload.php", win, fail, options);
    }

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
        alert(r.response);
    }

    /*function fail(error) {
        alert("An error has occurred: Code = " = error.code);
    }*/




});