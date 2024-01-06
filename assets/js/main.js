const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const identifyImc = identifyNumb(imc);

    const msg = `Seu Imc é: ${imc} (${identifyImc}).`;

    setResultado(msg, true);

});

function identifyNumb(imc) {
    const identifyNumb = ['Abaixo do peso', 'Peso normal', 'Sobrepreso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return identifyNumb[5];
    if (imc >= 34.9) return identifyNumb[4];
    if (imc >= 29.9) return identifyNumb[3];
    if (imc >= 24.9) return identifyNumb[2];
    if (imc >= 18.5) return identifyNumb[1];
    if (imc < 18.5) return identifyNumb[0];
}

function getImc(peso, altura) {
    const imc = (peso / (altura * altura));
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('paragrafo-resultado-falso');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}










