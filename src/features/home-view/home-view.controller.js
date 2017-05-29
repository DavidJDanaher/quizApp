(function (angular) {
    'use strict';

    var introduction;

    angular.module('quiz.app')
        .controller('QuizHomeController', QuizHomeController);

    function QuizHomeController($http) {
        var vm = this;

        vm.setName = setName;
        vm.quizObj = {};
        vm.userName = null;

        getQuizJson();

        function setName(name) {
            vm.userName = name;
            vm.showSumbitButton = true;
        }

        function getQuizJson() {
            $http.get('resources/json-data/quiz.json')
                .then(function(response) {
                    vm.quizObj = response.data;

                    renderElements(vm.quizObj);
                });
        }

        function renderElements(quiz) {
            var $quizTitle = $('#quiz-title');
            var $quizDescription = $('#quiz-description');
            var $quizIntroduction = $('#quiz-introduction');

            $quizTitle.append($.parseHTML(quiz.title));
            $quizIntroduction.append($.parseHTML(quiz.introduction));
            $quizDescription.append($.parseHTML(quiz.description));
        }
    }
}(angular));
