$(document).ready(function() {
  var quiz = [
    {
      questionOneA: "On Top Gear series 8 episode 1, whom from the Top Gear team is responsible for this  quote? ",
      questionOneB: "This is a Renault Espace, probably the best of the people carriers. Not that thats much to shout about. Thats like saying 'Oh good, Ive got syphilis, the best of the sexually transmitted diseases!'",
      answerOneA: "Jeremy Clarkson",
      answerOneB: "Richard Hammond",
      answerOneC: "James May",
      answerOneD: "The Stig",
    },
    {
      questionTwoa: "Referencing series 18, episode 2...",
      questionTwoB: "Which Celebrity became the quickest 'star in a reasonably priced car' to ever traverse the top gear test track with a lap time of 1:42.1?",
      answerTwoA: "Rowan Atkinson",
      answerTwoB: "Simon Cowell",
      answerTwoC: "Matt Leblanc"
      answerTwoD: "Tom Cruise "
    }
  ]
  var pushQNA = {
    questionBoxOne: $("#questionBoxOne"),
    questionBoxTwo: $("#questionBoxTwo"),
    answerButtonOne: $("#buttonOne"),
    answerButtonTwo: $("#buttonTwo"),
    answerButtonThree: $("#buttonThree"),
    answerButtonFour: $("buttonFour"),
    nextButton: $("#nextButton"),
  };

  pushQNA.nextButton.click(function(a){
    a.preventDefault();
  });

  pushQna.nextButton.click(function(){
    quiz.question

  });
});
