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
        "Usado para fazer comentários dentro do código HTML", 
        "Comentários não ficam visiveis no navegador",
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
        "Define um hiperlink", 
        "&lt;a href=&#039;https://github.com/taissonso&#039; target=&#039;_blank&#039; title=&#039;GitHub&#039;&gt;&lt;/a&gt;",
        "<a href='https://github.com/taissonso' target='_blank' title='GitHub'>GitHub</a>"
    ],
    [
        "&lt;abbr&gt;&lt;/abbr&gt;",
        "Define uma abreviatura ou acrônimo",
        "&lt;abbr title=&#039;HyperText Markup Language&#039;&gt;HTML&lt;/abbr&gt;",
        "<abbr title='HyperText Markup Language'>HTML</abbr>"
    ]
];