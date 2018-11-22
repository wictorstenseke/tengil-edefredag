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
    answers = [
        "NO!",
        "YES!",
        "It's the weekend!"
    ];
    subTexts = [
        "It's {0} days til Friday!",
        "It's Friday! Play some music!",
        "Get out!",
        "It's {0} day til Friday!"
    ];
    question = document.getElementById("question");
    answer = document.getElementById("answer");
    subText = document.getElementById("sub-text");
    flipContainer = document.getElementById("flip-container");
    spotifyPlayer = document.getElementById("spotify-player");
    tengilParty = document.getElementById("tengilParty");
}

function toggleImages(isFriday) {
    var positive = document.getElementById("positive");
    var negative = document.getElementById("negative");

    if (isFriday) {
        negative.classList.add("is-hidden");
        positive.classList.remove("is-hidden");
    } else {
        negative.classList.remove("is-hidden"); //denna gör att spegelvända Tengil visas eftersom klassen plockas bort alla dagar utom fredag.
        positive.classList.add("is-hidden");
    }
}

function setTexts() {
    var day = getCurrentDay();

    if (day < 5) {
        question.innerHTML = questions[0];
        answer.innerHTML = answers[0];
        subText.innerHTML = subTexts[day === 4 ? 3 : 0].replace("{0}", 5 - day);
        toggleImages(false);
        spotifyPlayer.style.display = "none";

    } else if (day === 5) {
        question.innerHTML = questions[0];
        answer.innerHTML = answers[1];
        subText.innerHTML = subTexts[1];
        toggleImages(true);
        spotifyPlayer.style.display = "block";
        tengilParty.style.display = "flex";

    } else if (day > 5) {
        question.innerHTML = questions[0];
        answer.innerHTML = answers[2];
        answer.style.fontSize = "160px";
        subText.innerHTML = subTexts[2];
        spotifyPlayer.style.display = "none";
    }
}
function toggleFLip() {
    flip()
    setTimeout(() => {
        flip();
    }, 3000);
}
function flip() {
    flipContainer.classList.toggle("flipped");
}

function getCurrentDay() {
    return new Date().getDay();
}

window.onload = function () {
    init();

    setTexts(getCurrentDay());
  
    setInterval(function () {
        setTexts();
    }, 1000);

    setInterval(function () {
        toggleFLip();
    }, 1000*60*60*1.5);
};