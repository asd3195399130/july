//express_demo.js 文件
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cookieParser = require("cookie-parser");
var util = require("util");
var fs = require("fs");
const { userInfo } = require("os");

app.use("/public", express.static("public"));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Hello World123");
});
app.get("/user", (req, res) => {
  var response = {
    Username: req.query.username,
    Password: req.query.password,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

// app.get("/process_get", function (req, res) {
//   // 输出 JSON 格式
//   var response = {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name,
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });
app.post("/user", urlencodedParser, (req, res) => {
  res.setHeader("Content-Type", "application/json");

  //   res.cookie("first_name", "张三", { maxAge: 24 * 60 * 60 * 1000 });
  // console.log(req.cookies);
  // console.log("Cookies: " + util.inspect(req.cookies));
  var response = {
    Username: req.body.Username,
    password: req.body.password,
  };
  res.end(JSON.stringify(response));
  console.log(response);
});
//显示登陆页面
app.get("/login.html", (req, res) => {
  res.sendFile(__dirname + "/" + "login.html");
});
//登录跳转页面
app.get("/userinfo", function (req, res) {
  // console.log("Cookies: " + util.inspect(req.cookies));
  let userid = req.cookies.userid;
  var data = fs.readFileSync("user.json");
  data = JSON.parse(data);

  let index = data.list.findIndex((item) => {
    return item.id == userid;
  });
  res.json(data.list[index]);
});
//修改后的页面
app.post("/save", urlencodedParser, (req, res) => {
  var data = fs.readFileSync("user.json");
  data = JSON.parse(data);
  console.log("同步读取: " + data.name);
  let userid = req.cookies.userid;
  let index = data.list.findIndex((item) => {
    return item.id == userid;
  });
  data.list[index] = {
    id: userid,
    ...req.body,
  };
  fs.writeFileSync("user.json", JSON.stringify(data, null, 4));
  res.json({
    msg: "success",
  });
});
app.post("/login", urlencodedParser, (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  var data = fs.readFileSync("user.json");
  data = JSON.parse(data);
  console.log("同步读取: " + data.name);

  let index = data.list.findIndex((item) => {
    return item.username == req.body.username && item.pwd == req.body.password;
  });
  if (index > -1) {
    res.cookie("userid", data.list[index].id);
    res.sendFile(__dirname + "/" + "userinfo.html");
  } else {
    res.json({
      code: "-1",
      msg: "用户不存在或者密码不正确",
    });
  }

  // res.end(JSON.stringify(response));
  // console.log(response);
});
app.get("/", function (req, res) {
  console.log("Cookies: " + util.inspect(req.cookies));
  res.json({
    cookie: util.inspect(req.cookies),
  });
});
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
