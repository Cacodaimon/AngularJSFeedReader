angular.module('caco.MiniRSS')
    .controller('ItemCrtl', function ($scope, $routeParams, FeedList, FeedLoad, HashString) {
        var feed = FeedList.getById($routeParams.id)

        FeedLoad.fetch({q: feed.url, num: 50}, {}, function (data) {
            $scope.feed = data.responseData.feed;
            $scope.id = $routeParams.id;
            var entries = data.responseData.feed.entries;

            for (var i = entries.length - 1; i >= 0; i--) {
                if (HashString.perform(entries[i].title) == $routeParams.hashKey) {
                    $scope.item = entries[i];
                }
            }
        });
    });