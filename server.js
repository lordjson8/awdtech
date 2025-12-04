import { createServer } from "http";
import { parse } from "url";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
// const hostname = "awd.com";
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parseUrl = parse(req.url, true);
    handle(req, res, parseUrl);
  }).listen(port, (error) => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
