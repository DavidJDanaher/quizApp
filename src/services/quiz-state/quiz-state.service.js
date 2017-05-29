(function (angular) {
    'use strict';

    angular.module('quiz.app.services')
        .service('quizStateService', quizStateService);

    function quizStateService(questionService, $q) {
        var self = this;

        self.quiz;

        self.$onInit = init;
        self.getQuiz = getQuiz;
        self.updateQuiz = updateQuiz;
        self.saveQuiz = saveQuiz;
        self.setUserName = setUserName;
        self.$onInit = init;

        self.$onInit();

        function init() {
            getQuestionsArray()
                .then(function(response) {
                    self.quiz = new Quiz();

                    self.quiz.questionList = response;
                });
        }

        function Quiz() {
            this.questionList = null;
            this.numberAnsweredCorrectly = 0;
            this.totalNumberOfQuestions= 6;
        }

        function getQuiz() {
            return self.quiz;
        }

        function setUserName(name) {
            self.quiz.userName = name;
        }

        function updateQuiz(quizObj) {
            self.quiz.numberOfCorrect = 0;
            self.quiz.questionList = quizObj.questionList;

            self.quiz.questionList.forEach(function(question) {
                if (question.userAnswer !== null && question.correct === Number.parseInt(question.userAnswer)) {
                    self.quiz.numberAnsweredCorrectly++;
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
