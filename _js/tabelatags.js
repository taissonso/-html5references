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
        "Define uma abreviatura ou acrônimo.",
        "&lt;abbr title=&#039;HyperText Markup Language&#039;&gt;HTML&lt;/abbr&gt;",
        "<abbr title='HyperText Markup Language'>HTML</abbr>"
    ],
    [
        "&lt;address&gt;",
        "Define as informações de contato do autor/proprietário de um documento.",
        "&lt;address&gt;Escrito por: &lt;br&gt;Taisson S. de Oliveira.&lt;br&gt;Brasil, Pinheiro Machado-RS&lt;br&gt;&lt;/address&gt;",
        "<address>Escrito por: <br>Taisson S. de Oliveira.<br>Brasil, Pinheiro Machado-RS<br></address>"
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
    ]
];