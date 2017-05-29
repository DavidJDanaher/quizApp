(function (angular) {
    'use strict';

    angular.module('quiz.app')
        .controller('QuizResultsViewController', QuizResultsViewController);

    function QuizResultsViewController(quizStateService) {
        var vm = this;
        vm.quiz;

        vm.$onInit = init;

        vm.$onInit();

        function init() {
            vm.quiz = quizStateService.getQuiz();


            vm.quiz = {
                numberAnsweredCorrectly: 3,
                questionList: [{
                    correct:2,
                    answers:['Yep', 'Nope'],
                    explanation:"Wolverine has sharp claws and is very resilient.",
                    index:0,level:1,question:"In <em>X-Men</em>, Wolverine is able to turn into a ball of fire.",
                    type:"TRUE_FALSE",userAnswer:"1",
userAnsweredCorrectly:false
                },
                {
                    correct:2,
                    answers:['Yep', 'Nope'],
                    explanation:"Wolverine has sharp claws and is very resilient.",
                    index:1,level:1,question:"In <em>X-Men</em>, Wolverine is able to turn into a ball of fire.",
                    type:"TRUE_FALSE",userAnswer:"1",
    userAnsweredCorrectly:false
},
                {
                    correct:2,
                    answers:['Yep', 'Nope'],
                    explanation:"Wolverine has sharp claws and is very resilient.",
                    index:2,level:1,question:"In <em>X-Men</em>, Wolverine is able to turn into a ball of fire.",
                    type:"TRUE_FALSE",userAnswer:"1",
    userAnsweredCorrectly:true
                }],
                totalNumberOfQuestions: 6,
                userName: 'Dae'
            };
            // if (vm.quiz === undefined) {
            //     location.assign('#!/home');
            // }

            setTimeout(function () {
                renderElements();
            }, 200);
        }

        function renderElements() {
            vm.quiz.questionList.forEach(function(question, index) {
                var questionHtml = '<div class="question">' + question.question + '</div>';
                var questionId = '#question-' + index;
                var explanationHtml;
                var explanationId = '#explanation-' + index;

                if (question.userAnsweredCorrectly) {
                    explanationHtml = '<div class="question correct">' + question.explanation + '</div>';
                } else {
                    explanationHtml = '<div class="question incorrect">' + question.explanation + '</div>';
                }

                $(questionId).replaceWith($.parseHTML(questionHtml));
                $(explanationId).replaceWith($.parseHTML(explanationHtml));
            });
        }


    }
}(angular));
