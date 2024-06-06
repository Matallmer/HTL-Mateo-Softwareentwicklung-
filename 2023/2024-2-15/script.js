function calculateBMI() {
  var name = document.getElementById("userInput1").value;
  var gender = document.getElementById("userInput2").value;
  var height = parseFloat(document.getElementById("userInput3").value);
  var weight = parseFloat(document.getElementById("userInput4").value);

  var bmi;
  if (gender === "Männlich") {
    bmi = weight / ((height / 100) * (height / 100));
  } else if (gender === "Weiblich") {
    bmi = weight / ((height / 100) * (height / 100));
  } else {
    alert("Bitte wählen sie ein Geschlecht aus");
    return;
  }

  var Result = "Hello " + name + " your BMI amounts " + bmi.toFixed(2) + ".";
  var weightType = getGewichtType(gender, bmi);
  Result += " You have " + weightType + ".";
  document.getElementById("Result").innerHTML = Result;
}

function getGewichtType(gender, bmi) {
  if (gender === "Männlich" && bmi < 20) {
    return "Untergewicht";
  } else if (gender === "Weiblich" && bmi < 19) {
    return "Untergewicht";
  } else if (gender === "Männlich" && bmi >= 20 && bmi <= 25) {
    return "Normalgewicht";
  } else if (gender === "Weiblich" && bmi >= 19 && bmi <= 24) {
    return "Normalgewicht";
  } else if (gender === "Männlich" && bmi >= 25) {
    return "Übergewicht";
  } else if (gender === "Weiblich" && bmi >= 24) {
    return "Übergewicht";
  } else {
    return "Es scheint einen Fehler zu geben, bitte versuchen sie es später nocheinmal";
  }
}
