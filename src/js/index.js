//Criando a classe para usar o botao pra mudar o tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//Criando a classe body pra receber o novo tema
const body = document.querySelector("body");
//Criando a classe da imagem pra poder mudar de sol para lua e vice-versa
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao");
//Quando clicar no botao, fazer a arrowfunction para mudar os temas.
botaoAlterarTema.addEventListener("click", () => {    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    //Toggle para remover/adicionar a classe modo-escuro de forma que acontece sempre que clicar.
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {        

        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});