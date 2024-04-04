//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do numero secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'escolha um número entre 1 e 10'

var listadeNumeros = [];
let numeroLimite = 10
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', `escolha um numero entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = (`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}! `);
        exibirTextoNaTela ('h1', 'Acertou!');
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p',`o numero secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p',`o numero secreto é maior que ${chute}`);
        }
        limparCampo()
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '' ;
}
function gerarUmNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let lerNumerosDaLista = listadeNumeros.length;
    if (lerNumerosDaLista == numeroLimite) {
        listadeNumeros = [];
    }
    if (listadeNumeros.includes(numeroEscolhido)) {
        return gerarUmNumeroAleatorio();
    } else {
        listadeNumeros.push (numeroEscolhido)
        console.log (listadeNumeros)
        return (numeroEscolhido);
    }
}
function reiniciarJogo () {
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}