const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.set("layout", __dirname + "/views/layout.hbs");

// Routes 👇🏿👇🏿👇🏿
// -------------------------------
app.get("/", (req, res, next) => {
  res.render("home-page");
});

// URL parameters on Amazon
app.get("/dp/:productId", (req, res, next) => {
  res.send(req.params);
  // { productId: "B00ME2NQSA" }
  console.log(req.params.productId);
});

// URL parameters in the npm website
app.get("/package/:packageName", (req, res, next) => {
  res.send(req.params);
  // { packageName: "mongoose" }
  console.log(req.params.packageName);
});

// URL parameters in the Ironhack website
app.get("/:language/courses/:course", (req, res, next) => {
  res.send(req.params);
  // { language: "en", course: "ux-ui-..." }
  console.log(req.params.language);
  console.log(req.params.course);
});

app.get("/search", (req, res, next) => {
  console.log(req.query);
  // { q: "banana", source: "chrome" }
  if (req.query.q === "banana") {
    res.render("banana");
  }
  else if (req.query.source === "fuckyou") {
    res.render("middle-finger");
  }
  else {
    res.render("results-page");
  }
});
// -------------------------------

app.listen(3000, () => {
  console.log("App is running!");
});
