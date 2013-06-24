angular.module('caco.MiniRSS')
    .filter('hash', function (HashString) {
        return function (value) {
            return HashString.perform(value);
        };
    });