import { conectaApi } from "./conectaApi.js";

const envioFormulario = document.querySelector("[data-formulario-envio]");

async function criaProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const valor = document.querySelector("[data-valor]").value;

    try {
        await conectaApi.criarProduto(nome, valor, imagem);
        alert("Produto adicionado com sucesso!");
    } catch(e) {
        alert(e);
    }
}

envioFormulario.addEventListener("click", evento => (criaProduto(evento)));