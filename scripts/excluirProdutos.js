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
    const listaProdutos = document.querySelector('[data-lista]');

    listaProdutos.addEventListener('click', (evento) => {
        if (evento.target.matches('[data-botao-excluir]')) {
            const id = evento.target.getAttribute('data-id'); // Obtém o ID do botão
            if (id) {
                excluiItem(id); // Exclui o item com o ID
            }
        }
    });
}

configurarEventos();