//Coding Quiz



//Write coding questions for quiz

// Constant/Persistent Elements
//    a. "On Screen Timer" - displays "Seconds Left" starting point of 75 seconds function of ("Questions Remaining and "your final score") in upper right hand corner (purple font)
//    b. "Highscores" link - upper left hand corner (purple font) function of (<ol>"your final score"</ol>
//    c. "your final score"- tallied on console and shown on "Final Score Page" and on "Highscores" listed as <tr?> with purple background highlight with onclick
//    d. "Total Questions" vs "Questions Remaining" function of ("Wrong" = "Time Left" - 10 seconds")
//    e. "Seconds Left" in upper right hand corner (purple font) displayed by "On Screen Timer" function of ("Wrong" = "Seconds Left" && "On Screen Timer" - 10 seconds")
// 
// 1. Instructions Message:
//    a. <h1>"Coding Quiz Challenge"</h1> with "Instructions" <p>Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
//    b. <on click> "Start Quiz"<submit> button (bg purple with white font/hover CSS styling) which starts <event listener> "Time Left' &&  "On Screen Timer"
//    c. starts "On Screen Timer" - which stays in upper right hand corner and displays "Seconds Left"  (purple font)
//    d. "Highscores" array - upper left hand corner (purple font)
// 2. Multiple Choice Questions:
//    a. "On Screen Timer" - upper right hand corner (purple font)
//    b."Submit" button for choice, (bg purple with white font/hover CSS styling)  -  when pressed <submit on click>
//   b1. if <on click> "Right" - ("your final score" && + 1 ) + <event listener> text w/<hr>"Correct" message + <even listener question query selector by ID> next question appears
//   b2. if <on click> "Wrong" - ("Time Left" && "On Screen Timer" - 10 seconds) <event listener> text w/<hr>"Wrong" message + <even listener question query selector by ID> next question appears
//    c. "Highscores" link - upper left hand corner (purple font)
// 3. Quiz Ends:
//    a1. if all questions answered ("Questions Remaining" === "0")
//    a2. else if time turns to 0 on timer ("Time Left" ==== "0")
//    b. When quiz ends
// 4. Final Score Text:
//    a. "your final score" - shown on page, push to 'Highscores" array and sort array by score to display as <ul></ul> in <tr>
//    b. <event listener> form box to enter "Initials" - ("Initials" + "your final score" push to "HighScores Page")
//    c. <on click> "Submit" button -  High Scores text appears (bg purple with white font/hover CSS styling)
//    d. <on click>"Go Back" button (bg purple with white font/hover CSS styling) - Instructions text appears
//    e. "On Screen Timer" - upper right hand corner (purple font)
// 5. Highscores Text:
//    a. High Scores listed as <tr> with purple background highlight with onclick
//    a. "Go Back" button - links to Home Screen (bg purple with white font/hover CSS styling)
//    b. "Clear High Scores" button (bg purple with white font/hover CSS styling)





// //  changes the div id = "seconds"
// let secondsDisplay = document.querySelector("#seconds");

// let totalSeconds = 0;
// let status = "Time";
// let interval;

// // formats the "On Screen Timer" to have two digits
// function getFormattedSeconds() {
//    let secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
//     var formattedSeconds;
  
//     if (secondsLeft < 10) {
//       formattedSeconds = "0" + secondsLeft;
//     } else {
//       formattedSeconds = secondsLeft;
//     }
  
//     return formattedSeconds;
//   }

//   /* This function retrieves the values from the html input elements and resets "On Screen Timer and Time Left*/
// function setTime() {
//     let secondsLeft;
  
//     if (status === "Correct") {
//       secondsLeft = secondsLeftInput.value.trim();
//     } else (status === "Wrong"); {
//       secondsLeft = secondsLeftInput.value.trim() - 10 seconds;
//     }
  
//     clearInterval(interval);
//     totalSeconds = minutes * 60;
//   }

//    // check to see if time has run out
//    if (questionsRemaining >= totalQuestions) {
//     continueTimer();
// }
   
//    if (questionsRemaining === 0) {
//     alert("Quiz is over");
//     stopTimer();
// }
    
// if (secondsRemaining === 0) {
//     alert("Quiz is over");
//     stopTimer();
// }
   

// // Set "On Screen Timer" fuctions
// function startTimer() {
//   setTime();

//   if (totalSeconds > 0) {
//     /* The "interval" variable here using "setInterval()" begins the recurring increment of the
//        secondsElapsed variable which is used to check if the time is up */
//       interval = setInterval(function() {
//         secondsElapsed++;

//         //  renderTime() is called here once every second.
//         renderTime();
//       }, 1000);
//   } 
// }

// /* This function stops the setInterval() set in startTimer but does not
//    reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
//    function pauseTimer() {
//     clearInterval(interval);
//     renderTime();
//   }
  
//   /* This function stops the interval and also resets secondsElapsed
//      and calls "setTime()" which effectively reset the timer
//      to the input selections workMinutesInput.value and restMinutesInput.value */
//   function stopTimer() {
//     secondsElapsed = 0;
//     setTime();
//     renderTime();
//   }

//    //setTime and renderTime 
//    renderTime();
//  }
 
//  function setSecondsLeft() {
//    localStorage.setItem(
//      "timer",
//      JSON.stringify({
//        secondsLeft: secondsLeftInput.value.trim()
//      })
//    );
//  }
 
//  submitButton.addEventListener("click", startTimer);
//  wrongButton.addEventListener("click", reduceTimer);
//  rightButton.addEventListener("click", addScore);
//  initialsButton.addEventListener("click", addHighscoresArray);
//  gobackButton.addEventListener("click", gobackInstructions);
//  clearHighScores.addEventListener("click", deleteHighscoresArray);
//  highScoresButton.addEventListener("click", displayHighscoresArray);
 
// get right or wrong message with on click
document.getElementById("r1Btn").addEventListener("click", function() {
  document.getElementById("r1").innerHTML = "Right";
});

document.getElementById("w1Btn").addEventListener("click", function() {
  document.getElementById("w1").innerHTML = "Wrong";
});
document.getElementById("w2Btn").addEventListener("click", function() {
  document.getElementById("w2").innerHTML = "Wrong";
});
document.getElementById("w3Btn").addEventListener("click", function() {
  document.getElementById("w3").innerHTML = "Wrong";
});
document.getElementById("r2Btn").addEventListener("click", function() {
  document.getElementById("r2").innerHTML = "Right";
});

document.getElementById("w4Btn").addEventListener("click", function() {
  document.getElementById("w4").innerHTML = "Wrong";
});
document.getElementById("w5Btn").addEventListener("click", function() {
  document.getElementById("w5").innerHTML = "Wrong";
});
document.getElementById("w6Btn").addEventListener("click", function() {
  document.getElementById("w6").innerHTML = "Wrong";
});


function myFunction() {
  let x = document.getElementById("myDIV");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  }
}
