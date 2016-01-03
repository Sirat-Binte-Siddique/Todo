angular.module('todo', ['ionic'])

.controller('TodoCtrl', function ($scope) {
    $scope.tasks = [
        {
            title: 'Collect coins'
        },
        {
            title: 'Eat mushrooms'
        },
        {
            title: 'Get high enough to grab the flag'
        },
        {
            title: 'Find the Princess'
        }
  ];
});






// Ionic Starter App
angular.module('starter', ['ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})