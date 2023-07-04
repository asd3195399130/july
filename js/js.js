// let colors = ["red", "green", "blue"];
// let colors2 = colors.concat("yellow", ["black", "brown"]);
// console.log(colors); // ["red", "green","blue"]
// console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]colo
// console.log(colors.pop());
// let colors = ["red", "green", "blue"];
// let removed = colors.splice(1, 9, "red", "purple"); // 插入两个值，删除一个元素
// console.log(colors); // red,red,purple,blue
// console.log(removed); // green，只有一个元素的数组
// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// let someResult = numbers.every((item, index, array) => item > 1);
// console.log(someResult); // true
var sex = "男";
function person() {
  var name = "张三";
  function student() {
    var age = 18;
    console.log(name); // 张三
    console.log(sex); // 男
    // console.log(age);
  }
  student();
  console.log(age); // Uncaught ReferenceError: age is not defined
}
person();
