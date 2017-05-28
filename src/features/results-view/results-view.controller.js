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
        }
    }
}(angular));
