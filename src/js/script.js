const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const personagemGrande = document.querySelector('.personagem-grande');
        imagemPersonagemGrande.src = "./src/imagens/card-vampira.png";
    })
})