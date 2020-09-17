window.addEventListener('load', () => {

    /**
     * Vetor com as informações que serão preenchidas no cabeçalho, caso queira mais colunas basta adicionar mais 
     * valores no vetor.
     */
    var descricaoCabecalho = ['Tags', 'Descrição', 'Exemplo', 'Resultado'];
    
    /** 
     * Chamada da função com as informações de criar a tabela. Se quiser mais tabelas basta chamar a função
     * mais vezes e definir os campos.
    */
    var tabela = criarTabela('conteudo-tags', 'tabela', 'tabela-tags', descricaoCabecalho);

    /** --- Cria a tabela ---
     * Parâmetros
     *      1 - Local onde vai ser colocado a tabela.
     *      2 - Nome da classe para a tabela.
     *      3 - Nome do id para a tabela.
     *      4 - Vetor com as informações que irão conter no cabeçalho
     * Descrição
     * 1º - Cria um objeto e suas propriedade.
     * 2º - Pega o local onde vai ser criado a tabela.
     * 3º - Cria os elementos table, thead e tbody chamando a função criarElemento(), onde é 
     *      passado a tag a ser criada.
     * 4º - Adiciona os elementos no local definido com a função adicionarElemento(), onde é passado em qual elemento
     *      será adicionado e qual a tag a ser adicionado no elemento.
     * 5º - Cria a classe e id para a tabela.
     * 6º - Chama a função criarCabecalho() onde já preenche as informações do cabeçalho, passado a tabela para ter
     *      acesso ao campo cabeçalho e o vetor contendo as informações a serem preenchidas 
     *    
    */
    function criarTabela(localTabela, classeTabela, idTabela, descricaoCabecalho) {
        var tabela = {
            local: '',
            tagTabela: '',
            cabecalho: '',
            corpo: ''
        };

        tabela.local = document.getElementById(localTabela);
        tabela.tagTabela = criarElemento('table');
        tabela.cabecalho = criarElemento('thead');
        tabela.corpo = criarElemento('tbody');

        adicionarElemento(tabela.local, tabela.tagTabela);
        adicionarElemento(tabela.tagTabela, tabela.cabecalho);
        adicionarElemento(tabela.tagTabela, tabela.corpo);

        tabela.tagTabela.classList.add(classeTabela);
        tabela.tagTabela.id = idTabela;

        criarCabecalho(tabela, descricaoCabecalho);

        return tabela;
    }

    /** --- Adiciona os Elementos no HTML---
     *  Os elementos são adicionados com appendChild(no final da árvore).
     * Parâmetros
     *      1 - Em qual elemento vai ser colocado o novo nó filho.
     *      2 - Qual elemento será colocado.
     * 
    */
    function adicionarElemento(ondeAdiciona, elemento) {
        return ondeAdiciona.appendChild(elemento);
    }

    /** --- Cria elementos --- 
     * São criados elementos com o método createDocumento
     * Parâmetros
     *      1 - a tag que será criada
    */
    function criarElemento(elemento) {
        return document.createElement(elemento);
    }


    /** --- Cria o cabeçalho com o tr e os th's ---
     * Parâmetros
     *      1 - A tabela para acessar o campo cabeçalho.
     *      2 - O vetor contendo os valores das celulas do cabeçalho.
    */
   function criarCabecalho(tabela,vetor){
    var linhaCabecalho = criarElemento('tr');
    for (var i = 0; i < vetor.length; i++) {
        var th = preencheLinha('th', vetor[i]);
        adicionarElemento(linhaCabecalho, th);
    }
    adicionarElemento(tabela.cabecalho, linhaCabecalho);
}


    /** --- Preenche a linha do cabeçalho com os valores do vetor
     * Parâmetros
     *      1 - elemento é o th para anexar o texto há celula
     *      2 - o texto vindo do vetor e adicionado com innerHTML para mostrar o campo resultado
     * 
     * O vetor vem configurando como descrito no arquivo tabelatags.js e tabelatributos.js
    */
    function preencheLinha (elemento, texto){
        elemento = criarElemento(elemento);
        elemento.innerHTML = texto;
        return elemento;
    }
    

    /**Transformar em função */
    /** Acessa o vetor de Tags */
    for (var i=0; i < vetorTags.length; i++){
        //Cria a linha do corpo
        var linhaCorpo = criarElemento("tr");
        //Acessa os vetores dentro do vetor Tag
        for (var j = 0; j < vetorTags[i].length; j++){
            //console.log(vetorTags[i][j]);
            var celula = preencheLinha("td", vetorTags[i][j]);
            linhaCorpo.appendChild(celula);
        }
        adicionarElemento(tabela.corpo, linhaCorpo);
    }

})