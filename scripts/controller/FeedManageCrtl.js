angular.module('caco.MiniRSS')
    .controller('FeedManage', function ($scope, $location, UrlLookup, FeedLoad, FeedList) {
        $scope.feeds = FeedList.get();

        $scope.add = function () {
            FeedList.add($scope.feed.url, $scope.feed.title);
            $location.path('/manage');
        };

        $scope.lookup = function () {
            UrlLookup.fetch({q: $scope.lookup.url}, {}, function (data) {
                if (data && data.responseStatus != 200) {
                    $scope.noFeedFound = true;
                    return;
                }

                $scope.feed = data.responseData;

                FeedLoad.fetch({q: data.responseData.url}, {}, function (data) {
                    if (data && data.responseStatus != 200) {
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