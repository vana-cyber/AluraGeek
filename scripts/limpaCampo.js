const botaoLimpar = document.querySelector('[data-formulario-limpar]');

function limpaCampo() {
    const formulario = document.querySelector('[data-formulario]');
    formulario.reset();
}

function configurarEventos() {
    botaoLimpar.addEventListener('click', limpaCampo);
}

configurarEventos();