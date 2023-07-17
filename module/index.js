// // console.log(arr);
// export let index = [
//   {
//     name: "张三",
//     sex: "男",
//     age: 18,
//   },
//   {
//     name: "丽丽",
//     sex: "女",
//     age: 18,
//   },
//   {
//     name: "姜维",
//     sex: "男",
//     age: 18,
//   },
//   {
//     name: "康文",
//     sex: "男",
//     age: 18,
//   },
// ];
// const site = "前程似锦";
// const func = function () {
//   return "is a moudule function";
// };
// class User {
//   show() {
//     console.log("user.show");
//   }
// }
// export { site, User, func };
class User {
  static show() {
    console.log("祝你前程似锦，一路锦华相送");
  }
}
export { User as default };
