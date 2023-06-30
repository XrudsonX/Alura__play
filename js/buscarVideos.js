import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(){
    event.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.filtraLista(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    // while(lista.firstChild){
    //     lista.removeChild(lista.firstChild)
    // }
    lista.innerHTML = "";

    console.log(busca.length);
    if(busca.length == 0){
        lista.innerHTML = "<h2 class = 'erroDeCarregamento'>Não existem vídeos com esse termo!"
    }

    busca.forEach(element => {
        lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem))
    });
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", () => buscarVideo())