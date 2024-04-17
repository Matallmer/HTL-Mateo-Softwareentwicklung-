class Kassa {
  constructor() {
    this.geldLade = 0;
    this.einnahmenHeute = 0;
    this.gescannteArtikel = [];
  }

  scannen(artikel) {
    this.gescannteArtikel.push(artikel);
    this.geldLade += artikel.preis;
    console.log("Artikel gescannt:", artikel.name);
  }

  bezahlen(bezahlterWert) {
    if (betrag < this.geldLade) {
      throw new Error("Nicht ausreichend Geld gezahlt!");
    }
    let retourgeld = (betrag - this.geldLade).toFixed(2);
    this.einnahmenHeute += this.geldLade;
    this.geldLade = 0;
    console.log("Bezahlt: " + betrag + "€");
    console.log("Retourgeld: " + retourgeld + "€");
  }

  getEinnahmenHeute() {
    return this.einnahmenHeute;
  }

  getGescannteArtikel() {
    return this.gescannteArtikel;
  }
}

class Artikel {
  constructor(name, preis) {
    this.name = name;
    this.preis = preis;
  }
}

let kassa = new Kassa();
let artikel1 = new Artikel("Cola", 1.89);
let artikel2 = new Artikel("Brot", 2.5);

kassa.scannen(artikel1);
kassa.scannen(artikel2);

console.log("Gescannte Artikel:", kassa.getGescannteArtikel());

let bezahlterWert = 5;
let betrag = bezahlterWert;
kassa.bezahlen(bezahlterWert);

console.log("Heute eingenommen: " + kassa.getEinnahmenHeute() + "€");
