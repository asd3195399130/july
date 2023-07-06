function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo: foo,
};

var obj2 = {
  a: 3,
  foo: foo,
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
    console.log(color);
  }
}
function Parent() {
  this.name = "parent1";
  this.play = [1, 2, 3];
}
function Child() {
  this.type = "child2";
}
Child1.prototype = new Parent();
console.log(new Child());
