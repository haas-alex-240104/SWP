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
