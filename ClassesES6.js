
/////////////  Clase CLASSES
//ES5
/*
var Person5 = function (nume, anNastere, job) {
    this.nume = nume;
    this.anNastere = anNastere;
    this.job = job;
}

Person5.prototype.calculeazaVarsta = function() {
    var varsta = new Date().getFullYear - this.anNastere;
    console.log(varsta);
}

var marius5 = new Person5 ('Marius', 1987, 'billionaire');


//ES6
class Person6 {
    constructor (nume, anNastere, job) {
        this.nume = nume;
        this.anNastere = anNastere;
        this.job = job;
    }

    calculeazaVarsta() {
        var varsta = new Date().getFullYear() - this.anNastere;
        console.log(varsta);                
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const Marius6 = new Person6('Marius', 1987, 'milionar');

////////////////////////////////////////////////////////////////////

//// Mostenire INHERITANCE  (Classes and subclasses)

//ES5
var Person5 = function (nume, anNastere, job) {
    this.nume = nume;
    this.anNastere = anNastere;
    this.job = job;
}

Person5.prototype.calculeazaVarsta = function() {
    var varsta = new Date().getFullYear() - this.anNastere;
    console.log(varsta);
}

var Atlet5 = function (nume, anNastere, job, jocuriOlimpice, medalii) {
    Person5.call(this, nume, anNastere, job);
    this.jocuriOlimpice = jocuriOlimpice;
    this.medalii = medalii;
}

Atlet5.prototype = Object.create(Person5.prototype);

var johnAtlet5 = new Atlet5('John', 1987, 'Atlet', 3, 10);
*/

//ES6

class Person6 {
    constructor (nume, anNastere, job) {
        this.nume = nume;
        this.anNastere = anNastere;
        this.job = job;
    }

    calculeazaVarsta() {
        var varsta = new Date().getFullYear() - this.anNastere;
        console.log(varsta);
    }
}

class Atlet6 extends Person6 {
    constructor (nume, anNastere, job, jocuriOlimpice, medalii) {
        super(nume, anNastere, job);
        this.jocuriOlimpice = jocuriOlimpice;
        this.medalii = medalii;
    }
    castigaMedalie() {
        this.medalii++
        console.log(this.medalii);
    }
}

const mariusAtlet6 = new Atlet6('Marius', 1987, 'Cel mai tare atlet', 3, 10);