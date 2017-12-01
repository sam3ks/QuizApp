(function () {
    angular.module('quizModule')
        .controller('quizController',['$scope', '$http','endPoints', function ($scope,$http,endPoints) {

            $scope.currentQuestion = {};
            $scope.totalNumberOfQuestions = 0;
            $scope.numberOfQuestionsAnswered = 0;
            $scope.questionIndex = -1;
            $scope.quizStarted = false;
            $scope.completionPecentage = 0;
            $scope.quizCompleted = false;
            $scope.submitQuiz = submitQuiz;
            $scope.setCurrentQuestion = setCurrentQuestion;
            $scope.quizDisplayResults=false;
            $scope.showProgressBar=false;   
            $scope.loadCurrentQuestion=loadCurrentQuestion; 
            $scope.previousQuestion = previousQuestion;     
            function reset() {
                $scope.currentQuestion = {};
                $scope.totalNumberOfQuestions = 0;
                $scope.numberOfQuestionsAnswered = 0;
                $scope.questionIndex = -1;
                $scope.quizStarted = false;
                $scope.completionPecentage = 0;
                $scope.quizCompleted = false;
                $scope.showProgressBar=true;
            }
            function setCurrentQuestion() {
                updateQuizProgress();
                $scope.currentQuestion = $scope.questionsList[$scope.questionIndex];
                $scope.currentQuestion.activeQuestion=true;
                for (var i = 0, len = $scope.questionsList.length; i < len; i++) {
                    if($scope.questionIndex != i){
                        $scope.questionsList[i].activeQuestion=false;;
                    }
                }
            }
            function loadCurrentQuestion(index){
                $scope.questionIndex = index;
                $scope.currentQuestion = $scope.questionsList[$scope.questionIndex];
                $scope.currentQuestion.activeQuestion=true;
                for (var i = 0, len = $scope.questionsList.length; i < len; i++) {
                    if($scope.questionIndex != i){
                        $scope.questionsList[i].activeQuestion=false;;
                    }
                }
            }
            function previousQuestion(){
                $scope.questionIndex =  $scope.questionIndex -1;
                $scope.currentQuestion = $scope.questionsList[$scope.questionIndex];
                $scope.currentQuestion.activeQuestion=true;
                for (var i = 0, len = $scope.questionsList.length; i < len; i++) {
                    if($scope.questionIndex != i){
                        $scope.questionsList[i].activeQuestion=false;;
                    }
                }
            }
            previousQuestion
            function updateQuizProgress() {
                $scope.questionIndex++;
                $scope.completionPecentage = ($scope.numberOfQuestionsAnswered / $scope.totalNumberOfQuestions) * 100;
            }

            $scope.questionsList = [];
            $scope.fetchQuestions = fetchQuestions;
            $scope.startQuiz = startQuiz;
            function fetchQuestions() {
                var API_URL = endPoints.FETCH_QUESTIONS_LIST;
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
                //$scope.quizStarted = false;
                $scope.quizDisplayResults=true;
                $scope.showProgressBar=false;
                //reset();

            }
        }]);
})();

