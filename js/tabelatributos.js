
var vetorAtributos = [
    [
        "accept",
        "&lt;input&gt;",
        "Especifica os tipos de arquivos que o servidor aceita "
        +"(que podem ser enviados por meio de um upload de arquivo)."
    ],
    [
        "accept-charset",
        "&lt;form&gt;",
        "Especifica as codificações de caracteres que devem ser usadas para o envio do formulário."
    ],
    [
        "accesskey",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica uma tecla de atalho para ativar / focar um elemento."
    ],
    [
        "action",
        "&lt;form&gt;",
        "Especifica para onde enviar os dados do formulário quando um formulário é enviado."
    ],
    [
        "<p class=\"obsoleto\">align</p>",
        "<p class=\"obsoleto\">Não suportado com HTML5.</p>",
        "<p class=\"obsoleto\">Especifica o alinhamento de acordo com os elementos circundantes. Use CSS.</p>"
    ],
    [
        "alt",
        "<p>&lt;area&gt;</p><p>&lt;img&gt;</p><p>&lt;input&gt;</p>",
        "fornece informações alternativas para uma imagem se um usuário por algum motivo não puder visualizá-la"
        + "(devido à conexão lenta, um erro no atributo src ou se o usuário usar um leitor de tela)."
    ],
    [
        "async",
        "&lt;script&gt;",
        "Especifica que o script será executado de forma assíncrona assim que estiver disponível, "
        + "apenas para scripts externos (e só deve ser usado se o atributo src estiver presente)."
    ],
    [
        "autocomplete",
        "<p>&lt;form&gt;</p><p>&lt;input&gt;</p>",
        "Especifica se um formulário ou campo de entrada deve ter o autocomplete ativado ou desativado."
    ],
    [
        "autofocus",
        "<p>&lt;button&gt;</p><p>&lt;input&gt;</p><p>&lt;select&gt;</p><p>&lt;textarea&gt;</p>",
        "Especifica que o elemento deve obter o foco automaticamente quando a página é carregada."
    ],
    [
        "autoplay",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Começará a ser reproduzido automaticamente assim que puder, sem parar."
    ],
    [
        "<p class=\"obsoleto\">bgcolor</p>",
        "<p class=\"obsoleto\">Não suportado com HTML5.</p>",
        "<p class=\"obsoleto\">Especifica a cor de fundo de um elemento. Use CSS.</p>"
    ],
    [
        "<p class=\"obsoleto\">border</p>",
        "<p class=\"obsoleto\">Não suportado com HTML5.</p>",
        "<p class=\"obsoleto\">Especifica a largura da borda de um elemento. Use CSS.</p>"
    ],
    [
        "charset",
        "<p>&lt;meta&gt;</p><p>&lt;script&gt;</p>",
        "Especifica a codificação de caracteres para o documento"
    ],
    [
        "checked",
        "<p>&lt;input&gt;</p>",
        "Especifica que um elemento &lt;input&gt; deve ser pré-selecionado (verificado) quando a página carrega."
    ],
    [
        "cite",
        "<p>&lt;blockquote&gt;</p><p>&lt;del&gt;</p><p>&lt;ins&gt;</p><p>&lt;q&gt;</p>",
        "Especifica uma URL para um documento que explica a citação, ou porque o texto foi inserido/alterado."
    ],
    [
        "class",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica um ou mais nomes de classe para um elemento."
    ],
    [
        "<p class=\"obsoleto\">color</p>",
        "<p class=\"obsoleto\">Não suportado com HTML5.</p>",
        "<p class=\"obsoleto\">Especifica a cor do texto de um elemento. Use CSS.</p>"
    ],
    [
        "cols",
        "&lt;textarea&gt;",
        "Especifica a largura visível de uma área de texto."
    ],
    [
        "colspan",
        "<p>&lt;td&gt;</p><p>&lt;th&gt;</p>",
        "Define o número de colunas que uma célula da tabela deve abranger."
    ],
    [
        "content",
        "&lt;meta&gt;",
        "Fornece o valor associado ao http-equiv ou ao atributo name."
    ],
    [
        "contenteditable",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica se o conteúdo de um elemento é editável ou não."
    ],
    [
        "controls",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Especifica que os controles de áudio/vídeo devem ser exibidos."
    ],
    [
        "coords",
        "&lt;area&gt;",
        "Especifica as coordenadas de uma área em um mapa de imagem."
    ],
    [
        "data",
        "&lt;object&gt;",
        "Especifica a URL do recurso a ser usado pelo objeto."
    ],
    [
        "data-*",
        "Atributo Global, pode usar em todas as Tags",
        "É usado para armazenar/incorporar dados personalizados privados para a página ou aplicativo."
    ],
    [
        "datetime",
        "<p>&lt;del&gt;</p><p>&lt;ins&gt;</p><p>&lt;time&gt;</p>",
        "Especifica a data e hora em que o texto foi excluído/inserido."
    ],
    [
        "default",
        "&lt;track&gt;",
        "Especifica que a faixa deve ser ativada se as preferências do usuário"
        + "não indicarem que outra faixa seria mais apropriada."
    ],
    [
        "defer",
        "&lt;script&gt;",
        "Especifica que o script é executado quando a página termina de analisar."
        + "Apenas para scripts externos (só deve ser usado se o atributo src estiver presente)."
    ],
    [
        "dir",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica a direção do texto do conteúdo do elemento."
    ],
    [
        "dirname",
        "<p>&lt;input&gt;</p><p>&lt;textarea&gt;</p>",
        "Permite o envio da direção do texto do campo de entrada/textarea. O valor do atributo"
        + "dirname é sempre o nome do campo de entrada / textarea, seguido por \".dir\"."
    ],
    [
        "disabled",
        "<p>&lt;button&gt;</p><p>&lt;fieldset&gt;</p><p>&lt;input&gt;</p><p>&lt;optgroup&gt;</p>"
        +" <p>&lt;option&gt;</p><p>&lt;select&gt;</p><p>&lt;textarea&gt;</p>",
        "Especifica que o elemento deve ser desativado."
    ],
    [
        "download",
        "<p>&lt;a&gt;</p><p>&lt;area&gt;</p>",
        "Especifica que o destino será baixado quando um usuário clicar no hiperlink."
        + " Este atributo é usado apenas se o atributo href estiver definido."
    ],
    [
        "draggable",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica se um elemento é arrastável ou não."
    ],
    [
        "enctype",
        "<p>&lt;form&gt;</p>",
        "Especifica como os dados do formulário devem ser codificados ao enviá-los ao servidor."
        +" Nota: O atributo enctype pode ser usado apenas se method = \"post\" estiver presente."
    ],
    [
        "for",
        "<p>&lt;label&gt;</p><p>&lt;output&gt;</p>",
        "&lt;label&gt;, o atributo for especifica a qual elemento de formulário um rótulo está vinculado."
        + "<p>&lt;output&gt; o atributo for especifica a relação entre o resultado do cálculo e os elementos"
        + "usados ​​no cálculo.</p>"
    ],
    [
        "form",
        "<p>&lt;button&gt;</p><p>&lt;fieldset&gt;</p><p>&lt;input&gt;</p><p>&lt;label&gt;</p>"
        + "<p>&lt;meter&gt;</p><p>&lt;object&gt;</p><p>&lt;output&gt;</p><p>&lt;select&gt;</p>"
        + "<p>&lt;textarea&gt;</p>",
        "Especifica o formulário ao qual o elemento pertence. O valor deste atributo deve ser"
        + " igual ao atributo id de um elemento &lt;form&gt; no mesmo documento."
    ],
    [
        "formaction",
        "<p>&lt;button&gt;</p><p>&lt;input&gt;</p>",
        "Especifica para onde enviar os dados do formulário quando um formulário é enviado."
        + " Este atributo substitui o atributo action do formulário. O atributo formaction é "
        + " usado apenas para entradas/botões com type = \"submit\"."
    ],
    [
        "headers",
        "<p>&lt;td&gt;</p><p>&lt;th&gt;</p>",
        "Especifica uma ou mais células de cabeçalho às quais uma célula da tabela está relacionada."
    ],
    [
        "height",
        "<p>&lt;canvas&gt;</p><p>&lt;embed&gt;</p><p>&lt;iframe&gt;</p><p>&lt;img&gt;</p><p>&lt;input&gt;</p>"
        + "<p>&lt;object&gt;</p><p>&lt;video&gt;</p>",
        "Especifica a altura do elemento, em pixels."
    ],
    [
        "hidden",
        "Atributo Global, pode usar em todas as Tags",
        "Deixa o elemento oculto."
    ],
    [
        "high",
        "&lt;meter&gt;",
        "Especifica o intervalo em que o valor do medidor é considerado um valor alto. O valor "
        + "deve ser menor que o valor de atributo máximo e também deve ser maior que os valores "
        + "de atributo baixo e mínimo."
    ],
    [
        "href",
        "<p>&lt;a&gt;</p><p>&lt;area&gt;</p><p>&lt;base&gt;</p><p>&lt;link&gt;</p>",
        "<p>Para os elementos &lt;a&gt; e &lt;area&gt;, o atributo href especifica a URL da página"
        + " para a qual o link vai.</p>"
        + "<p>Para elementos &lt;base&gt;, o atributo href especifica o URL base para todos os URLs "
        + "relativos em uma página.</p>"
        + "<p>Para elementos &lt;link&gt;, o atributo href especifica a localização (URL) do recurso externo "
        + "(geralmente um arquivo de folha de estilo).</p>"
    ],
    [
        "hreflang",
        "<p>&lt;a&gt;</p><p>&lt;area&gt;</p><p>&lt;link&gt;</p>",
        "Especifica o idioma do documento vinculado. Nota: este atributo é puramente consultivo."
    ],
    [
        "http-equiv",
        "&lt;meta&gt;",
        "Fornece um cabeçalho HTTP para a informação/valor do atributo content ."
        +"Pode ser usado para simular um cabeçalho de resposta HTTP."
    ],
    [
        "id",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica um identificador único para o elemento."
    ],
    [
        "ismap",
        "&lt;img&gt;",
        "Especifica que a imagem faz parte de um mapa de imagem do lado do servidor"
        + "(um mapa de imagem é uma imagem com áreas clicáveis)."
    ],
    [
        "kind",
        "&lt;track&gt;",
        "Especifica o tipo de trilha de texto."
    ],
    [
        "label",
        "<p>&lt;track&gt;</p><p>&lt;option&gt;</p><p>&lt;optgroup&gt;</p>",
        "Especifica o título da trilha de texto. O título da trilha de texto é usado pelo navegador"
        + " ao listar as trilhas de texto disponíveis."
    ],
    [
        "lang",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica o idioma do conteúdo do elemento."
    ],
    [
        "list",
        "&lt;input&gt;",
        "Se refere a um elemento &lt;datalist&gt; que contém opções predefinidas para um "
        + "elemento &lt;input&gt;."
    ],
    [
        "loop",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Especifica que o áudio será reiniciado sempre que for finalizado."
    ],
    [
        "low",
        "<p>&lt;meter&gt;</p>",
        "Especifica o intervalo em que o valor do medidor é considerado um valor baixo. O valor de "
        + "atributo baixo deve ser maior que o valor de atributo mínimo e também deve ser menor que "
        + "os valores de atributo alto e máximo."
    ],
    [
        "max",
        "<p>&lt;input&gt;</p><p>&lt;meter&gt;</p><p>&lt;progress&gt;</p>",
        "Especifica o valor máximo do elemento. Quando usado pelo elemento &lt;progress&gt;,"
        + "o atributo max especifica quanto trabalho a tarefa requer no total."
    ],
    [
        "maxlength",
        "<p>&lt;input&gt;</p><p>&lt;textarea&gt;</p>",
        "Especifica o número máximo de caracteres permitidos no elemento."
    ],
    [
        "media",
        "<p>&lt;a&gt;</p><p>&lt;area&gt;</p><p>&lt;link&gt;</p><p>&lt;source&gt;</p><p>&lt;style&gt;</p>",
        "Especifica para qual mídia/dispositivo o documento vinculado é otimizado. Este atributo é usado "
        + "para especificar que o URL de destino é projetado para dispositivos especiais (como iPhone), "
        + "fala ou mídia impressa."
    ],
    [
        "method",
        "&lt;form&gt;",
        "Especifica como enviar dados de formulário (os dados de formulário são enviados para a página "
        + "especificada no atributo action)."
    ],
    [
        "min",
        "<p>&lt;input&gt;</p><p>&lt;meter&gt;</p>",
        "Especifica o valor mínimo de um elemento do elemento. Quando usado junto com o elemento "
        + "&lt;meter&gt;, o atributo min especifica o limite inferior do medidor."
    ],
    [
        "multiple",
        "<p>&lt;input&gt;</p><p>&lt;select&gt;</p>",
        "Especifica que o usuário tem permissão para inserir/selecionar mais de um valor."
    ],
    [
        "muted",
        "<p>&lt;video&gt;</p><p>&lt;audio&gt;</p>",
        "Especifica que a saída de áudio do vídeo deve ser silenciada."
    ],
    [
        "name",
        "<p>&lt;button&gt;</p><p>&lt;fieldset&gt;</p><p>&lt;form&gt;</p><p>&lt;iframe&gt;</p>"
        + "<p>&lt;input&gt;</p><p>&lt;map&gt;</p><p>&lt;meta&gt;</p><p>&lt;object&gt;</p>"
        + "<p>&lt;output&gt;</p><p>&lt;param&gt;</p><p>&lt;select&gt;</p><p>&lt;textarea&gt;</p>",
        "<p>Especifica um nome para o elemento, pode ser usado para fazer referência ao elemento em um JavaScript.</p>"
        + "<p>Para elementos de formulário, também é usado como uma referência quando os dados são enviados, para "
        + "o elemento iframe, ele pode ser usado para direcionar o envio de um formulário.</p>"
        + "<p>Para o elemento map, o atributo name é associado ao atributo usemap de &lt;img&gt; e "
        + "cria um relacionamento entre a imagem e o mapa.</p>"
        + "<p>Para o elemento meta, o atributo name especifica um nome para a informação/valor do atributo content.</p>"
        + "<p>Para o elemento param, o atributo name é usado junto com o atributo value para especificar parâmetros "
        + "para o plugin especificado com a tag  &lt;object&gt;.</p>"
    ],
    [
        "novalidate",
        "&lt;form&gt;",
        "Especifica que os dados do formulário (entrada) não devem ser validados ao serem enviados."
    ],
    [
        "onabort",
        "<p>&lt;audio&gt;</p><p>&lt;embed&gt;</p><p>&lt;img&gt;</p><p>&lt;object&gt;</p>"
        + "<p>&lt;video&gt;</p>",
        "Define um script a ser executado se o carregamento do arquivo de mídia for interrompido."
        + " Este evento ocorre quando o download dos dados de mídia foi abortado e não devido a um erro."
    ],
    [
        "onafterprint",
        "&lt;body&gt;",
        "Dispara quando uma página começa a ser impressa ou se a caixa de diálogo de impressão foi fechada."
    ],
    [
        "onbeforeprint",
        "&lt;body&gt;",
        "Dispara quando uma página está prestes a ser impressa (antes que a caixa de diálogo de impressão apareça)."
    ],
    [
        "onblur",
        "Todos os elementos visíveis.",
        "Dispara no momento em que o elemento perde o foco. Onblur é mais frequentemente usado com código"
        + " de validação de formulário (por exemplo, quando o usuário sai de um campo de formulário)."
    ],
    [
        "oncanplay",
        "<p>&lt;audio&gt;</p><p>&lt;embed&gt;</p><p>&lt;object&gt;</p><p>&lt;video&gt;</p>",
        "Define um script a ser executado quando o navegador puder iniciar a reprodução da mídia especificada"
        + " (quando houver buffer suficiente para começar)."
    ],
    [
        "oncanplaythrough",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "O evento oncanplaythrough ocorre quando o navegador estima que pode reproduzir o áudio / vídeo especificado"
        + " sem ter que parar para armazenamento em buffer."
    ],
    [
        "onchange",
        "Todos os elementos visíveis.",
        "Dispara o momento em que o valor do elemento é alterado."
    ],
    [
        "onclick",
        "Todos os elementos visíveis.",
        "Dispara com um clique do mouse no elemento."
    ],
    [
        "oncontextmenu",
        "Todos os elementos visíveis.",
        "Disparado quando o usuário clica com o botão direito em um elemento para abrir o menu de contexto."
    ],
    [
        "oncopy",
        "Todos os elementos visíveis.",
        "Disparado quando o usuário copia o conteúdo de um elemento."
    ],
    [
        "oncuechange",
        "&lt;track&gt;",
        "Define um script a ser executado quando o ecue muda em um elemento &lt;track&gt;."
    ],
    [
        "oncut",
        "Todos os elementos visíveis.",
        "Disparado quando o usuário corta o conteúdo de um elemento."
    ],
    [
        "ondblclick",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o elemento está sendo clicado duas vezes."
    ],
    [
        "ondrag",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o elemento estiver sendo arrastado."
    ],
    [
        "ondragend",
        "Todos os elementos visíveis.",
        "Script a ser executado no final de uma operação de arrastar."
    ],
    [
        "ondragenter",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um elemento for arrastado para um destino de soltar válido."
    ],
    [
        "ondragleave",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um elemento deixa um destino de descarte válido."
    ],
    [
        "ondragover",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um elemento está sendo arrastado sobre um destino de soltar válido."
    ],
    [
        "ondragstart",
        "Todos os elementos visíveis.",
        "Script a ser executado no início de uma operação de arrastar."
    ],
    [
        "ondrop",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o elemento arrastado for solto."
    ],
    [
        "ondurationchange",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando os dados de duração do áudio/vídeo especificado são alterados."
    ],
    [
        "onemptied",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando algo de ruim acontecer e o arquivo ficar indisponível"
        + " repentinamente (como uma desconexão inesperada)."
    ],
    [
        "onended",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando a mídia chegar ao fim (um evento útil para mensagens como"
        + " \"obrigado por ouvir\")"
    ],
    [
        "onerror",
        "<p>&lt;audio&gt;</p><p>&lt;body&gt;</p><p>&lt;embed&gt;</p><p>&lt;img&gt;</p>"
        + "<p>&lt;object&gt;</p><p>&lt;script&gt;</p><p>&lt;style&gt;</p><p>&lt;video&gt;</p>",
        "Quando ocorre um erro durante o carregamento de um arquivo de mídia."
    ],
    [
        "onfocus",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o elemento recebe o foco."
    ],
    [
        "onhashchange",
        "<p>&lt;body&gt;</p>",
        "É acionado quando há mudanças na parte da âncora (começa com o símbolo '#') da URL atual."
    ],
    [
        "oninput",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o elemento obtém a entrada do usuário."
    ],
    [
        "oninvalid",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o elemento for inválido."
    ],
    [
        "onkeydown",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um usuário pressiona uma tecla."
    ],
    [
        "onkeypress",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um usuário pressiona uma tecla"
    ],
    [
        "onkeyup",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um usuário libera uma tecla."
    ],
    [
        "onload",
        "<p>&lt;body&gt;</p><p>&lt;iframe&gt;</p><p>&lt;img&gt;</p><p>&lt;input&gt;</p>"
        + "<p>&lt;link&gt;</p><p>&lt;script&gt;</p><p>&lt;style&gt;</p>",
        "Script a ser executado quando o elemento terminar de carregar."
    ],
    [
        "onloadeddata",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script ocorre quando os dados do quadro atual são carregados, mas não há dados suficientes"
        + " para reproduzir o próximo quadro do áudio / vídeo especificado."
    ],
    [
        "onloadedmetadata",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script ocorre quando metadados para o áudio / vídeo especificado foram carregados."
        + " Os metadados para áudio / vídeo consistem em: duração, dimensões (apenas vídeo)"
        + " e faixas de texto."
    ],
    [
        "onloadstart",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script deve ser executado assim que o arquivo começa a carregar, antes que qualquer"
        + " coisa seja realmente carregada"
    ],
    [
        "onmousedown",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um botão do mouse é pressionado em um elemento"
    ],
    [
        "onmousemove",
        "Todos os elementos visíveis.",
        "Script a ser executado enquanto o ponteiro do mouse estiver se movendo sobre um elemento."
    ],
    [
        "onmouseout",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o ponteiro do mouse sai de um elemento."
    ],
    [
        "onmouseover",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o ponteiro do mouse se move sobre um elemento."
    ],
    [
        "onmouseup",
        "Todos os elementos visíveis.",
        "Script a ser executado quando um botão do mouse é liberado sobre um elemento."
    ],
    [
        "onmousewheel",
        "Todos os elementos visíveis.",
        "Script a ser executado quando a roda do mouse está sendo rolada sobre um elemento."
    ],
    [
        "onoffline",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando o navegador começar a funcionar offline."
    ],
    [
        "ononline",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando o navegador começar a funcionar online."
    ],
    [
        "onpagehide",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando um usuário sai de uma página."
    ],
    [
        "onpageshow",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando um usuário navega para uma página."
    ],
    [
        "onpaste",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o usuário cola algum conteúdo em um elemento."
    ],
    [
        "onpause",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando a mídia for pausada pelo usuário ou programaticamente."
    ],
    [
        "onplay",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando a mídia começar a ser reproduzida."
    ],
    [
        "onplaying",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando a mídia começar a ser reproduzida."
    ],
    [
        "onpopstate	",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando o histórico da janela mudar."
    ],
    [
        "onprogress",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando o navegador estiver no processo de obtenção dos dados de mídia."
    ],
    [
        "onratechange",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado toda vez que a taxa de reprodução muda (como quando um usuário muda "
        + "para um modo de câmera lenta ou avanço rápido)."
    ],
    [
        "onreset",
        "<p>&lt;form&gt;</p>",
        "Script a ser executado quando um botão de redefinição em um formulário é clicado."
    ],
    [
        "onresize",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando a janela do navegador estiver sendo redimensionada."
    ],
    [
        "onscroll",
        "Todos os elementos visíveis.",
        "Script a ser executado quando a barra de rolagem de um elemento está sendo rolada."
    ],
    [
        "onsearch",
        "<p>&lt;input&gt;</p>",
        "Script a ser executado quando o usuário escreve algo em um campo de pesquisa."
    ],
    [
        "onseeked",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando o atributo de busca for definido como falso, "
        + "indicando que a busca terminou."
    ],
    [
        "onseeking",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando o atributo de busca for definido como true, "
        + "indicando que a busca está ativa."
    ],
    [
        "onselect",
        "Todos os elementos visíveis.",
        "Script a ser executado quando o elemento for selecionado."
    ],
    [
        "onstalled",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando o navegador não puder buscar os dados da mídia por qualquer motivo."
    ],
    [
        "onstorage",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando uma área de armazenamento da Web for atualizada."
    ],
    [
        "onsubmit",
        "<p>&lt;form&gt;</p>",
        "Script a ser executado quando um formulário é enviado."
    ],
    [
        "onsuspend",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "O script a ser executado ao buscar os dados da mídia é interrompido antes"
        + " de ser completamente carregado por qualquer motivo"
    ],
    [
        "ontimeupdate",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando a posição de reprodução for alterada (como"
        + " quando o usuário avança rapidamente para um ponto diferente na mídia)."
    ],
    [
        "ontoggle",
        "<p>&lt;details&gt;</p>",
        "Script a ser executado quando o usuário abre ou fecha o elemento &lt;details&gt;."
    ],
    [
        "onunload",
        "<p>&lt;body&gt;</p>",
        "Script a ser executado quando uma página for descarregada (ou a janela do navegador for fechada)."
    ],
    [
        "onvolumechange",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado toda vez que o volume de um vídeo/áudio for alterado."
    ],
    [
        "onwaiting",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Script a ser executado quando a mídia for pausada, mas deverá continuar "
        + "(como quando a mídia pausa para armazenar mais dados em buffer)."
    ],
    [
        "onwheel",
        "Todos os elementos visíveis.",
        "Script a ser executado quando a roda do mouse rolar para cima ou para baixo sobre um elemento."
    ],
    [
        "open",
        "<p>&lt;details&gt;</p>",
        "Especifica que os detalhes devem ser visíveis (abertos) para o usuário."
    ],
    [
        "optimum",
        "<p>&lt;meter&gt;</p>",
        "Especifica qual valor é o valor ideal para o medidor (range)."
    ],
    [
        "placeholder",
        "<p>&lt;input&gt;</p><p>&lt;textarea&gt;</p>",
        "Especifica uma pequena dica que descreve o valor esperado do elemento."
    ],
    [
        "poster",
        "<p>&lt;video&gt;</p>",
        "O atributo poster especifica uma imagem a ser exibida durante o download do vídeo ou até"
        + " que o usuário pressione o botão de reprodução. Se isso não for incluído, o primeiro quadro"
        + " do vídeo será usado."
    ],
    [
        "preload",
        "<p>&lt;audio&gt;</p><p>&lt;video&gt;</p>",
        "Especifica se e como o autor acha que o áudio / vídeo deve ser carregado quando a página é carregada."
    ],
    [
        "readonly",
        "<p>&lt;input&gt;</p><p>&lt;textarea&gt;</p>",
        "Especifica que o elemento é somente leitura."
    ],
    [
        "rel",
        "<p>&lt;a&gt;</p><p>&lt;area&gt;</p><p>&lt;form&gt;</p><p>&lt;link&gt;</p>",
        "Especifica a relação entre o documento atual e o documento vinculado."
    ],
    [
        "required",
        "<p>&lt;input&gt;</p><p>&lt;select&gt;</p><p>&lt;textarea&gt;</p>",
        "Especifica que o elemento deve ser preenchido antes de enviar o formulário."
    ],
    [
        "reversed",
        "<p>&lt;ol&gt;</p>",
        "Especifica que a ordem da lista deve ser decrescente."
    ],
    [
        "rows",
        "<p>&lt;textarea&gt;</p>",
        "Especifica o número visível de linhas em uma área de texto."
    ],
    [
        "rowspan",
        "<p>&lt;td&gt;</p><p>&lt;th&gt;</p>",
        "Especifica o número de linhas que uma célula da tabela deve abranger."
    ],
    [
        "sandbox",
        "<p>&lt;iframe&gt;</p>",
        "Ativa um conjunto extra de restrições para o conteúdo em um &lt;iframe&gt;."
    ],
    [
        "scope",
        "<p>&lt;th&gt;</p>",
        "Especifica se uma célula de cabeçalho é um cabeçalho de uma coluna, linha ou "
        + "grupo de colunas ou linhas"
    ],
    [
        "selected",
        "<p>&lt;option&gt;</p>",
        "Especifica que uma opção deve ser pré-selecionada quando a página carrega."
    ],
    [
        "shape",
        "<p>&lt;area&gt;</p>",
        "Especifica a forma da área."
    ],
    [
        "size",
        "<p>&lt;input&gt;</p><p>&lt;select&gt;</p>",
        "Especifica a largura, em caracteres (para &lt;input&gt;)"
        + " ou especifica o número de opções visíveis (para &lt;select&gt;)."
    ],
    [
        "sizes",
        "<p>&lt;img&gt;</p><p>&lt;link&gt;</p><p>&lt;source&gt;</p>",
        "Especifica o tamanho do recurso vinculado"
    ],
    [
        "span",
        "<p>&lt;col&gt;</p><p>&lt;colgroup&gt;</p>",
        "Especifica o número de colunas a serem estendidas"
    ],
    [
        "spellcheck",
        "Atributo Global, pode usar em todas as Tags",
        " Especifica se o elemento deve ter sua ortografia e gramática verificadas ou não."
    ],
    [
        "src",
        "<p>&lt;audio&gt;</p><p>&lt;embed&gt;</p><p>&lt;iframe&gt;</p><p>&lt;img&gt;</p>"
        + "<p>&lt;input&gt;</p><p>&lt;script&gt;</p><p>&lt;source&gt;</p><p>&lt;track&gt;</p>"
        + "<p>&lt;video&gt;</p>",
        "Especifica a localização (URL) do recurso externo."
    ],
    [
        "srcdoc",
        "<p>&lt;iframe&gt;</p>",
        "Especifica o conteúdo HTML da página a ser mostrado no quadro embutido. Dica: Esse "
        + "atributo deve ser usado junto com os atributos sandbox e seamless."
    ],
    [
        "srclang",
        "<p>&lt;iframe&gt;</p>",
        "Especifica o idioma dos dados do texto da trilha. Este atributo é obrigatório se "
        + "kind = \"subtitles\"."
    ],
    [
        "srcset",
        "<p>&lt;img&gt;</p><p>&lt;source&gt;</p>",
        "Especifica o URL da imagem para usar em diferentes situações."
    ],
    [
        "start",
        "<p>&lt;ol&gt;</p>",
        "Especifica o valor inicial de uma lista ordenada."
    ],
    [
        "step",
        "<p>&lt;input&gt;</p>",
        "Especifica os intervalos de números para um campo de entrada."
    ],
    [
        "style",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica um estilo CSS em linha para um elemento."
    ],
    [
        "tabindex",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica a ordem de tabulação de um elemento (quando o botão \"tab\" é usado para navegar)."
    ],
    [
        "target",
        "<p>&lt;a&gt;</p><p>&lt;area&gt;</p><p>&lt;base&gt;</p><p>&lt;form&gt;</p>",
        "<p>Para elementos &lt;a&gt; e &lt;area&gt;, o atributo target especifica onde abrir o "
        + "documento vinculado.</p>"
        + "<p>Para elementos &lt;base&gt;, o atributo target especifica o destino padrão para "
        + "todos os hyperlinks e formulários na página.</p>"
        + "<p>Para elementos de &lt;form&gt, o atributo target especifica um nome ou uma palavra-chave "
        + "que indica onde exibir a resposta recebida após o envio do formulário.</p>"
    ],
    [
        "title",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica informações extras sobre um elemento."
    ],
    [
        "translate",
        "Atributo Global, pode usar em todas as Tags",
        "Especifica se o conteúdo de um elemento deve ser traduzido ou não."
    ],
    [
        "type",
        "<p>&lt;a&gt;</p><p>&lt;button&gt;</p><p>&lt;embed&gt;</p><p>&lt;input&gt;</p><p>&lt;link&gt;</p>"
        + "<p>&lt;menu&gt;</p><p>&lt;object&gt;</p><p>&lt;script&gt;</p><p>&lt;source&gt;</p><p>&lt;style&gt;</p>",
        "Especifica o tipo de elemento."
    ],
    [
        "usemap",
        "<p>&lt;img&gt;</p><p>&lt;object&gt;</p>",
        "Especifica uma imagem (ou um objeto) como um mapa de imagem"
        +" (um mapa de imagem é uma imagem com áreas clicáveis)."
    ],
    [
        "value",
        "<p>&lt;button&gt;</p><p>&lt;input&gt;</p><p>&lt;li&gt;</p><p>&lt;option&gt;</p>"
        + "<p>&lt;meter&gt;</p><p>&lt;progress&gt;</p><p>&lt;param&gt;</p>",
        "Especifica o valor do elemento."
    ],
    [
        "width",
        "<p>&lt;canvas&gt;</p><p>&lt;embed&gt;</p><p>&lt;iframe&gt;</p><p>&lt;img&gt;</p>"
        + "<p>&lt;input&gt;</p><p>&lt;object&gt;</p><p>&lt;video&gt;</p>",
        "Especifica a largura do elemento."
    ],
    [
        "wrap",
        "<p>&lt;textarea&gt;</p>",
        "Especifica como o texto em uma área de texto deve ser quebrado quando enviado em um formulário."
    ],
];