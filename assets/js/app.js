const startQuizBtn = document.querySelector('.start-btn');
const quizContainer = document.querySelector('.quiz-container');
const totalQuestion = document.querySelector('.total-question');
const questionNumber = document.querySelector('.question-number');
const nextBtn = document.querySelector('.next-btn');
const btnText = document.querySelector('.button-text');
const optionList = document.querySelector('.option-list');
const finishQuizBtn = document.querySelector('.quiz-off'); 

let currentQuestion = 1;

nextBtn.addEventListener('click',function(){
    currentQuestion++
    questionNumber.innerHTML = currentQuestion;
    if(currentQuestion == questions.length){
        nextBtn.style.display = "none"
        finishQuizBtn.style.display = "block"
        finishQuizBtn.addEventListener('click',function(){
            quizContainer.classList.remove("active");
            startQuiz();
        })
    }
    getQuestions();
})

function startQuiz(){
    startQuizBtn.style.display = "block";
    startQuizBtn.addEventListener('click',function(){
        nextBtn.style.display = "block";
        finishQuizBtn.style.display = "none";
        startQuizBtn.style.display = "none";
        currentQuestion = 1;
        totalQuestion.innerHTML = `${questions.length}`
        questionNumber.innerHTML = currentQuestion;
        quizContainer.classList.add("active");
        btnText.textContent = "Sonraki Soru";
        getQuestions();
    })

}

function getQuestions(){
    for (const question of questions.slice(currentQuestion-1,currentQuestion)) {
        optionList.innerHTML = "";
        const questionContent = document.querySelector('.question');
        questionContent.innerHTML = 
        `
        <p class="question-text">
            <span class="question-timer">${currentQuestion}-</span>
            <span class="question-content">${question.question}</span> 
        </p>
        `;
        optionList.innerHTML = 
        `
        <div class="option-container">
            <div class="option-content">
                <span class="option">A:</span>
                <span class="option-text">
                    ${question.answers.a}
                </span>
            </div>
        </div>
        <div class="option-container">
            <div class="option-content">
                <span class="option">B:</span>
                <span class="option-text">
                    ${question.answers.b}
                </span>
            </div>
        </div>
        <div class="option-container">
            <div class="option-content">
                <span class="option">C:</span>
                <span class="option-text">
                    ${question.answers.c}
                </span>
            </div>
        </div>
        <div class="option-container">
            <div class="option-content">
                <span class="option">D:</span>
                <span class="option-text">
                    ${question.answers.d}
                </span>
            </div>
        </div>
        
        `
    }
}

startQuiz()