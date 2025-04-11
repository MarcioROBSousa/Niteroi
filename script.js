//seleciona o botão e o paragrafo (arvore da DOM)
const button = document.getElementById('Cliqueaqui');
const paragraph = document.getElementById('interacaoComTexto');


//ADICIONA UM EVENTO DE CLIQUE AO BOTÃO
// => Arrow function expressions
button.addEventListener('click', () => {
    paragraph.textContent = "O texto foi alterado com sucesso! Boa programação!!!";
});