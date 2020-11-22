
var questions = [
  {
    ques: "Which of the following is not JavaScript data types?",
    answer: "Float",
    answrArray: ["Undefined", "Number", "Boolean", "Float"]
  },

  {
    ques: "Which company developed JavaScript?",
    answer: "Netscape",
    answrArray: ["Netscape", 'Bell Labs', "Sun Microsystems", "IBM"]
  },

  {
    ques: "Inside which HTML element do we put Javascript?",
    answer: "<script>",
    answrArray: ["<script>", "<head>", "<style>", "<meta>"]
  },

  {
    ques: "What is the original name of JavaScript?",
    answer: "Mocha",
    answrArray: ["LiveScript", "Mocha", "EScript", "JavaScript"]
  },

  {

    ques: "JavaScipt is.....?",
    answer: "object based",
    answrArray: ["subjective", "objective", "evil", "object based"]
  },

  {
    ques: "Which one of these is not a logical operator?",
    answer: "&",
    answrArray: ["!", "&", "||", "&&"]
  },

  {
    ques: "Which of the following variable types does not exist in Javascript?",
    answer: "string",
    answrArray: ["boolean", "object", "double", "string"]
  }

]


//HTML Elements
var landingPage = document.getElementById("landingPage");
var scorePage = document.getElementById("scorePage");
var enterInitial = document.getElementById("enterInitial");
var quizPage = document.getElementById("quizPage");


var startButton = document.getElementById("startButton");
var playAgain = document.getElementById("playAgain");
var clearScore = document.getElementById("clearScore");


var displayScore = document.getElementById("displayScore");
var initials = document.getElementById("initials");

var timer = document.getElementById("timer");
var scoreEl = document.getElementById("score");

var questionDisplay = document.getElementById("questionDisplay");

var buttonList = document.getElementById("buttonList");

var abuttons = document.getElementById("abuttons");

var answersList = document.getElementById("answersList");


//Local Storage
var highScoreKey = "highScoreKey";
var highScoresArray = JSON.parse(localStorage.getItem(highScoreKey)) || [];

//Quiz Pages Array
var pageArray = [landingPage, quizPage, enterInitial];


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


function startGame() {
  numberCorrect = 0;
  secondsLeft = seconds;
  questionIndex = 0

  quizPage.classList.remove("hide");
  landingPage.classList.add("hide");




  nextQuestion();

  timer.textContent = (seconds);

  timeInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {

      endGame();

      secondsLeft = seconds;

    }


  }, 1000);



}


var questionIndex = 0;


function nextQuestion() {

  if (questionIndex >= questions.length) {
    quizPage.classList.add('hide');
    displayScore.textContent = score;

    enterInitial.style.display = "block";
    localStorage.setItem("score", score);
    return;
  }

  questionDisplay.textContent = (questions[questionIndex].ques);
  console.log(questionDisplay);
  scoreEl.textContent = score;

  for (var i = 0; i < 4; i++) {
    let answer = questions[questionIndex].answrArray[i];
    document.getElementById("a" + (i + 1)).textContent = answer;

  }
  questionIndex++;
}


var score = 0;
console.log(score);

answersList.addEventListener("click", function (event) {


  event.preventDefault();
  if (event.target.matches("button")) {

    let button = event.target;
    let selectedAnswer = button.textContent;
    if (selectedAnswer === questions[questionIndex - 1].answer) {
      score++;

      console.log(score);

    }
    else {
      secondsLeft -= 10;

    }
    nextQuestion();

  }

})




//submit initials span
var saveInitials = document.getElementById("initials");
//display final score
var lastScore = document.getElementById("displayScore");




//submit initials button
var submitInitials = document.getElementById("initialSaver");
submitInitials.addEventListener("click", function (e) {


  initials = document.getElementById("initials").value;
  console.log("initialshere");
  console.log(initials);
  highScoresArray.push({ score, initials });
  console.log(highScoresArray);
  highScoreString = JSON.stringify(highScoresArray);

  localStorage.setItem(highScoreKey, highScoreString);

});


//LS
localStorage.setItem('highScore', JSON.stringify(highScoresArray))
const data = JSON.parse(localStorage.getItem('items'))

function endGame() {

  clearInterval(timeInterval);

  //If timer runs out then hide quiz page and open enter initial page
  var seconds = 120;
  if (secondsLeft === 0) {
    enterInitial.style.display = "block"
    quizPage.style.display = "none";
  }




} 
