angular.module('caco.MiniRSS')
    .filter('rssDate', function () {
        return function (value) {
            return new Date(value).toLocaleString();
        };
    });