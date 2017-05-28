(function (angular) {
    'use strict';

    angular.module('quiz.app.components')
        .controller('QuestionWidgetDirectiveController', QuestionWidgetDirectiveController);

    function QuestionWidgetDirectiveController() {
        var vm = this;

        vm.$onChanges = function(changes) {
            var htmlString = '<span id="question">' + changes.questionObj.currentValue.question + '</span>';

            $('#question').replaceWith($.parseHTML(htmlString));
        }
    }
}(angular));
