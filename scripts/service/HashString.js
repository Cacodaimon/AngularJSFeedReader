//based on http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
angular.module('caco.MiniRSS')
    .service('HashString', function () {
        this.perform = function(str){
            var hash = 0;
            if (str.length == 0) {
                return hash;
            }

            for (var i = str.length - 1; i >= 0; i--) {
                char = str.charCodeAt(i);
                hash = ((hash<<5)-hash)+char;
                hash = hash & hash;
            }

            return hash;
        };
    });
