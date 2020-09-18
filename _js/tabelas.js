
/**
 * Vetor com as informações que serão preenchidas no cabeçalho, caso queira mais 
 * colunas basta adicionar mais valores ao vetor.
 */
var descricaoTags = ['Tags', 'Descrição', 'Exemplo', 'Resultado'];
var descricaoAtributo = ['Atributo', 'Pertence a Tag', 'Descrição'];

/** 
 *  Recebe os vetores dos arquivos para passar como parâmetros para a função criarTabela. 
*/
var tabelaTags = vetorTags;
var tabelaAtributos = vetorAtributos;

/** 
 * Chamada da função com as informações de criar a tabela. Se quiser mais tabelas basta chamar a função
 * mais vezes e definir os campos.
 * Parâmetros:
 *      1 - Local onde vai ser colocado a tabela.
 *      2 - Nome da classe para a tabela.
 *      3 - Nome do id para a tabela.
 *      4 - Vetor com as informações que irão conter no cabeçalho.
 *      5 - Vetor com as informações que irão conter no corpo da tabela.
*/

criarTabela('conteudo-tags', 'tabela', 'tabela-tags', descricaoTags, tabelaTags);
criarTabela('conteudo-atributos', 'tabela', 'tabela-atributos', descricaoAtributo, tabelaAtributos);


/** --- Cria a tabela ---
 * - Parâmetros:
 *      1 - Local onde vai ser colocado a tabela.
 *      2 - Nome da classe para a tabela.
 *      3 - Nome do id para a tabela.
 *      4 - Vetor com as informações que irão conter no cabeçalho.
 *      5 - Vetor com as informações que irão conter no corpo da tabela.
 * 
 * - Descrição:
 *      1º - Cria um objeto e suas propriedade.
 *      2º - Pega o local onde vai ser criado a tabela.
 *      3º - Cria os elementos table, thead e tbody chamando a função criarElemento(), onde é 
 *           passado a tag a ser criada.
 *      4º - Adiciona os elementos no local definido com a função adicionarElemento(), onde é 
 *           passado em qual elemento será adicionado e qual a tag a ser adicionado no elemento.
 *      5º - Cria a classe e id para a tabela.
 *      6º - Chama a função criarCabecalho() onde já preenche as informações do cabeçalho, 
 *           passado a tabela para ter acesso ao campo cabeçalho e o vetor contendo as 
 *           informações a serem preenchidas. 
 *      7º - Chama a função preencheCorpo() onde preenche as informações do corpo, com os 
 *           campos objeto tabela, vetor do cabeçalho e vetor do corpo da tabela.
*/
function criarTabela(localTabela, classeTabela, idTabela, descricaoCabecalho, vetorTabela) {
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
    preencheCorpo(tabela, descricaoCabecalho, vetorTabela);
}

/** --- Adiciona os Elementos no HTML ---
 * - Parâmetros:
 *      1 - Em qual elemento vai ser colocado o novo nó filho.
 *      2 - Qual elemento será colocado.
 * 
 * - Descrição: 
 *      - Os elementos são adicionados com appendChild(no final da árvore).
*/
function adicionarElemento(ondeAdiciona, elemento) {
    return ondeAdiciona.appendChild(elemento);
}

/** --- Cria elementos --- 
 * - Parâmetros:
 *      1 - a tag que será criada.
 *  - Descrição:
 *      São criados elementos com o método createDocumento.
*/
function criarElemento(elemento) {
    return document.createElement(elemento);
}


/** --- Cria o cabeçalho com o tr e os th's ---
 * - Parâmetros:
 *      1 - A tabela para acessar o campo cabeçalho.
 *      2 - O vetor contendo os valores das celulas do cabeçalho.
 * - Descrição:
 *      Cria o elemento tr, entra no for onde vai criar cada th e chamar a função
 *      prencheLinhas() que passa a tag th e o vetor com o texto na posição i do for,
 *      adiciona o th ao elemento tr. Ao final do loop for adiciona a linha ao cabeçalho.
*/
function criarCabecalho(tabela, vetor) {
    var linhaCabecalho = criarElemento('tr');
    for (var i = 0; i < vetor.length; i++) {
        var th = preencheLinhas('th', vetor[i]);
        adicionarElemento(linhaCabecalho, th);
    }
    adicionarElemento(tabela.cabecalho, linhaCabecalho);
}


/** --- Preenche a linha do cabeçalho com os valores do vetor --- 
 * - Parâmetros: 
 *      1 - elemento é o th para anexar o texto há celula.
 *      2 - o texto vindo do vetor e adicionado com innerHTML para mostrar o campo resultado.
 * - Descrição: 
 *      O vetor vem configurando como descrito nos arquivos tabelatags.js e tabelatributos.js.
*/
function preencheLinhas(elemento, texto) {
    elemento = criarElemento(elemento);
    elemento.innerHTML = texto;
    return elemento;
}

/** ---  Preenche o corpo da tabela ---
 * - Parâmetros:
 *      1 - O objeto tabela para ter acesso aos seus atributos.
 *      2 - O vetor de descrição do cabeçalho.
 *      3 - O vetor com as informações da tabela.
 * 
 * - Descrição: 
 *      Percorre o array de elementos, cria a linha(elemento tr), cria os elementos 
 *      td(celulas) e span. Adiciona span dentro de td. 
 *      Adiciona a descrição dos spans usa insertAjacentHTML para adiconar a informação 
 *      da tabela depois do elemento span.
 *      Adiciona o elemento td a linha do corpo e por ultimo adiciona a linha ao corpo. 
 *  
*/
function preencheCorpo(tabela, descricaoCabecalho, vetorDaTabela) {
    for (var i = 0; i < vetorDaTabela.length; i++) {
        var linhaCorpo = criarElemento("tr");
        //Acessa os vetores dentro do vetor Tag
        for (var j = 0; j < vetorDaTabela[i].length; j++) {
            var td = criarElemento("td");
            var span = preencheLinhas('span', descricaoCabecalho[j]);
            adicionarElemento(td, span);
            td.insertAdjacentHTML('beforeEnd', vetorDaTabela[i][j]);
            adicionarElemento(linhaCorpo, td);
        }
        adicionarElemento(tabela.corpo, linhaCorpo);
    }
}