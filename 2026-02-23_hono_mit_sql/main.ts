import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { getLieblinge } from "./db.ts";
const app = new Hono();

app.use("/*", serveStatic({ root: "./static" }));

app.get("/", async (c) => {
    const file = await Deno.readTextFile("./static/index.html");
    return c.html(file);
});

app.get("/lieblinge", (c) => {
    return c.json(getLieblinge());
});

Deno.serve(app.fetch);
