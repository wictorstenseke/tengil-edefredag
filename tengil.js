var question;
var answer;
var subText;
var questions;
var answers;
var subTexts;
var flipContainer;
var spotifyPlayer;

function init() {
    questions = [
        "Is it Friday yet?",
        "What are you doing here?"
    ];
    answers =[
        "NO!",
        "YES!",
        "It's the weekend!"
    ];
    subTexts = [
        "It's {0} days til Friday!",
        "It's Friday! Play some music!",
        "Get out!"
    ];
    question = document.getElementById("question");
    answer = document.getElementById("answer");
    subText = document.getElementById("sub-text");
    flipContainer = document.getElementById("flip-container");
    spotifyPlayer = document.getElementById("spotify-player");
}

function toggleImages(isFriday) {
    var positive = document.getElementById("positive");
    var negative = document.getElementById("negative");
    var isFlipped = flipContainer.classList.contains("flipped");

    if(isFriday) {
        isFlipped && flip();
        negative.classList.add("is-hidden");
        positive.classList.remove("is-hidden");
        // flip();
    } else {
        isFlipped && flip();
        negative.classList.remove("is-hidden");
        positive.classList.add("is-hidden");
        // flip();
    }
}

function setTexts(day) {

    if(day < 5) {
        question.innerHTML = questions[0];
        answer.innerHTML = answers[0];
        subText.innerHTML = subTexts[0].replace("{0}", 5 - day);
        toggleImages(false);

    } else if(day === 5) {
        question.innerHTML = questions[0];
        answer.innerHTML = answers[1];
        subText.innerHTML = subTexts[1];
        toggleImages(true);
        spotifyPlayer.style.display = "block";

    } else if(day > 5) {
        question.innerHTML = questions[0];
        answer.innerHTML = answers[2];
        answer.style.fontSize = "160px";
        subText.innerHTML = subTexts[2];
    }
}

function flip() {
    flipContainer.classList.toggle("flipped");
}

function getCurrentDay(){
    return new Date().getDay();
}

window.onload = function() {
    init(); 

    setTexts(getCurrentDay());

    setTimeout(function() { setTexts(getCurrentDay()); }, 1000);
};
