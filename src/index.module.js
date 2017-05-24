(function (angular) {
    'use strict';

    angular.module('quiz.app', [
            'ngRoute',
            'quiz.app.services',
            'quiz.app.components'
        ])
        .config(configure);

    function configure($routeProvider) {
        console.log($routeProvider);
        // $routeProvider
    }
}(angular));

// (function (angular) {
//     'use strict';
//
//     /**
//     * @ngdoc overview
//     *
//     * @name MODULE_NAME
//     */
//     angular.module('MODULE_NAME', [])
//         .config(configure);
//
//     // @ngInject
//     function configure($stateProvider) {
//         $stateProvider
//             .state('MODULE_NAME', {
//                 url:'',
//                 ncyBreadcrumb: {
//                     label: ''
//                 },
//                 views: {
//                     'main-view@up.dataIngestion': {
//                         templateUrl: '',
//                         controller: '',
//                         controllerAs: '',
//                     }
//                 }
//             });
//     }
// }(angular));
