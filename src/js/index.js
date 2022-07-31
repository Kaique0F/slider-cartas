/*

OBJETIVO 1 - qundo clicarmos na seta de avançar temos que mostrar o próximo cartão a lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 dar um jeito de identificar o clique do usuário da seta avançar
    - passo 3 fazer aparecer o próximo cartão da lista
    - passo 4 buscar o cartão que está selecionado e esconder
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao"); //querySelectorAll = Utilizado para buscar os Elementos 

let cartaoAtual = 0;

function esconderCartaSelecionado(){
    const cartaSelecionado = document.querySelector(".selecionado");
    cartaSelecionado.classList.remove("selecionado");
}


btnAvancar.addEventListener("click", function (){

    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaSelecionado();
   
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

    
});

/*OBJETIVO 2- qundo clicarmos na seta de avançar temos que mostrar o próximo cartão a lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 dar um jeito de identificar o clique do usuário da seta voltar
    - passo 3 fazer aparecer o cartão anterior da lista
    - passo 4 buscar o cartão que está selecionado e esconder

*/
btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0) return;
    esconderCartaSelecionado();

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
 
});



