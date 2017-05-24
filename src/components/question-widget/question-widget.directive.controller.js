(function (angular) {
    'use strict';

    angular.module('quiz.app.components')
        .controller('QuestionWidgetDirectiveController', QuestionWidgetDirectiveController);

    function QuestionWidgetDirectiveController() {
        var vm = this;

        vm.setIndex = function () {
            vm.questionObj.index = vm.index;
        }

    }
}(angular));
