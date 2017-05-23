(function (angular) {
    'use strict';

    angular.module('quiz.app.components')
        .directive('questionWidget', questionWidget);

    function questionWidget() {
        return {
            restrict: 'E',
            templateUrl: './components/question-widget/question-widget.template.html',
            controller: 'QuizQuestionViewController',
            controllerAs: 'questionVm',
            scope: {},
            bindToController: {
                index: '=',
                questionJson: '='
            }
        }
    }
}(angular));
