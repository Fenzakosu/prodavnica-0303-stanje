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
const tv = new Artikal(1, "TV", 650, false);
const mis = new Artikal(1, "Miš", 20, true);

const artikli = [monitor, tv, mis];

