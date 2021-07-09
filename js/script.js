$(document).ready(function() {
  // object
  var magic8Ball = {
    listOfAnswers: [
      "Absolutely!",
      "Sorry, but no",
      "Interesing question I am not sure",
      "Maybe!",
      "Yes yes yes",
      "Probably not"
    ],
    randomAnswer: function (question) {
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      $("#answer").fadeIn(4000);
      var randNum = Math.floor(Math.random() * this.listOfAnswers.length);
      var randAnswer = this.listOfAnswers[randNum];
      $("#answer").text(randAnswer);
    }
  }; // end object
	
  $("#answer").hide();
	
  // click event listener
  $("#questionButton").click(function() {
    $("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
	  function() {
	    var question = prompt("Ask Me Anything");
		$("#8ball").effect("shake");
		magic8Ball.randomAnswer(question);
		}, 500); // end setTimeout
	}); // end event listener
});