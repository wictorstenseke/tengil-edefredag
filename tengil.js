window.onload = function() {

    var day =  new Date().getDay();
    var questions = [
        "Is it Friday yet?",
        "What are you doing here?"
    ];
    var answers = [
        "NO!",
        "YES!",
        "It's a weekend!!"
    ];
    var subTexts = [
        "It's {0} days til Friday!",
        "It's Friday! It's fikaday!",
        "Get out!"
    ];
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    var subText = document.getElementById("sub-text");

    setTimeout(function () {
        if(day < 5) {
            question.innerHTML = questions[0];
            answer.innerHTML = answers[0];
            subText.innerHTML = subTexts[0].replace("{0}", 5 - day);
    
        } else if(day === 5) {
            question.innerHTML = questions[0];
            answer.innerHTML = answers[1];
            subText.innerHTML = subTexts[1];
            
    
        } else if(day > 5) {
            question.innerHTML = questions[0];
            answer.innerHTML = answers[2];
            subText.innerHTML = subTexts[2];
        }
    }, 1000);

    
};

function flip() {
    var flipContainer = document.getElementById("flip-container");

    flipContainer.classList.toggle("flipped");
}