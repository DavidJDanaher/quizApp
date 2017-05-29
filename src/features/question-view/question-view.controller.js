(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizQuestionViewController', QuizQuestionViewController);

    function QuizQuestionViewController(quizStateService) {
        var vm = this;
        var quiz;

        vm.questions;
        vm.index = 0;

        vm.$onInit = init;
        vm.goToQuestion = goToQuestion;
        vm.submit = submit;

        vm.$onInit();

        function init() {
            quiz = quizStateService.getQuiz();

            if (quiz === undefined) {
                location.assign('#!/home');
            }
            
            vm.questions = quiz.questionList;

            goToQuestion(0);
        }

        function goToQuestion(index) {
            vm.index = index;
            vm.quizInProgress = (index < vm.questions.length - 1);
        }

        function submit() {
            quizStateService.updateQuiz(quiz);
        }
    }
}(angular));
