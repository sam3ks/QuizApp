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
            $scope.nextQuestion=nextQuestion;   
            $scope.firstQuestion=false;  
            $scope.lastQuestion=false; 
            $scope.unAnsweredQuestionsList ={}; 

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
                setActiveQuestion();
            }
            function loadCurrentQuestion(index){
                $scope.questionIndex = index;
                setActiveQuestion();
                updatePreviousNextButtonStatus();
            }
            function updatePreviousNextButtonStatus(){
                if( $scope.questionIndex === 0){
                    $scope.firstQuestion=true;  
                    $scope.lastQuestion=false;                
                }else if( $scope.questionIndex === ($scope.questionsList.length-1)){
                    $scope.firstQuestion=false;
                    $scope.lastQuestion=true;
                }else{
                    $scope.firstQuestion=false;
                    $scope.lastQuestion=false;
                }                
            }
            function previousQuestion(){
                $scope.questionIndex =  $scope.questionIndex -1;               
                setActiveQuestion();
                updatePreviousNextButtonStatus();
            }
            function nextQuestion(){
                $scope.questionIndex =  $scope.questionIndex +1;
                setActiveQuestion();
                updatePreviousNextButtonStatus();
            }
            function setActiveQuestion(){
                $scope.currentQuestion = $scope.questionsList[$scope.questionIndex];
                $scope.currentQuestion.activeQuestion=true;
                for (var i = 0, len = $scope.questionsList.length; i < len; i++) {
                    if($scope.questionIndex != i){
                        $scope.questionsList[i].activeQuestion=false;;
                    }
                }
            }
            function setActiveUnAnsweredQuestion(){
                $scope.currentQuestion = $scope.questionsList[$scope.questionIndex];
                var tempIndex=$scope.questionIndex;
                while(true){
                    var tempQuestion = $scope.questionsList[tempIndex];
                    if(tempQuestion.answered){
                        tempIndex++;
                        if(tempIndex >= $scope.questionsList.length){
                            tempIndex=0;
                        }
                    }else{
                        tempQuestion.activeQuestion=true;
                        $scope.currentQuestion= tempQuestion;
                        $scope.questionIndex=tempIndex;
                        for (var i = 0, len = $scope.questionsList.length; i < len; i++) {
                            if($scope.questionIndex != i){
                                $scope.questionsList[i].activeQuestion=false;;
                            }
                        }
                        return;   
                    }
                }
            }          
            function updateUnAnsweredList(answeredQuestion){
                var indexOfQuestionToRemove = $scope.unAnsweredQuestionsList.map(function(item) { return item.questionId; }).indexOf(answeredQuestion.questionId);
                $scope.unAnsweredQuestionsList.splice(indexOfQuestionToRemove,1);
            }           
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
                    $scope.questionsList = response.data;                   
                    $scope.totalNumberOfQuestions = $scope.questionsList.length;
                    $scope.setCurrentQuestion();
                    $scope.unAnsweredQuestionsList = $scope.questionsList;
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
                $scope.firstQuestion=true;
                $scope.lastQuestion=false;

            }
            $scope.submitAnswer = submitAnswer;
            function submitAnswer(selectedAnswer) {
                $scope.numberOfQuestionsAnswered++;                
                $scope.currentQuestion.selectedAnswer=selectedAnswer; 
                $scope.currentQuestion.answered=true;                
                //updateUnAnsweredList($scope.currentQuestion);
                if ($scope.numberOfQuestionsAnswered >= $scope.totalNumberOfQuestions) {
                    if ($scope.numberOfQuestionsAnswered == $scope.totalNumberOfQuestions) {
                        $scope.quizCompleted = true;                        
                        updateQuizProgress();
                    }
                } else {
                    setActiveUnAnsweredQuestion();
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

