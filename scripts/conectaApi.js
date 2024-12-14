async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(nome, valor, imagem) {
    const produtoApi = await fetch('http://localhost:3000/produtos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    if(!produtoApi.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }
}


async function excluiProduto(id) {
    try {
        const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
        }); 
        
        if (response.ok) {
            alert("Produto excluído com sucesso!");
            listaProdutos();
        }
    } catch (error) {
        throw new Error("Erro ao excluir o produto:", error);
    }
}

export const conectaApi = {
    listaProdutos,
    criarProduto,
    excluiProduto
}