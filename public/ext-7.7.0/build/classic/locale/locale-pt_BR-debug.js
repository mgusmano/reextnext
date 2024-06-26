// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.pt_BR.Component", {
    override: "Ext.Component"
});
Ext.define("Ext.locale.pt_BR.data.summary.Count", {
    override: "Ext.data.summary.Count",

    text: "Contar"
});
/**
 * Portuguese/Brazil Translation by Weber Souza
 * 08 April 2007
 * Updated by Allan Brazute Alves (EthraZa)
 * 06 September 2007
 * Updated by Leonardo Lima
 * 05 March 2008
 * Updated by Juliano Tarini (jtarini)
 * 22 April 2008
 * Update by Guilherme Portela
 * 04 May 2015
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Jan: 0,
            Fev: 1,
            Mar: 2,
            Abr: 3,
            Mai: 4,
            Jun: 5,
            Jul: 6,
            Ago: 7,
            Set: 8,
            Out: 9,
            Nov: 10,
            Dez: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: 'R$',
            // Brazilian Real
            dateFormat: 'd/m/Y'
        });
        Ext.util.Format.brMoney = Ext.util.Format.currency;
    }
});

Ext.define("Ext.locale.pt_BR.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "O valor para este campo é inválido"
});
Ext.define("Ext.locale.pt_BR.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Carregando..."
    });
});
Ext.define("Ext.locale.pt_BR.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Desabilitado",
    disabledDatesText: "Desabilitado",
    minText: "A data deste campo deve ser igual ou posterior a {0}",
    maxText: "A data deste campo deve ser igual ou anterior a {0}",
    invalidText: "{0} não é uma data válida - deve ser informado no formato {1}",
    format: "d/m/Y"
});
Ext.define("Ext.locale.pt_BR.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Por favor, entre com a URL do link:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Negrito (Ctrl+B)',
                text: 'Deixa o texto selecionado em negrito.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Itálico (Ctrl+I)',
                text: 'Deixa o texto selecionado em itálico.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Sublinhado (Ctrl+U)',
                text: 'Sublinha o texto selecionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Aumentar Texto',
                text: 'Aumenta o tamanho da fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Diminuir Texto',
                text: 'Diminui o tamanho da fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Cor de Fundo',
                text: 'Muda a cor do fundo do texto selecionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Cor da Fonte',
                text: 'Muda a cor do texto selecionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Alinhar à Esquerda',
                text: 'Alinha o texto à esquerda.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Centralizar Texto',
                text: 'Centraliza o texto no editor.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Alinhar à Direita',
                text: 'Alinha o texto à direita.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Lista com Marcadores',
                text: 'Inicia uma lista com marcadores.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Lista Numerada',
                text: 'Inicia uma lista numerada.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Link',
                text: 'Transforma o texto selecionado em um link.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Editar Fonte',
                text: 'Troca para o modo de edição de código fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});
Ext.define("Ext.locale.pt_BR.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "O valor mínimo para este campo é {0}",
    maxText: "O valor máximo para este campo é {0}",
    nanText: "{0} não é um número válido"
});
Ext.define("Ext.locale.pt_BR.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "O tamanho mínimo para este campo é {0}",
    maxLengthText: "O tamanho máximo para este campo é {0}",
    blankText: "Este campo é obrigatório.",
    regexText: "",
    emptyText: null
});
Ext.define("Ext.locale.pt_BR.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Este campo deve ser um endereço de e-mail válido, no formato "usuario@dominio.com.br"',
    urlText: 'Este campo deve ser uma URL no formato "http:/' + '/www.dominio.com.br"',
    alphaText: 'Este campo deve conter apenas letras e _',
    alphanumText: 'Este campo deve conter apenas letras, números e _'
});
Ext.define("Ext.locale.pt_BR.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Nome",
    valueText: "Valor",
    dateFormat: "d/m/Y"
});
Ext.define("Ext.locale.pt_BR.grid.feature.AdvancedGrouping", {
    override: "Ext.grid.feature.AdvancedGrouping",

    expandAllText: "Expandir todos",
    collapseAllText: "Recolher todos",
    groupsText: "Grupos",
    groupByText: "Agrupar por este campo",
    addToGroupingText: "Adicionar ao agrupamento",
    removeFromGroupingText: "Remover do agrupamento",
    groupSummaryTpl: "Resumo ({name})",
    summaryTpl: "Resumo ({store.data.length})"
});
Ext.define('Ext.locale.pt_BR.grid.feature.Grouping', {
    override: 'Ext.grid.feature.Grouping',
    emptyGroupText: '(Nenhum)',
    groupByText: 'Agrupar por este campo',
    showGroupsText: 'Mostrar agrupado'
});
Ext.define('Ext.locale.pt_BR.grid.filters.Filters', {
    override: 'Ext.grid.filters.Filters',
    menuFilterText: 'Filtros'
});
Ext.define('Ext.locale.pt_BR.grid.filters.filter.Boolean', {
    override: 'Ext.grid.filters.filter.Boolean',
    yesText: 'Sim',
    noText: 'Não'
});
Ext.define('Ext.locale.pt_BR.grid.filters.filter.Date', {
    override: 'Ext.grid.filters.filter.Date',
    getFields: function() {
        return {
            lt: { text: 'Antes' },
            gt: { text: 'Depois' },
            eq: { text: 'Em' }
        };
    }
});
Ext.define('Ext.locale.pt_BR.grid.filters.filter.List', {
    override: 'Ext.grid.filters.filter.List',
    loadingText: 'Carregando...'
});
Ext.define('Ext.locale.pt_BR.grid.filters.filter.Number', {
    override: 'Ext.grid.filters.filter.Number',
    emptyText: 'Digite o número...'
});
Ext.define('Ext.locale.pt_BR.grid.filters.filter.String', {
    override: 'Ext.grid.filters.filter.String',
    emptyText: 'Digite o texto de filtro...'
});
Ext.define('Ext.locale.pt_BR.grid.header.Container', {
    override: 'Ext.grid.header.Container',
    sortAscText: 'Ordem Ascendente',
    sortDescText: 'Ordem Descendente',
    columnsText: 'Colunas'
});
Ext.define('Ext.locale.pt_BR.grid.locking.Lockable', {
    override: 'Ext.grid.locking.Lockable',
    lockText: 'Bloquear Coluna',
    unlockText: 'Desbloquear Coluna'
});
Ext.define("Ext.locale.pt_BR.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} linha(s) selecionada(s)"
});
Ext.define("Ext.locale.pt_BR.grid.plugin.Summaries", {
    override: "Ext.grid.plugin.Summaries",

    textNone: "Nenhum",
    summaryText: "Resumo"
});
Ext.define("Ext.locale.pt_BR.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",

    operatorsTextMap: {
        eq: "É igual",
        ne: "Não igual",
        gt: "Maior que",
        ge: "Melhor que ou igual a",
        lt: "Menor que",
        le: "Menos que ou igual a",
        like: "Parece",
        nlike: "Não parece",
        empty: "Vazio",
        nempty: "Não está vazio",
        identical: "Idêntico",
        nidentical: "Não idênticos",
        regex: "Expressão regular",
        "in": "Está dentro",
        notin: "Não está dentro"
    }
}, function() {
    var prototype = this.prototype,
        texts = prototype.operatorsTextMap;

    texts['='] = texts.eq;
    texts['=='] = texts.eq;
    texts['!='] = texts.ne;
    texts['==='] = texts.identical;
    texts['!=='] = texts.nidentical;
    texts['>'] = texts.gt;
    texts['>='] = texts.ge;
    texts['<'] = texts.lt;
    texts['<='] = texts.le;
    texts['/='] = texts.regex;
});
Ext.define("Ext.locale.pt_BR.grid.plugin.grouping.Panel", {
    override: "Ext.grid.plugin.grouping.Panel",

    groupingPanelText: "Arraste um cabeçalho de coluna aqui para agrupar por essa coluna",
    showGroupingPanelText: "Mostrar painel de agrupamento",
    hideGroupingPanelText: "Ocultar o grupo por painel",
    clearGroupText: "Limpar grupo",
    sortAscText: "Ordernar ascendente",
    sortDescText: "Ordenar descendente",
    moveLeftText: "Mover para esquerda",
    moveRightText: "Mover para direita",
    moveBeginText: "Mover para o início",
    moveEndText: "Mover para o final",
    removeText: "Remover"
});
/**
 * Portuguese/Brazil Translation by Guilherme Portela
 * 07 March 2016
 */
