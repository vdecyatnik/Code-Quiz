
var questions = [
  {
    ques: "Where is Valentina from?",
    answer: "Seattle",
    answrArray: ["Seattle", "New York", "Denver", "Texas"]
  },

  {
    ques: "What's Valentina's favorite animal?",
    answer: "Dog",
    answrArray: ["Dog", 'Cat', "Turtle", "Cow"]
  },

  {
    ques: "What's Valentina's favorite color?",
    answer: "Black",
    answrArray: ["Red", "Black", "Yellow", "Green"]
  },

  {
    ques: "What's Valentina's favorite food?",
    answer: "Pizza",
    answrArray: ["Cheese", "Milk", "Pizza", "Cookies"]
  }

]


//HTML Elements
var landingPage = document.getElementById("landingPage");
var scorePage = document.getElementById("scorePage");
var enterInitial = document.getElementById("enterInitial");
var quizPage = document.getElementById("quizPage");


var startButton = document.getElementById("startButton");
var goBack = document.getElementById("go-back");
var clearScore = document.getElementById("clearscore");


var displayScore = document.getElementById("displayscore");
var initials = document.getElementById("initials");


let highScore = [];

// Variables
var timer = document.getElementById("timer");
var score = document.getElementById("score");

var questionDisplay = document.getElementById("questionDisplay");

var buttonList = document.getElementById("buttonList");

var abuttons = document.getElementById("abuttons");

//var saveInitials = localStorage.getItem("initials");

//var saveScore = localStorage.getItem("displayscore");

var answersList = document.getElementById("answersList");



var pageArray = [landingPage, quizPage, enterInitial, scorePage];



//Function to hide pages
function hide() {
  for (let i = 0; i < pageArray.length; i++) {
    console.log(pageArray[i]);
    if (!pageArray[i].classList.contains('hide')) {
      pageArray[i].classList.add('hide');
    }
  }
}


var seconds = 120;

timer.textContent = "Time: " + seconds;
console.log(seconds);



//Add event listener to start button
document.getElementById("startButton").addEventListener("click", startGame)

let quiz = false;

var timeInterval

function startGame() {
  numberCorrect = 0;
  //numberIncorrect = 0;
  secondsLeft = seconds;
  quiz = true;
  questionIndex = 0
  //score = 0;
  //hide();
  quizPage.classList.remove("hide");
  landingPage.classList.add("hide");
  

  
  nextQuestion();
  enterInitial.classList.remove("hide");
  timer.textContent = (seconds);

  timeInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft < 0 ) {
      endGame();
      secondsLeft = seconds;

    }

      
  }, 1000);
}






var questionIndex = 0;

score.textContent= score;



function nextQuestion() {

  if (questionIndex >= questions.length) {
   quizPage.classList.add('hide');
   renderLastInitials();
    
    
    return;
  }

  document.getElementById("questionDisplay");
  questionDisplay.textContent = (questions[questionIndex].ques);
  console.log(questionDisplay);


  for (var i = 0; i < 4; i++) {
    let answer = questions[questionIndex].answrArray[i];
    document.getElementById("a" + (i + 1)).textContent = answer;

  }
  questionIndex++;
}




var score = 0;
document.getElementById("score").textContent = "Score:" + score;
console.log(score);


answersList.addEventListener("click", function (event) {


  event.preventDefault();
  if (event.target.matches("button")) {

   
    let button = event.target;
    let selectedAnswer = button.textContent;
    if (selectedAnswer == questions[questionIndex - 1].answer) {
      score++;
      document.getElementById('score').textContent = score;
    }
    else {
      secondsLeft -= 10;

    }
    nextQuestion();
  }




})



function renderLastInitials() {

  //get last initials from local storage
  var lastInitials =localStorage.getItem("initials");
  console.log(lastInitials);
  lastInitials.textContent = initials;
  // get last score from local storage
  var lastScore = (localStorage.getItem("score"));
  console.log(lastScore);
  displayScore.textContent=  score;
 




}



//submit initials button
var saveInitials = document.getElementById("initials");



var displayScore = document.getElementById("displayscore");

var finalScoreSpan = document.querySelector("#displayscore")






initialSaver.addEventListener("click", function (event) {
  //event.preventDefault();
  //set Initials  to Local Storage
  localStorage.setItem("initials", initials.value);
  console.log(initials.value);
  //set final score to local storage
  localStorage.setItem("displayscore",   displayscore.value);
  console.log(initials);
  console.log(displayscore);


  renderLastInitials();
 
  


});

//function showHighScore(){
//highScore.push(score);


function endGame() {
  clearInterval(timeInterval);


  //add code to display initals page

} 
