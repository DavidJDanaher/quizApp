(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('index', index);

    function index() {
        var vm = this;

        vm.message = "hello";
    }
}(angular));
