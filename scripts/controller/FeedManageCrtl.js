angular.module('caco.MiniRSS')
    .controller('FeedManage', function ($scope, $location, UrlLookup, FeedLoad, FeedList) {
        $scope.feeds = FeedList.get();

        $scope.add = function () {
            FeedList.add($scope.feed.url, $scope.feed.title);
            $location.path('/manage');
        };

        $scope.lookup = function () {
            UrlLookup.fetch({q: $scope.lookup.url}, {}, function (data) {
                if (data.responseStatus != 200 || (data.responseData && data.responseData.url == '')) {
                    alert(data.responseDetails || 'Feed not found!');
                    return;
                }

                $scope.feed = data.responseData;
                FeedLoad.fetch({q: data.responseData.url}, {}, function (data) { //lookup title
                    if (data.responseStatus != 200) {
                        return;
                    }

                    $scope.feed.title = data.responseData.feed.title;
                });
            });
        };

        $scope.delete = function (id) {
            FeedList.delete(id);
        };

        $scope.$on('FeedList', function (event, data) {
            $scope.feeds = data;
        });
    });