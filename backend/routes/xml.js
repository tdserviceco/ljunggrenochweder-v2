const fs = require('fs');

const xml = (req, res) => {
  fs.readFile("../sitemap.xlsx", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return
    }
    console.log(data);
    res.end(data) // Send Data
  });
}