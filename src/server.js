import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./app";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
  const context = {};
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );
  const reactDom = renderToString(jsx);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlTemplate(reactDom));
});

app.listen(port);

function htmlTemplate(reactDom) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
