(function() {
    'use strict';

    function Focus($rootScope) {
        var service = {};
        var currentFocus = "default";

        service.change = function(newFocus) {
            $rootScope.$broadcast('focus', newFocus, currentFocus)
            currentFocus = newFocus;
        }

        service.get = function() {
            return currentFocus;
        }

        return service;
    }

    angular.module('test1')
        .factory('Focus', Focus);

}(window.annyang));