(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizQuestionViewController', QuizQuestionViewController);

    function QuizQuestionViewController(questionService, $route) {
        var vm = this;

        vm.questions = getQuestionsArray();

        function getQuestionsArray() {
            var rawQuestions = questionService.getAllQuestions();
            var decoratedQuestions = [];

            rawQuestions.forEach(function(question) {
                question.userAnswer = null;
                question.index = -1;

                decoratedQuestions.push(question);
            });

            return decoratedQuestions;
        }


        vm.showVm = function() {
            console.log(vm);
        }
    }
}(angular));
