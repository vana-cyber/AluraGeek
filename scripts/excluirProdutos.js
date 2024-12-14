import { conectaApi } from "./conectaApi.js";

const botaoExcluir = document.querySelector("[data-botao-excluir]");
const listaItens = conectaApi.listaProdutos();
const lista = document.querySelector("[data-lista]");

async function excluiItem(evento) {
    try {
        await conectaApi.excluiProduto(id);
        listaItens.forEach(item => (lista.removeChild(item.id)));
        alert("Produto excluido com sucesso!");
    } catch(e) {
        alert(e);
    }
}



botaoExcluir.addEventListener("click", evento => conectaApi.excluiItem(evento));