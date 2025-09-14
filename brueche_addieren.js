let bruch1 = "3 3/4";
let bruch2 = "6 4/5";

function string2bruch(bruch)
{
    const splitter = bruch.split(" ");
    if (splitter.length == 2)
    {
       const bruchsplitter = splitter[1].split("/");

        let ganz = Number(splitter[0]);
        let zaehler = Number(bruchsplitter[0]);
        let nenner = Number(bruchsplitter[1]);
            return[ganz, zaehler, nenner];  
    }
    else if (splitter.length == 1)
    {
        const bruchsplitter = bruch.split("/");
        if (bruchsplitter.length == 2)
        {
            let zaehler = Number(bruchsplitter[0]);
            let nenner = Number(bruchsplitter[1]);
            let ganz = 0;
            return[ganz, zaehler, nenner];
        }
        else if (splitter.length == 1)
        {
           let ganz = Number(splitter[0]);
           let zaehler = 0;
           let nenner = 1;

            return[ganz, zaehler, nenner];
        }
    }
    else
    {
        throw("Eingabefehler");
    }
}

bs1 = string2bruch(bruch1);
bs2 = string2bruch(bruch2);

let r = 1;
let r1
let r2
let kgv
for (let i=1; r==1; i++)
{
    r1 = i % bs1[2];
    r2 = i % bs2[2];

    if (r1 == 0 && r2 == 0)
    {
        r = 0;
        kgv = i;
    }
}

function multiplikator (bruch, klgevi)
{
    m = klgevi / bruch[2];
    return [bruch[0], bruch[1] * m, klgevi]   ;
}

r = 1;
function ggt (a, b)
{
    if (a < b)
    {
        for (let i = a; r==1; i--)
        {
            if (a % i == 0 && b % i == 0)
            {
                r = 0;
                return i;
            }

        }
    }
    else
    {
       for (let i = b; r==1; i--)
        {
            if (a % i == 0 && b % i == 0)
            {
                r = 0;
                return i;
            }

        } 
    }  

}

let bs1m = multiplikator(bs1, kgv);
let bs2m = multiplikator(bs2, kgv);
let summe_ge = bs1m[1] + bs2m[1];

//console.log(kgv);
//console.log(bs1m);       --Zur Überprüfung--
//console.log(bs2m);
//console.log(summe_ge);

function summe_ga (bruch1, bruch2, kgv_2)
{
    if (summe_ge >= kgv_2)
    {
        let ganz = Math.floor(summe_ge/ kgv_2) + bruch1[0] + bruch2[0];
        let zaehler = summe_ge % kgv_2;
         while (zaehler >= kgv_2)
        {
            ganz = zaehler % kgv_2 + bruch1[0] + bruch2[0];
            zaehler = zaehler - kgv_2;
        }
        if (kgv_2 % zaehler == 0 && zaehler !== 0)
        {
            let dividor = ggt(zaehler, kgv_2);
            zaehler = zaehler / dividor;
            kgv_2 = kgv_2 / dividor;
        }
        return [ganz, zaehler, kgv_2];
    }
    else
    {
        let ganz = bruch1[0] + bruch2[0];
        let zaehler = summe_ge;
        return [ganz, zaehler, kgv_2];
    }
}
let ganze_summe = summe_ga(bs1m, bs2m, kgv);
console.log(ganze_summe[0], ganze_summe[1]+"/"+ ganze_summe[2]);