const questions = [
    {
        question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
        options: ["var", "let", "const", "both let and const"],
        answer: "both let and const"
    },

    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    },

    {
        question: "Which array method creates a new array containing only elements that satisfy a condition?",
        options: [
            "map()",
            "filter()",
            "find()",
            "reduce()"
        ],
        answer: "filter()"
    },

    {
        question: "Which keyword is used to stop a loop immediately?",
        options: [
            "continue",
            "return",
            "break",
            "exit"
        ],
        answer: "break"
    },

    {
        question: "Which function is used to select an element by its CSS selector?",
        options: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
            "querySelectorAll()"
        ],
        answer: "querySelector()"
    },

    {
        question: "Which JavaScript feature allows asynchronous programming without callbacks?",
        options: [
            "Promises",
            "Async/Await",
            "Both Promises and Async/Await",
            "Closures"
        ],
        answer: "Both Promises and Async/Await"
    },

    {
        question: "Which array method executes a function once for every element but does not return a new array?",
        options: [
            "map()",
            "forEach()",
            "filter()",
            "reduce()"
        ],
        answer: "forEach()"
    },

    {
        question: "Where is data stored when using localStorage?",
        options: [
            "Server",
            "Browser",
            "Database",
            "RAM"
        ],
        answer: "Browser"
    },

    {
        question: "Which operator checks both value and datatype?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "Which method is used to make HTTP requests in modern JavaScript?",
        options: [
            "fetch()",
            "request()",
            "ajax()",
            "axios()"
        ],
        answer: "fetch()"
    }
];

let currentQuestionIndex = 0
let score = 0
let selectedAnswer = null

let progress = document.querySelector("#progress");
let question = document.querySelector("#question");
let optionsContainer = document.querySelector("#options-container");
let nextButton = document.querySelector("#next-btn");
let currentStatus = document.querySelector("#status");
let resultBox = document.querySelector("#result-box");
let finalScore = document.querySelector("#final-score");
let restartButton = document.querySelector("#restart-btn");
let quizBox = document.querySelector(".quiz-box");

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    progress.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    question.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(function(val){
        let optionButton = document.createElement("button");

        optionButton.addEventListener("click" , function(){
            currentStatus.textContent = "";
            selectedAnswer = val;

            if(selectedAnswer === currentQuestion.answer){
                score++;
                optionButton.classList.add("correct");
            }

            else{
                optionButton.classList.add("wrong");
            }

            let allButtons = document.querySelectorAll(".option-btn");
            allButtons.forEach(function(btn){
                btn.disabled = true;

                
                if(btn.textContent === currentQuestion.answer){
                    btn.classList.add("correct");
                }
            });

        })

        optionButton.textContent = val;
        optionButton.classList.add("option-btn");

        optionsContainer.append(optionButton);
    })
}

nextButton.addEventListener("click" , function(){
    if(selectedAnswer === null){
        currentStatus.textContent = "Please select an option";
        return;
    }
    currentQuestionIndex++;


    if(currentQuestionIndex === questions.length){
        quizBox.style.display = "none";

        resultBox.classList.remove("hidden");
        finalScore.textContent = `Your Score: ${score} / ${questions.length}`
    }
    
    else{
        selectedAnswer = null;
        showQuestion();
    }
})

restartButton.addEventListener("click" , function(){
    quizBox.style.display = "block";

    resultBox.classList.add("hidden");

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    showQuestion();
})

showQuestion();