const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");
const md5 = require("md5");
const path = require("path");
const main = require("./index");
// Middleware (optional)
app.use(express.json()); // Parse JSON bodies
app.use(express.static("public"));

const cache = new Map();

async function fetcher(req, res) {
  try {
    delete req.headers["content-length"];
    if (cache.get(md5(JSON.stringify(req.body)))) {
      console.log("Using cache");
      return res.json(cache.get(md5(JSON.stringify(req.body))));
    }

    const resf = await fetch(`https://architextures.org${req.path}`, {
      headers: req.headers,
      referrerPolicy: "no-referrer",
      body: JSON.stringify(req.body),
      method: req.method,
    });

    const jsonResponse = await resf.json();
    console.log("cache stored: ");
    cache.set(md5(JSON.stringify(req.body)), jsonResponse);

    res.json(jsonResponse);
  } catch (error) {
    console.log("error", error);
  }
}

app.get("/cache", async (req, res) => {
  res.json(await main());
});

app.post("/app/query", fetcher);
app.post("/app/node-canvas", (req, res, next) => {
  res.json({});
});
app.post("/app/material-view", (req, res, next) => {
  res.json({});
});
app.post("/app/check-storage", (req, res, next) => {
  res.json({});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
