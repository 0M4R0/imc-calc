console.log('Script cargado correctamente');

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
const valorIMC = document.getElementById('ValorIMC');
const clasificacionIMC = document.getElementById('ClasificacionIMC');

const form = document.getElementById('imcForm');

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
}

// Conversiones Automaticas

const cmAFeetInches = (cm) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    console.log(`Feet: ${feet}, Inches: ${inches}`);
    return { feet, inches };
};
const feetInchesACm = (feet, inches) => {
    console.log(`Feet: ${feet}, Inches: ${inches}`);
    const totalInches = (feet * 12) + inches;
    const cm = totalInches * 2.54;
    return cm;
};

const kgALb = (kg) => {
    console.log(`Kg: ${kg}`);
    return kg * 2.20462;
};

const lbAKg = (lb) => {
    console.log(`Lb: ${lb}`);
    return lb / 2.20462;
    }       

// Evento de calcular IMC
calcularBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let alturaCm;
    let pesoKg;
        
    if (alturaCmOption.checked) {
        alturaCm = parseFloat(alturaCmInput.value);
        const { feet, inches } = cmAFeetInches(alturaCm);
        alturaFtInput.value = feet;
        alturaInInput.value = inches;
    } else {
        const feet = parseInt(alturaFtInput.value);
        const inches = parseInt(alturaInInput.value);
        alturaCm = feetInchesACm(feet, inches);
        alturaCmInput.value = Math.round(alturaCm);
    }

    if (pesoKgOption.checked) {
        pesoKg = parseFloat(pesoKgInput.value);
        pesoLbInput.value = kgALb(pesoKg).toFixed(2);
    } else {
        const lb = parseFloat(pesoLbInput.value);
        pesoKg = lbAKg(lb);
        pesoKgInput.value = pesoKg.toFixed(2);
    }

    const alturaM = alturaCm / 100;
    const imc = pesoKg / (alturaM * alturaM);
    valorIMC.textContent = `IMC: ${imc.toFixed(2)}`;

    let clasificacion = '';
    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }
    clasificacionIMC.textContent = `Clasificación: ${clasificacion}`;
    resultadoDiv.classList.remove('is-hidden');

// Validar campos
    if (isNaN(alturaCm) || isNaN(pesoKg) || alturaCm <= 0 || pesoKg <= 0) {
        alert('Por favor, ingresa valores válidos para altura y peso.');
        resultadoDiv.classList.add('is-hidden');
        return;
    }

// Mujer y Hombre
const esHombre = sexoHombreInput.checked;
const esMujer = sexoMujerInput.checked;

if (esHombre) {
    console.log('El usuario es hombre');
} else if (esMujer) {
    console.log('El usuario es mujer');
} else {
    console.log('No se ha seleccionado un sexo válido');
}   
});

alturaCmOption.addEventListener('change', alturaToggle);
alturaFtInOption.addEventListener('change', alturaToggle);
pesoKgOption.addEventListener('change', pesoToggle);
pesoLbOption.addEventListener('change', pesoToggle);