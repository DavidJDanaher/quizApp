(function (angular) {
    'use strict';

    angular.module('quiz.app.services')
        .service('quizStateService', quizStateService);

    function quizStateService(questionService) {
        var self = this;

        var quiz = new Quiz();

        self.getQuiz = getQuiz;
        self.updateQuiz = updateQuiz;

        function Quiz() {
            this.questionList = getQuestionsArray();
            this.numberAnsweredCorrectly = 0;
            this.totalNumberOfQuestions= 6;
        }

        function getQuiz() {
            return quiz;
        }

        function updateQuiz(quizObj) {
            quiz.questionList = quizObj.questionList;
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

            rawQuestions.forEach(function(question, index) {
                question.userAnswer = null;
                question.index = index;

                decoratedQuestions.push(question);
            });

            return decoratedQuestions;
        }


    }
}(angular));
