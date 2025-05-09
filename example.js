"use strict";

class Artikal {
    constructor(id, naziv, cena, dostupnost) {
        this.id = id;
        this.naziv = naziv;
        this.cena = cena;
        this.dostupnost = dostupnost;
    }
}

const monitor = new Artikal(1, "Monitor", 165, true);
const tv = new Artikal(2, "TV", 650, false);
const mis = new Artikal(3, "Mis", 20, true);

const artikli = [monitor, tv, mis];

let tabela = document.querySelector("#artikli");

tabela.style.border = "1px solid black";

function prikaziArtikle(artikli) {
    for (let artikal of artikli) {

        let tr = kreirajRed(artikal);

        tabela.appendChild(tr);
    }
}

function stilizujRed(td) {
    td.style.border = "1px solid black";
}

function kreirajRed(artikal) {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");
    let dostupnost = document.createElement("td");

    id.textContent = artikal.id;
    naziv.textContent = artikal.naziv;
    cena.textContent = artikal.cena;

    stilizujRed(id);
    stilizujRed(naziv);
    stilizujRed(cena);
    stilizujRed(dostupnost);

    if (artikal.dostupnost) {
        dostupnost.textContent = "DA";
    } else {
        dostupnost.textContent = "NE";
        tr.style.backgroundColor = "#F8CECC";
    }

    tr.appendChild(id);
    tr.appendChild(naziv);
    tr.appendChild(cena);
    tr.appendChild(dostupnost);

    return tr;
}

prikaziArtikle(artikli);