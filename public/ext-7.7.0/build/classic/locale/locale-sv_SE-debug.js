/**
 * Swedish translation (utf8-encoding)
 * By Erik Andersson, Monator Technologies
 * 24 April 2007
 * Changed by Cariad, 29 July 2007
 */
Ext.onReady(function() {
    if (Ext.Date) {
        Ext.Date.monthNames = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
        Ext.Date.dayNames = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];

        Ext.Date.formatCodes.a = "(m.getHours() < 12 ? 'em' : 'fm')";
        Ext.Date.formatCodes.A = "(m.getHours() < 12 ? 'EM' : 'FM')";
        Ext.Date.parseCodes.a = {
            g: 1,
            c: "if (/(em)/i.test(results[{0}])) {\n" + "if (!h || h == 12) { h = 0; }\n" + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(em|fm|EM|FM)",
            calcAtEnd: true
        };
        Ext.Date.parseCodes.A = {
            g: 1,
            c: "if (/(em)/i.test(results[{0}])) {\n" + "if (!h || h == 12) { h = 0; }\n" + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(EM|FM|em|fm)",
            calcAtEnd: true
        };
    }
});
Ext.define("Ext.locale.sv_SE.data.summary.Count", {
    override: "Ext.data.summary.Count",

    text: "Sammanfattning"
});
Ext.define("Ext.locale.sv_SE.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Värdet i detta fält är inte tillåtet"
});
Ext.define("Ext.locale.sv_SE.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Laddar..."
    });
});
Ext.define("Ext.locale.sv_SE.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Inaktiverad",
    disabledDatesText: "Inaktiverad",
    minText: "Datumet i detta fält måste inträffa efter {0}",
    maxText: "Datumet i detta fält måste inträffa före {0}",
    invalidText: "{0} är inte ett tillåtet datum - datum ska anges i formatet {1}",
    format: "Y-m-d"
});
Ext.define("Ext.locale.sv_SE.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Minsta tillåtna värde för detta fält är {0}",
    maxText: "Största tillåtna värde för detta fält är {0}",
    nanText: "{0} är inte ett tillåtet nummer"
});
Ext.define("Ext.locale.sv_SE.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Minsta tillåtna längd för detta fält är {0}",
    maxLengthText: "Största tillåtna längd för detta fält är {0}",
    blankText: "Detta fält är obligatoriskt",
    regexText: "",
    emptyText: null
});
Ext.define("Ext.locale.sv_SE.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "Tiden i detta fält måste vara lika med eller efter tiden i {0}",
    maxText: "Tiden i detta fält måste vara lika med eller före tiden i {0}",
    invalidText: "{0} är inte en korrekt tid",
    format: "G:i"
});
Ext.define("Ext.locale.sv_SE.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Detta fält ska innehålla en e-post adress i formatet "användare@domän.se"',
    urlText: 'Detta fält ska innehålla en länk (URL) i formatet "http:/' + '/www.domän.se"',
    alphaText: 'Detta fält får bara innehålla bokstäver och "_"',
    alphanumText: 'Detta fält får bara innehålla bokstäver, nummer och "_"'
});
Ext.define("Ext.locale.sv_SE.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Namn",
    valueText: "Värde",
    dateFormat: "Y-m-d"
});
Ext.define("Ext.locale.sv_SE.grid.feature.AdvancedGrouping", {
    override: "Ext.grid.feature.AdvancedGrouping",

    expandAllText: "Expandera alla",
    collapseAllText: "Kollapsa alla",
    groupsText: "Grupp",
    groupByText: "Grupp vid detta fält",
    addToGroupingText: "Lägg till gruppering",
    removeFromGroupingText: "Ta bort från gruppering",
    groupSummaryTpl: "Sammanfattning ({name})",
    summaryTpl: "Sammanfattning ({store.data.length})"
});
Ext.define("Ext.locale.sv_SE.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Sortera stigande",
    sortDescText: "Sortera fallande",
    lockText: "Lås kolumn",
    unlockText: "Lås upp kolumn",
    columnsText: "Kolumner"
});
Ext.define("Ext.locale.sv_SE.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} markerade rad(er)"
});
Ext.define("Ext.locale.sv_SE.grid.plugin.Summaries", {
    override: "Ext.grid.plugin.Summaries",

    textNone: "Ingen",
    summaryText: "Sammanfattning"
});
Ext.define("Ext.locale.sv_SE.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",

    operatorsTextMap: {
        eq: "Är jämställd",
        ne: "Inte jämnlikt",
        gt: "Större än",
        ge: "Större än eller lika med",
        lt: "Mindre än",
        le: "Mindre än eller lika med",
        like: "Tycka om",
        nlike: "Inte som",
        empty: "Tömma",
        nempty: "Inte tom",
        identical: "Identisk",
        nidentical: "Inte identisk",
        regex: "Vanligt uttryck",
        "in": "Är i",
        notin: "Är inte i"
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
Ext.define("Ext.locale.sv_SE.grid.plugin.grouping.Panel", {
    override: "Ext.grid.plugin.grouping.Panel",

    groupingPanelText: "Dra en kolumnrubrik här för att gruppera med den kolumnen",
    showGroupingPanelText: "Visa grupp efter panel",
    hideGroupingPanelText: "Dölj gruppen efter panel",
    clearGroupText: "Klart grupp",
    sortAscText: "Sortera stigande",
    sortDescText: "Sortera nedstigande",
    moveLeftText: "Flytta vänster",
    moveRightText: "Flytta höger",
    moveBeginText: "Flytta till början",
    moveEndText: "Flytta till",
    removeText: "Avlägsna"
});
Ext.define("Ext.locale.sv_SE.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Idag",
    minText: "Detta datum inträffar före det tidigast tillåtna",
    maxText: "Detta datum inträffar efter det senast tillåtna",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Nästa månad (Ctrl + högerpil)',
    prevText: 'Föregående månad (Ctrl + vänsterpil)',
    monthYearText: 'Välj en månad (Ctrl + uppåtpil/neråtpil för att ändra årtal)',
    todayTip: "{0} (mellanslag)",
    format: "Y-m-d",
    startDay: 1
});
Ext.define("Ext.locale.sv_SE.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Stäng denna flik"
});
Ext.define("Ext.locale.sv_SE.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Sida",
    afterPageText: "av {0}",
    firstText: "Första sidan",
    prevText: "Föregående sida",
    nextText: "Nästa sida",
    lastText: "Sista sidan",
    refreshText: "Uppdatera",
    displayMsg: "Visar {0} - {1} av {2}",
    emptyMsg: 'Det finns ingen data att visa'
});
/* This will change AM/PM to EM/FM
 * Ext.Date.format(new Date('2006/01/15 15:00:00'), 'd/m/y h:i:s A'); -> 15/01/06 03:00:00 FM
 * Ext.Date.parse("2006-01-15 3:20:01 FM", "Y-m-d g:i:s A")           -> Sun Jan 15 2006 15:20:01
 */

if (Ext.util && Ext.util.Format) {

    Ext.define('Ext.locale.sv_SE.util.Format', {
        override: 'Ext.util.Format',
        decimalSeparator: ',',
        thousandSeparator: ' ',
        // Swedish Krone
        currencySign: 'kr',
        currencyAtEnd: true,
        dateFormat: 'Y-m-d',
        currencySpacer: ' '
    });
}
// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.sv_SE.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Laddar..."
});
Ext.define("Ext.locale.sv_SE.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});
Ext.define("Ext.locale.sv_SE.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Avbryt",
        yes: "Ja",
        no: "Nej"
    }
});
