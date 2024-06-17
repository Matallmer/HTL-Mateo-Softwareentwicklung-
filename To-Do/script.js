document.getElementById("Bestätigungsbutton").onclick = () => {
  const aufgabe = document.getElementById("input-feld").value;
  if (!aufgabe) return;
  document.getElementById(
    "liste"
  ).innerHTML += `<li>${aufgabe} <button class = "DeleteButton" onclick = "Aufgabeentfernen(this)">Entfernen</button></li>`;
  document.getElementById("input-feld").value = "";
  localStorage.setItem(
    "aufgaben",
    (localStorage.getItem("aufgaben") || "") +
      `<li>${aufgabe} <button> Entfernen </button></li>`
  );
  aktualisiereLocalStorage();
};
document.getElementById("input-feld").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    document.getElementById("Bestätigungsbutton").click();
  }
});
function aktualisiereLocalStorage() {
  const liste = document.getElementById("liste").innerHTML;
  localStorage.setItem("aufgaben", liste);
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("liste").innerHTML =
    localStorage.getItem("aufgaben") || "";
});
function Aufgabeentfernen(element) {
  element.parentElement.remove();
  aktualisiereLocalStorage();
}
function Allelöschen() {
  document.getElementById("liste").innerHTML = "";
  localStorage.removeItem("aufgaben");
  aktualisiereLocalStorage();
}
