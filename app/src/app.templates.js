angular.module('pageDemoApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/views/main.html',
    "<div class=\"header\"><div tabs></div><img class=\"logo\" src=\"\"><h3 class=\"text-muted\">Demo Page</h3></div><div id=\"first_tab\" data-ng-if=\"getActiveTab(0);\"><div class=\"row\"><div class=\"col-sm-12 filterbox\"><div class=\"form-group filters\"><ul><li><input type=\"text\" class=\"form-control\" id=\"nameFilter\" placeholder=\"Filter restaurants by name\" data-ng-model=\"namefil\"></li><li><p><a class=\"btn btn-primary\" ng-href=\"\" data-ng-click=\"toggleNameSorting()\">Sort By Name <i data-ng-if=\"nameDirDown != null && nameDirDown\" class=\"fa fa-chevron-down\"></i><i data-ng-if=\"nameDirDown != null && !nameDirDown\" class=\"fa fa-chevron-up\"></i></a></p></li><li><p><a class=\"btn btn-primary\" ng-href=\"\" data-ng-click=\"toggleRatingSort()\">Sort By Rating <i data-ng-if=\"ratingDirDown != null && ratingDirDown\" class=\"fa fa-chevron-down\"></i><i data-ng-if=\"ratingDirDown != null && !ratingDirDown\" class=\"fa fa-chevron-up\"></i></a></p></li></ul></div></div></div><div class=\"row\"><div class=\"row border-row\" data-ng-repeat=\"row in data | filter:{Name: namefil} | orderBy:ordering:direction\"><div class=\"col-sm-2 col-xs-2\"><img data-ng-src=\"{{row.LogoUrl}}\" class=\"img-rounded\"></div><div class=\"col-sm-5 col-xs-7\"><h4>{{row.Name}}</h4><div class=\"info\"><p>{{row.Address.FirstLine}}, {{row.Address.City}} {{row.Address.Postcode}}</p><div rating=\"row.ratings.value\" class=\"stars pull-left\"></div><p class=\"reviews pull-left\">(<span>{{row.ratings.number}}</span>)</p><p class=\"distance pull-left\">{{row.distance}}</p></div></div></div></div></div><div id=\"second_tab\" data-ng-show=\"getActiveTab(1);\"><div id=\"map\"></div></div><div class=\"footer\"><p>_Alz 2014</p></div>"
  );


  $templateCache.put('/views/rating.html',
    "<span data-ng-if=\"rating\"><i class=\"fa fa-star\" data-ng-class=\"{'rated': rated(0), 'fa-star-half-empty': half(0) }\"></i> <i class=\"fa fa-star\" data-ng-class=\"{'rated': rated(1), 'fa-star-half-empty': half(1) }\"></i> <i class=\"fa fa-star\" data-ng-class=\"{'rated': rated(2), 'fa-star-half-empty': half(2) }\"></i> <i class=\"fa fa-star\" data-ng-class=\"{'rated': rated(3), 'fa-star-half-empty': half(3) }\"></i> <i class=\"fa fa-star\" data-ng-class=\"{'rated': rated(4), 'fa-star-half-empty': half(4) }\"></i> <i class=\"fa fa-star\" data-ng-class=\"{'rated': rated(5), 'fa-star-half-empty': half(5) }\"></i></span>"
  );


  $templateCache.put('/views/tabs.html',
    "<ul id=\"tabs\" class=\"nav nav-pills pull-right\"><li class=\"active\" data-ng-click=\"setActiveTab($event, 0)\" data-ng-class=\"{ 'active': getActiveTab(0) }\"><a ng-href=\"\">List</a></li><li data-ng-click=\"setActiveTab($event, 1);\" data-ng-class=\"{ 'active': getActiveTab(1) }\"><a ng-href=\"\">Map</a></li></ul>"
  );

}]);
