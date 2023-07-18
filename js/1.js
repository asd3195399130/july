// // function foo() {
// //   console.log(this.a);
// // }

// // var obj1 = {
// //   a: 2,
// //   foo: foo,
// // };

// // var obj2 = {
// //   a: 3,
// //   foo: foo,
// // };

// // obj1.foo(); // 2
// // obj2.foo(); // 3

// // obj1.foo.call(obj2); // 3
// // obj2.foo.call(obj1); // 2
// // class Car {
// //   constructor(color, speed) {
// //     this.color = color;
// //     this.speed = speed;
// //     console.log(color);
// //   }
// // }
// // function Parent() {
// //   this.name = "parent1";
// //   this.play = [1, 2, 3];
// // }
// // function Child() {
// //   this.type = "child2";
// // }
// // Child1.prototype = new Parent();
// // console.log(new Child());
// // const firstPromise = new Promise((res, rej) => {
// //   setTimeout(res, 500, "one");
// // });
// // const secondPromise = new Promise((res, rej) => {
// //   setTimeout(res, 100, "two");
// // });
// // Promise.race([firstPromise, secondPromise]).then((res) => {
// //   console.log(res);
// // });
// // function factorial(n) {
// //   if (n === 0) {
// //     return 1;
// //   } else {
// //     return n * factorial(n - 1);
// //   }
// // }
// // var result = factorial(10);
// // console.log(result);
// console.log(Number("123"));
// // 定义一个构造函数
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // 使用 new 操作符创建一个 Person 对象实例
// var person1 = new Person("John", 25);

// console.log(person1.name); // 输出: "John"
// console.log(person1.age); // 输出: 25
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
function A() {
  console.log(1);
}
function Func() {
  A = function () {
    console.log(2);
  };
  return this;
}
Func.A = A;
Func.prototype = {
  A: () => {
    console.log(3);
  },
};
A();
Func.A();
Func().A();
new FuncA();
new Func().A();
new new Func().A();
