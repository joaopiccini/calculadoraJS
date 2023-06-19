let isImc = false;
let altura = 0;
let peso = 0;

function addCaracter(caracter) {
    let visor = document.getElementById('visor');
    visor.value += caracter;
}

function realizarCalculo() {
    if(isImc) {
        let visor = document.getElementById('visor');
        peso = visor.value;
        altura = altura / 100;
        let imc = peso / (altura * altura);
        visor.value = 'IMC: ' + imc.toFixed(2);
        isImc = false;
    }
    else {
        let visor = document.getElementById('visor');
        console.log(visor.value)
        let resultado = eval(visor.value);
        visor.value = resultado.toFixed(2);
    }
}

function limparVisor() {
    let visor = document.getElementById('visor');
    visor.value = '';
}

function calcularIMC() {
    let visor = document.getElementById('visor');
    altura = parseFloat(visor.value);
    isImc = true;
    visor.value = '';
}
    
function gerarJSON() {
    let div = document.querySelector('.json');
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let senha = document.getElementById('senha');

    let json = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        senha: senha.value
    };

    let jsonString = JSON.stringify(json, null, 2);

    div.innerHTML = `<pre><br>${jsonString}</pre>`;
    changeTagToVisible('json');
}

function changeTool(tool) {
    switch(tool) {
        case 'operacoes':
            changeTagToVisible("calculadora")
            changeTagToVisible("operacoes");
            changeTagToInvisible("imc");
            changeTagToInvisible("formulario");
            break;
        case 'imc':
            changeTagToVisible("calculadora")
            changeTagToInvisible("operacoes");
            changeTagToVisible("imc");
            changeTagToInvisible("formulario");
            break;
        case 'formulario':
            changeTagToInvisible("calculadora")
            changeTagToInvisible("operacoes");
            changeTagToInvisible("imc");
            changeTagToVisible("formulario");
            break;
    }
}

function changeTagToVisible(divClass){
    const foundDivs = document.querySelectorAll(`.${divClass}`);
    for(let i = 0; foundDivs.length > i; i++){
        foundDivs[i].classList.remove("invisible");
    }
}

function changeTagToInvisible(divClass){
    const foundDivs = document.querySelectorAll(`.${divClass}`);
    for(let i = 0; foundDivs.length > i; i++){
        foundDivs[i].classList.add("invisible");
    }
}