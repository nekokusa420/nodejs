const express = require("express");
const dayjs = require("dayjs");

const app = express();

app.set("view engine", "ejs");
app.set("views", "page");

app.get("/", (req, res) => {
  let now = `現在是 ${dayjs().format("HH")}:${dayjs().format(
    "mm"
  )}:${dayjs().format("ss")}`;
  res.render("index", { courseName: "NodeJS入門課程", time: now });
  // res.sendFile("./page/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.render("about");

  // res.sendFile("./page/about.html", { root: __dirname });
});

//301: 永久轉址 302: 暫時轉址
app.get("/aboutus", (req, res) => {
  res.redirect("/about");
});

//只要不符上述情況就會404
//一定要放最底
app.use((req, res) => {
  res.status(404).render("404");

  // res.status(404).sendFile("./page/404.html", { root: __dirname });
});

app.listen(3000);
