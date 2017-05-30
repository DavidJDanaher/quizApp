(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizResultsViewController', QuizResultsViewController);

    function QuizResultsViewController(quizStateService) {
        var vm = this;

        vm.quiz;
        vm.$onInit = init;

        vm.$onInit();

        function init() {
            vm.quiz = quizStateService.getQuiz();

            if (vm.quiz === undefined) {
                location.assign('#!/home');
            }

            setTimeout(function () {
                renderElements();
            }, 200);
        }

        function renderElements() {
            vm.quiz.questionList.forEach(function(question, index) {
                var questionHtml = '<div class="question">' + question.question + '</div>';
                var questionId = '#question-' + index;
                var explanationHtml;
                var explanationId = '#explanation-' + index;

                if (question.userAnsweredCorrectly) {
                    explanationHtml = '<div class="question correct">' + question.explanation + '</div>';
                } else {
                    explanationHtml = '<div class="question incorrect">' + question.explanation + '</div>';
                }

                $(questionId).replaceWith($.parseHTML(questionHtml));
                $(explanationId).replaceWith($.parseHTML(explanationHtml));
            });
        }
    }
}(angular));
