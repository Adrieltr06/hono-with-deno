import { assertEquals } from "@std/assert";
import { add } from "./main_tutorial_1.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
