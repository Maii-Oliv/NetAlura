// Este arquivo roda na página de seleção de perfil (index.html)
// e salva o perfil escolhido no localStorage para uso em catalogo/catalogo.html.

document.addEventListener('DOMContentLoaded', () => {
    const linksPerfis = document.querySelectorAll('a.perfil');

    linksPerfis.forEach(link => {
        link.addEventListener('click', (event) => {
            // Tenta ler valores visuais do perfil clicado
            const nome = link.querySelector('span')?.textContent?.trim() || 'Meu Perfil';
            const imagem = link.querySelector('img')?.src || '';

            // Salva objeto de perfil ativo no localStorage
            localStorage.setItem('perfilAtivoNome', nome);
            localStorage.setItem('perfilAtivoImagem', imagem);

            // Deixa a navegação continuar normalmente para catalogo.html
        });
    });
});