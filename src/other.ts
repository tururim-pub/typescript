class Foo {}

class Bar {
  static myFoo: Foo = new Foo();
}

var foo = Bar.myFoo;

var result = JSON.stringify(foo, undefined, 2);

console.log("foo");

document.getElementById("app").innerHTML = `<div>Hello</div>`;
