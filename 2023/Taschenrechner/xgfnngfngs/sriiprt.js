var x = 55;

function addieren(zahl, sieben) {
  return zahl + sieben;
}
var summe = addieren(x, 7);

document.getElementById("ergebnisParagraph").innerHTML =
  "Das Ergebnis der Berechnung ist: " + summe;
