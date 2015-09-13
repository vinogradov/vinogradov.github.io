angular
    .module('vinogradov.github.io', ['ui.router', 'ngMaterial'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/awesome-css-demos");

        $stateProvider
          .state('blog', {
            url: "/",
            templateUrl: "app/blog.html",
            controller: 'BlogController'
          })
          .state('blog.post', {
            url: "^/posts/:postName",
            templateUrl: "app/post.html",
            controller: 'BlogPostsController'
          })
          .state('awesome-css-demos', {
            url: "/awesome-css-demos",
            templateUrl: "app/awesome-css-demos.html",
            controller: function($rootScope) {
              $rootScope.selectedTabIndex = 1;
            } 
          });
    }])

    .controller('BlogController', function($rootScope, $scope) {
        $rootScope.selectedTabIndex = 0;
            console.log('BlogController');
    })

    .controller('BlogPostsController', function($rootScope, $scope) {
        $rootScope.selectedTabIndex = 0;
        console.log('BlogPostsController');
    });