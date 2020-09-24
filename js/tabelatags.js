/**
 * O vetor de vetores é composto como segue: 
 *      - 1º campo(nome do atributo) e 3º campo(exemplo): os caracteres especiais foram codificados no site
 *           https://www.4devs.com.br/converter_texto_html para o inner mostrar eles como somente texto e não tags.
 *      - 2º campo: é somente texto, não é alterado.
 *      - 4º campo: são as tags como se estivessem no documento HTML, assim mostra como ficaria no documento.
 */

var vetorTags = [
    [
        "&lt;!-- --&gt;", 
        "Usado para fazer comentários dentro do código HTML.", 
        "Comentários não ficam visiveis no navegador.",
        "<!-- -->"
    ],
    [
        "&lt;!DOCTYPE&gt;", 
        "Define para o navegador o tipo de documento.",
        "Não mostra nada no documento.",
        "<!DOCTYPE>"
    ],
    [
        "&lt;a&gt;&lt;/a&gt;", 
        "Define um hiperlink.", 
        "&lt;a href=&#039;https://github.com/taissonso&#039; target=&#039;_blank&#039; title=&#039;GitHub&#039;&gt;&lt;/a&gt;",
        "<a href='https://github.com/taissonso' target='_blank' title='GitHub'>GitHub</a>"
    ],
    [
        "&lt;abbr&gt;&lt;/abbr&gt;",
        "Define uma abreviatura ou acrônimo, ao deixar o ponteiro do mouse em cima da palavra ele mostra a definição especificada.",
        "&lt;abbr title=&#039;HyperText Markup Language&#039;&gt;HTML&lt;/abbr&gt;",
        "<abbr title='HyperText Markup Language'>HTML</abbr>"
    ],
    [
        "<acronym class=\"obsoleto\">&lt;acronym&gt;&lt;/acronym&gt;</acronym>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo. Use &lt;abbr&gt;&lt;/abbr&gt; para substituir.</p>",
        "",
    ],
    [
        "&lt;address&gt;",
        "Define as informações de contato do autor/proprietário de um documento.",
        "&lt;address&gt;Escrito por: &lt;br&gt;Taisson S. de Oliveira.&lt;br&gt;Brasil, Pinheiro Machado-RS&lt;br&gt;&lt;/address&gt;",
        "<address>Escrito por: <br>Taisson S. de Oliveira.<br>Brasil, Pinheiro Machado-RS<br></address>"
    ],
    [
        "<applet class=\"obsoleto\">&lt;applet&gt;&lt;/applet&gt;</applet>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;area&gt;",
        "Define uma área clicável dentro de uma imagem.", 
        "Sem exemplo, a imagem ficaria muito pequena.",
        ""
    ],
    [
        "&lt;article&gt;",
        "Especifica um artigo, um conteúdo independente que pode ser distribuido ou reusado.",
        "&lt;article&gt;&lt;h2&gt;Mozilla Firefox&lt;/h2&gt;&lt;p&gt;Mozilla Firefox foi criado"
        + "em 23 de setembro de 2002. Se tornou um dos mais populares navegadores web do mundo."
        + "&lt;/p&gt;&lt;/article&gt;",
        "<article><h2>Mozilla Firefox</h2><p>Mozilla Firefox foi criado em 23 de setembro de 2002." 
        + "Se tornou um dos mais populares navegadores web do mundo.</p></article>"
    ],
    [
        "&lt;aside&gt;",
        "Representa uma seção da página, consiste em conteúdos relacionados com o conteúdo principal "
        +"geralmente usado como barras laterais na página. Não tem nenhum efeito ao ser processado.",
        "&lt;aside&gt;&lt;h3&gt;Por que usar Mozilla Firefox?&lt;/h3&gt;&lt;p&gt;Pois &eacute;"
        + "mais seguro, pode-se navegar em abas, &eacute; customiz&aacute;vel, tem extensions,"
        + "plugins, etc&lt;/p&gt;&lt;/aside&gt;",
        "<aside><h3>Por que usar Mozilla Firefox?</h3><p>Pois é mais seguro, pode-se navegar em abas,"
        +"é customizável, tem extensions, plugins, etc</p></aside>"
    ],
    [
        "&lt;audio&gt;&lt;/audio&gt;",
        "Usada para incorporar conteúdo de som em um documento, como músicas ou outros fluxos de áudio.",
        "&lt;audio controls class=&quot;audio&quot;&gt;&lt;source src=&quot;_audio/easports.mp3&quot;"
        +"type=&quot;audio/mp3&quot;&gt;&lt;/audio&gt;",
        "<audio controls class=\"audio\"> <source src=\"./audio/easports.mp3\" type=\"audio/mp3\"></audio>"
    ],
    [
        "&lt;b&gt;&lt;/b&gt;",
        "Define o texto em negrito, usado para textos sem muita relevância.",
        "&lt;p&gt;Texto Normal - &lt;b&gt;Texto em negrito&lt;/b&gt;.&lt;/p&gt;",
        "<p>Texto Normal - <b>Texto em negrito</b>.</p>"
    ],
    [
        "&lt;base&gt;",
        "Especifica uma URL base e/ou destino para todos os URLs relativos do documento."
        +"A tag &lt;base&gt; deve ter um href ou atributo target presente ou ambos. Só pode"
        +"haver um único &lt;base&gt; em um documento e deve estar dentro do elemento &lt;head&gt;.",
        "Sem exemplo.",
        ""
    ],
    [
        "<p class=\"obsoleto\">&lt;basefont&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;bdi&gt;&lt;/bdi&gt;",
        "Usado para dar direcionamento para palavras. Como por exemplo palavras árabes que são escritas ao contrário.",
        "Com &lt;bdi&gt;&lt;/bdi&gt; &lt;bdi&gt;إيان&lt;/bdi&gt;: 90&lt;/li&gt;&lt;br&gt;"
        + "Sem &lt;bdi&gt;&lt;/bdi&gt;إيان:90",
        "Com <bdi>إيان</bdi>: 90</li><br>Sem إيان:90"
    ],
    [
        "&lt;bdo&gt;&lt;/bdo&gt;",
        "Usada para substituir a direção do texto.",
        "&lt;p&gt;Da esquerda para a direita.&lt;/p&gt;&lt;p&gt;&lt;bdo dir=\&quot;rtl\&quot;&gt;"
        + "Da direita para a esquerda.&lt;/bdo&gt;&lt;/p&gt;",
        "<p>Da esquerda para a direita.</p><p><bdo dir=\"rtl\">Da direita para a esquerda.</bdo></p>"
    ],
    [
        "<p class=\"obsoleto\">&lt;big&gt;&lt;/big&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        "",
    ],
    [
        "&lt;blockquote&gt;&lt;/blockquote&gt;",
        "Especifica um texto/seção citada de outra fonte. Faz um recuo no texto.",
        "Sem exemplo, dentro da célula da tabela não da para visualizar corretamente o efeito.",
        ""
    ],
    [
        "&lt;body&gt;&lt;/body&gt;",
        "Define o corpo do documento. Onde contém todo o conteúdo de um documento HTML, como títulos"
        + ", parágrafos, imagens, hiperlinks, listas, tabelas e etc. Só pode haver um &lt;body&gt; em um documento HTML.",
        "&lt;div class=\&quot;exemplo-body\&quot;&gt;&lt;body&gt;&amp;lt;body&amp;gt;&lt;p&gt;"
        + "Sou um par&aacute;grafo dentro do &amp;lt;body&amp;gt;!&lt;/p&gt;&lt;/body&gt;&lt;/div&gt;",
        "<div class=\"exemplo-body\"><body>&lt;body&gt;<p>Sou um parágrafo dentro do &lt;body&gt;!</p></body></div>"
    ],
    [
        "&lt;br&gt;",
        "Define a quebra de linhas",
        "&lt;p&gt;Para for&ccedil;ar &lt;br&gt; quebras de linha &lt;br&gt; em um texto, &lt;br&gt; use o elemento &amp;lt;br&amp;gt;",
        "<p>Para forçar <br> quebras de linha <br> em um texto, <br> use o elemento &lt;br&gt;"
    ],
    [
        "&lt;button&gt;&lt;/button&gt;",
        "Define um botão clicável.",
        "&lt;button&gt;Sou um Bot&atilde;o&lt;/button&gt;",
        "<button>Sou um Botão</button>"
    ],
    [
        "&lt;canvas&gt;&lt;/canvas&gt;",
        "Usada para desenhar gráficos, em tempo real, por meio de scripts (geralmente JavaScript).",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas\" target=\"_blank\">Exemplo &lt;canvas&gt;<a>"
    ],
    [
        "&lt;caption&gt;&lt;/caption&gt;",
        "Define a legenda de uma tabela, deve ser inserida imediatamente após a tag &lt;table&gt",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_caption_test\" target=\"_blank\">Exemplo &lt;caption&gt;<a>"
    ],
    [
        "<p class=\"obsoleto\">&lt;center&gt;&lt;/center&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
       "&lt;cite&gt;&lt;/cite&gt;",
        "Define o título de um trabalho criativo (por exemplo, um livro, um poema, uma música, um filme, uma pintura, uma escultura, etc.).",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_cite\" target=\"_blank\">Exemplo &lt;cite&gt;<a>"
    ],
    [
        "&lt;code&gt;&lt;/code&gt;",
        "Usada para dar ao texto o efeito de código de programação.",
        "&lt;p&gt;A propriedade CSS &lt;code&gt;background-color&lt;/code&gt; define a cor de fundo de um elemento.&lt;/p&gt;",
        "<p>A propriedade CSS <code>background-color</code> define a cor de fundo de um elemento.</p>"
    ],
    [
        "&lt;col&gt;",
        "Especifica as propriedades da coluna para cada coluna em um elemento &lt;colgroup&gt; ",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_col_test\" target=\"_blank\">Exemplo &lt;col&gt;<a>"
    ],
    [
        "&lt;colgroup&gt;&lt;/colgroup&gt;",
        "Especifica um grupo de uma ou mais colunas em uma tabela para formatação, deve ser filha de um elemento "
        + "&lt;table&gt;, ap&oacute;s qualquer elemento &lt;caption&gt; e antes de qualquer elemento &lt;thead&gt;,"
        + "&lt;tbody&gt;, &lt;tfoot&gt; e &lt;tr&gt;.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_colgroup_test\" target=\"_blank\">Exemplo &lt;colgroup&gt;<a>"
    ],
    [
        "&lt;data&gt;&lt;/data&gt;",
        "É usada para adicionar uma tradução legível por máquina de um determinado conteúdo e "
        +"um valor legível por humanos para renderização em um navegador.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_data\" target=\"_blank\">Exemplo &lt;data&gt;<a>"
    ],
    [
        "&lt;datalist&gt;&lt;/datalist&gt;",
        "Especifica uma lista de opções predefinidas para um elemento &lt;input&gt;.",
        "&lt;label for=&quot;browser&quot;&gt;Escolha seu navegador na lista:&lt;/label&gt;"
        + "&lt;input list=&quot;browsers&quot; name=&quot;browser&quot; id=&quot;browser&quot;&gt;"
        + "&lt;datalist id=&quot;browsers&quot;&gt;&lt;option value=&quot;Edge&quot;&gt;"
        + "&lt;option value=&quot;Firefox&quot;&gt;&lt;option value=&quot;Chrome&quot;&gt;"
        +  "&lt;option value=&quot;Opera&quot;&gt;&lt;option value=&quot;Safari&quot;&gt;&lt;/datalist&gt;",
        "<label for=\"browser\">Escolha seu navegador na lista:</label><input list=\"browsers\""
        + "name=\"browser\" id=\"browser\"><datalist id=\"browsers\"><option value=\"Edge\">"
        + "<option value=\"Firefox\"><option value=\"Chrome\"><option value=\"\Opera\">"
        + "<option value=\"Safari\"></datalist>"
    ],
    [
        "&lt;dd&gt;&lt;/dd&gt;",
        "Usada para descrever um termo / nome em uma lista de descrição.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_dd_test\" target=\"_blank\">Exemplo &lt;dd&gt;<a>"
    ],
    [
        "&lt;del&gt;&lt;/del&gt;",
        "Define o texto que foi excluído de um documento. ",
        "&lt;p&gt;A cor favorita &eacute; &lt;del&gt;verde&lt;/del&gt; azul!&lt;/p&gt;",
        "<p>A cor favorita é <del>verde</del> azul!</p>"
    ],
    [
        "&lt;details&gt;&lt;/details&gt;",
        "Define detalhes adicionais que o usuário pode visualizar ou ocultar.",
        "&lt;details&gt;&lt;p&gt;Aqui est&aacute; uma descri&ccedil;&atilde;o para fins de"
        + "demosntra&ccedil;&atilde;o.&lt;/p&gt;&lt;/details&gt;",
        "<details><p>Aqui está uma descrição para fins de demosntração.</p></details>"
    ],
    [
        "&lt;dfn&gt;&lt;/dfn&gt;",
        "Significa \"elemento de definição\" e especifica um termo que será definido dentro do conteúdo.",
        "&lt;p&gt;&lt;dfn&gt;HTML&lt;/dfn&gt;&eacute; a linguagem de marca&ccedil;&atilde;o padr&atilde;"
        + "o para criar p&aacute;ginas da web.&lt;/p&gt;",
        "<p><dfn>HTML</dfn>é a linguagem de marcação padrão para criar páginas da web.</p>"
    ],
    [
        "&lt;dialog&gt;&lt;dialog/&gt;",
        "Define uma caixa de diálogo ou subjanela, facilita a criação de diálogos "
        + "pop-up e modais em uma página da web.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_dialog\" target=\"_blank\">Exemplo &lt;dialog&gt;<a>"
    ],
    [
        "<p class=\"obsoleto\">&lt;dir&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;div&gt;&lt;/div&gt;",
        "Define uma divisão ou seção em um documento HTML é usada como um contêiner para elementos HTML"
        + ", qualquer tipo de conteúdo pode ser colocado dentro da &lt;div&gt;.",
        "&lt;div class=\&quot;div\&quot;&gt;&lt;h4&gt;Eu sou um &amp;lt;h4&amp;gt; dentro de uma &amp;"
        + "lt;div&amp;gt;.&lt;/h4&gt;&lt;/div&gt;",
        "<div class=\"div\"><h4>Eu sou um &lt;h4&gt; dentro de uma &lt;div&gt;.</h4></div>"
    ],
    [
        "&lt;dl&gt;&lt;/dl&gt;",
        "Define uma lista de descrição.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_dd_test\" target=\"_blank\">Exemplo &lt;dl&gt;<a>"
    ],
    [
        "&lt;dt&gt;&lt;/dt&gt;",
        "Define um termo/nome em uma lista de descrição.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_dd_test\" target=\"_blank\">Exemplo &lt;dt&gt;<a>"
    ],
    [
        "&lt;em&gt;&lt;/em&gt;",
        "Deixa o texto enfatizado.",
        "&lt;p&gt;Deixa o texto &lt;em&gt;enfatizado&lt;/em&gt;&lt;/p&gt;",
        "<p>Deixa o texto <em>enfatizado</em></p>"
    ],
    [
        "&lt;embed&gt;",
        "Define um contêiner para um recurso externo, como uma página da web, "
        + "uma imagem, um reprodutor de mídia ou um aplicativo de plug-in.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_embed_html\"" 
        +"target=\"_blank\">Exemplo &lt;embed&gt;<a>"
    ],
    [
        "&lt;fieldset&gt;&lt;/fieldset&gt;",
        "É usada para agrupar elementos relacionados em um formulário."
        + "Desenha uma caixa ao redor dos elementos relacionados.",
        "&lt;label for=\&quot;fname\&quot;&gt;"
        + "Nome:&lt;/label&gt;&lt;input type=\&quot;text\&quot; name=\&quot;fname\&quot;&gt;&lt;"
        + "br&gt;&lt;br&gt;&lt;label for=\&quot;lname\&quot;&gt;Sobrenome:&lt;/label&gt;&lt;"
        + "input type=\&quot;text\&quot; name=\&quot;lname\&quot;&gt;&lt;br&gt;&lt;br&gt;&lt;/fieldset&gt;",
        "<div = class=\"exemplo-fieldset\"><fieldset><label for=\"fname\">Nome:</label>"
        + "<input type=\"text\" name=\"fname\"><br><br><label for=\"lname\">Sobrenome:</label>"
        + "<input type=\"text\" name=\"lname\"><br><br></fieldset></div>"
    ],
    [
        "&lt;figcaption&gt;&lt;/figcaption&gt;",
        "Define uma legenda para um elemento &lt;figure&gt;.",
        "&lt;figure&gt;&lt;img src=\&quot;./image/github-grey-25.png\&quot;&gt;&lt;figcaption&gt;"
        + "Figura.1 - GitHub&lt;/figcaption&lt;/figure&gt;",
        "<figure><img src=\"./image/github-grey-25.png\"><figcaption>Figura.1 - "
        + "GitHub</figcaption></figure>"
    ],
    [
        "&lt;figure&gt;&lt;/figure&gt;",
        "Especifica conteúdo independente, como ilustrações, diagramas, fotos, listagens de código, etc.",
        "&lt;figure&gt;&lt;img src=\&quot;./image/github-grey-25.png\&quot;&gt;&lt;/figure&gt;",
        "<figure><img src=\"./image/instagram-grey-25.png\"></figure>"
    ],
    [
        "<p class=\"obsoleto\">&lt;font&gt;&lt;/font&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;footer&gt;&lt;/footer&gt;",
        "Define um rodapé para um documento ou seção.",
        "&lt;div class=\&quot;exemplo-footer\&quot;&lt;body&gt;Eu sou o corpo ou a "
        + "se&ccedil;&atilde;o&lt;/body&gt;&lt;footer&gt;&lt;p&gt;Eu sou o rodap&eacute;"
        + "&lt;br&gt;&lt;/footer&gt;&lt;/div&gt;",
        "<div class=\"exemplo-footer\"<body>Eu sou o corpo ou a seção<footer><p>Eu sou o rodapé<br>"
        +"</footer></body></div>"
    ],
    [
        "&lt;form&gt;&lt;/form&gt;",
        "Define um formulário HTML para entrada do usuário.",
        "&lt;form&gt;&lt;label for=&quot;fname&quot;&gt;Nome:&lt;/label&gt;&lt;"
        + "input type=&quot;text&quot; &gt;&lt;br&gt;&lt;br&gt;&lt;/form&gt;",
        "<form><label for=\"fname\">Nome:</label><input type=\"text\"><br><br></form>"
    ],
    [
        "<p class=\"obsoleto\">&lt;frame&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "<p class=\"obsoleto\">&lt;frameset&gt;&lt;/frameset&gt</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;h1&gt; a &lt;h6&gt;",
        "Define o título de cabeçalho ou título da página. &lt;h1&gt mais importante até o"
        + "&lt;h6&gt; de menos importancia.",
        "&lt;h1&gt;T&iacute;tulo &amp;lt;h1&amp;gt;&lt;/h1&gt;"
        + "&lt;h2&gt;T&iacute;tulo &amp;lt;h2&amp;gt;&lt;/h2&gt;"
        + "&lt;h3&gt;T&iacute;tulo &amp;lt;h3&amp;gt;&lt;/h3&gt;"
        + "&lt;h4&gt;T&iacute;tulo &amp;lt;h4&amp;gt;&lt;/h4&gt;"
        + "&lt;h5&gt;T&iacute;tulo &amp;lt;h5&amp;gt;&lt;/h5&gt;"
        + "&lt;h6&gt;T&iacute;tulo &amp;lt;h6&amp;gt;&lt;/h6&gt;",
        "<h1>Título &lt;h1&gt;</h1><h2>Título &lt;h2&gt;</h2>"
        + "<h3>Título &lt;h3&gt;</h3><h4>Título &lt;h4&gt;</h4>"
        + "<h5>Título &lt;h5&gt;</h5><h6>Título &lt;h6&gt;</h6>"
    ],
    [
        "&lt;head&gt;&lt;/head&gt;",
        "Contém metadados/informações para o documento. Não produz saída visual no navegador.",
        "&lt;head&gt;&lt;title&gt;Title of the document&lt;/title&gt;&lt;/head&gt;",
        ""
    ],
    [
        "&lt;header&gt;&lt;/header&gt;",
        "Define um cabeçalho para um documento ou seção",
        "&lt;div class=\&quot;exemplo-body\&quot;&lt;body&gt;&lt;header class=\&quot;exemplo-header"
        +" \&quot;&gt;&lt;p&gt;Eu sou o cabe&ccedil;alho&lt;/p&gt;&lt;/header&gt;&lt;p&gt;"
        + "Sou o corpo ou se&ccedil;&atilde;o&lt;/p&gt;&lt;/body&gt;&lt;/div&gt;",
        "<div class=\"exemplo-header\">Sou o cabeçalho</div><div class=\"exemplo-body\">Sou o corpo"
        +" ou seção.</div>"
    ],
    [
        "&lt;hr&gt;",
        "Traça uma linha horizontal na tela, muito usada para mudança de assunto ou tópico.",
        "&lt;hr&gt;",
        "<hr>"
    ],
    [
        "&lt;html&gt;&lt;/html&gt;",
        "Define a raiz de um documento HTML",
        "&lt;html&gt;&lt;/html&gt;",
        ""
    ],
    [
        "&lt;i&gt;&lt;/i&gt;",
        "Define uma parte do texto em uma voz ou humor alternativo."
        + "O conteúdo interno é normalmente exibido em itálico .",
        "&lt;p&gt;&lt;i&gt;Mudan&ccedil;a no texto&lt;/i&gt;, sem mudan&ccedil;a no texto.&lt;/p&gt;",
        "<p><i>Mudança no texto</i>, sem mudança no texto.</p>"
    ],
    [
        "&lt;iframe&gt;&lt;/iframe&gt;",
        "Especifica um quadro embutido, é usado para incorporar outro documento ao documento HTML atual. ",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe\"" 
        +"target=\"_blank\">Exemplo &lt;iframe&gt;<a>"
    ],
    [
        "&lt;img&gt;",
        "Define uma imagem.",
        "&lt;img src=\&quot;./image/twitter-grey-3-25.png\&quot;&gt;",
        "<img src=\"./image/twitter-grey-3-25.png\">"
    ],
    [
        "&lt;input&gt;",
        "Define um campo de entrada.",
        "&lt;input type=\&quot;text\&quot;&gt;",
        "<input type=\"text\">"
    ],
    [
        "&lt;ins&gt;&lt;/ins&gt;",
        "Define um texto que foi inserido no documento, da o efeito de sublinhado.",
        "&lt;p&gt;A cor favorita &eacute; &lt;del&gt;verde&lt;/del&gt; &lt;ins&gt;azul&lt;/ins&gt;!&lt;/p&gt;",
        "<p>A cor favorita é <del>verde</del> <ins>azul</ins>!</p>"
    ],
    [
        "&lt;kbd&gt;&lt;/kbd&gt;",
        "Usada para definir a entrada do teclado."
        + "O conteúdo interno é exibido na fonte monoespaçada padrão do navegador.",
        "&lt;p&gt;Pressione &lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;C&lt;/kbd&gt;" 
        + "para copiar texto (Windows).&lt;/p&gt;",
        "<p>Pressione <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar texto (Windows).</p>"
    ],
    [
        "&lt;label&gt;",
        "Define um rótulo para um elemento &lt;input&gt;.",
        "&lt;label&gt;Nome:&lt;/label&gt;&lt;input type=\&quot;text\&quot;&gt;",
        "<label for=\"sim\">Nome: </label><input type=\"text\">"
    ],
    [
        "&lt;legend&gt;&lt;/legend&gt;",
        "Define uma legenda para o elemento &lt;fieldset&gt;.",
        "&lt;fieldset&gt;&lt;legend&gt;Pessoa:&lt;/legend&gt;&lt;label for=\&quot;fname\&quot;"
        + "&gt;Nome:&lt;/label&gt;&lt;input type=\&quot;text\&quot; name=\&quot;"
        + "fname\&quot;&gt;&lt;br&gt;&lt;br&gt;&lt;label for=\&quot;lname\&quot;&gt;"
        + "Sobrenome:&lt;/label&gt;&lt;input type=\&quot;text\&quot; name=\&quot;lname\&quot;"
        + "&gt;&lt;br&gt;&lt;br&gt;&lt;/fieldset&gt;",
        "<div class=\"exemplo-fieldset\"><fieldset><legend>Pessoa:</legend><label for=\"fname\">Nome:</label><input type=\"text\" "
        + "name=\"fname\"><br><br><label for=\"lname\">Sobrenome:</label><input type=\"text\" "
        + "name=\"lname\"><br><br></fieldset></div>"
    ],
    [
        "&lt;li&gt;&lt;/li&gt;",
        "Define um item de uma lista.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_list_test\"" 
        +"target=\"_blank\">Exemplo &lt;li&gt;<a>"
    ],
    [
        "&lt;link&gt;",
        "Define a relação entre o documento atual e um recurso externo.",
        "Exemplo: a relação entre o documento HTML e um arquivo CSS externo.",
        ""
    ],
    [
        "&lt;main&gt;&lt;/main&gt;",
        "Especifica o conteúdo principal de um documento.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_main\"" 
        +"target=\"_blank\">Exemplo &lt;main&gt;<a>"
    ],
    [
        "&lt;map&gt;&lt;/map&gt;",
        "Usada para definir um mapa de imagem. Um mapa de imagem é uma imagem com áreas clicáveis.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_areamap\"" 
        +"target=\"_blank\">Exemplo &lt;map&gt;<a>"
    ],
    [
        "&lt;mark&gt;&lt;/mark&gt;",
        "Define um texto grifado/destacado.",
        "&lt;p&gt;Assim fica o texto &lt;mark&gt;grifado/destacado&lt;/mark&gt;.&lt;/p&gt;",
        "<p>Assim fica o texto <mark>grifado/destacado</mark>.</p>"
    ],
    [
        "&lt;meta&gt;",
        "Define metadados sobre um documento HTML. Metadados são dados (informações) sobre dados. "
        + "Sempre vão dentro do elemento <head> e são normalmente usadas para especificar conjunto de"
        + "caracteres, descrição de página, palavras-chave, autor do documento e configurações de "
        + "janela de visualização.",
        "Não serão exibidos na página, mas podem ser analisados ​​pela máquina.",
        ""
    ],
    [
        "&lt;meter&gt;&lt;/meter&gt;",
        "Define uma medição escalar dentro de uma faixa conhecida ou um valor fracionário.",
        "&lt;label for=&quot;disk_c&quot;&gt;Espa&ccedil;o usado C:&lt;/label&gt;&lt;meter"
        + "id=&quot;disk_c&quot; value=&quot;4&quot; min=&quot;0&quot; max=&quot;10&quot;"
        + "&gt;&lt;/meter&gt;&lt;br&gt;",
        "<label for=\"disk_c\">Espaço usado C:</label><meter id=\"disk_c\" value=\"4\" min=\"0\""
        + "max=\"10\"></meter><br>"
    ],
    [
        "&lt;nav&gt;&lt;/nav&gt;",
        "Define um conjunto de links de navegação.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_nav\"" 
        +"target=\"_blank\">Exemplo &lt;nav&gt;<a>"
    ],
    [
        "<p class=\"obsoleto\">&lt;noframes&gt;&lt;/noframes&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;noscript&gt;&lt;/noscript&gt;",
        "Define um conteúdo alternativo para usuários que não oferecem suporte a scripts do lado do cliente.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_noscript\"" 
        +"target=\"_blank\">Exemplo &lt;noscript&gt;<a>"
    ],
    [
        "&lt;object&gt;&lt;/object&gt;",
        "Define um contêiner para um recurso externo. O recurso externo pode ser uma página da web, "
        + "uma imagem, um reprodutor de mídia ou um aplicativo de plug-in.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_object_video\"" 
        +"target=\"_blank\">Exemplo &lt;object&gt;<a>"
    ],
    [
        "&lt;ol&gt;&lt;/ol&gt;",
        "Define uma lista ordenada. Uma lista ordenada pode ser numérica ou alfabética.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_lists\"" 
        +"target=\"_blank\">Exemplo &lt;ol&gt;<a>"
    ],
    [
        "&lt;optgroup&gt;&lt;/optgroup&gt;",
        "Usada para agrupar opções relacionadas em um elemento &lt;select&gt;.",
        "&lt;label for=&quot;cars&quot;&gt;Escolha um carro:&lt;/label&gt;&lt;select"
        + "name=&quot;cars&quot; id=&quot;cars&quot;&gt;&lt;optgroup label=&quot;Carros Suecos&quot;"
        + "&gt;&lt;option value=&quot;volvo&quot;&gt;Volvo&lt;/option&gt;&lt;option value=&quot;"
        + "saab&quot;&gt;Saab&lt;/option&gt;&lt;/optgroup&gt;&lt;optgroup label=&quot;"
        + "Carros Alem&atilde;es&quot;&gt;&lt;option value=&quot;mercedes&quot;&gt;Mercedes&lt;/option&gt;"
        + "&lt;option value=&quot;audi&quot;&gt;Audi&lt;/option&gt;&lt;/optgroup&gt;&lt;/select&gt;",
        "<label for=\"cars\">Escolha um carro:</label><select name=\"cars\"><optgroup label=\"Carros Suecos\">"
        + "<option value=\"volvo\">Volvo</option><option value=\"saab\">Saab</option></optgroup>"
        +"<optgroup label=\"Carros Alemães\"><option value=\"mercedes\">Mercedes</option><option "
        + "value=\"audi\">Audi</option></optgroup></select>"
    ],
    [
        "&lt;option&gt;&lt;/option&gt;",
        "Define uma opção em um &lt;select&gt;.",
        "&lt;label for=&quot;bebida&quot;&gt;Escolha uma bebida:&lt;/label&gt;&lt;select id=&quot;"
        + "bebida&quot;&gt;&lt;option&gt;Café&lt;/option&gt;&lt;option&gt;Cerveja&lt;/option&gt;&lt;"
        + "option&gt;Água&lt;/option&gt;&lt;option&gt;Refrigerante&lt;/option&gt;&lt;/select&gt;",
        "<label for=\"bebida\">Escolha uma bebida:</label><select id=\"bebida\"><option>Café</option>"
        + "<option>Cerveja</option><option>Água</option><option>Refrigerante</option></select>"
    ],
    [
        "&lt;output &gt;&lt;/output &gt;",
        "Usada para representar o resultado de um cálculo (como um executado por um script).",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_output\"" 
        +"target=\"_blank\">Exemplo &lt;output&gt;<a>"
    ],
    [
        "&lt;p&gt;&lt;/p&gt;",
        "Define um parágrafo.",
        "&lt;p&gt;Eu sou um par&aacute;grafo!&lt;/p&gt;",
        "<p>Eu sou um parágrafo!</p>"
    ],
    [
        "&lt;param&gt;&lt;/param&gt;",
        "Usada para definir parâmetros para um elemento &lt;object&gt;.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_param\"" 
        +"target=\"_blank\">Exemplo &lt;param&gt;<a>"
    ],
    [
        "&lt;picture&gt;&lt;/picture&gt;",
        "Define um contêiner para vários recursos de imagem.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_picture\"" 
        +"target=\"_blank\">Exemplo &lt;picture&gt;<a>"
    ],
    [
        "&lt;pre&gt;&lt;/pre&gt;",
        "Define o texto pré-formatado, é exibido em uma fonte de largura fixa e preserva "
        + "os espaços e as quebras de linha. O texto será exibido exatamente como escrito "
        + "no código-fonte HTML.",
        "&lt;pre&gt;Este elemento est&aacute; pr&eacute;-formatado. "
        +"&Eacute; exibido desse modo.&lt;/pre&gt;",
        "<pre>"
        + "Este elemento está \npré-formatado. \nÉ exibido desse modo.</pre>"
    ],
    [
        "&lt;progress&gt;&lt;/progress&gt;",
        "Representa uma barra de progresso.",
        "&lt;label for=&quot;file&quot;&gt;Downloading progress:&lt;/label&gt;"
        + "&lt;progress id=&quot;file&quot; value=&quot;54&quot; max=&quot;100&quot;&gt;"
        + "54% &lt;/progress&gt;",
        "<label for=\"file\">Downloading progress:</label><progress id=\"file\" value=\"54\"" 
        + "max=\"100\">54% </progress>"
    ],
    [
        "&lt;q&gt;&lt;/q&gt;",
        "Define uma pequena citação.",
        "&lt;p&gt;HTML:&lt;q&gt; &eacute; uma linguagem de marca&ccedil;&atilde;o.&lt;/q&gt;"
        + " Boa sorte no seu aprendizado.&lt;/p&gt;",
        "<p>HTML:<q> é uma linguagem de marcação.</q> Boa sorte no seu aprendizado.</p>"
    ],
    [
        "&lt;rp&gt;&lt;/rp&gt;",
        "Pode ser usada para fornecer parênteses ao redor de um texto ruby, "
        +"para ser mostrado por navegadores que não suportam anotações ruby."
        +" Usado para mostrar anotações &lt;ruby&gt;, que consiste em um ou mais caracteres que precisam "
        +"de uma explicação / pronúncia.",
        "&lt;ruby&gt;漢 &lt;rt&gt;&lt;rp&gt;(&lt;/rp&gt;ㄏㄢˋ&lt;rp&gt;)&lt;/rp&gt;&lt;/rt&gt;&lt;/ruby&gt;",
        "<ruby>漢 <rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt></ruby>"
    ],
    [
        "&lt;rt&gt;&lt;/rt&gt;",
        "Define uma explicação / pronúncia de caracteres (para tipografia do Leste Asiático).",
        "&lt;ruby&gt;漢 &lt;rt&gt; ㄏㄢˋ &lt;/rt&gt;&lt;/ruby&gt;",
        "<ruby>漢 <rt> ㄏㄢˋ </rt></ruby>"
    ],
    [
        "&lt;ruby&gt;&lt;/ruby&gt;",
        "Define uma anotação em rubi (para tipografia do Leste Asiático).",
        "&lt;ruby&gt;漢 &lt;rt&gt; ㄏㄢˋ &lt;/rt&gt;&lt;/ruby&gt;",
        "<ruby>漢 <rt> ㄏㄢˋ </rt></ruby>"
    ],
    [
        "&lt;s&gt;&lt;/s&gt;",
        "especifica o texto que não é mais correto, preciso ou relevante. "
        + "O texto será exibido com uma linha atravessada.",
        "&lt;p&gt;&lt;s&gt;Restam apenas 20 ingressos!&lt;/s&gt;&lt;/p&gt;&lt;p&gt;ESGOTADO!&lt;/p&gt;",
        "<p><s>Restam apenas 20 ingressos!</s></p><p>ESGOTADO!</p>"
    ],
    [
        "&lt;samp&gt;&lt;/samp&gt;",
        "Usada para definir a saída de amostra de um programa de computador.",
        "&lt;p&gt;&lt;samp&gt;Arquivo n&atilde;o encontrado.&lt;br&gt;Pressione F1 para "
        + "continuar&lt;/samp&gt;&lt;/p&gt;",
        "<p><samp>Arquivo não encontrado.<br>Pressione F1 para continuar</samp></p>"
    ],
    [
        "&lt;script&gt;&lt;/script&gt;",
        "Usada para incorporar um script do lado do cliente (JavaScript), contém instruções"
        + "de script ou aponta para um arquivo de script externo por meio do atributo src.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_script\"" 
        +"target=\"_blank\">Exemplo &lt;script&gt;<a>"
    ],
    [
        "&lt;section&gt;&lt;/section&gt;",
        "Define uma seção em um documento.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_section\"" 
        +"target=\"_blank\">Exemplo &lt;section&gt;<a>"
    ],
    [
        "&lt;select&gt;&lt;/select&gt;",
        "Usado para criar uma lista suspensa.",
        "&lt;label for=&quot;opcao&quot;&gt;Escolha uma op&ccedil;&atilde;o:&lt;/label&gt;&lt;"
        + "select name=&quot;opcao&quot; id=&quot;cars&quot;&gt;&lt;option&gt;Op&ccedil;&atilde;o 1&lt;"
        + "/option&gt;&lt;option&gt;Op&ccedil;&atilde;o 2&lt;/option&gt;&lt;/select&gt;",
        "<label for=\"opcao\">Escolha uma opção:</label><select name=\"opcao\" id=\"cars\">"
        + "<option>Opção 1</option><option>Opção 2</option></select>"
    ],
    [
        "&lt;small&gt;&lt;/small&gt;",
        "Define um texto menor.",
        "&lt;p&gt;Texto normal.&lt;/p&gt;&lt;p&gt;&lt;small&gt;Texto com a tag &amp;"
        + "lt;small&amp;gt;&lt;/small&gt;&lt;/p&gt;",
        "<p>Texto normal.</p><p><small>Texto com a tag &lt;small&gt;</small></p>"
    ],
    [
        "&lt;source&gt;&lt;/source&gt;",
        "Usada para especificar vários recursos de mídia para elementos de mídia,  permite que"
        + "você especifique arquivos alternativos de vídeo / áudio / imagem que o navegador "
        + "pode escolher, com base no suporte do navegador ou na largura da janela de visualização. "
        + "O navegador escolherá o primeiro <source> compatível.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_source_src\"" 
        +"target=\"_blank\">Exemplo &lt;source&gt;<a>"
    ],
    [
        "&lt;span&gt;&lt;/span&gt;",
        "É um contêiner embutido usado para marcar uma parte de um texto ou uma parte de um documento.",
        "&lt;p&gt;Eu sou um par&aacute;grafo. &lt;span id=&quot;exemplo-span&quot;&gt;"
        + "Eu sou um &lt;span&gt; estilizado.&lt;/span&gt;&lt;/p&gt;",
        "<p>Eu sou um parágrafo. <span id=\"exemplo-span\">Eu sou um &lt;span&gt; estilizado.</span></p>"
    ],
    [
        "<p class=\"obsoleto\">&lt;strike&gt;&lt;/strike&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;strong&gt;&lt;/strong&gt;",
        "Usada para definir texto de grande importância. O conteúdo interno é normalmente exibido em negrito.",
        "&lt;p&gt;&lt;strong&gt;Sou um par&aacute;grafo em negrito!&lt;/strong&gt;&lt;/p&gt;",
        "<p><strong>Sou um parágrafo em negrito!</strong></p>"
    ],
    [
        "&lt;style&gt;&lt;/style&gt;",
        "Usada para definir informações de estilo (CSS) para um documento.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_style\"" 
        +"target=\"_blank\">Exemplo &lt;style&gt;<a>"
    ],
    [
        "&lt;sub&gt;&lt;/sub&gt;",
        "Define um texto com subscrito.",
        "&lt;p&gt;Esse texto tem &lt;sub&gt;subscrito&lt;/sub&gt;.&lt;/p&gt;",
        "<p>Esse texto tem <sub>subscrito</sub>.</p>"
    ],
    [
        "&lt;details&gt;&lt;/details&gt;",
        "Define um título visível para o elemento &lt;details&gt;. O título pode ser clicado "
        + "para visualizar / ocultar os detalhes.",
        "&lt;details&gt;&lt;summary&gt;Sou o t&iacute;tulo do &amp;lt;details&amp;gt;&lt;/summary&gt;"
        + "&lt;p&gt;Aqui est&aacute; uma descri&ccedil;&atilde;o para fins dedemosntra&ccedil;&atilde;"
        + "o.&lt;/p&gt;&lt;/details&gt;",
        "<details><summary>Sou o título do &lt;details&gt;</summary><p>Aqui está uma descrição para fins dedemosntração.</p></details>"
    ],
    [
        "&lt;sup&gt;&lt;/sup&gt;",
        "Define o texto sobrescrito.",
        "&lt;p&gt;Esse texto tem &lt;sub&gt;sobrescrito&lt;/sub&gt;.&lt;/p&gt;",
        "<p>Esse texto tem <sup>sobrescrito</sup>.</p>"
    ],
    [
        "&lt;svg&gt;&lt;/svg&gt;",
        "Define um contêiner para gráficos SVG. O SVG possui vários métodos para desenhar"
        + "caminhos, caixas, círculos, texto e imagens gráficas.",
        "&lt;svg width=&quot;100&quot; height=&quot;100&quot;&gt;&lt;circle cx=&quot;20&quot;"
        + "cy=&quot;30&quot; r=&quot;10&quot; stroke=&quot;red&quot; stroke-width=&quot;1&quot;"
        +"fill=&quot;yellow&quot; /&gt;Sorry, your browser does not support inline SVG.&lt;/svg&gt;",
        "<svg width=\"100\" height=\"100\"><circle cx=\"20\" cy=\"20\" r=\"10\" stroke=\"red\""
        +"stroke-width=\"1\" fill=\"yellow\"/>Sorry, your browser does not support inline SVG.</svg>"
    ],
    [
        "&lt;table&gt;&lt;/table&gt;",
        "Define uma tabela, mas não mostra a tabela no navegador é necessario outros elementos "
        +"para formar a tabela.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_table_test\"" 
        +"target=\"_blank\">Exemplo &lt;table&gt;<a>"
    ],
    [
        "&lt;tbody&gt;&lt;/tbody&gt;",
        "Usada para agrupar o conteúdo do corpo em uma tabela HTML, é usado em conjunto "
        + "com os elementos &lt;thead&gt; e &lt;tfoot&gt; para especificar cada parte de uma tabela "
        + "(corpo, cabeçalho, rodapé).",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody\"" 
        +"target=\"_blank\">Exemplo &lt;tbody&gt;<a>"
    ],
    [
        "&lt;td&gt;&lt;/td&gt;",
        "Usado para criar céculas no corpo da tabela.",
        "&lt;table&gt;&lt;tr&gt;&lt;td&gt;C&eacute;cula 1&lt;/td&gt;&lt;td&gt;C&eacute;cula 2&lt;"
        + "/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;C&eacute;cula 3&lt;/td&gt;&lt;td&gt;C&eacute;cula 4"
        + "&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;",
        "<table id=\"exemplo-td\"><tr><td>Cécula 1</td><td>Cécula 2</td></tr><tr><td>Cécula 3</td><td>Cécula 4</td>"
        + "</tr></table>"
    ],
    [
        "&lt;template&gt;&lt;/template&gt;",
        "Usada como um contêiner para manter algum conteúdo HTML oculto do usuário quando a página é carregada.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_template\"" 
        +"target=\"_blank\">Exemplo &lt;template&gt;<a>"
    ],
    [
        "&lt;textarea&gt;&lt;/textarea&gt;",
        "Define um controle de entrada de texto de várias linhas.",
        "&lt;textarea&gt;&lt;/textarea&gt;",
        "<textarea></textarea>"
    ],
    [
        "&lt;tfoot&gt;&lt;/tfoot&gt;",
        "Agrupa o conteúdo do rodapé em uma tabela.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody\"" 
        +"target=\"_blank\">Exemplo &lt;tfoot&gt;<a>"
    ],
    [
        "&lt;th&gt;&lt;/th&gt;",
        "Contém informações de cabeçalho da tabela.",
        "&lt;table&gt;&lt;tr&gt;&lt;th&gt;Cabe&ccedil;alho 1&lt;/th&gt;&lt;th&gt;Cabe&ccedil;alho 2&lt;"
        + "/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;C&eacute;lula 1&lt;/td&gt;&lt;td&gt;C&eacute;lula 2&lt;"
        + "/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;C&eacute;lula 3&lt;/td&gt;&lt;td&gt;$C&eacute;lula 4&lt;"
        + "/td&gt;&lt;/tr&gt;&lt;/table&gt;",
        "<table id=\"exemplo-td\"><tr><th>Cabeçalho 1</th><th>Cabeçalho 2</th></tr><tr><td>Célula 1</td><td>Célula 2</td>"
        + "</tr><tr><td>Célula 3</td><td>$Célula 4</td></tr></table>"
    ],
    [
        "&lt;thead&gt;&lt;/thead&gt;",
        "Agrupa o conteúdo do cabeçalho da tabela.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody\"" 
        +"target=\"_blank\">Exemplo &lt;thead&gt;<a>"
    ],
    [
        "&lt;time&gt;&lt;/time&gt;",
        "Define uma hora específica (ou data e hora).",
        "&lt;p&gt;Abrimos &agrave;s &lt;time&gt;13:30&lt;/time&gt;&lt;/p&gt;",
        "<p>Abrimos às <time>13:30</time></p>"
    ],
    [
        "&lt;title&gt;&lt;/title&gt;",
        "Define o título do documento HTML, mostrado na aba/janela do navegador.",
        "A tag &lt;title&gt; fica dentro da tag &lt;head&gt;",
        "Inspencione esse documento para encontrar a tag &lt;title&gt;"
    ],
    [
        "&lt;tr&gt;&lt;/tr&gt;",
        "Usado para criar céculas no corpo da tabela.",
        "&lt;table id=\&quot;exemplo-td\&quot;&gt;&lt;tr&gt;&lt;td&gt; Linha 1 Cel 1&lt;/td&gt;&lt;td&gt;"
        + "Linha 1 Cel.2&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;",
        "<table id=\"exemplo-td\"><tr><td> Linha 1 Cel 1</td><td>Linha 1 Cel.2</td></tr></table>"
    ],
    [
        "&lt;track &gt;",
        "Este elemento é usado para especificar legendas, arquivos de legendas ou outros arquivos"
        + " contendo texto, que devem ser visíveis durante a reprodução da mídia.",
        "Sem exemplo",
        ""
    ],
    [
        "<p class=\"obsoleto\">&lt;tt&gt;&lt;/tt&gt;</p>",
        "<p class=\"obsoleto\">Obsoleto, não compatível com HTML5.</p>",
        "<p class=\"obsoleto\">Sem exemplo.</p>",
        ""
    ],
    [
        "&lt;u&gt;&lt;/u&gt;",
        "Representa algum texto não articulado e com estilo diferente do texto normal,"
        + " como palavras com erros ortográficos ou nomes próprios em texto chinês.",
        "&lt;p&gt;T&aacute; &lt;u&gt;serto&lt;/u&gt;&lt;/p&gt;",
        "<p>Tá <u>serto</u></p>"
    ],
    [
        "&lt;ul&gt;&lt;/ul&gt;",
        "Define uma lista não ordenada (com marcadores).",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_lists4\"" 
        +"target=\"_blank\">Exemplo &lt;ul&gt;<a>"
    ],
    [
        "&lt;var&gt;&lt;/var&gt;",
        "Usada para definir uma variável na programação ou em uma expressão matemática."
        + "O conteúdo interno é normalmente exibido em itálico.",
        "&lt;p&gt;Sou a vari&aacute;vel  &lt;var&gt;x&lt;/var&gt; e eu a vari&aacute;vel"
        + "&lt;var&gt;y&lt;/var&gt;.&lt;/p&gt;",
        "<p>Sou a variável  <var>x</var> e eu a variável <var>y</var>.</p>"
    ],
    [
        "&lt;video&gt;&lt;/video&gt;",
        "Usada para incorporar conteúdo de vídeo em um documento, como um clipe de filme "
        + "ou outros fluxos de vídeo. Contém uma ou mais tags &lt;source&gt; com diferentes fontes de vídeo."
        + "O navegador escolherá a primeira fonte que suporta.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video\"" 
        +"target=\"_blank\">Exemplo &lt;video&gt;<a>"
    ],
    [
        "&lt;wbr&gt;",
        "Especifica onde em um texto seria correto adicionar uma quebra de linha.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_wbr\"" 
        +"target=\"_blank\">Exemplo &lt;wbr&gt;<a>"
    ]
];