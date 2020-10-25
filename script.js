function showHighScores() {
  //set highScoresArray
  let highscores = JSON.parse(window.localStorage.getItem)("highscores");

  //lis tag for each high score
  let liTag = document.createElement("li");
  liTag.textContent = score.initials + score;

  //highScorestoPage
  let olEl = document.getElementById("highscores");
  olEl.appendChild(liTag);
}
