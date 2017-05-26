(function (angular) {
    'use strict';

    angular.module('quiz.app.services')
        .service('quizStateService', quizStateService);

    function quizStateService(questionService) {
        var self = this;

        var quiz = {
            questionList: getQuestionsArray(),
            numberOfCorrect: 0,
            outOf: 5
        };

        self.getQuiz = getQuiz;
        self.updateQuiz = updateQuiz;

        function getQuiz() {
            return quiz;
        }

        function updateQuiz(quizObj) {
            quiz = quizObj;
            quiz.numberOfCorrect = getScore();
        }

        function getScore() {
            var total = 0;

            quiz.questionList.forEach(function(question) {
                if (question.userAnswer !== null && question.correct === Number.parseInt(question.userAnswer)) {
                    total++;
                }
            });

            return total;
        }

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


    }
}(angular));
