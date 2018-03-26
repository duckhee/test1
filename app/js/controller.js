(function(angular) {
    'use strict';
    function radonCtrl(
        $rootScope, $scope, $timeout, $interval, tmhDynamicLocale, $translate){
            var _this = this;
            // Update the time
        function updateTime(){
            $scope.date = new Date();
        }
        _this.init = function() {
        	
            $interval(updateTime, 1000);
			updateTime();
    };
    angular.module('test1').controller('Ctrl', radonCtrl);
    

}}(window.angular));