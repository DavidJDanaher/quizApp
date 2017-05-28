(function (angular) {
    'use strict';

    angular.module('quiz.app.components')
        .directive('questionWidget', questionWidget);

    function questionWidget() {

        // function link(scope, element, attribute) {
        //     scope.$watch(scope.widgetVm.index, function (val) {
        //         console.log(val);
        //     });
        //     console.log(scope.widgetVm.index);
        // }

        return {
            restrict: 'E',
            templateUrl: './components/question-widget/question-widget.template.html',
            controller: 'QuestionWidgetDirectiveController',
            controllerAs: 'widgetVm',
            scope: {},
            bindToController: {
                index: '=',
                questionObj: '<'
            }
            // link: link
        }
    }
}(angular));
