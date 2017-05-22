(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizQuestionViewController', QuizQuestionViewController);

    function QuizQuestionViewController() {
        var vm = this;

        vm.message = 'quiz questions';
    }
}(angular));
