(function () {
    angular.module('quizModule')
        .controller('quizController', function ($scope, $http) {

            $scope.currentQuestion = {};
            $scope.totalNumberOfQuestions = 0;
            $scope.numberOfQuestionsAnswered = 0;
            $scope.questionIndex = -1;
            $scope.quizStarted = false;
            $scope.completionPecentage = 0;
            $scope.quizCompleted = false;
            $scope.submitQuiz = submitQuiz;
            $scope.setCurrentQuestion = setCurrentQuestion;
            function reset() {
                $scope.currentQuestion = {};
                $scope.totalNumberOfQuestions = 0;
                $scope.numberOfQuestionsAnswered = 0;
                $scope.questionIndex = -1;
                $scope.quizStarted = false;
                $scope.completionPecentage = 0;
                $scope.quizCompleted = false;
            }
            function setCurrentQuestion() {
                updateQuizProgress();
                $scope.currentQuestion = $scope.questionsList[$scope.questionIndex];
            }
            function updateQuizProgress() {
                $scope.questionIndex++;
                $scope.completionPecentage = ($scope.numberOfQuestionsAnswered / $scope.totalNumberOfQuestions) * 100;
            }

            $scope.questionsList = [];
            $scope.fetchQuestions = fetchQuestions;
            $scope.startQuiz = startQuiz;
            function fetchQuestions() {
                var API_URL = 'http://localhost:3000/questions';
                $http.get(API_URL).then(function (response) {
                    console.log(response);
                    $scope.questionsList = response.data;
                    console.log($scope.questionsList);
                    $scope.totalNumberOfQuestions = $scope.questionsList.length;
                    $scope.setCurrentQuestion();
                    $scope.quizStarted = true;
                },
                    function (error) {
                        console.log("Error");
                    }
                );
            }
            function startQuiz() {
                reset();
                $scope.fetchQuestions();

            }
            $scope.submitAnswer = submitAnswer;
            function submitAnswer() {
                $scope.numberOfQuestionsAnswered++;
                if ($scope.numberOfQuestionsAnswered >= $scope.totalNumberOfQuestions) {
                    if ($scope.numberOfQuestionsAnswered == $scope.totalNumberOfQuestions) {
                        $scope.quizCompleted = true;
                        updateQuizProgress();
                    }
                } else {
                    $scope.setCurrentQuestion();
                }
            }
            function submitQuiz() {
                $scope.quizStarted = false;
                reset();

            }
        });
})();

