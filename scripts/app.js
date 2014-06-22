angular.module('caco.MiniRSS', ['caco.MiniRSS.FeedList', 'caco.MiniRSS.googleapis.feed', 'ngRoute', 'ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',                      {templateUrl: 'views/list.html',        controller: 'ItemsCtrl'})
            .when('/feed/:id',              {templateUrl: 'views/list.html',        controller: 'ItemsCtrl'})
            .when('/feed/:id/item/:hashKey',{templateUrl: 'views/item.html',        controller: 'ItemCrtl'})
            .when('/manage',                {templateUrl: 'views/manage/list.html', controller: 'FeedManage'})
            .when('/manage/add',            {templateUrl: 'views/manage/add.html',  controller: 'FeedManage'})
    });
