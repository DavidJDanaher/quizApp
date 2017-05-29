(function (angular) {
    'use strict';

    angular.module('quiz.app.services')
        .service('quizDataService',quizDataService);

    function quizDataService($http) {
        var self = this;

        self.getAllQuestions = getAllQuestions;
        self.getQuizData = getQuizData;

        function getAllQuestions() {
            return $http.get('resources/json-data/questions.json')
                .then(function(response) {
                    return angular.fromJson(response.data);
                })
                .catch(function() {
                    window.alert('Unable to load questions.')
                });
        }

        function getQuizData() {
            return $http.get('resources/json-data/quiz.json')
                .then(function(response) {
                    return angular.fromJson(response.data);
                })
                .catch(function() {
                    window.aler('Unable to load quiz data');
                });
        }
    }
}(angular));
