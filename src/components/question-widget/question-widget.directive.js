(function (angular) {
    'use strict';

    angular.module('quiz.app.components')
        .directive('questionWidget', questionWidget);

    function questionWidget() {
        return {
            restrict: 'E',
            templateUrl: './components/question-widget/question-widget.template.html',
            controller: 'QuestionWidgetDirectiveController',
            controllerAs: 'widgetVm',
            scope: {},
            bindToController: {
                questionObj: '<'
            }
        }
    }
}(angular));
