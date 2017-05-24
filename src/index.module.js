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
            .when('/', {
                templateUrl: 'features/home-view/home.html'
            })
            .when('/quiz', {
                templateUrl: 'features/question-view/question-view.html',
                controller: 'QuizQuestionViewController',
                controllerAs: 'questionVm'
                // resolve: {
                //     questions: 'resources/json-data/questions.json'
                // }
            })
            .when('/results', {
                templateUrl: 'features/results-view/results-view.html'
            });
    }
}(angular));
