import { assertEquals } from "@std/assert";
import { is_it_prime } from "./main.ts";

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(1), [true, "Ja, 1 ist eine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(4), [false, "Nein, 4 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(9), [false, "Nein, 9 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(22), [false, "Nein, 22 ist keine Primzahl"]);
});

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(23), [true, "Ja, 23 ist eine Primzahl"]);
});