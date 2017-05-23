(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizQuestionViewController', QuizQuestionViewController);

    function QuizQuestionViewController(questionService) {
        var vm = this;

        vm.message = 'quiz questions';

        vm.questions = questionService.getAllQuestions();
    }
}(angular));
