window.addEventListener('load',()=>{
          
    var aba = document.getElementById('tags');
    console.log(aba);
    if(aba.hasAttribute('checked'))
        document.getElementById('conteudo-tags').classList.add('classe-conteudo');

    document.querySelectorAll('nav input').forEach( function (abaSelecionada){
        abaSelecionada.addEventListener('click', function selecionaAba(){
            if(abaSelecionada == aba){
                document.getElementById('conteudo-atributos').classList.remove('classe-conteudo');
                document.getElementById('conteudo-tags').classList.add('classe-conteudo');
            } else{
                document.getElementById('conteudo-tags').classList.remove('classe-conteudo');
                document.getElementById('conteudo-atributos').classList.add('classe-conteudo');
            }
        })
    })
});

