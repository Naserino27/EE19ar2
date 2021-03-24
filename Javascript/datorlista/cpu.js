// Hitta ett element vi behöver
const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

// Vad händer när man trycker på knappen
knapp.addEventListener("click", function () {
    console.log("Du har klickat på knappen!");

    // Läs av textrutan och lagra i en variabel
    var namn = rutaNamn.value;
    console.log(namn);

    // Läs in valet i meny
    var cpu = meny.value;
    console.log(cpu);

    // Skriv i ul-listan
    if (cpu == "Athlon"){
        lista.innerHTML = "<li>" +
        "<img src=\"https://inetimg2.se/img/86x86/5302651_0.jpg\">" +
        "AMD Athlon 3000G " +
        "Antal kärnor: 2 st | Antal trådar: 4 st | TDP: 35 W" + 
        "</li>";
    }
    if (cpu == "Ryzen 3"){
        lista.innerHTML = "<li>" +
        "<img src=\"https://inetimg.se/img/86x86/5303157_0.jpg\">" +
        "AMD Ryzen 3 3100 3.6GHz 18MB" +
        "Antal kärnor: 4 st | Antal trådar: 8 st | TDP: 65 W" + 
        "</li>";
    }
    if (cpu == "Ryzen 5"){
        lista.innerHTML = "<li>" +
        "<img src=\"https://inetimg.se/img/86x86/5301794_1.jpg\">" +
        "AMD Ryzen 5 3400G 3.7 GHz 6MB " +
        "Antal kärnor: 4 st | Antal trådar: 8 st | TDP: 65 W" + 
        "</li>";
    }
    if (cpu == "Celeron"){
        lista.innerHTML = "<li>" +
        "<img src=\"https://inetimg2.se/img/86x86/5303356_0.jpg\">" +
        "Intel Celeron G5905 3.5 GHz 4MB " +
        "Antal kärnor: 2 st | Antal trådar: 4 st | TDP: 35 W" + 
        "</li>";
    }
    if (cpu == "i3"){
        lista.innerHTML = "<li>" +
        "<img src=\"https://inetimg3.se/img/86x86/5303150_0.jpg\">" +
        "Intel Core i3 10100 3.6 GHz 6MB " +
        "Antal kärnor: 4 st | Antal trådar: 8 st | TDP: 65 W" + 
        "</li>";
    }
    if (cpu == "i5"){
        lista.innerHTML = "<li>" +
        "<img src=\"https://inetimg.se/img/86x86/5303124_0.jpg\">" +
        "Intel Core i5 10600KF 4.1 GHz 12MB " +
        "Antal kärnor: 6 st | Antal trådar: 12 st | TDP: 125 W" + 
        "</li>";
    }
});