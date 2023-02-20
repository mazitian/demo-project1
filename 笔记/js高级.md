******01_this指向的分析

// 定义函数
function foo() {
  console.log("foo函数:", this)
}

// 1.方式一: 直接调用
foo()
// 指向window

// 2.方式二: 通过对象调用
var obj = { name: "why" }
obj.aaa = foo
obj.aaa()
// 指向obj

// 定义对象函数独立调用
var obj = {
  name: "why",
  bar: function() {
    console.log("bar", this)
  }
}
var baz = obj.bar
baz()
// 指向window

// 高阶函数
function test(fn) {
  fn()
}
text(obj.bar)
// 相当于独立函数调用 指向window

// 严格模式下, 独立调用的函数中的this指向的是undefined

this的绑定规则
-默认绑定
-隐式绑定
-显示绑定
-new绑定

隐式绑定 {
  function foo() {
    console.log(this)
  }
  var obj = {
    bar: foo
  }
  obj.bar()
  // 指向obj
}

new绑定 {
  function foo() {
    console.log(this)
  }
  new foo()
  // new: 1.创建空对象 2.将this指向这个空对象 3.执行函数体中的代码 4.没有显示返回非空对象时,默认返回这个对象
  // 指向空对象
}

显示绑定 {
  // apply 应用, call 调用 {
    // 调用函数时传递参数: foo.apply(this, [参数1,参数2,...]) foo.call(this, 参数1, 参数2,...)
    // apply通过数组传参 call通过链表传参
  }
  function foo() {
    console.log(this)
  }
  foo.call(obj)
  // 指定obj
}

this的优先级 {
  // 1.默认规则的优先级最低
  // 2.new绑定优先级高于隐式绑定 {
    var obj = {
      name: "why",
      foo: function() {
        console.log(this)
      }
    }
    new obj.foo()
  }
  // 3.new和显式不能一起用
  // 4.new优先级高于bind {
    function foo() {
      console.log(this)
    }
    var bindFn = foo.bind("aaa")
    new bindFn()
  }
  // 5.显式绑定优先级高于隐式绑定
  // 6.bind优先级高于显式绑定 {
    function foo() {
      console.log(this)
    }
    var bindFn = foo.bind("aaa")
    bindFn.apply("bbb")
  }
}

******02_箭头函数

// 普通函数:
var foo1 = function(name, age) {}
// 箭头函数:
var foo2 = (name, age) => {}

// 箭头函数的优化:
1.优化一: 如果箭头函数只有一个参数, 那么()可以省略
2.优化二: 如果函数体中只有一行执行代码, 那么{}可以省略
3.优化三: 只有一行代码时, 这行代码的表达式结果会作为函数的返回值默认返回
4.优化四: 一行代码中不能带return关键字, 如果省略{}, 需要把return也一起省略
5.优化五: 如果默认返回是一个对象, 那么这个对象必须加()
  var arrFn = () => ({ name: "why" })

// 箭头函数实现nums的所有偶数平方的和
  var nums = [20, 30, 11, 15, 111]
  var result = nums.filter(item => item % 2 === 0)
                   .map(item => item * item)
                   .reduce((prevValue, item) => prevValue + item)
  console.log(result)

// 箭头函数没有this
1.
  var obj = {
    name: "obj",
    foo: function() {
      var bar = () => {
        console.log("bar:", this)
      }
      return bar
    }
  }
  var fn = obj.foo()
  fn.apply("bbb")
  // 指向obj
2.
  var obj = {
    name: "obj",
    foo: () => {
      var bar = () => {
        console.log("bar:", this)
      }
      return bar
    }
  }
  var fn = obj.foo()
  fn.apply("bbb")
  // 指向window