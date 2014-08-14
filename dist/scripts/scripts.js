"use strict";angular.module("pageDemoApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("pageDemoApp").controller("MainCtrl",["$scope","$http",function(a,b){a.getData=function(){a.key="",b.get("/data.json").success(function(b){a.data=b.Details,console.log(a.data)})}(),a.direction,a.previousSort="",a.activeTab=0,a.toggleRatingSort=function(){a.neverBeenRating||(a.ratingDirDown=!1),a.ordering="ratings.number",0==a.previousSort&&(a.direction=!a.direction),a.previousSort=0,a.neverBeenRating="Heya!",a.ratingDirDown=!a.ratingDirDown,a.nameDirDown=null},a.toggleNameSorting=function(){a.neverBeenName||(a.direction=!1,a.nameDirDown=!1),a.ordering="Name",1==a.previousSort&&(a.direction=!a.direction),a.previousSort=1,a.neverBeenName="beeh here",a.nameDirDown=!a.nameDirDown,a.ratingDirDown=null},a.getActiveTab=function(b){return b==a.activeTab},a.setActiveTab=function(b,d){b.preventDefault(),a.activeTab=d,1!=d||a.beenHere||(a.initializeMap(),c(a.data),a.beenHere="yeah")},a.initializeMap=function(){var b=document.getElementById("map"),c=new google.maps.LatLng(51.5362177,-.0829855),d={center:c,zoom:12};a.map=new google.maps.Map(b,d);new google.maps.Marker({position:c,map:a.map,title:"My Position"})};var c=function(b){for(var c=0;c<b.length;c++){var d=new google.maps.LatLng(b[c].Address.Latitude,b[c].Address.Longitude);new google.maps.Marker({position:d,map:a.map,animation:google.maps.Animation.DROP,title:b[c].Name})}}}]),angular.module("pageDemoApp").directive("rating",["$log","$timeout",function(){return{templateUrl:"/views/rating.html",restrict:"A",scope:{rating:"="},priority:100,controller:["$scope",function(a){a.rated=function(b){return b<parseFloat(a.rating)},a.half=function(b){return parseFloat(a.rating)-parseInt(a.rating)!=0&&b==parseInt(a.rating)}}]}}]);