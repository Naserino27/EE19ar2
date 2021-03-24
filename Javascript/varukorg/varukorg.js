// väljer elementen vi behöver
const rutaPris = document.querySelector(".pris");
const rutaAntal = document.querySelector("input");
const rutaSumma = document.querySelector(".summa");
const knappPlus = document.querySelector(".plus");
const knappMinus = document.querySelector(".minus");

//Globala variabler
var antal = rutaAntal.value;
console.log("antal", antal);
var pris = rutaPris.textContent;
console.log("pris", pris);

//räkna ut summan
var summa = antal * pris;
console.log("summa", summa);

// Skriv ut summan
rutaSumma.textContent = summa + " kr";

// Lyssna på ändring i input rutan
rutaAntal.addEventListener("input", function () {
    //läs av antalet
    antal = rutaAntal.value;

    //räkna ut nya summan
    var summa = antal * pris;

    //skriv ut nya summan 
    rutaSumma.textContent = summa + " kr";
});

//lyssna på klick på knappen plus
knappPlus.addEventListener("click", function () {
    console.log("klickat på plus!")
    antal++;

    //räkna ut summan och skriv ut den
    var summa = antal * pris;
    rutaSumma.textContent = summa + " kr";
    rutaAntal.value++;
});
//lyssna på klick på knappen minus
knappMinus.addEventListener("click", function () {
    if (rutaAntal.value > 0) {
        console.log("klickat på minus!")
        antal--;

        //räkna ut summan och skriv ut den
        var summa = antal * pris;
        rutaSumma.textContent = summa + " kr";

        rutaAntal.value--;
    }
});