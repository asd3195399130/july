import $ from "jquery";
import "./index.css";
$(function () {
  $("li:even").css("background", "green");
  $("li:odd").css("background", "red");
  //   abc.init();
});
