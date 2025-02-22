import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function mostraProduto(nome, valor, imagem, id) { // Passando id por parâmetro
    const produto = document.createElement('li');
    produto.className = 'conteiner__produtos-item';
    produto.innerHTML = `<li class="conteiner__produtos-item">
                    <figure class="conteiner__produtos-card">
                        <img src="${imagem}" alt="${nome}">
                            <caption>${nome}</caption>
                    </figure>
                    <div class="conteiner__produtos-valor">
                        <p>${valor}</p>
                    </div> 
                    <button class="conteiner__produtos-botao-lixeira">
                        <img src="/assets/bin icon.png" alt="Excluir item"  data-botao-excluir data-id=${id}>  
                    </button>               
                </li>`;

    return produto;
}

async function acessoApi() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach((elemento) =>
            lista.appendChild(
                mostraProduto(
                    elemento.nome,
                    elemento.valor,
                    elemento.imagem,
                    elemento.id 
                )
            )
        );
    } catch {
        lista.innerHTML = `<h1 class="mensagem__principal">Ops! Não foi possível encontrar os produtos. 
        Tente recarregar a página.</h1>`;
    }
}

export const exibeProduto = {
    mostraProduto
}

acessoApi();