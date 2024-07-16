let listaDeNumerosSorteados = []; 
let numeroMaximo = 10; 
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;  


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 
     
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo dos numeros ')
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10')
}

exibirMensagemInicial(); 


function verificarChute(){
    let chute = document.querySelector('input').value; 
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentivas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`; 
        exibirTextoNaTela('p', mensagemTentivas);  
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    }
    else {
        if(chute > numeroSecreto){
         exibirTextoNaTela('p', 'o numero e menor'); 
        }
        else{
         exibirTextoNaTela('p', 'o numero e maior'); 
        }
        tentativas++; 
        limparCampo(); 
        
    }
}

function gerarNumeroAleatorio(){
    numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1); 
    let quantidadeElementos = listaDeNumerosSorteados.length; 
    
    if(quantidadeElementos == 10){
        listaDeNumerosSorteados = []; 
    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); 
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido; 
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 
     
}

exibirTextoNaTela('h1', 'Jogo dos numeros ')
exibirTextoNaTela('p', 'Escolha um numero de 1 a 10')

function limparCampo(){
    chute.document.querySelector('input'); 
    chute.value = ''; 
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}




