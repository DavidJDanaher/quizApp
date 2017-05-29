(function (angular) {
    'use strict';

    angular.module('quiz.app.services')
        .service('questionService',questionService);

    function questionService($http) {
        var self = this;

        self.getAllQuestions = getAllQuestions;

        function getAllQuestions() {
            return $http.get('resources/json-data/questions.json')
                .then(function(response) {
                    return angular.fromJson(response.data);
                })
                .catch(function() {
                    window.alert('Unable to load questions.')
                });
        }

// saveQuizToJson('');
//
//         function saveQuizToJson(quiz) {
//             $http.post('resources/json-data/results.json', '{David: test}')
//                 .then(function(res) {
//                     console.log(res);
//                 });
//         }
    }
}(angular));
