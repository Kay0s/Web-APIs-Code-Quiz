//Coding Quiz

//Write coding questions for quiz - 5 total - create array and add to buttons?  how do you designate "right" answer

// Constant/Persistent Elements
//    a. "On Screen Timer" - displays "Seconds Left" starting point of 0 on Instruction Message and upon even listener (on click of starQuiz button, Total Seconds Remaining 75) seconds function of ("Questions Remaining and "your final score") in upper right hand corner (purple font)
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
//    b. <event listener> form box to enter "Initials" - prevent default for form submission ("Initials" + "your final score" retrieve from local storage and JSon to "HighScores Page")
//    c. <on click> "Submit" button -  High Scores text appears (bg purple with white font/hover CSS styling)
//    d. <on click>"Go Back" button (bg purple with white font/hover CSS styling) - Instructions text appears
//    e. "On Screen Timer" - upper right hand corner (purple font)
// 5. Highscores Text:
//    a. High Scores listed as <tr> with purple background highlight with onclick
//    a. "Go Back" button - links to Home Screen (bg purple with white font/hover CSS styling)
//    b. "Clear High Scores" button (bg purple with white font/hover CSS styling)

//Global Parameters
let yourFinalScore = 0;
let totalSeconds = 5;
let questionsLeft = 5;
// declaration of variables
let secondsDisplay = document.querySelector("#seconds");
let instructionsScreen = document.querySelector("#instructionsScreen");
let startBtn = document.querySelector("#start-quiz");
let questionsArea = document.querySelector("#questions-area");
let ChoiceBtn = document.createElement("button");
let questionsDiv = document.querySelector("#answers");
let quizOver = document.querySelector("#quiz-over");
let initials = document.querySelector("#initials");
let score = document.querySelector("#score");
let rightWrong = document.querySelector("#right-wrong");
let questionsInfoEl = document.querySelector("#questions-info");

// event listener on click of "start-quiz" button defines
startBtn.addEventListener("click", startQuiz);

//start quiz button function start timer
function startQuiz() {
  instructionsScreen.setAttribute("style", "display:none");
  addQuestions();
  let interval = setInterval(function () {
    totalSeconds--;
    secondsDisplay.textContent = totalSeconds;
    if (totalSeconds < 1) {
      clearInterval(interval);
    }
  }, 1000);
}

//create question array to add text to answer buttons

let questionsAvailable = [
  {
    question: "What is the DOM API?",
    options: [
      "Data representation of the objects that comprise the structure and content of a document on the web",
      "Doing Outstanding Math",
      "Domestic Over Minutes",
      "Dividing Object Miniscule",
    ],
    right: 0,
  },
  {
    question: "What is JQeury?",
    options: [
      "A JavaScript Library",
      "Just a question",
      "Elements of the letter j",
      "Justice without question",
    ],
    right: "A JavaScript Library",
  },
  {
    question: "What does git clone do?",
    options: [
      "used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location.",
      "send in the clones",
      "clone clyde",
      "gets help",
    ],
    right:
      "used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location",
  },
  {
    question: "What is a CDN?",
    options: [
      "A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.",
      "average type of colors",
      "cartoon delivery network",
      "carboard dentist news",
    ],
    right:
      "A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.",
  },
  {
    question: "What is a function?",
    options: [
      "a set of statements that performs a task or calculates a value",
      "fun things",
      "a fun time",
      "a family of things",
    ],
    right: "a set of statements that performs a task or calculates a value",
  },
];

let currentQuestion = 0;
function addQuestions() {
  questionsArea.setAttribute("class", "");
  let currentQuestionText = questionsAvailable[currentQuestion].question;
  questionsInfoEl.textContent = currentQuestionText;
  for (let i = 0; i < questionsAvailable.options.length; i++) {
    let ChoiceBtn = document.createElement("button");
    ChoiceBtn.textContent = questionsAvailable.options[i];
    ChoiceBtn.setAttribute("data-index", i);
    ChoiceBtn.onclick = submitAnswer();
    questionsDiv.appendChild(ChoiceBtn);
  }
}

//function to check if user's submission is right or wrong to provide on-screen feedback and potentially decrease time
function answersSubmitted() {
  rightOptions = questionsAvailable.querySelector("right");
  let userAnswer = 0;
  if (userAnswer === questionsAvailable.right) {
    yourFinalScore++;
    right - message.removeAttribute("hide");
  } else {
    wrong - message.removeAttribut("hide");
    totalSeconds - 10;
  }
  questionsLeft--;
}
if (questionsAvailable >= questionsAvailable.length - 1) {
  endQuiz();
} else {
  //   showNextQuestion();
}

// function yourFinalScore() {}

// function init() {
//   // Get stored high scores and initials from localStorage
//   // Parsing the JSON string to an object
//   Let storedHighScores = JSON.parse(localStorage.getItem("initials"));

//   // If high scores were retrieved from localStorage, update the high scores array to it
//   if (storedHighScores !== null) {
//     HighScores = storedInitials;
//   }

//   // Render high scores to the DOM
//   renderHighScores();
// }

// function storeInitials() {
//   // Stringify and set "initials" key in localStorage to high scores array
//   localStorage.setItem("initials", JSON.stringify(initials));
// }

// // When initials are submitted...
// initialsForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   let initialsText = HighScoresInput.value.trim();

//   // Return from function early if submitted initials is blank
//   if (initialsText === "") {
//     return;
//   }

//   // Add new initialsText to high scores array, clear the input
//   initials.push(initialsText);
//  Input.value = "";

//   // Store updated high scores in localStorage, re-render the list
//   storeInitials();
//   renderInitials();
// });
