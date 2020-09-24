window.addEventListener('load', () => {

    var aba = document.getElementById('tags');
    var buscador = document.getElementById('busca');
    buscador.addEventListener('keyup', busca);

    if (aba.hasAttribute('checked'))
        document.getElementById('conteudo-tags').classList.add('classe-conteudo');

    document.querySelectorAll('nav input').forEach(function (abaSelecionada) {
        abaSelecionada.addEventListener('click', function selecionaAba() {
            if (abaSelecionada == aba) {
                document.getElementById('conteudo-atributos').classList.remove('classe-conteudo');
                document.getElementById('conteudo-tags').classList.add('classe-conteudo');
                buscador.value = '';
                buscador.setAttribute('placeholder','Buscar por Tag');
            } else {
                document.getElementById('conteudo-tags').classList.remove('classe-conteudo');
                document.getElementById('conteudo-atributos').classList.add('classe-conteudo');
                buscador.value = '';
                buscador.setAttribute('placeholder','Buscar por Atributo');
            }
        })
    })
     

    /**  --- Função para busca ---
     * - Parâmetros: sem parâmetros somente a escuta do evento keyup no inicio do arquivo
     * 
     * - Descrição: 
     *      Transforma a entrada em 
     * 
    */ 
    function busca() {
        var tags, tabela, tr, td, entrada, filtraEntrada;
        
        filtraEntrada = buscador.value.toLowerCase();
        tags = document.getElementById('conteudo-tags');

        document.querySelector('input').addEventListener('click', function limpaEntrada(){
            if (buscador.value == ''){
                for (var i = 0; i < tr.length; i++){
                    tr[i].style.display = "";
                }
            }
        });

        if (tags.classList.contains('classe-conteudo')) {
            tabela = document.getElementById('tabela-tags');
            tr = tabela.getElementsByTagName('tr');
        } else {
            tabela = document.getElementById('tabela-atributos');
            tr = tabela.getElementsByTagName('tr');
        }

        for (var i = 0; i < tr.length; i++) {
            //td vai receber o primeiro td do primeiro tr e vai incrementando 
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                entrada = td.textContent || td.innerText;
                entrada = entrada.replace('Tags','');
                entrada = entrada.replace(/[<>]/g,'');
                if (entrada.toLowerCase().indexOf(filtraEntrada) > -1) {
                    tr[i].style.display = "relative";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
});