Ext.define("Ext.locale.pt_BR.panel.Panel", {
    override: "Ext.panel.Panel",
    closeToolText: "Fechar painel",
    collapseToolText: "Recolher painel",
    expandToolText: "Expandir painel"
});
Ext.define("Ext.locale.pt_BR.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Hoje",
    minText: "Esta data é anterior a menor data",
    maxText: "Esta data é posterior a maior data",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Próximo Mês (Control+Direita)',
    prevText: 'Mês Anterior (Control+Esquerda)',
    monthYearText: 'Escolha um Mês (Control+Cima/Baixo para mover entre os anos)',
    todayTip: "{0} (Espaço)",
    format: "d/m/Y",
    startDay: 0
});
Ext.define("Ext.locale.pt_BR.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Cancelar"
});
Ext.define("Ext.locale.pt_BR.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Fechar"
});
Ext.define("Ext.locale.pt_BR.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Página",
    afterPageText: "de {0}",
    firstText: "Primeira Página",
    prevText: "Página Anterior",
    nextText: "Próxima Página",
    lastText: "Última Página",
    refreshText: "Atualizar",
    displayMsg: "<b>{0} à {1} de {2} registro(s)</b>",
    emptyMsg: 'Sem registros para exibir'
});
// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.pt_BR.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Carregando..."
});
Ext.define("Ext.locale.pt_BR.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});
Ext.define("Ext.locale.pt_BR.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Cancelar",
        yes: "Sim",
        no: "Não"
    }
});
