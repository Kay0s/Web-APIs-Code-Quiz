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
//   b1. if <on click> "Right" - ("your final score" && + 1 ) + <event listener> text w/<hr>"Correct" message + <even listener question query selector by ID> next question appears from random.splice.questionArray
//   b2. if <on click> "Wrong" - ("Time Left" && "On Screen Timer" - 10 seconds) <event listener> text w/<hr>"Wrong" message + <even listener question query selector by ID> next question appearsrandom.splice.questionArray
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

// let totalSeconds = 75;

// // //  changes the ul id = "seconds"
// const secondsDisplay = document.getElementbyID("seconds");

// setInterval(startCountdown, 1000);

// //start quiz button function to bring question text in and start timer
// function startCountdown() {
//   let seconds = totalSeconds;

//   document.getElementbyID("seconds").innerHtml = "seconds";

//   time--;
// }
// document.getElementbyId("startQuiz").addEventListener("click", removeIntro);
// function removeIntro() {
//   document.getElementById("text-center text-black").style.display = "none";
// }

// document.getElementById("startQuiz").addEventListener("click", flyinQuest1);
// function flyinQuest1() {
//   document.getElementById("questions-text1").style.display = "visible";
// }

//   /* This function retrieves the values from the html input elements and resets "On Screen Timer and Time Left*/
//   function updateTime(currentTime) {
//     return currentTime - 10
//      }

//       // Set "On Screen Timer" fuctions
//      function startTimer() {

//          /* The "interval" variable here using "setInterval()" begins the recurring increment of the
//             secondsElapsed variable which is used to check if the time is up */
//            setInterval(function() {
//            totalSeconds --

//              //  renderTime() is called here once every second.
//              renderTime();
//            }, 1000);
//        }

// /
