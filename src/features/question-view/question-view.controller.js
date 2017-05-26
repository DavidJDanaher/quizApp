(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizQuestionViewController', QuizQuestionViewController);

    function QuizQuestionViewController(quizStateService) {
        var vm = this;
        var quiz = quizStateService.getQuiz();
        vm.questions = quiz.questionList;



        // function appendQuestions(question) {
        //     $('#question'+ question.index).append($.parseHTML(question.question))
        // }
        //
        // vm.questions.forEach(function(question){
        //     appendQuestions(question);
        // });

        vm.submit = function() {
            quizStateService.updateQuiz(quiz);
        }
    }
}(angular));
