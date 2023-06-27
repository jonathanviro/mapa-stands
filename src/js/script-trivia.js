// Array con las preguntas, opciones y respuestas correctas
const questions = [
    {
        question: '¿En qué año comenzó la Revolución Industrial?',
        options: ['a) 1700', 'b) 1760', 'c) 1800'],
        answer: 'b',
    },
    {
        question: '¿Cuál fue el primer país en industrializarse?',
        options: ['a) Estados Unidos', 'b) Inglaterra', 'c) Francia'],
        answer: 'b',
    },
    {
        question: '¿Cuál fue el primer producto que se fabricó en serie?',
        options: ['a) Autos', 'b) Zapatos', 'c) Relojes'],
        answer: 'c',
    },
    {
        question: '¿Quién inventó la máquina de vapor?',
        options: ['a) James Watt', 'b) Thomas Edison', 'c) Alexander Graham Bell'],
        answer: 'a',
    },
    {
        question: '¿Cuál fue el primer producto en tener un código de barras?',
        options: ['a) Cerveza', 'b) Chicle', 'c) Cigarros'],
        answer: 'b',
    },
    {
        question: "¿Qué producto popularizó la técnica del 'just-in-time' en la producción?",
        options: ['a) Automóviles', 'b) Computadoras', 'c) Celulares'],
        answer: 'a',
    },
    {
        question: '¿Cuál fue el primer país en utilizar robots en la industria automotriz?',
        options: ['a) Estados Unidos', 'b) Japón', 'c) Alemania'],
        answer: 'b',
    },
    {
        question: '¿Quién fue el fundador de la marca de automóviles Ford?',
        options: ['a) Henry Ford', 'b) John Ford', 'c) Robert Ford'],
        answer: 'a',
    },
    {
        question: "¿Qué producto introdujo la técnica de la 'obsolescencia programada'?",
        options: ['a) Bombillas', 'b) Celulares', 'c) Televisores'],
        answer: 'a',
    },
    {
        question: '¿Cuál fue el primer producto en ser vendido en línea?',
        options: ['a) Libros', "b) CD's", 'c) Ropa'],
        answer: 'a',
    },
    {
        question: '¿Quién es considerado el padre del Lean Manufacturing?',
        options: ['a) Henry Ford', 'b) Taiichi Ohno', 'c) Walter Shewhart'],
        answer: 'b',
    },
    {
        question: '¿Cuál fue el primer país en utilizar la energía nuclear para generar electricidad?',
        options: ['a) Estados Unidos', 'b) Francia', 'c) Reino Unido'],
        answer: 'a',
    },
    {
        question: "¿Qué producto popularizó el término 'efecto látigo' en la cadena de suministro?",
        options: ['a) Papel higiénico', 'b) Café', 'c) Cerveza'],
        answer: 'b',
    },
    {
        question: '¿Cuál fue el primer país en desarrollar un automóvil eléctrico?',
        options: ['a) Estados Unidos', 'b) Japón', 'c) Francia'],
        answer: 'a',
    },
    {
        question: '¿Qué producto fue el primero en ser vendido en una máquina expendedora?',
        options: ['a) Chicle', 'b) Café', 'c) Refrescos'],
        answer: 'a',
    },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let countQuestions = 1;
let randomizedQuestions = [];

const newGameButton = document.querySelector('#btnNuevoJuevo');
const exitButton = document.querySelector('#btnSalir');
const questionElement = document.querySelector('#question');
const correctElement = document.querySelector('#contador-correctas');
const incorrectElement = document.querySelector('#contador-incorrectas');
const countQuestionsElement = document.querySelector('#contador-preguntas');

// Función para mostrar la pregunta actual
function showQuestion() {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const opcionesContainer = document.querySelector('#opciones-container');
    opcionesContainer.innerHTML = '';

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const opcion = currentQuestion.options[i];
        const opcionContainer = document.createElement('div');
        opcionContainer.classList.add('container-opcion');

        const opcionImage = document.createElement('img');
        opcionImage.src = '../img/cuadro_opcion.png';
        opcionContainer.appendChild(opcionImage);

        const opcionText = document.createElement('span');
        opcionText.textContent = opcion;
        opcionContainer.appendChild(opcionText);

        const seleccionImage = document.createElement('img');
        seleccionImage.id = `seleccion-${i + 1}`;
        seleccionImage.classList.add('superpuesta');
        opcionContainer.appendChild(seleccionImage);

        // Agregar controlador de eventos a la opción
        opcionContainer.addEventListener('click', () => {
            checkAnswer(opcion, i + 1);
        });

        opcionesContainer.appendChild(opcionContainer);
    }
}

// Función para verificar la respuesta seleccionada
function checkAnswer(selectedOption, indice) {
    let imageElement = document.querySelector(`#seleccion-${indice}`);
    
    countQuestions++;
    if (countQuestions < 5) { 
        countQuestionsElement.innerHTML = `${countQuestions}`;
    }
    
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    if (selectedOption.startsWith(currentQuestion.answer)) {
        correctAnswers++;
        correctElement.innerHTML = `${correctAnswers}`;
        imageElement.src = '../img/respuesta_correcta.png';
        // resultElement.textContent = '¡Respuesta correcta!';
    } else {
        incorrectAnswers++;
        incorrectElement.innerHTML = `${incorrectAnswers}`;
        imageElement.src = '../img/respuesta_incorrecta.png';
        // resultElement.textContent = 'Respuesta incorrecta.';
    }
    setTimeout(() => {
        // Código que se ejecutará después de esperar 3 segundos
        nextQuestion();
    }, 300);
    
}

// Función para barajar las preguntas en el array randomizedQuestions
function shuffleQuestions() {
    randomizedQuestions = questions.sort(() => Math.random() - 0.5);
}

// Función para avanzar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex === 5 || incorrectAnswers === 3) {
        endGame();
    } else {
        showQuestion();
    }
}

// // Función para terminar el juego
function endGame() {
    // console.log(`FINAL JUEGO - CORRECTAS: ${correctAnswers} INCORRECTAS: ${incorrectAnswers}`);

    // questionElement.textContent = 'Juego terminado';
    if (correctAnswers >= 3 && incorrectAnswers < 3) {
        premiacion('WIN');
        // resultElement.textContent = '¡Felicidades! Ganaste el juego.';
    } else {
        premiacion('LOSER');
        // resultElement.textContent = 'Perdiste. Mejor suerte la próxima vez.';
    }
}

shuffleQuestions();
showQuestion();


// Función para iniciar un nuevo juego
function startNewGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    countQuestions = 1;

    countQuestionsElement.innerHTML = `${countQuestions}`;
    correctElement.innerHTML = `${correctAnswers}`;
    incorrectElement.innerHTML = `${incorrectAnswers}`;

    shuffleQuestions();
    showQuestion();
}

// // Asignar evento de clic al botón "Siguiente"
// nextButton.addEventListener('click', nextQuestion);

// Asignar evento de clic al botón "Nuevo Juego"
newGameButton.addEventListener('click', startNewGame);

exitButton.addEventListener('click', () => { 
    window.location.href = '../../index.html';
});;