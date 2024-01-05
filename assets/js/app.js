const startQuizBtn = document.querySelector('.start-btn');
const quizContainer = document.querySelector('.quiz-container');
const totalQuestion = document.querySelector('.total-question');
const questionNumber = document.querySelector('.question-number');
const nextBtn = document.querySelector('.next-btn');
const btnText = document.querySelector('.button-text');
const optionList = document.querySelector('.option-list');
const finishQuizBtn = document.querySelector('.quiz-off');
const scoreContainer = document.querySelector('.score');
const timer = document.querySelector('.timer');
const timeLine = document.querySelector('.time-line');

let currentQuestion = 1;
let score = 0;

nextBtn.addEventListener('click',function(){
    nextBtn.setAttribute('disabled','disabled');
    currentQuestion++
    questionNumber.innerHTML = currentQuestion;
    if(currentQuestion == questions.length){
        nextBtn.style.display = "none"
        finishQuizBtn.style.display = "block"
        finishQuizBtn.addEventListener('click',function(){
            quizContainer.classList.remove("active");
            scoreContainer.classList.add("active");
            console.log(score);
            scoreResult();
        })
    }
    const optionContainer = document.querySelectorAll('.option-container');
    for (const option of optionContainer) {
        option.classList.remove('disabled-option');
    }
    getQuestions();
})

function startQuiz(){
    score = 0;
    startQuizBtn.style.display = "block";
    scoreContainer.style.display = "none";
    nextBtn.style.display = "block";
    startQuizBtn.addEventListener('click',function(){
        nextBtn.setAttribute('disabled','disabled');
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

function scoreResult(){
    const scoreResultContent = document.querySelector('.score-result');
    const restart = document.querySelector('.restart');
    const quit = document.querySelector('.quit');
    restart.addEventListener('click',function(){
        startQuiz();
    });
    quit.addEventListener('click',function(){
        location.reload();
    })
    scoreResultContent.innerText = 
    `
    Toplam ${questions.length} Sorudan ${score} Doğru Cevap Verdiniz !
    Toplam Puanınız : ${(100/questions.length)*score}/100
    `
    scoreContainer.style.display = "flex";

}

function getQuestions(){
    isOptionSelected = false;
    startCountdown();
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
                <span class="option" id="a">A:</span>
                <span class="option-text">
                    ${question.answers.a}
                </span>
            </div>
            <span class="icon"></span>
        </div>
        <div class="option-container">
            <div class="option-content">
                <span class="option" id="b">B:</span>
                <span class="option-text">
                    ${question.answers.b}
                </span>
            </div>
            <span class="icon"></span>
        </div>
        <div class="option-container">
            <div class="option-content">
                <span class="option" id="c">C:</span>
                <span class="option-text">
                    ${question.answers.c}
                </span>
            </div>
            <span class="icon"></span>
        </div>
        <div class="option-container">
            <div class="option-content">
                <span class="option" id="d">D:</span>
                <span class="option-text">
                    ${question.answers.d}
                </span>
            </div>
            <span class="icon"></span>
        </div>
        `
        // console.log(Object.keys(question.answers).map(key => ({key, value:question.answers[key]})));
        const optionText = document.querySelectorAll('.option-text');
        const optionContainer = document.querySelectorAll('.option-container');
        const icon = document.querySelectorAll('.icon')
        for (let i = 0 ; i < optionContainer.length ; i++ ) {
            // console.log(answer.key)
            optionContainer[i].addEventListener('click',function(){
                isOptionSelected = true;
                // console.log(optionText[i].previousElementSibling.id);
                if(optionText[i].previousElementSibling.id == question.correctAnswer){
                    optionContainer[i].style.background = "#28a745";
                    icon[i].innerHTML = '<i class="fa-solid fa-check"></i>';
                    nextBtn.removeAttribute('disabled','disabled');
                    optionContainer[i].style.color = "white";
                    score++;
                }else{
                    optionContainer[i].style.background = "#dc3545";
                    icon[i].innerHTML = '<i class="fa-solid fa-xmark">';
                    nextBtn.removeAttribute('disabled','disabled');
                    optionContainer[i].style.color = "white";
                }
                for (const option of optionContainer) {
                    option.classList.add('disabled-option');
                }
            })
        }
    }
}

let countdown;
let isOptionSelected = false;

function startCountdown(){
    let timeLeft = 3000;
    let timerCounter = .2;
    countdown = setInterval(function(){
        if(timeLeft == 0){
            clearInterval(countdown);
            timer.innerHTML = "Süreniz Doldu!";
            timer.style.background = "red";
            nextBtn.removeAttribute('disabled','disabled');
            const optionContainer = document.querySelectorAll('.option-container');
            for (const option of optionContainer) {
                option.classList.add('disabled-option');
            }
            timeLine.style.width = `${timerCounter * timeLeft}px`;
        }else if(isOptionSelected){
            clearInterval(countdown);
            timeLeft = 3000;
        }else{
            timer.innerHTML = `Kalan Süre: ${Math.ceil(timeLeft/100)}`;
            timer.style.background = "#28a745";
            timeLine.style.width = `${timerCounter * timeLeft}px`;
            timeLeft--;
        }
    },10)
}


startQuiz()