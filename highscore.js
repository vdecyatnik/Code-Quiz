var scorePageScore = document.getElementById("getfinalscore");
var scorePageInitials = document.getElementById("getinitials");

var HighScoreDisplayArr = [];
var showScoresArray = [];
var highScoreKey = "highScoreKey";


showScoresArray = JSON.parse(localStorage.getItem(highScoreKey));







var showScoresList = document.getElementById("initial-scoreList");

function renderLastInitials(){

  var showScores = JSON.parse(localStorage.getItem(highScoreKey));

  console.log(showScores);

  for (i=0; i < showScores.length;i++){
    var list = document.createElement("li");
    list.textContent= "\nInitials: \n" + showScores[i].initials  +  "\n Score: \n" +  showScores[i].score;
    showScoresList.append(list);
  }






}









// function renderLastInitials() {
//   var unOrderList = document.createElement("ul");
//   console.log(unOrderList);
//   for (var i = 0; i < showScoresArray.length; i++) {

//     var list = document.createElement("li");
//     var span = document.createElement("span");
//     span.textContent=showScoresArray[i].score;
//     list.appendChild(span);
//     var span = document.createElement("span");
//     span.textContent=showScoresArray[i].initials;
//     list.appendChild(span);


//   }

//   document.getElementById("scorelist").appendChild(list);
  



  
  console.log(showScoresArray);
  console.log(HighScoreDisplayArr);





renderLastInitials();












//document.getElementById("clearScore").addEventListener("click", clearScores)

//function clearScores(){



//