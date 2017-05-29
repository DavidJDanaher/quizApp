(function (angular) {
    'use strict';

    angular.module('quiz.app.services')
        .service('quizStateService', quizStateService);

    function quizStateService(questionService, $q) {
        var self = this;

        var quiz;

        self.$onInit = init;
        self.getQuiz = getQuiz;
        self.updateQuiz = updateQuiz;
        self.saveQuiz = saveQuiz;

        self.$onInit = init;

        self.$onInit();

        function init() {
            quiz = new Quiz();
        }

        function Quiz() {
            this.questionList = null;
            this.numberAnsweredCorrectly = 0;
            this.totalNumberOfQuestions= 6;
        }

        function getQuiz() {
            return getQuestionsArray()
                .then(function(response) {
                    quiz.questionList = response;

                    return quiz;
                });
        }

        function updateQuiz(quizObj) {
            quiz.numberOfCorrect = 0;
            quiz.questionList = quizObj.questionList;

            quiz.questionList.forEach(function(question) {
                if (question.userAnswer !== null && question.correct === Number.parseInt(question.userAnswer)) {
                    quiz.numberOfCorrect++;
                    question.userAnsweredCorrectly = true;
                }
            });
        }

        function getQuestionsArray() {
            var rawQuestions;
            var decoratedQuestions = [];

            return questionService.getAllQuestions()
                .then(function (rawQuestions) {
                    return addUserInteractionProperties(rawQuestions);
                });
        }

        function addUserInteractionProperties(rawQuestions) {
            var questions = [];

            rawQuestions.forEach(function(question, index) {
                question.userAnswer = null;
                question.index = index;
                question.userAnsweredCorrectly = false;

                questions.push(question);
            });

            return questions;
        }

        function saveQuiz() {

        }

    }
}(angular));
