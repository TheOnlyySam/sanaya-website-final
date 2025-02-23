const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

// Define your website's base URL
const BASE_URL = "https://www.sanayatechs.com"; // Replace with your domain

// List of pages to include in the sitemap
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/services/data-centers", changefreq: "weekly", priority: 0.7 },
  { url: "/partners", changefreq: "monthly", priority: 0.6 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: BASE_URL });

// Convert the stream to a promise
streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync("./public/sitemap.xml", data.toString()); // Save the sitemap file
    console.log("✅ Sitemap generated successfully!");
  })
  .catch((err) => console.error("Sitemap generation error:", err));

// Write links to the sitemap
links.forEach((link) => sitemap.write(link));

// Close the stream
sitemap.end();
