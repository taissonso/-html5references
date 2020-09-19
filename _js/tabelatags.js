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
        "Não mostra nada no documento",
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
        "Representa uma seção da página, consiste em conteúdos relacionado com o conteúdo principal"
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
        "<audio controls class=\"audio\"> <source src=\"_audio/easports.mp3\" type=\"audio/mp3\"></audio>"
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
        "Especifica um grupo de uma ou mais colunas em uma tabela para formatação, deve ser filha de um elemento"
        + "&lt;table&gt;, ap&oacute;s qualquer elemento &lt;caption&gt; e antes de qualquer elemento &lt;thead&gt;,"
        + "&lt;tbody&gt;, &lt;tfoot&gt; e &lt;tr&gt;.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_colgroup_test\" target=\"_blank\">Exemplo &lt;colgroup&gt;<a>"
    ],
    [
        "&lt;data&gt;&lt;/data&gt;",
        "É usada para adicionar uma tradução legível por máquina de um determinado conteúdo e"
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
        "Define detalhes adicionais que o usuário pode visualizar ou ocultar",
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
        "Define uma caixa de diálogo ou subjanela, facilita a criação de diálogos"
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
        "&lt;div&gt;&lt;div/&gt;",
        "Define uma divisão ou seção em um documento HTML é usada como um contêiner para elementos HTML"
        + ", qualquer tipo de conteúdo pode ser colocado dentro da &lt;div&gt;",
        "&lt;div class=\&quot;div\&quot;&gt;&lt;h4&gt;Eu sou um &amp;lt;h4&amp;gt; dentro de uma &amp;"
        + "lt;div&amp;gt;.&lt;/h4&gt;&lt;/div&gt;",
        "<div class=\"div\"><h4>Eu sou um &lt;h4&gt; dentro de uma &lt;div&gt;.</h4></div>"
    ],
    [
        "&lt;dl&gt;&lt;/dl&gt;",
        "Define uma lista de descrição",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_dd_test\" target=\"_blank\">Exemplo &lt;dl&gt;<a>"
    ],
    [
        "&lt;dt&gt;&lt;/dt&gt;",
        "Define um termo/nome em uma lista de descrição",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_dd_test\" target=\"_blank\">Exemplo &lt;dt&gt;<a>"
    ],
    [
        "&lt;em&gt;&lt;/em&gt;",
        "Deixa o texto enfatizado",
        "&lt;p&gt;Deixa o texto &lt;em&gt;enfatizado&lt;/em&gt;&lt;/p&gt;",
        "<p>Deixa o texto <em>enfatizado</em></p>"
    ],
    [
        "&lt;embed&gt;",
        "Define um contêiner para um recurso externo, como uma página da web,"
        + "uma imagem, um reprodutor de mídia ou um aplicativo de plug-in.",
        "Clique no link para ver o exemplo.",
        "<a href=\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_embed_html\"" 
        +"target=\"_blank\">Exemplo &lt;embed&gt;<a>"
    ],
    [
        "&lt;fieldset&gt;&lt;/fieldset&gt;",
        "É usada para agrupar elementos relacionados em um formulário."
        + "Desenha uma caixa ao redor dos elementos relacionados.",
        "&lt;fieldset&gt;&lt;legend&gt;Pessoa:&lt;/legend&gt;&lt;label for=\&quot;fname\&quot;&gt;"
        + "Nome:&lt;/label&gt;&lt;input type=\&quot;text\&quot; name=\&quot;fname\&quot;&gt;&lt;"
        + "br&gt;&lt;br&gt;&lt;label for=\&quot;lname\&quot;&gt;Sobrenome:&lt;/label&gt;&lt;"
        + "input type=\&quot;text\&quot; name=\&quot;lname\&quot;&gt;&lt;br&gt;&lt;br&gt;&lt;/fieldset&gt;",
        "<fieldset><legend>Pessoa:</legend><label for=\"fname\">Nome:</label>"
        + "<input type=\"text\" name=\"fname\"><br><br><label for=\"lname\">Sobrenome:</label>"
        + "<input type=\"text\" name=\"lname\"><br><br></fieldset>"
    ],
    [
        "&lt;figcaption&gt;&lt;/figcaption&gt;",
        "Define uma legenda para um elemento &lt;figure&gt;&lt",
        "&lt;figure&gt;&lt;img src=\&quot;./_img/github-grey-25.png\&quot;&gt;&lt;figcaption&gt;"
        + "Figura.1 - GitHub&lt;/figcaption&lt;/figure&gt;",
        "<figure><img src=\"./_img/github-grey-25.png\"><figcaption>Figura.1 - "
        + "GitHub</figcaption></figure>"
    ],
    [
        "&lt;figure&gt;&lt;/figure&gt;",
        "Especifica conteúdo independente, como ilustrações, diagramas, fotos, listagens de código, etc.",
        "&lt;figure&gt;&lt;img src=\&quot;./_img/github-grey-25.png\&quot;&gt;&lt;/figure&gt;",
        "<figure><img src=\"./_img/instagram-grey-25.png\"></figure>"
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
        "<div class=\"exemplo-footer\"<body>Eu sou o corpo ou a seção</body><footer><p>Eu sou o rodapé<br>"
        +"</footer></div>"
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        ""
    ]
];