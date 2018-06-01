var translatedObj = {
    "1-3 Tage": "1-3 days",
    "13. Bezug": "13. Reference",
    "13. Nettobezug": "13. Net earning",
    "14. Bezug": "14. Reference",
    "14. Nettobezug": "14. Net earning",
    "2-20km (groß)": "2-20km (big)",
    "20-40km (groß)": "20-40km (big)",
    "20-40km (klein)": "20-40km (small)",
    "4-7 Tage": "4-7 days",
    "40-60km (groß)": "40-60km (big)",
    "40-60km (klein)": "40-60km (small)",
    "8-10 Tage": "8-10 days",
    "11 Tage": "11 days",
    "A1 - Arbeiter": "A1 - workers",
    "ASVG-Pensionist": "ASVG pensioners",
    "Abkürzungen": "Abbreviations",
    "Alleinverdienerabsetzbetrag": "sole earner",
    "BMVK": "BMVK",
    "Berechnungsart": "calculation",
    "Betriebliche Mitarbeitervorsorgekasse": "Company employee pension fund",
    "Betriebsmitarbeitervorsorgekasse": "Operating Mitarbeitervorsorgekasse",
    "Bezug": "reference",
    "Brutto": "Gross",
    "Bruttobezug": "gross salary",
    "Bundesland (DZ)": "State (DZ)",
    "Bundesland (für DZ)": "State (for DZ)",
    "Burgenland": "Burgenland",
    "D1 - Angestellter": "D1 - employee",
    "DB": "Employer's Share (DB)",
    "DZ": "Employer's Addition (DZ)",
    "Dienstgeberabgaben": "Employer contributions",
    "Dienstgeberbeitrag": "Employer contribution",
    "Dienstgeberbeitrag zum Familienlastenausgleichsfonds": "Employer contribution to the family burden compensation fund",
    "Dienstgeberzuschlag (zum DB)": "Employer surcharge (to DB)",
    "Dienstnehmer": "employee",
    "Gesamt": "Total",
    "Gesamtsumme": "Total sum",
    "Jahr": "year",
    "Jahresbruttobezug": "Annual gross terms",
    "Jahresnettobezug": "Net annual subscription",
    "Jahressumme": "years total",
    "Kinder": "children",
    "KoSt": "KoSt",
    "Kommunalsteuer": "municipal tax",
    "Kärnten": "Carinthia",
    "LSt": "LST",
    "LSt-Freibetrag": "LST-free allowance",
    "Laufender Monatsbezug": "Current monthly reference",
    "Lohn / Gehalt": "Rewarding salary",
    "Lohnsteuer": "income tax",
    "Mitarbeitervorsorge": "employee pension",
    "Mitarbeitervorsorgekasse": "employee pension fund",
    "Monat": "month",
    "Netto": "Net",
    "Nettobezug monatlich": "Net earnings monthly",
    "Niederösterreich": "Lower Austria",
    "Oberösterreich": "Upper Austria",
    "Pendler: Fahrten / Monat": "Commuter: rides / month",
    "Pendler: Fahrten pro Monat": "Commuters: Rides a month",
    "Pendler: km einfach": "Commuter: km easy",
    "Pendlerkilometer (eine Richtung)": "Commuter kilometers (one way)",
    "Pendlerpauschale": "commuter tax",
    "SV": "SV",
    "SV-Gruppe": "SV Group",
    "Sachbezug": "in kind",
    "Salzburg": "Salzburg",
    "Sozialversicherung": "social insurance",
    "Steiermark": "Styria",
    "Summe": "Sum",
    "Summe Abgaben": "Total fees",
    "Tirol": "Tyrol",
    "Vorarlberg": "Vorarlberg",
    "Wien": "Vienna",
    "Zeitraum": "Period",
    "Zuschlag zum DB": "Surcharge for DB",
    "ab 60km (groß)": "from 60km (large)",
    "ab 60km (klein)": "from 60km (small)",
    "jährlich": "yearly",
    "kein DZ": "no DZ",
    "keines": "none",
    "monatlich": "monthly",
    "Öffentliche Verkehrsmittel nicht zumutbar": "Public transport not reasonable",
    "Öffi-Benutzung unzumutbar": "Use of public transport unacceptable"
};

var treeWalker = document.createNodeIterator(
    document.querySelector('#cpu-bruttonetto'),
    NodeFilter.SHOW_TEXT,
    function() {
        return NodeFilter.FILTER_ACCEPT;
    },
    false
);

var nodeTextList = [];
var currentNode;
var obj = {};
var listString = "";
var keys = Object.keys(translatedObj);

while (currentNode = treeWalker.nextNode()) {
    if (currentNode.nodeType === 3 &&
        currentNode.textContent.search('\n') == -1 &&
        currentNode.textContent.search(',') == -1 &&
        Number(currentNode.textContent) !== Number(currentNode.textContent)) {
        keys.forEach(function(key) {
            if (currentNode.textContent == key) {
                currentNode.textContent = translatedObj[key];
            }
        })
        // nodeTextList.push(currentNode.textContent);
    };
}

// var uniqueList = nodeTextList.filter(function(item, i, arr) {
//     return arr.indexOf(item) === i;
// })

// uniqueList.sort().forEach(function(item) {
// 	listString += item + "\n";
// });

// console.log(listString);

// nodeTextList.forEach(function(item) {
//     obj[item] = "";
// });

// console.log(JSON.stringify(obj));
