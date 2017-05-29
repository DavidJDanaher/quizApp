(function (angular) {
    'use strict';

    var introduction;

    angular.module('quiz.app')
        .controller('QuizHomeController', QuizHomeController);

    function QuizHomeController(quizDataService, quizStateService) {
        var vm = this;

        vm.setName = setName;
        vm.quizObj = {};

        vm.$onInit = init;
        vm.$onInit();

        function setName() {
            quizStateService.setUserName(vm.name);
        }

        function init() {
            quizDataService.getQuizData()
                .then(function(response) {
                    vm.quizObj = response;

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
