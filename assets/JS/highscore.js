var scorePageScore = document.getElementById("getfinalscore");
var scorePageInitials = document.getElementById("getinitials");

var showScoresArray = [];
var highScoreKey = "highScoreKey";

showScoresArray = JSON.parse(localStorage.getItem(highScoreKey));

var showScoresList = document.getElementById("initial-scoreList");

function renderLastInitials() {
  var showScores = JSON.parse(localStorage.getItem(highScoreKey));

  console.log(showScores);

  showScores = showScores.sort(function (a, b) {
    return parseInt(b.score) - parseInt(a.score);
  });

  for (i = 0; i < showScores.length; i++) {
    var list = document.createElement("li");
    list.textContent =
      "\nInitials: \n" +
      showScores[i].initials +
      "\n Score: \n" +
      showScores[i].score;
    showScoresList.append(list);
  }
}

function clearLocalStorage() {
  var listItems = document.getElementById("initial-scoreList");

  localStorage.removeItem("highScoreKey");
  listItems.innerHTML = "";
}

console.log(showScoresArray);
//console.log(HighScoreDisplayArr);

renderLastInitials();
