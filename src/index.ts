

class Foo {
}

class Bar {
    static myFoo: Foo = new Foo();
}


	
var foo = Bar.myFoo 

var result = JSON.stringify(foo, undefined, 2);





document.getElementById("app").innerHTML = `
<div id="root">
</div>
