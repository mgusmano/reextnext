Ext.define("Ext.locale.pl.data.summary.Count", {
    override: "Ext.data.summary.Count",

    text: "Liczyć"
});
/**
 * Polish Translations
 * By vbert 17-April-2007
 * Updated by mmar 16-November-2007
 * Encoding: utf-8
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Sty: 0,
            Lut: 1,
            Mar: 2,
            Kwi: 3,
            Maj: 4,
            Cze: 5,
            Lip: 6,
            Sie: 7,
            Wrz: 8,
            Paź: 9,
            Lis: 10,
            Gru: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

        Ext.Date.getShortDayName = function(day) {
            switch (day) {
                case 0:
                    return 'ndz';

                case 1:
                    return 'pon';

                case 2:
                    return 'wt';

                case 3:
                    return 'śr';

                case 4:
                    return 'czw';

                case 5:
                    return 'pt';

                case 6:
                    return 'sob';

                default:
                    return '';
            }
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u007a\u0142',
            // Polish Zloty
            dateFormat: 'Y-m-d'
        });
    }
});

Ext.define("Ext.locale.pl.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.pl.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} wybrano wiersze(y)"
});

Ext.define("Ext.locale.pl.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Zamknij zakładkę"
});

Ext.define("Ext.locale.pl.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Wartość tego pola jest niewłaściwa"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.pl.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Wczytywanie danych..."
});

Ext.define("Ext.locale.pl.picker.Date", {
    override: "Ext.picker.Date",
    startDay: 1,
    todayText: "Dzisiaj",
    minText: "Data jest wcześniejsza od daty minimalnej",
    maxText: "Data jest późniejsza od daty maksymalnej",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: "Następny miesiąc (Control+StrzałkaWPrawo)",
    prevText: "Poprzedni miesiąc (Control+StrzałkaWLewo)",
    monthYearText: "Wybierz miesiąc (Control+Up/Down aby zmienić rok)",
    todayTip: "{0} (Spacja)",
    format: "Y-m-d"
});

Ext.define("Ext.locale.pl.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Anuluj"
});

Ext.define("Ext.locale.pl.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Strona",
    afterPageText: "z {0}",
    firstText: "Pierwsza strona",
    prevText: "Poprzednia strona",
    nextText: "Następna strona",
    lastText: "Ostatnia strona",
    refreshText: "Odśwież",
    displayMsg: "Wyświetlono {0} - {1} z {2}",
    emptyMsg: "Brak danych do wyświetlenia"
});

Ext.define("Ext.locale.pl.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Minimalna ilość znaków dla tego pola to {0}",
    maxLengthText: "Maksymalna ilość znaków dla tego pola to {0}",
    blankText: "To pole jest wymagane",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.pl.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Minimalna wartość dla tego pola to {0}",
    maxText: "Maksymalna wartość dla tego pola to {0}",
    nanText: "{0} to nie jest właściwa wartość"
});

Ext.define("Ext.locale.pl.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Wyłączony",
    disabledDatesText: "Wyłączony",
    minText: "Data w tym polu musi być późniejsza od {0}",
    maxText: "Data w tym polu musi być wcześniejsza od {0}",
    invalidText: "{0} to nie jest prawidłowa data - prawidłowy format daty {1}",
    format: "Y-m-d",
    altFormats: "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
});

Ext.define("Ext.locale.pl.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Wczytuję..."
    });
});

Ext.define("Ext.locale.pl.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'To pole wymaga podania adresu e-mail w formacie: "nazwa@domena.pl"',
    urlText: 'To pole wymaga podania adresu strony www w formacie: "http:/' + '/www.domena.pl"',
    alphaText: 'To pole wymaga podania tylko liter i _',
    alphanumText: 'To pole wymaga podania tylko liter, cyfr i _'
});

Ext.define("Ext.locale.pl.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Wprowadź adres URL strony:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Pogrubienie (Ctrl+B)',
                text: 'Ustaw styl zaznaczonego tekstu na pogrubiony.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Kursywa (Ctrl+I)',
                text: 'Ustaw styl zaznaczonego tekstu na kursywę.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Podkreślenie (Ctrl+U)',
                text: 'Podkreśl zaznaczony tekst.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Zwiększ czcionkę',
                text: 'Zwiększ rozmiar czcionki.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Zmniejsz czcionkę',
                text: 'Zmniejsz rozmiar czcionki.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Wyróżnienie',
                text: 'Zmień kolor wyróżnienia zaznaczonego tekstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Kolor czcionki',
                text: 'Zmień kolor zaznaczonego tekstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Do lewej',
                text: 'Wyrównaj tekst do lewej.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Wyśrodkuj',
                text: 'Wyrównaj tekst do środka.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Do prawej',
                text: 'Wyrównaj tekst do prawej.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Lista wypunktowana',
                text: 'Rozpocznij listę wypunktowaną.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Lista numerowana',
                text: 'Rozpocznij listę numerowaną.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hiperłącze',
                text: 'Przekształć zaznaczony tekst w hiperłącze.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Edycja źródła',
                text: 'Przełącz w tryb edycji źródła.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.pl.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Sortuj rosnąco",
    sortDescText: "Sortuj malejąco",
    lockText: "Zablokuj kolumnę",
    unlockText: "Odblokuj kolumnę",
    columnsText: "Kolumny"
});

Ext.define("Ext.locale.pl.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(None)',
    groupByText: 'Grupuj po tym polu',
    showGroupsText: 'Pokaż w grupach'
});

Ext.define("Ext.locale.pl.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Nazwa",
    valueText: "Wartość",
    dateFormat: "Y-m-d"
});

Ext.define("Ext.locale.pl.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Anuluj",
        yes: "Tak",
        no: "Nie"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.pl.Component", {
    override: "Ext.Component"
});
Ext.define("Ext.locale.pl.grid.feature.AdvancedGrouping", {
    override: "Ext.grid.feature.AdvancedGrouping",

    expandAllText: "Rozwiń wszystkie",
    collapseAllText: "Zwinąć wszystkie",
    groupsText: "Grupy",
    groupByText: "Grupa według tej dziedziny",
    addToGroupingText: "Dodaj do grupy",
    removeFromGroupingText: "Usuń z grupowania",
    groupSummaryTpl: "Streszczenie ({name})",
    summaryTpl: "Streszczenie ({store.data.length})"
});
Ext.define("Ext.locale.pl.grid.plugin.Summaries", {
    override: "Ext.grid.plugin.Summaries",

    textNone: "Nic",
    summaryText: "Streszczenie"
});
Ext.define("Ext.locale.pl.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",

    operatorsTextMap: {
        eq: "Jest równy",
        ne: "Nie równe",
        gt: "Lepszy niż",
        ge: "Większy lub równy",
        lt: "Mniej niż",
        le: "Mniejszy lub równy",
        like: "Lubić",
        nlike: "Nie jak",
        empty: "Pusty",
        nempty: "Nie pusty",
        identical: "Identyczny",
        nidentical: "Nieidentyczny",
        regex: "Wyrażenie regularne",
        "in": "Jest w",
        notin: "Nie jest"
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
Ext.define("Ext.locale.pl.grid.plugin.grouping.Panel", {
    override: "Ext.grid.plugin.grouping.Panel",

    groupingPanelText: "Przeciągnij tutaj nagłówek kolumny, aby grupować przez tę kolumnę",
    showGroupingPanelText: "Pokaż grupę przez panel",
    hideGroupingPanelText: "Ukryj grupę przez panel",
    clearGroupText: "Wyczyść grupę.",
    sortAscText: "Sortuj rosnąco",
    sortDescText: "Sortuj malejące",
    moveLeftText: "Przesuń w lewo",
    moveRightText: "Ruch w prawo",
    moveBeginText: "Przejdź do początku",
    moveEndText: "Przejdź do końca",
    removeText: "Usunąć"
});
