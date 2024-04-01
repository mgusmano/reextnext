Ext.define("Ext.locale.sk.data.summary.Count", {
    override: "Ext.data.summary.Count",

    text: "Počítať"
});
/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 * Slovak Translation by Michal Thomka
 * 14 April 2007
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"];

        Ext.Date.dayNames = ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20ac',
            // Slovakian Euro
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.sk.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.sk.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} označených riadkov"
});

Ext.define("Ext.locale.sk.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Zavrieť túto záložku"
});

Ext.define("Ext.locale.sk.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Hodnota v tomto poli je nesprávna"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.sk.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Nahrávam..."
});

Ext.define("Ext.locale.sk.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Dnes",
    minText: "Tento dátum je menší ako minimálny možný dátum",
    maxText: "Tento dátum je väčší ako maximálny možný dátum",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Ďalší mesiac (Control+Doprava)',
    prevText: 'Predchádzajúci mesiac (Control+Doľava)',
    monthYearText: 'Vyberte mesiac (Control+Hore/Dole pre posun rokov)',
    todayTip: "{0} (Medzerník)",
    format: "d.m.Y"
});

Ext.define("Ext.locale.sk.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Strana",
    afterPageText: "z {0}",
    firstText: 'Prvá strana',
    prevText: 'Predchádzajúca strana',
    nextText: 'Ďalšia strana',
    lastText: "Posledná strana",
    refreshText: "Obnoviť",
    displayMsg: "Zobrazujem {0} - {1} z {2}",
    emptyMsg: 'Žiadne dáta'
});

Ext.define("Ext.locale.sk.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Minimálna dĺžka pre toto pole je {0}",
    maxLengthText: "Maximálna dĺžka pre toto pole je {0}",
    blankText: "Toto pole je povinné",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.sk.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Minimálna hodnota pre toto pole je {0}",
    maxText: "Maximálna hodnota pre toto pole je {0}",
    nanText: "{0} je nesprávne číslo"
});

Ext.define("Ext.locale.sk.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Zablokované",
    disabledDatesText: "Zablokované",
    minText: "Dátum v tomto poli musí byť až po {0}",
    maxText: "Dátum v tomto poli musí byť pred {0}",
    invalidText: "{0} nie je správny dátum - musí byť vo formáte {1}",
    format: "d.m.Y"
});

Ext.define("Ext.locale.sk.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Nahrávam..."
    });
});

Ext.define("Ext.locale.sk.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Toto pole musí byť e-mailová adresa vo formáte "user@example.com"',
    urlText: 'Toto pole musí byť URL vo formáte "http:/' + '/www.example.com"',
    alphaText: 'Toto pole može obsahovať iba písmená a znak _',
    alphanumText: 'Toto pole može obsahovať iba písmená, čísla a znak _'
});

Ext.define("Ext.locale.sk.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Zoradiť vzostupne",
    sortDescText: "Zoradiť zostupne",
    lockText: 'Zamknúť stĺpec',
    unlockText: 'Odomknúť stĺpec',
    columnsText: 'Stĺpce'
});

Ext.define("Ext.locale.sk.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Názov",
    valueText: "Hodnota",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.sk.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Zrušiť",
        yes: "Áno",
        no: "Nie"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.sk.Component", {
    override: "Ext.Component"
});
Ext.define("Ext.locale.sk.grid.feature.AdvancedGrouping", {
    override: "Ext.grid.feature.AdvancedGrouping",

    expandAllText: "Rozšíriť všetko",
    collapseAllText: "Zbaliť všetko",
    groupsText: "Skupina",
    groupByText: "Skupina podľa tohto poľa",
    addToGroupingText: "Pridať do zoskupenia",
    removeFromGroupingText: "Odstráňte zoskupenie",
    groupSummaryTpl: "Zhrnutie ({name})",
    summaryTpl: "Zhrnutie ({store.data.length})"
});
Ext.define("Ext.locale.sk.grid.plugin.Summaries", {
    override: "Ext.grid.plugin.Summaries",

    textNone: "Nefajčiarsky",
    summaryText: "Zhrnutie"
});
Ext.define("Ext.locale.sk.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",

    operatorsTextMap: {
        eq: "Je rovnaký",
        ne: "Nerovná sa",
        gt: "Väčší než",
        ge: "Viac ako alebo rovné",
        lt: "Menej ako",
        le: "Menej alebo rovné",
        like: "Páči sa mi to",
        nlike: "Nie ako",
        empty: "Prázdny",
        nempty: "Nie prázdny",
        identical: "Identický",
        nidentical: "Nie je identický",
        regex: "Regulárny výraz",
        "in": "Je v",
        notin: "Nie je v"
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
Ext.define("Ext.locale.sk.grid.plugin.grouping.Panel", {
    override: "Ext.grid.plugin.grouping.Panel",

    groupingPanelText: "Presuňte záhlavie stĺpca tu na skupinu podľa tohto stĺpca",
    showGroupingPanelText: "Zobraziť skupinu podľa panela",
    hideGroupingPanelText: "Skryť skupinu podľa panela",
    clearGroupText: "Jasná skupina",
    sortAscText: "Zoradiť vzostupne",
    sortDescText: "Zoradiť zostupne",
    moveLeftText: "Presunúť doľava",
    moveRightText: "Pohnúť sa vpravo",
    moveBeginText: "Prejsť na začiatok",
    moveEndText: "Prejsť",
    removeText: "Odstrániť"
});
