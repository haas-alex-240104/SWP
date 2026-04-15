import { assertEquals } from "@std/assert";
import { Bruch } from "./bruche_ad.ts";
console.log("Alle Tests erfolgreich ausgeführt!");

Deno.test("Addition mit ganzen Zahlen", () => {
  const b1 = Bruch.fromString("1");
  const b2 = Bruch.fromString("2");
  assertEquals(b1.addiere(b2).toString(), "3");
});

Deno.test("Addition mit gemischten Zahlen", () => {
  const b1 = Bruch.fromString("1 1/2");
  const b2 = Bruch.fromString("2 1/3");
  assertEquals(b1.addiere(b2).toString(), "3 5/6");
});

Deno.test("Addition mit negativem Bruch", () => {
  const b1 = Bruch.fromString("1/2");
  const b2 = Bruch.fromString("-1/3");
  assertEquals(b1.addiere(b2).toString(), "1/6");
});

Deno.test("Addition mit Null", () => {
  const b1 = Bruch.fromString("0");
  const b2 = Bruch.fromString("3/4");
  assertEquals(b1.addiere(b2).toString(), "3/4");
});

Deno.test("Addition mit gleichen Nennern", () => {
  const b1 = Bruch.fromString("2/5");
  const b2 = Bruch.fromString("1/5");
  assertEquals(b1.addiere(b2).toString(), "3/5");
});

function randomInt(max: number): number {
  return Math.ceil(Math.random() * max);
}

function ergebnisGenerieren(): { ganz: number; zähler: number; nenner: number } {
  return {
    ganz: randomInt(10),
    zähler: randomInt(20),
    nenner: randomInt(20) + 1
  };
}

function bruchErweitern(bruch: { ganz: number; zähler: number; nenner: number }, erweiterung: number): { ganz: number; zähler: number; nenner: number } {
  return {
    ganz: bruch.ganz * erweiterung,
    zähler: bruch.zähler * erweiterung,
    nenner: bruch.nenner * erweiterung
  };
}

function addiereBrueche(b1: { ganz: number; zähler: number; nenner: number }, b2: { ganz: number; zähler: number; nenner: number }): { ganz: number; zähler: number; nenner: number } {
  const neuNenner = b1.nenner * b2.nenner;
  const neuZähler = b1.ganz * b1.nenner * b2.nenner + b1.zähler * b2.nenner +
                   b2.ganz * b2.nenner * b1.nenner + b2.zähler * b1.nenner;
  const neuGanz = Math.floor(neuZähler / neuNenner);
  const restZähler = neuZähler % neuNenner;
  return { ganz: neuGanz, zähler: restZähler, nenner: neuNenner };
}

for (let i = 0; i < 15; i++) {
  const ergebnis = ergebnisGenerieren();
  const z = ergebnis.zähler;
  const a = randomInt(z - 1);
  const b = z - a;
  
  const erweiterung1 = randomInt(5) + 1;
  const erweiterung2 = randomInt(5) + 1;
  
  const bruch1 = bruchErweitern({ ganz: 0, zähler: a, nenner: ergebnis.nenner }, erweiterung1);
  const bruch2 = bruchErweitern({ ganz: 0, zähler: b, nenner: ergebnis.nenner }, erweiterung2);
  
  const berechnet = addiereBrueche(bruch1, bruch2);
  const b1 = new Bruch(bruch1.ganz, bruch1.zähler, bruch1.nenner);
  const b2 = new Bruch(bruch2.ganz, bruch2.zähler, bruch2.nenner);
  const summe = b1.addiere(b2);
  
  const ergebnisBruch = new Bruch(ergebnis.ganz, ergebnis.zähler, ergebnis.nenner);
  
  console.log(`Test ${i + 1}: ${summe.toString()} === ${ergebnisBruch.toString()}`);
}
