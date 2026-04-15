import { assertEquals } from "@std/assert";
import { is_it_prime } from "./main.ts";

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(1), [true, "Ja, 1 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(2), [true, "Ja, 2 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(3), [true, "Ja, 3 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(5), [true, "Ja, 5 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(7), [true, "Ja, 7 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(11), [true, "Ja, 11 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(13), [true, "Ja, 13 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(17), [true, "Ja, 17 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(19), [true, "Ja, 19 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(4), [false, "Nein, 4 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(6), [false, "Nein, 6 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(8), [false, "Nein, 8 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(9), [false, "Nein, 9 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(10), [false, "Nein, 10 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(12), [false, "Nein, 12 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(14), [false, "Nein, 14 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(15), [false, "Nein, 15 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(16), [false, "Nein, 16 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(18), [false, "Nein, 18 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(20), [false, "Nein, 20 ist keine Primzahl"]);
});