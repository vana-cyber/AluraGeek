import { conectaApi } from "./conectaApi.js";
import { exibeProduto } from "./mostrarProdutos.js";

// Função para excluir um item
async function excluiItem(id) {
    try {
        await conectaApi.excluiProduto(id); // Exclui o produto via API
        exibeProduto.mostraProduto(); // Atualiza a lista após a exclusão
    } catch (e) {
        alert('Erro ao excluir o item: ' + e);
    }
}

// Função que lida com o clique do botão de excluir
function configurarEventos() {
    const botaoExcluir = document.querySelector("[data-botao-excluir]");
    
    botaoExcluir.addEventListener("click", (evento) => {
        const id = evento.target.value.id; // Pega o ID do item a partir do botão
        if (id) {
            excluiItem(id); // Exclui o item com o ID
        }
    });
}

// Configura os eventos de exclusão
configurarEventos();