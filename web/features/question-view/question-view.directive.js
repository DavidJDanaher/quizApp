(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .directive('quizQuestionView', quizQuestionView);

    function quizQuestionView() {
        return {
            restrict: 'E',
            templateUrl: '/web/features/question-view/question-view.html',
            controller: 'QuizQuestionViewController',
            controllerAs: 'questionVm',
            scope: {}
        }
    }
}(angular));
