(function (angular) {
    'use strict';

    angular.module('quiz.app.services')
        .service('questionService',questionService);

    function questionService() {
        var self = this;

        self.getAllQuestions = getAllQuestions;

        function getAllQuestions() {
            return angular.fromJson(jsonPayload);
        }

        var jsonPayload = [
            {
                "type":"TRUE_FALSE",
                "level":1,
                "question":"In <em>X-Men</em>, Wolverine is able to turn into a ball of fire.",
                "answers":["Fact","Fiction"],
                "correct":2,
                "explanation":"Wolverine has sharp claws and is very resilient."
            },{
                "type":"TRUE_FALSE",
                "level":3,
                "question":"Superman�s high-school girlfriend was named Lana Lang.",
                "answers":["Fact","Fiction"],
                "correct":1
                ,"explanation":"Clark Kent was in love with Lana Lang. Then he went to Metropolis and fell in love with Lois Lane, the ace newspaper reporter."
            },{
                "type":"TRUE_FALSE",
                "level":1,
                "question":"Venom was an enemy of Spider-Man�s.",
                "answers":["Fact","Fiction"],
                "correct":1,
                "explanation":"Venom was one of many enemies Spider-Man faced."
            },{
                "type":"TRUE_FALSE",
                "level":3,
                "question":"In the comics, Superman can be killed only by a silver bullet.",
                "answers":["Fact","Fiction"],
                "correct":2,
                "explanation":"Superman cannot be harmed by anything dangerous to ordinary humans. He can be weakened, however, by exposure to green kryptonite."
            },{
                "type":"TRUE_FALSE",
                "level":3,
                "question":"Kryptonite is a real element.",
                "answers":["Fact","Fiction"],
                "correct":2,
                "explanation":"Kryptonite is an invention of the creators of the <em>Superman</em> cartoon strip. It first appeared in the 1940s."
            },{
                "type":"TRUE_FALSE",
                "level":1,
                "question":"Batman is a superhero but has no superpowers.",
                "answers":["Fact","Fiction"],
                "correct":1,
                "explanation":"Although called a superhero, the American comic book character Batman has no superhuman powers. Under his cowl, he is merely a rich man who has devoted his life to fighting crime."
            }];
    }
}(angular));
