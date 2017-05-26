(function (angular) {
    'use strict';

    angular.module('quiz.app', [
            'ngRoute',
            'quiz.app.services',
            'quiz.app.components'
        ])
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'features/home-view/home.html',
                controller: 'QuizHomeController',
                controllerAs: 'homeVm'
            })
            .when('/quiz', {
                templateUrl: 'features/question-view/question-view.html',
                controller: 'QuizQuestionViewController',
                controllerAs: 'questionVm',
                resolve: {
                    test: 'quizStateService.getQuiz()'
                }
            })
            .when('/results', {
                templateUrl: 'features/results-view/results-view.html',
                controller: 'QuizResultsViewController',
                controllerAs: 'resultsVm',
                resolve: {
                    test: 'test'
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
}(angular));
