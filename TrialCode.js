$(document).ready(function() {
  // write code to set global variables for questions + sets htmml elements to interact with dom.
  var quiz = [
    {
      questionHead: "On Top Gear series 8 episode 1, whom from the Top Gear team is responsible for this quote? ",
      questionBody: "This is a Renault Espace, probably the best of the people carriers. Not that thats much to shout about. Thats like saying 'Oh good, Ive got syphilis, the best of the sexually transmitted diseases'",
      answerA: "Jeremy Clarkson",
      answerB: "Richard Hammond",
      answerC: "James May",
      answerD: "The Stig",
      correctAnswer: "answerA",
      // Or... AnswerOne: ["Jeremy Clarkson","Richard Hammond","James May", "The Stig",],
    },
    {
      questionHead: "Referencing series 18, episode 2...",
      questionBody: "Which Celebrity became the quickest 'star in a reasonably priced car' to ever traverse the Top Gear Test Track with a lap time of 1:42.1?",
      answerA: "Rowan Atkinson",
      answerB: "Simon Cowell",
      answerC: "Matt Leblanc",
      answerD: "Tom Cruise",
      correctAnswer: "answerC",
      // or... AnswerTwo: ["Rowan Atkinson", "Simon Cowell", "Matt Leblanc", "Tom Cruise"],
    },
    {
      questionHead: "Referencing The Infallible Top Gear Cool Wall...",
      questionBody: "Which of these vehicle's is NOT a member of the Sub-Zero Freezer",
      answerA: "Alfa Romeo 147",
      answerB: "Vauxhall Astra VXR (RH Edition)",
      answerC: "Pagani Zonda",
      answerD: "Ferrari 458 Italia",
      correctAnswer: "answerC",
    },
    {
      questionHead: "The Top Gear Test Track is a former WWII airfield.",
      questionBody: "Which F1 manufacturer is responsible for turning it into a race track",
      answerA: "Honda",
      answerB: "McLaren",
      answerC: "Williams",
      answerD: "Lotus",
      correctAnswer: "answerD",
    },
    {
      questionHead: "Since the very first episode in 1977...",
      questionBody: "Which hit Allman Brothers song has served as Top Gear's theme song",
      answerA: "Jessica",
      answerB: "Ramblin' Man",
      answerC: "South Bound",
      answerD: "Seven Turns",
      correctAnswer: "answerA",
    },
  ];
  var pushQNA = {
    questionBoxOne: $("#questionBoxOne"),
    questionBoxTwo: $("#questionBoxTwo"),
    answerButtonOne: $("#buttonOne"),
    answerButtonTwo: $("#buttonTwo"),
    answerButtonThree: $("#buttonThree"),
    answerButtonFour: $("#buttonFour"),
    nextButton: $("#nextButton"),
  };

  var answers = []
  var userAnswers = [];
  var counter = 0
  var tally = 0
  var pushEverything = pushQNA.nextButton.click(function(a){
    while (userAnswers.length < 5) {
    if (userAnswers.length == 0) {
      continue;
}
      else if (userAnswers.length > 0){
    a.preventDefault();
    var moveHead = pushQNA.questionBoxOne.html(quiz[counter].questionHead);
    var moveBody = pushQNA.questionBoxTwo.html(quiz[counter].questionBody);
    var moveAnswerA = pushQNA.answerButtonOne.html(quiz[counter].answerA);
    var moveAnswerB = pushQNA.answerButtonTwo.html(quiz[counter].answerB);
    var moveAnswerC = pushQNA.answerButtonThree.html(quiz[counter].answerC);
    var moveAnswerD = pushQNA.answerButtonFour.html(quiz[counter].answerD);
    answers.push(quiz[counter].correctAnswer);
    counter +=1;
}
}
});
      userAnswers.push($("input:radio:checked").val());
      if ($("input:radio:checked").val() == answers){
        console.log(tally)
        tally +=1;
      };
    });
