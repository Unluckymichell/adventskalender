const BRIEF1 =
    `Was ist das hier?
-----
Hallo mein Schatz, ich möchte dir heute mit diesem Brief erzählen, was ich mir bei diesem Weihnachtskallender gedacht habe.

Ich habe mir schon länger vorgenommen wieder mehr mit dir zu unternehmen und dir wieder mehr kleine freuden im Leben zu bereiten.
Leider bin ich nie auf die Idee gekommen, dass ich doch auch ohne viel Geld und Zeit, dir eine Freude machen kann, 
zum Beispiel indem ich meine Kenntnisse im Digitalen nutze und dir damit etwas einzigartiges Schenke.

Und ich denke nicht das dir schon mal jemand einen Digitalen + Realen Advenzkalender geschenkt hat!

Heute giebts nur diesen Brief und eine Umarmung (Notiz an mich in der Zukunft: NICHT VERGESSEN!!!!), aber du kannst dich auf Gutscheine, Mystery Packs, weiter Briefe 
und Sogar ein par Digitale Inhallte die ich für dich produziert habe freuen.

Und nur um das klarzustellen, alle Geschenke und Briefe sind von mir handgemacht (keine KI),
mit Rechtschreibfehler on top!

Grüße dein Michi der dich über alles liebt.
`;

const BRIEF2 =
    `Warum ich stolz auf dich bin
-----
Hallo meine Liebe,

ich möchte dir mit diesem Brief noch einmal sagen, dass ich unheimlich stolz auf dich bin.

Du hast dich auch echt verändert, im laufe unserer Beziehung und ich bin so stolz, so eine Liebe Frau an meiner Seite zu haben, auf die ich mich verlassen kann.

Du warst von Anfang an etwas besonderes, eine Person die gelert hat, sich nichts gefallen zu lassen, was sie schädigt. Leider musstes du viel Schaden nehmen um dort anzukommen. Trotzdem bist du ein toller Mensch geblieben und nicht zu dem geworden was dich hat leiden lassen. Du hast mir damit den Mut gegeben, endlich mein Leben selbst in die Hand zu nehmen und mir zum Ziel zu machen, für dich da zu sein und eine Familie mit dir zu gründen.

Ich möchte dir noch einmal sagen, ich bin stolz auf dich. Stolz, dass du nicht an mir auslässt, was andere dir getan haben. Stolz das du mich immer unterstützt hast, selbst wenn ich oder meine Familie dich schlecht behandelt hat. Stolz, dass du mir jetzt schon ein Kind geschenkt hast (Bobo) und noch vieles mehr. Und Stolz, dass du die Arbeitswelt für uns überstehst.

Du solltest auch stolz auf dich sein! Du hast so viel geleistet in den Jahren mit mir.

Ich liebe dich von ganzem Herzen.

Dein Michi.
`;

const BRIEF3 =
    `Gemeinsame Erinnerung
-----

Hallo mein Batzen, 

heute möchte ich mal etwas in Erinnerungen schwägen.

Salzburg
Kroatien
Besuch bei deinen Großeltern
Italien
Verschiedene Thermenbesuche
Besuch bei deiner Mutter
Die Tripps nach Karlsbad

Und so viele kleine Ausflüge, wie ich sie nie im Leben zuvor hatte.


`;

const BRIEF4 =
    `10 Gründe wieso du die beste bist
-----

TODO!!!!!!!!

`;

const BRIEF5 =
    `10 Dinge, die ich an dir liebe
-----

TODO!!!!!!!!

`;

const BRIEF6 =
    `Unsere Zukunft
-----

TODO!!!!!!!!

`;

type daysList = {
    [key: number]: {
        day: "mo" | "di" | "mi" | "do" | "fr" | "sa" | "so",
    } & (
        { type: "letter", content: string } |
        { type: "mystery", message: string } |
        { type: "digital", subType: "video" | "web", url: string } |
        { type: "coupon", content: string } |
        { type: "final", note: string }
    )
}


export const daysData: daysList = {
    1: { day: "mo", type: "letter", content: BRIEF1, },
    2: { day: "di", type: "mystery", message: "Was wird das sein?\nVieleicht eine Süße Kleinigkeit?\n\nÖffne Mystery-Pack 1" },
    3: { day: "mi", type: "digital", subType: "video", url: "/media/day-03.mp4" },
    4: { day: "do", type: "mystery", message: "Was wird heute wohl drinn sein?\nWieder nur Schokolade oder mehr...\n\nÖffne Mystery-Pack 2" },
    5: { day: "fr", type: "coupon", content: "Gutschein für gemeinsammes Frühstück am Wochenende im Museums-Cafe" },
    6: { day: "sa", type: "mystery", message: "Zum Nikolaus, etwas schönes\nVieleicht ein kleines Geschenk?\n\nÖffne Mystery-Pack 3" },
    7: { day: "so", type: "coupon", content: "Gutschein für Weihnachtsmarkt Date, mit einer heißen Schokolade" },

    //🍁 Woche 2 (8.–14. Dezember)

    8: { day:  "mo", type: "letter", content: BRIEF2, },
    9: { day:  "di", type: "mystery", message: "Heute wieder ein Mystery Pack!\nIch hoffe es gefällt dir.\n\nÖffne Mystery-Pack 4" },
    10: { day: "mi", type: "digital", subType: "web", url: "/game/memory" },	//Digitales Mini-Game (Memory/Quiz)	
    11: { day: "do", type: "letter", content: BRIEF3, },
    12: { day: "fr", type: "coupon", content: "Gutschein für Wellnessabend / Massage für Samstag oder Sonntag" },
    13: { day: "sa", type: "coupon", content: "Gutschein für Filmabend + Pizza und Snacks" },
    14: { day: "so", type: "mystery", message: "Was wird heute wohl drinn sein?\nMichi brauchst du nicht fragen, der hats eh vergessen :)\n\nÖffne Mystery-Pack 5" },

    //🍁 Woche 3 (15.–21. Dezember)

    15: { day: "mo", type: "letter", content: BRIEF4, },
    16: { day: "di", type: "mystery", message: "Heute wieder ein Mystery Pack!\nHab dich lieb mein Schatz.\n\nÖffne Mystery-Pack 6" },
    17: { day: "mi", type: "digital", subType: "web", url: "TODO onedrive/fotoalbum mit nur schönen bildern" },
    18: { day: "do", type: "letter", content: BRIEF5, },
    19: { day: "fr", type: "coupon", content: "Gutschein: Dein Wochenend-Date aussuchen" },
    20: { day: "sa", type: "mystery", message: "Was wird heute wohl drinn sein?\nWieder nur Schokolade oder mehr...\n\nÖffne Mystery-Pack 7" },
    21: { day: "so", type: "mystery", message: "Das ist leider schon wieder das letzte.\nAber ich hoffe du bis trotzdem gespannt!\n\nÖffne Mystery-Pack 8" },

    //🍁 Woche 4 (22.–24. Dezember)

    22: { day: "mo", type: "letter", content: BRIEF6, },
    23: { day: "fr", type: "coupon", content: "Gutschein für fahr nach Salzburg mit Weihnachtsmarkt und Geisberg!" },
    24: { day: "mi", type: "final", note: "https://shop.therme-erding.de/geschenkgutscheine/geschenkideen-fuer-paare/geschenkbox-kerze-sauna" }

}