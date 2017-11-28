(function () {
    angular.module('quizModule')
        .controller('quizController', function ($scope) {

            $scope.currentQuestion = {};          
            $scope.totalNumberOfQuestions = 0;
            $scope.numberOfQuestionsAnswered = 0;
            $scope.questionIndex = -1;
            $scope.quizStarted = false;
            $scope.completionPecentage=0;
            $scope.quizCompleted =false;
            $scope.submitQuiz =submitQuiz;
            $scope.setCurrentQuestion = setCurrentQuestion;
            function reset(){
                $scope.currentQuestion = {};          
                $scope.totalNumberOfQuestions = 0;
                $scope.numberOfQuestionsAnswered = 0;
                $scope.questionIndex = -1;
                $scope.quizStarted = false;
                $scope.completionPecentage=0;
                $scope.quizCompleted =false;
            }
            function setCurrentQuestion() {
                updateQuizProgress();
                $scope.currentQuestion =  $scope.questionsList[ $scope.questionIndex];
            }
            function updateQuizProgress() {
                $scope.questionIndex++;             
                $scope.completionPecentage =($scope.numberOfQuestionsAnswered/$scope.totalNumberOfQuestions)*100;
            }

            $scope.questionsList = [
                {
                    questionId: 123,
                    questionDesc: "For which of the following disciplines is Nobel Prize awarded?",
                    options: [
                        {
                            optionId: "A",
                            optionDesc: "Physics and Chemistry"
                        },
                        {
                            optionId: "B",
                            optionDesc: "Physiology or Medicine"
                        },
                        {
                            optionId: "C",
                            optionDesc: "Literature, Peace and Economics"
                        },
                        {
                            optionId: "D",
                            optionDesc: "All of the above"
                        }]
                },
                {
                    questionId: 124,
                    questionDesc: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
                    options: [
                        {
                            optionId: "A",
                            optionDesc: "Asia"
                        },
                        {
                            optionId: "B",
                            optionDesc: "Africa"
                        },
                        {
                            optionId: "C",
                            optionDesc: "Europe"
                        },
                        {
                            optionId: "D",
                            optionDesc: "Australia"
                        }]
                },                
                {
                    questionId: 125,
                    questionDesc: "The world’s first hybrid electric tram powered by hydrogen fuel cells has started in which country?",
                    options: [
                        {
                            optionId: "A",
                            optionDesc: "Germany"
                        },
                        {
                            optionId: "B",
                            optionDesc: "China"
                        },
                        {
                            optionId: "C",
                            optionDesc: "France"
                        },
                        {
                            optionId: "D",
                            optionDesc: "Australia"
                        }]
                }];
            $scope.startQuiz = startQuiz;

            function startQuiz() {
                $scope.totalNumberOfQuestions =  $scope.questionsList.length;
                $scope.setCurrentQuestion();
                $scope.quizStarted = true;
            }
            $scope.submitAnswer = submitAnswer;
            function submitAnswer() {
                $scope.numberOfQuestionsAnswered++;
                if ($scope.numberOfQuestionsAnswered >= $scope.totalNumberOfQuestions) {
                    if ($scope.numberOfQuestionsAnswered == $scope.totalNumberOfQuestions){                      
                        $scope.quizCompleted = true;
                         updateQuizProgress();
                    }
                }else {
                    $scope.setCurrentQuestion();
                }
            }
            function submitQuiz(){
                  $scope.quizStarted = false;
                  reset();

            }
        });
})();

