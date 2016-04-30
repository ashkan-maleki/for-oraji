angular.module('app', ['ngRoute', 'controllers']).
    config(function($routeProvider) {
        $routeProvider.when('/view', { templateUrl: 'partials/view.html', controller: 'ViewController' });
        $routeProvider.when('/add', { templateUrl: 'partials/add.html', controller: 'AddController' });
        $routeProvider.when('/edit/:id', { templateUrl: 'partials/edit.html', controller: 'EditController'});
        $routeProvider.otherwise({ redirectTo: '/view' });
    });

angular.module('controllers', ['services', 'directives']);
angular.module('services', []);
angular.module('directives', []);