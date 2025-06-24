const botao = document.querySelector("#botao");
botao.addEventListener("click",mostrarMensagem);

function mostrarMensagem(){
    const pMensangem = document.querySelector("#mensagem");
    pMensangem.textContent="Acredite em si mesmo e você será imparável!";
}