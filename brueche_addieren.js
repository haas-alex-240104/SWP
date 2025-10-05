

class Bruch 
{
    constructor(ganz, zaehler, nenner) 
    {
        if (nenner === 0) throw new Error('Nenner darf nicht 0 sein!');
        this.ganz = ganz;
        this.zaehler = zaehler;
        this.nenner = nenner;
        this.kuerzen();
    }

    toString() 
    {
        if (this.zaehler === 0) return `${this.ganz}`;
        if (this.ganz === 0) return `${this.zaehler}/${this.nenner}`;
        return `${this.ganz} ${this.zaehler}/${this.nenner}`;
    }

    erweitern(faktor) 
    {
        return new Bruch(this.ganz, this.zaehler * faktor, this.nenner * faktor);
    }

    kuerzen() 
    {
        if (this.zaehler === 0) return;
        let g = Bruch.ggt(this.zaehler, this.nenner);
        this.zaehler = this.zaehler / g;
        this.nenner = this.nenner / g;
        // Falls Zähler >= Nenner, in ganze Zahl umwandeln
        if (this.zaehler >= this.nenner) 
        {
            this.ganz += Math.floor(this.zaehler / this.nenner);
            this.zaehler = this.zaehler % this.nenner;
        }
    }

    static ggt(a, b) 
    {
        a = Math.abs(a); b = Math.abs(b);
        while (b !== 0) 
        {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    static kgv(a, b) 
    {
        return Math.abs(a * b) / Bruch.ggt(a, b);
    }

    addiere(b2) 
    {
        // Beide Brüche auf denselben Nenner bringen
        let kgv = Bruch.kgv(this.nenner, b2.nenner);
        let z1 = (this.ganz * this.nenner + this.zaehler) * (kgv / this.nenner);
        let z2 = (b2.ganz * b2.nenner + b2.zaehler) * (kgv / b2.nenner);
        let summe = z1 + z2;
        let ganz = Math.floor(summe / kgv);
        let zaehler = summe % kgv;
        let res = new Bruch(ganz, zaehler, kgv);
        res.kuerzen();
        return res;
    }
}

let bruch1str = "3 3/4";
let bruch2str = "6 4/5";



function string2bruch(bruch) 
{
    const splitter = bruch.split(" ");
    if (splitter.length === 2) 
    {
        const bruchsplitter = splitter[1].split("/");
        return new Bruch(
            Number(splitter[0]),
            Number(bruchsplitter[0]),
            Number(bruchsplitter[1])
        );
    } 
    else if (splitter.length === 1) 
    {
        const bruchsplitter = bruch.split("/");
        if (bruchsplitter.length === 2) 
        {
            return new Bruch(0, Number(bruchsplitter[0]), Number(bruchsplitter[1]));
        } 
        else if (splitter.length === 1) 
        {
            return new Bruch(Number(splitter[0]), 0, 1);
        }
    } 
    else 
    {
        throw new Error("Eingabefehler");
    }
}



let bs1 = string2bruch(bruch1str);
let bs2 = string2bruch(bruch2str);



// Addition objektorientiert:
let summe = bs1.addiere(bs2);
console.log(summe.toString());