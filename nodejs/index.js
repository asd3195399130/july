//express_demo.js 文件
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cookieParser = require("cookie-parser");
var util = require("util");

app.use("/public", express.static("public"));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Hello World123");
});
app.get("/user", (req, res) => {
  res.json({ name: "李四" });
});
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});
let user = [
  {
    id: 1,
    username: "张起灵",
    pwd: 63935963,
    nickname: "小哥",
    age: 44,
    sex: "男",
    desc: "南派三叔创作的小说《盗墓笔记》及其衍生作品中的灵魂人物，本书的主角之一，铁三角的精神领袖。",
  },
  {
    id: 2,
    username: "",
  },
];
// app.get("/process_get", function (req, res) {
//   // 输出 JSON 格式
//   var response = {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name,
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });
app.post("/packUser", urlencodedParser, (req, res) => {
  res.setHeader("Content-Type", "application/json");

  //   res.cookie("first_name", "张三", { maxAge: 24 * 60 * 60 * 1000 });
  console.log(req.cookies);
  console.log("Cookies: " + util.inspect(req.cookies));
  var response = {
    Username: req.body.Username,
    password: req.body.password,
  };
  res.end(JSON.stringify(response));
  console.log(response);

  //   console.log(req.query);
  //   res.json({
  //     msg: "success",
  //     code: 200,
  //   });
});

app.listen(8081, function () {
  console.log("启动成功");
});
