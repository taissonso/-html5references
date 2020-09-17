window.addEventListener('load', () => {

    var aba = document.getElementById('tags');
    var buscador = document.getElementById('busca');

    if (aba.hasAttribute('checked'))
        document.getElementById('conteudo-tags').classList.add('classe-conteudo');

    document.querySelectorAll('nav input').forEach(function (abaSelecionada) {
        abaSelecionada.addEventListener('click', function selecionaAba() {
            if (abaSelecionada == aba) {
                document.getElementById('conteudo-atributos').classList.remove('classe-conteudo');
                document.getElementById('conteudo-tags').classList.add('classe-conteudo');
                buscador.value = '';
                buscador.setAttribute('placeholder', 'Buscar por Tag');
                buscador.addEventListener('keyup', busca(abaSelecionada));
            } else {
                document.getElementById('conteudo-tags').classList.remove('classe-conteudo');
                document.getElementById('conteudo-atributos').classList.add('classe-conteudo');
                buscador.value = '';
                buscador.setAttribute('placeholder', 'Buscar por Atributo');
                buscador.addEventListener('keyup', busca(abaSelecionada));
            }
        })
    })

    /*Função para busca 
        - Faz o evento escutar o campo de busca
        - Verifica qual aba está selecionada
    */
    buscador.addEventListener('keyup', busca);
    function busca() {
        var tags, atributos;
        tags = document.getElementById('conteudo-tags');
        atributos = document.getElementById('conteudo-atributos');
        // console.log('Aba Tags: ' + tags.classList.contains('classe-conteudo'));
        if (tags.classList.contains('classe-conteudo')) {
            console.log('ABA TAGS')
        } else {
            console.log('ABA ATRIBUTOS');
        }
    }
});