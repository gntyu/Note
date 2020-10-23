function Foo(){
  Foo.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}
Foo.prototype.a = function () {
  console.log(3)
}
Foo.a = function () {
  console.log(4)
}

Foo.a()//4
let obj = new Foo()//new 的时候 => Foo.a:f=>1 a:f=>2
obj.a()//2   
Foo.a()//4错了，应该是1