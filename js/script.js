// Sexo
const sexoHombreInput = document.getElementById('sexoHombre');
const sexoMujerInput = document.getElementById('sexoMujer');

// Altura
const alturaCmInput = document.getElementById('alturaCm'); // centimetros
const alturaFtInput = document.getElementById('alturaFt'); // pies 
const alturaInInput = document.getElementById('alturaIn'); //pulgadas

// Altura contenedores
const alturaCmWrap = document.getElementById('alturaCmWrap');
const alturaFtInWrap = document.getElementById('alturaFtInWrap');

// Altura opciones
const alturaCmOption = document.getElementById('alturaCmOption');
const alturaFtInOption = document.getElementById('alturaFtInOption');

// Peso
const pesoKgInput = document.getElementById('pesoKg'); // kilogramos
const pesoLbInput = document.getElementById('pesoLb'); // libras

// Peso contenedores
const pesoKgWrap = document.getElementById('pesoKgWrap');
const pesoLbWrap = document.getElementById('pesoLbWrap');

// Peso opciones
const pesoKgOption = document.getElementById('pesoKgOption');
const pesoLbOption = document.getElementById('pesoLbOption');

// Botón de calcular
const calcularBtn = document.getElementById('calcularBtn');

// Resultado
const resultadoDiv = document.getElementById('resultado');

// Toggle de altura
const alturaToggle = () => {
    if (alturaCmOption.checked) {
        alturaCmWrap.classList.remove('is-hidden');
        alturaFtInWrap.classList.add('is-hidden');
    } else {
        alturaCmWrap.classList.add('is-hidden');
        alturaFtInWrap.classList.remove('is-hidden');
    }
};

// Toggle de peso
const pesoToggle = () => {
    if (pesoKgOption.checked) {
        pesoKgWrap.classList.remove('is-hidden');
        pesoLbWrap.classList.add('is-hidden');
    } else {
        pesoKgWrap.classList.add('is-hidden');
        pesoLbWrap.classList.remove('is-hidden');
    }
};

alturaCmOption.addEventListener('change', alturaToggle);
alturaFtInOption.addEventListener('change', alturaToggle);
pesoKgOption.addEventListener('change', pesoToggle);
pesoLbOption.addEventListener('change', pesoToggle);