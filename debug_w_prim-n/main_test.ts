import { assertEquals } from "@std/assert";
import { is_it_prime } from "./main.ts";

Deno.test(function is_it_primeTest() {
  assertEquals(is_it_prime(3), true);
});
