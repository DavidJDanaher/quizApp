(function (angular) {
    'use strict';

    angular.module('quiz.app.components')
        .controller('QuestionWidgetDirectiveController', QuestionWidgetDirectiveController);

    function QuestionWidgetDirectiveController() {
        var vm = this;

        vm.message = 'Question widget controller';
        
    }
}(angular));
