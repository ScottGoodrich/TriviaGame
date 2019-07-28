$(document).ready(function() {

var theme = new Audio('../TriviaGame/assets/sounds/intro.wav');
var rightAudio = new Audio("../TriviaGame/assets/sounds/ascend.mp3");
var wrongAudio = new Audio("../TriviaGame/assets/sounds/fart.mp3");
var gameOver = new Audio("../TriviaGame/assets/sounds/gameEnd.mp3");
var correct = 0;



var questionArr = [
    {
    question: "In the Coen brothers' film \"The Big Lebowski\", what item \'really tied the room together\'?",
    choiceA: "Painting",
    choiceB: "Tapestry",
    choiceC: "Rug",
    choiceD: "Coffee table book",
    answer: "A"    
},
{
    question: "What film finds a group of teenagers hunting for treasure belonging to legendary pirate One Eyed Willy?",
    choiceA: "Stand By Me",
    choiceB: "The Goonies",
    choiceC: "Adventures in Babysitting",
    choiceD: "The Lost Boys",
    answer: "B"
},
{
    question: "What Atlanta, Georgia band won the 2018 Best Metal Performance Grammy for the album \"Sultan\'s Curse\"?",
    choiceA: "High On Fire",
    choiceB: "Metallica",
    choiceC: "Megadeth",
    choiceD: "Mastodon",
    answer: "D"
},
{
    question: "The world's tallest building, the Burj Khalifa, is located in what country?",
    choiceA: "United Arab Emirates",
    choiceB: "Bahrain",
    choiceC: "Oman",
    choiceD: "Qatar",
    answer: "A"
},
{
    question: "In 1947, who became the first pilot to travel faster than the speed of sound?",
    choiceA: "Buzz Aldrin",
    choiceB: "Chuck Yeager",
    choiceC: "John Glenn",
    choiceD: "Howard Hughes",
    answer: "B"
},
{
    question: "Who is inarguably the worst character in the \"Star Wars\" movie franchise?",
    choiceA: "Luke Skywalker",
    choiceB: "Darth Vader",
    choiceC: "Han Solo",
    choiceD: "Jar-Jar Binks",
    answer: "D"
},
{
    question: "What 1980s rock band is known for its one-armed drummer?",
    choiceA: "Whitesnake",
    choiceB: "Cinderella",
    choiceC: "Def Leppard",
    choiceD: "Poison",
    answer: "C"
},
{
    question: "What creatures scare Indiana Jones more than any other?",
    choiceA: "Rats",
    choiceB: "Snakes",
    choiceC: "Bats",
    choiceD: "Spiders",
    answer: "B"
},
{
    question: "What was the favorite candy of the title character of \"E.T. The Extraterrestrial\"?",
    choiceA: "Skittles",
    choiceB: "M&Ms",
    choiceC: "Snickers",
    choiceD: "Reese's Pieces",
    answer: "D"
},
{
    question: "In 1994's \"Pulp Fiction\", who owns a wallet emblazoned with the phrase \"Bad Motherf*%$er\"?",
    choiceA: "Marsellus Wallace",
    choiceB: "Vincent Vega",
    choiceC:"Jules Winnfield",
    choiceD: "Butch Coolidge",
    answer: "C"
}
];

var lastQuestionIndex = questionArr.length -1;
var currentQuestionIndex = 0;

/*newGame();

function newGame () {
    theme.play();
    clearInterval(counter);
    $(".game-div").html("<h6>Click Here To Start!</h6>");
    correct = 0;
    $(".game-div").on("click", displayQuestion()
    );
}*/

function displayQuestion() {
    var q = questionArr[currentQuestionIndex];
    $("#question").html("<h3>" + q.question + "</h3>");
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    $("#D").html(q.choiceD);
    questionTimer();
}
currentQuestionIndex = 0;
displayQuestion();
currentQuestionIndex++;


var seconds = 10;

var counter = setInterval(questionTimer, 1000);

function questionTimer() {
    if (seconds >= 0) {
        seconds--;
        $("#counter").html("<p>00:" + seconds + "</p>");
    } if (seconds < 10) {
        $("#counter").html("<p>00:0" + seconds + "</P");
    } if (seconds < 0) {
        clearInterval(counter);
        $("#counter").empty();
        wrongAudio.play();
        $(".game-div").html("<h2>NOPE.</h2>");
    }
}
/*function gameEnd() {
    $(".game-div").html("<p>You got " + correct + " out of 10 correct</p>");
    gameOver.play();
}*/
});