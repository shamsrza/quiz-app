$(document).ready(function(){

const questions = [
    // beginner
{
    question: "What is JavaScript?",
    answers: [
    {text: "A programming language", correct: true},
    {text: "A markup language", correct: false},
    {text: "A database management system", correct: false},
    {text: "An operating system", correct: false},
    ]
},
{
    question: "Which of the following is a JavaScript data type?",
    answers: [
    {text: "String", correct: false},
    {text: "Number", correct: false},
    {text: "Boolean", correct: false},
    {text: "All of the above", correct: true},
    ]
},
{
    question: "Which company developed JavaScript?",
    answers: [
    {text: "Microsoft", correct: false},
    {text: "Sun Microsystems", correct: false},
    {text: "Netscape", correct: true},
    {text: "Oracle", correct: false},
    ]
},
{
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
    {text: "msg('Hello World')", correct: false},
    {text: "alertBox('Hello World');", correct: false},
    {text: "alert('Hello World');", correct: true},
    {text: "msgBox('Hello World')", correct: false},
    ]
},
{
    question: "What does `typeof` operator do in JavaScript?",
    answers: [
    {text: "It returns the data type of a variable.", correct: true},
    {text: "It converts a variable to a string.", correct: false},
    {text: "It checks if a variable is defined.", correct: false},
    {text: "It compares two variables.", correct: false},
    ]
},
// Intermediate
{
    question: "Which method is used to find the length of a string in JavaScript?",
    answers: [
    {text: "length()", correct: false},
    {text: "getLength()", correct: false},
    {text: "size()", correct: false},
    {text: "None of the above", correct: true},
    ]
},
{
    question: "What will be the output of `console.log(0.1 + 0.2 === 0.3);`?",
    answers: [
    {text: "true", correct: false},
    {text: "false", correct: true},
    {text: "undefined", correct: false},
    {text: "NaN", correct: false},
    ]
},
{
    question: "Which of the following is true about '===' operator in JavaScript?",
    answers: [
    {text: "It compares only the value of two variables.", correct: false},
    {text: "It compares the value and type of two variables.", correct: true},
    {text: "It compares two variables after type conversion.", correct: false},
    {text: "It is not a valid JavaScript operator.", correct: false},
    ]
},
{
    question: "What is the difference between `null` and `undefined` in JavaScript?",
    answers: [
    {text: "`null` represents the absence of value, `undefined` means a variable has been declared but not yet assigned a value.", correct: true},
    {text: "`null` and `undefined` are the same.", correct: false},
    {text: "`null` means a variable is not declared, `undefined` represents the absence of value.", correct: false},
    {text: "`null` is an object, `undefined` is a data type.", correct: false},
    ]
},
{
    question: "Which of the following is a closure in JavaScript?",
    answers: [
    {text: "A function having access to the parent scope, even after the parent function has closed.", correct: true},
    {text: "A function that takes another function as an argument.", correct: false},
    {text: "A function that returns a promise.", correct: false},
    {text: "None of the above", correct: false},
    ]
},
];

    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');


    let currentQuestionIndex = 0;
    let score = 0;



    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);


            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }


    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';

        if(isCorrect){
            selectedBtn.classList.add('correct');
            score++;
        }else{
            selectedBtn.classList.add('incorrect');
        }

        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === 'true'){
                button.classList.add('correct');
            }
            button.disabled = true;
        });

        nextButton.style.display = "block";
    }

    

    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }


    function handleNextButton(){
        currentQuestionIndex++;

        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })
    startQuiz();


});