var scorePageScore = document.getElementById("getfinalscore");
var scorePageInitials = document.getElementById("getinitials");

var HighScoreDisplayArr = [];
var showScoresArray = [];
var highScoreKey = "highScoreKey";


showScoresArray = JSON.parse(localStorage.getItem(highScoreKey));













function renderLastInitials() {
  var unOrderList = document.createElement("ul");
  console.log(unOrderList);
  for (var i = 0; i < showScoresArray.length; i++) {

    var list = document.createElement("li");
    var span = document.createElement("span");
    span.textContent=showScoresArray[i].score;
    list.appendChild(span);
    var span = document.createElement("span");
    span.textContent=showScoresArray[i].initials;
    list.appendChild(span);


  }

  document.getElementById("scorelist").appendChild(list);
  



  
  console.log(showScoresArray);
  console.log(HighScoreDisplayArr);



}

renderLastInitials();





//document.getElementById("clearScore").addEventListener("click", clearScores)

//function clearScores(){



//}



