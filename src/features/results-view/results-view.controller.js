(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizResultsViewController', QuizResultsViewController);

    function QuizResultsViewController(quizStateService) {
        var vm = this;
        var quiz = quizStateService.getQuiz();

        console.log(quiz);
    }
}(angular));
