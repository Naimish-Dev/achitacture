const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional)
app.use(express.json()); // Parse JSON bodies
app.use(express.static("public"));

const cache = new Map();

async function fetcher(req, res) {
  try {
    delete req.headers["content-length"];
    if (cache.get(JSON.stringify(req.body))) {
      console.log("Using cache");
      return res.json(cache.get(JSON.stringify(req.body)));
    }

    const resf = await fetch(`https://architextures.org${req.path}`, {
      headers: req.headers,
      referrerPolicy: "no-referrer",
      body: JSON.stringify(req.body),
      method: req.method,
    });

    const jsonResponse = await resf.json();
    console.log("cache stored: ");
    cache.set(JSON.stringify(req.body), jsonResponse);

    res.json(jsonResponse);
  } catch (error) {
    console.log("error", error);
  }
}

app.post("/app/query", fetcher);
app.post("/app/protextures", (req, res, next) => {
  res.json({
    more: false,
    results: [
      {
        id: 4,
        name: "Rough Concrete",
        category: "Joint",
        subcategory: "Architecture",
        description: null,
        collection: null,
        thumbnail: "200.jpg",
        realwidth: 750,
        realheight: null,
        pixelwidth: 4000,
        status: "live",
        user: null,
        brand: null,
        country: null,
        seamless: "1",
        source_type: null,
        json_data: null,
        source_names: ["xhbxdy.jpg"],
        color: "#837964",
        link: null,
        source_data: null,
        params: null,
        patterns: null,
        sku: null,
        gallery_images: null,
        datasheet: null,
        downloads: 157,
        texture_sources: null,
        created_at: "2023-09-07 08:33:33",
        updated_at: "2024-09-10 09:45:17",
        deleted_at: null,
        brands_name: null,
        brands_website_link: null,
        brands_logo: null,
        protextures_position_as_position: 2731,
      },
      {
        id: 1,
        name: "Granite",
        source_names: ["zxrixu.jpg"],
        source_data: {
          "zxrixu.jpg": {
            tags: [],
          },
        },
        realwidth: 2000,
        brand: null,
        category: "Stone",
        seamless: "1",
        params: null,
        patterns: null,
        collection: "",
        thumbnail: "200.jpg",
        sku: null,
        link: null,
        color: "#c1c0be",
        texture_sources: null,
        brands_name: null,
        brands_website_link: null,
        brands_logo: null,
      },
    ],
    status: "success",
  });
});
app.post("/app/node-canvas", (req, res, next) => {
  res.json({});
});
app.post("/app/material-view", (req, res, next) => {
  res.json(req.body);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
