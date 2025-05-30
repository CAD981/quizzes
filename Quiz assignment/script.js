const questions = [
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: "4" },
    { question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Rome"], correct: "Paris" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtonsElement.innerHTML = "";
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.addEventListener("click", () => selectAnswer(answer, currentQuestion.correct));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = "Quiz Over!";
        answerButtonsElement.innerHTML = "";
        nextButton.style.display = "none";
        scoreElement.innerText = `Score: ${score}/${questions.length}`;
    }
}

nextButton.addEventListener("click", showQuestion);

startQuiz();
