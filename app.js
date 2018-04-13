const bodyParser = require("body-parser");
const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
// use "body-parser" to parse (analyze) the form body and create "req.body"
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.set("view options", { layout: "layout.hbs" });

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

app.get("/login", (req, res, next) => {
  res.render("login-form");
});

app.post("/process-form", (req, res, next) => {
  console.log("BODY", req.body);

  if (req.body.username === "nizar" && req.body.thePassword === "swordfish") {
    // if username and password match show welcome
    res.render("welcome");
  }
  else {
    // otherwise get the F out!
    res.render("gtfo");
  }
});
// -------------------------------

app.listen(3000, () => {
  console.log("App is running!");
});
