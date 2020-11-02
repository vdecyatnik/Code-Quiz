var questions = [
    {
    ques: "Where is Valentina from? ",
    answer: "0",
    answrArray: ["Seattle", "Chicago", "Denver", "New York"]

  },
    {
    ques: "What's Valentina's favorite animal?",
    answer: "1",
    answrArray: ["Cat", "Dog", "Turtle", "Fish"],
  },
     {
    ques: "What is Valentina's favorite color?",
    answer: "2",
    answrArray: ["Purple", "Red", "Black", "Yellow"]
  },
     {
    ques: "What is Valentina's favorite food?",
    answer: "3",
    answrArray: ["Carrots", "Cheese", "Steak", "Pizza"]
  }

]





//timer
var countdown;
var seconds;
var questionIndex;


document.getElementById("startButton").addEventListener("click", startGame)
function startGame() {

seconds = 120;
document.getElementById("timer").textContent = (seconds); countdown = setInterval(function () {
startButton.classList.add("hide")

seconds--;
document.getElementById("timer").textContent = seconds;
if (seconds < 0) endGame();

}, 900);
}








for (var i = 0; i< questions.length; i++) {
  console.log(questions[i]);


}








//document.getElementById("questionL").addEventListener("click", nextQuestion)
//function nextQuestion(){

  //questionIndex=0;



//}






var questionList= document.getElementById("questionL");
var questionContent=document.getElementById("button");

document.getElementById("questionL").textContent=questions[0].ques;
document.getElementById("button").textContent=questions[i].answrArray[0];





var button = document.createElement("button");


console.log(button);
var button2 =document.createElement("button");
console.log(button2);
var button3 = document.createElement("button");
console.log(button3);
var button4= document.createElement("button");
console.log(button4);



















//document.getElementByID("buttons").addEventListener("click", buttons)

//function getQuestion(event) {
//if user clicks on the textContent that matches correct answer in array then add a point and move to next question.
//if (event.target.matches("button")) {
//var button = event.target.index
//if (index==="true") {
//questionIndex++;
//}
//else{
//seconds--;
//}




//}




//}








function endGame() {
  clearInterval(countdown);


}




































