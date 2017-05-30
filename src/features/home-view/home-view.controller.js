(function (angular) {
    'use strict';

    var introduction;

    angular.module('quiz.app')
        .controller('QuizHomeController', QuizHomeController);

    function QuizHomeController(quizDataService, quizStateService) {
        var vm = this;

        vm.quizObj = {};
        vm.imageData;

        vm.setName = setName;
        vm.$onInit = init;
        vm.$onInit();

        function init() {
            quizDataService.getQuizData()
                .then(function(response) {
                    vm.quizObj = response;
                    vm.imageData = vm.quizObj.image;

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

        function setName() {
            quizStateService.setUserName(vm.name);
        }
    }
}(angular));
