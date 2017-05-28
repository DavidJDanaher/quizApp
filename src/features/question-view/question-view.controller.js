(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizQuestionViewController', QuizQuestionViewController);

    function QuizQuestionViewController(quizStateService) {
        var vm = this;
        var quiz = quizStateService.getQuiz();
        vm.questions = quiz.questionList;
        vm.index = 0;


        vm.$onInit = init;
        vm.goToQuestion = goToQuestion;
        vm.submit = submit;

        vm.$onInit();

        function init() {
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
