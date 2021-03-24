// Välja element jag använder
const rutaInput1 = document.querySelector(".tal1");
const rutaInput2 = document.querySelector(".tal2");
const rutaPlus = document.querySelector(".plus");
const rutaMinus = document.querySelector(".minus");
const knappRäkna = document.querySelector("button");

//Globala variabler
var tal1 = rutaInput1.textContent;
console.log("tal 1", tal1);
var tal2 = rutaInput2.textContent;
console.log("tal 2", tal2);

// Lyssna på knappen och räkna ut
knappRäkna.addEventListener("click", function () {

    // Läs in värdena
    tal1 = rutaInput1.textContent;
    tal2 = rutaInput2.textContent;

    // Räkna ut
    var summaPlus = tal1 + tal2;
    console.log("summa plus", summaPlus);
    var summaMinus = tal1 - tal2;
    console.log("summa minus", summaMinus);

    // Skriv ut svaret
    rutaPlus.textContent = summaPlus;
    rutaMinus.textContent = summaMinus;
})
