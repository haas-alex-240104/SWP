import { Bruch } from "../brueche_addieren_w_test/bruche_ad.ts";
import { assertEquals } from "@std/assert";

for (let i = 0; i < 15; i++) 
{
    const ausgangs_ganzzahl = Math.floor(Math.random() * 10);
    const ausgangsnenner = Math.ceil(Math.random() * 100);
    const ausgangszähler = Math.ceil(Math.random() * 100)
    const subtrahend_ausgangszähler = Math.floor(Math.random() * ausgangszähler);
    
    const erweiterungsfaktor_1 = Math.floor(Math.random() * 10) +1;
    const erweiterungsfaktor_2 = Math.floor(Math.random() * 10) +1;

    const bruch1_ganzzahl = Math.floor(Math.random() * ausgangs_ganzzahl);
    const bruch2_ganzzahl = (ausgangs_ganzzahl - bruch1_ganzzahl);

    const bruch_1_zähler = (ausgangszähler - subtrahend_ausgangszähler) * erweiterungsfaktor_1;
    const bruch_2_zähler = subtrahend_ausgangszähler * erweiterungsfaktor_2;
    //console.log(bruch_1_zähler+bruch_2_zähler,"/"+ ausgangszähler);

    const bruch_1_nenner = ausgangsnenner * erweiterungsfaktor_1;
    const bruch_2_nenner = ausgangsnenner * erweiterungsfaktor_2;

    const ergebnis_bruch = new Bruch(ausgangs_ganzzahl, ausgangszähler, ausgangsnenner);
    const bruch1 = new Bruch(bruch1_ganzzahl, bruch_1_zähler, bruch_1_nenner);
    const bruch2 = new Bruch(bruch2_ganzzahl, bruch_2_zähler, bruch_2_nenner);

    //console.log(ergebnis_bruch + "\n" + bruch1 + "\n" + bruch2);
    Deno.test("Brüche addieren Test " + i, () => {
    assertEquals(bruch1.addiere(bruch2).toString(), ergebnis_bruch.toString());
    });
};
