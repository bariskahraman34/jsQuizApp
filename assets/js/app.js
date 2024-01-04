const startQuizBtn = document.querySelector('.start-btn');
const quizContainer = document.querySelector('.quiz-container');
const totalQuestion = document.querySelector('.total-question');
const questionNumber = document.querySelector('.question-number');
const nextBtn = document.querySelector('.next-btn');

startQuizBtn.addEventListener('click',function(){
    startQuizBtn.style.display = "none";
    quizContainer.classList.add("active");
})

totalQuestion.innerHTML = `${questions.length}`

let currentQuestion = 1;
questionNumber.innerHTML = currentQuestion;

nextBtn.addEventListener('click',function(){
    currentQuestion++
    questionNumber.innerHTML = currentQuestion;
    if(currentQuestion == questions.length){
        nextBtn.innerHTML = "Quizi Bitir";
        nextBtn.addEventListener('click',function(){
            quizContainer.style.display = "none";
        })
    }
})



function getQuestions(){
    for (const question of questions) {
        console.log(question);
    }
}

getQuestions();