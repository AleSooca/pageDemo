'use strict';

angular.module('pageDemoApp')
  .controller('MainCtrl', function ($scope, $http) {
    
  $scope.getData = function () {
        $scope.key = '';
        $http.get('/data.json')
        .success(function(response, status, headers, config){
            $scope.data = response.Details;

            console.log ($scope.data);
        });
    }();
    
  
  $scope.direction;
  $scope.previousSort = "";
  $scope.activeTab = 0;


  $scope.toggleRatingSort = function(){
    //neverBeen variable allows for the first click to show rating in descendant order (more useful as UX)
    if(!$scope.neverBeenRating){
      $scope.ratingDirDown = false;
    }
    $scope.ordering = 'ratings.number'
    if(0 == $scope.previousSort)
      $scope.direction = !$scope.direction;
    $scope.previousSort = 0;
    $scope.neverBeenRating = "Heya!"
    $scope.ratingDirDown = ! $scope.ratingDirDown;
    $scope.nameDirDown = null;
  }
  

  $scope.toggleNameSorting = function(){
    //neverBeen variable allows for the first click to show names in descendant order (more useful as UX)
    if(!$scope.neverBeenName){
      $scope.direction = false;
      $scope.nameDirDown = false;
    }
    $scope.ordering = 'Name'
    if(1 == $scope.previousSort)
      $scope.direction = !$scope.direction;
    $scope.previousSort = 1;
    $scope.neverBeenName = "beeh here"
    $scope.nameDirDown = ! $scope.nameDirDown;
    $scope.ratingDirDown = null;
  }

  $scope.getActiveTab = function(tabIndex) {
      return tabIndex == $scope.activeTab;
    }

    $scope.setActiveTab = function(e,tabIndex) {
      e.preventDefault();
      $scope.activeTab = tabIndex;
      if(tabIndex == 1 && !$scope.beenHere){
        $scope.initializeMap();
        setMarkers($scope.data);
        $scope.beenHere = "yeah";
      }
    };


    $scope.initializeMap = function() {
      var mapelem = document.getElementById("map");
      var latLong = new google.maps.LatLng(51.5362177, -0.0829855);
      var mapOptions = {
      center: latLong,
      zoom: 12
    };
      $scope.map = new google.maps.Map(mapelem, mapOptions);
      var marker = new google.maps.Marker({
            position: latLong,
            map: $scope.map,
            title:"My Position"
        });
    }

    var setMarkers = function(data){
      for(var i=0; i<data.length; i++){
        var myLatlng = new google.maps.LatLng(data[i].Address.Latitude,data[i].Address.Longitude);
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            title:data[i].Name
        });
      }
    }




  });