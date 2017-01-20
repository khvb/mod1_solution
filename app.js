(function () {
    'use strict';

    angular.module('TestApp', [])

        .controller('TestController', TestController);
        function TestController($scope) {
            $scope.lunchlist = "";
            $scope.outmenu = "";
            $scope.nodata = "";
            $scope.resolution="";
            $scope.displayMenu = function () {
                $scope.outmenu = "";
                $scope.nodata = "";
                $scope.resolution="";
                var items=[];
                var lunch=$scope.lunchlist;
                items=lunch.split(",");
                $scope.outmenu = items.length;
                if ($scope.lunchlist == "")
                    $scope.nodata = "Please enter data first"
                else
                    if (items.length>3)
                    $scope.resolution="Too much!"
                    else
                    $scope.resolution="Enjoy!";
            };
        }
})();
