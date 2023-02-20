DOM(Document Object Model):文档对象模型
-文档: 整个HTML网页文档
-对象: 将网页中每一部分转换成一个对象
-模型: 表示对象之间的关系

document对象
-Document节点表示整个载入的网页
  对DOM的所有操作是从document对象开始的
  它是DOM的入口点,可以从document开始访问任何节点元素
-对于最顶层的html/head/body元素,我们可以直接在document对象中获取到
  html元素: <html> = document.documentElement
  body元素: <body> = document.body
  head元素: <head> = document.head
  文档声明: <!DOCTYPE html> = document.doctype

获取元素的方法
-querySelector * 
  var keyEl = document.querySelector(".key")
-querySelectorAll *
-getElementById
-getElementsByName
-getElementsByTagName
-getElementsByClassName

事件
-onclick 点击
-onmouseover 鼠标进入
-onmouseout 鼠标离开
-onfocus 获得焦点
-onblur 失去焦点

attribute: 元素中的属性
-elem.hasAttribute(name) 检查特性是否存在
-elem.getAttribute(name) 获得这个特性值
-elem.setAttribute(name,value) 设置这个特性值
-elem.removeAttribute(name) 一处这个特性
-attributes attr对象的集合,具有name/value属性

property: 对象中的属性
-对于标准的attribute,会在DOM对象上创建与其对应的property
-attribute和property相互影响

className和classList
-元素的class attribute,对应的property并非叫class,而是className
-可以对className赋值,它会替换整个类中的字符串
-elem.classList是一个特殊的对象
  elem.classList.add(class) 添加一个类
  elem.classList.remove(class) 移除一个类
  elem.classList.toggle(class) 如果类不存在就添加 存在就移除
  elem.classList.contains(class) 检查给定类 返回true/false

style
-在property中使用驼峰格式
  console.log(boxEl.style.backgroundColor)
-如果将一个属性的值,设置为空的字符串
-设置多个样式
  boxEl.style.fontSize = "30px"
  boxEl.style.color = "red"
  boxEl.style.cssText = "font-size: 30px; color: red" *
-元素style的读取-getComputedStyle
  对于内联样式,可以通过style.*的方式读取到
  对于style/css文件,是读取不到的
  这时可以通过getComputedStyle的全局函数来实现
    console.log(getComputedStyle(boxEl).width)
    console.log(getComputedStyle(boxEl).height)
    console.log(getComputedStyle(boxEl).backgroundColor)

dataset
-<div data-age="18"></div>
  console.log(boxEl.dataset.age)

创建元素
-创建DOM对象
  var h2El = document.createElement("h2")
  h2El.className = "title"
  h2El.classList.add("active")
  h2El.textContent = "我是标题"
-将元素插入boxEl
  boxEl.append(h2El)
  boxEl.prepend(h2El)
  boxEl.after(h2El)
  boxEl.before(h2El)
  boxEl.replaceWith(h2El)

移除元素
-获得元素
  var boxEl = document.querySelector(".box")
  var removeBtnEl = document.querySelector(".remove-btn")
-移除元素
  removeBtnEl.onclick = function() {
    boxEl.remove()
  }

克隆元素
-获取元素
  var boxEl = document.querySelector(".box")
  var cloneBtnEl = document.querySelector(".clone-btn")
-监听点击
  var counter = 0
  cloneBtnEl.onclick = function() {
    var newNode = boxEl.cloneNode(true)
    newNode.children[0].textContent = "我是标题" + counter
    //boxEl.after(newNode)
    document.body.append(newNode)
    counter++
  }

window的大小/滚动(onscroll事件)
-window的width和height
  innerWidth innerHeight: 获取window窗口的宽度和高度(包含滚动条)
  outerWidth outerHeight: 获取window窗口的整个宽度和高度(包括调试工具 工具栏)
  documentElement.clientHeight documentElement.clientWidth: 获取html的宽度和高度(不包含滚动条)
-window的滚动位置
  scrollX: X轴
  scrollY: Y轴
-滚动方法
  scrollBy(x,y): 将页面滚动至相对于当前位置的(x,y)位置
  scrollTo(x,y): 将页面滚动之绝对坐标

事件冒泡
事件捕获
事件委托 {
  案例7: 点击子元素 委托给父元素处理
}

event常见的属性和方法
-type 事件的类型
-target 当前事件发生的元素
-currentTarget 当前处理事件的元素
-eventPhase 事件所处的阶段
-offsetX offsetY 事件发生在元素内的位置
-clientX clientY 事件发生在客户端内的位置
-pageX pageY 事件发生在客户端相对于document的位置
-screenX screenY 事件发生相对于屏幕的位置
-preventDefault 取消事件的默认行为
-stopPropagation 阻止事件的进一步传递(冒泡或者捕获都可以阻止)

EventTarget类
-EventTarget是一个DOM接口,主要用于添加,删除,派发Event事件
-常见方法
  addEventListener: 注册某个事件类型以及事件处理函数
  removeEventListener: 移除某个事件类型以及事件处理函数
  dispatchEvent: 派发某个事件类型到EventTarget上

window定时器
-实现方法
  setTimeout(fn, time): 将函数推迟一段时间后执行
  setInterval(fn, time): 时间间隔连续重复运行该函数
-取消方法
  clearTimeout(fn)
  clearInterval(fn)

常见的鼠标事件
-click
-contextmenu 点击右键
-dblclick 双击
-mousedown 鼠标被按下
-mouseup 鼠标被松开
-mouseover 鼠标移动到某元素(支持冒泡)
-mouseout 鼠标离开某元素(支持冒泡)
-mouseenter 鼠标指针移到某元素(不支持冒泡)
-mouseleave 鼠标指针移出某元素(不支持冒泡)
-mousemove 鼠标被移动

常见的键盘事件
-onkeydown 某按键被按下
-onkeypress 某按键被按下
-onkeyup 某按键被松开

表格(table)元素的导航(navigator)
-<table>元素支持以下这些属性
  table.rows: <tr>元素的集合
  table.caption/tHead/tFoot: 引用元素<caption>,<thead>,<tfoot>
  table.tBodies: <tbody>元素的集合
-<thead>,<tfoot>,<tbody>元素提供了rows属性
  tbody.rows: 表格内部<tr>元素的集合
-<tr>
  tr.cells: 在给定<tr>中的<td>和<th>单元格的集合
  tr.sectionRowlndex: 给定的<tr>在封闭的<thead>/<tbody>/<tfoot>中的位置(索引)
  tr.rowlndex: 在整个表格中<tr>的编号(包括表格的所有行)
-<td>和<th>
  td.celllndex: 在封闭的<tr>中单元格的编号

