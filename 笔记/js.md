**********JS初级
一.数据类型
  1.String 字符串
  2.Number 数值
  3.Boolean 布尔值
  4.Null 空值
  5.Undefined 未定义
  6.Object 对象

二.隐式转换
  1.任何值与字符串 + 都会拼串
  2.任意数据类型 +"" 即可转换成String
  3.任何值和 NaN+ 都为NaN
  4.任意值-0 *1 /1可以转换成Number

三.三元运算符
  条件表达式? 语句1: 语句2

四.对象
  1、怎么添加属性？
    对象.属性名 = 属性值;
  2、怎么读取属性？
    console.log(对象.属性名); 
  3、怎么修改属性？
    对象.属性名 = 新值;
  4、怎么删除属性？
    delete 对象.属性名
  5、如果使用特殊的属性名 不能用.
    对象["属性名"] = 属性值;
  6、属性值也可以是个对象
    var obj = new Object();
    var obj2 = new Object();
    obj2.name = "帅哥";
    obj.test = obj2;
    console.log(obj.test);//{name: '帅哥'}
  7.检查是否有此对象属性
    console.log("属性名" in 对象)

五.对象字面量创建对象
  var obj = {
    属性名:属性值,
    属性名:属性值,
    ...
    "特殊属性名":属性值,
    ...
  };

六.方法: 对象的属性值是函数
  obj.sayName = function(){}
  调用方法：obj.sayName();

七.枚举对象的属性: for...in...
  var obj = {
    name:"sunwukong",
    age:18,
    gender:"男",
    address:"花果山"
  };
  for(var keys in obj){
    alert("属性名："+keys+"属性值："+obj[keys]);//执行4次
  };

八.this(不懂)
  1、以函数形式调用 this是window
  2、以方法的形式调用 this是调用方法的对象
  3、以构造函数的形式调用 this是新创建的对象
  4、使用call和apply调用 this是指定的那个对象

九.工厂方法创建对象
  function createPerson(name,age,gender){
    //创建一个新对象
    var obj = new Object();

    //向对象中添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function(){
      alert(this.name);
    };

    //将新的对象返回
    return obj;
  }

  var obj2 = createPerson("猪八戒",28,"男");
  var obj3 = createPerson("蜘蛛精",18,"女");
  console.log(obj2);
  obj3.sayName();

十.立即执行函数
  (function(形参){})(实参)

十一.构造函数: 创建对象的函数 首字母大写
  1、立刻创建一个新对象
  2、将新建的对象设置为函数中this 在构造函数中可以用this来引用新建的对象
  3、逐行执行函数中的代码
  4、将创建的对象作为返回值返回

  function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function(){
      alert(this.name);
    };
  }
  var per = new Person("孙悟空",18,"男");
  var per2 = new Person("杨立洲",20,"男");
  per2.sayName();
  console.log(per);

  使用同一个构造函数来创建的对象 成为一类对象 一个构造函数也叫一个类//Person类
  创建的对象称为该类的实例

  instanceof 检查一个对象是否是一个类的事例 返回true false

  function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function(){
      alert(this.name);
    };
  }
  var per = new Person("孙悟空",18,"男");
  var per2 = new Person("杨立洲",20,"男");
  per2.sayName();
  console.log(per);
  console.log()

  性能提升：将构造函数里面的方法改成全局作用域
  function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    //向对象中添加一个方法
    this.sayName = fun;
  }
  function fun(){
    alert(this.name);
  };
  问题：污染了全局作用域的命名空间 而且定义在全局作用域中很不安全

十二.数组的方法
  1、push() 方法可向数组的末尾添加元素 并返回新的长度
    arr.push("新值1","新值2","新值N");
    该方法会将数组新的长度返回

  2、pop() 方法可删除数组的最后一个元素
    arr.pop();
    arr.pop();//pop一次删除一个
    该方法会将删除的元素作为返回值返回

  3、unshift() 方法向数组开头添加元素 并返回新的数组长度
    arr.unshift("新值1","新值2","新值N");

  4、shift() 方法可以删除第一个元素 调用一次删一次 返回删除的元素

  5、slice() 从某个已有的数组返回选定的元素
    var = result = arr.slice(start,end);
    console.log(result);
    start和end分别是截取开始位置和结束位置的索引
    如果没有写end 就把后面的全部截取

  6、splice() 删除指定元素 替换元素 插入元素 返回删除元素
    arr.splice(start,end,"替换值");
    start为开始位置的索引 end为删除的数量
    第三个及以后参数 可以传递新元素 这些元素会插入到开始位置的索引前

  7、concat() 可以连接两个或多个数组 并将新的数组返回
    arr.concat(arr2);//连接arr和arr2
    arr.concat(arr2,arr3,"添加新元素")//连接三个数组 再添加新元素

  8、join() 可以将数组转换成字符串
    arr.jion("连接符");//不会对原数组产生影响 而是将转换后的字符串作为结果返回 typeof验证为string
    可以改变连接符 不写的话就是","

  9、reverse() 反转数组

  10、sort() 对数组元素进行排序
    arr.sort();
    会默认按照Unicode编码进行排序

    怎么规范排序顺序？
    在sort()添加一个回调函数
    回调函数中需要定义两个形参 浏览器将会分别使用数组中的元素作为实参去调用函数
    使用哪个元素调用不确定 但是肯定的是在数组中a一定在b前边
    浏览器会根据回调函数的返回值来决定元素的顺序
        如果返回一个大于0的值 则元素会交换位置
        如果返回一个小于0的值 则元素位置不变
        如果返回一个0 则会认为两个元素相等 也不交换位置
    arr.sort(function(a,b){
      if(a>b){
          return 1;
      }else if(a<b){
          return -1;
      }else{
          return 0;
      }
    });
    或
    return a-b;//升序
    return b-a;//降序

十三.遍历数组
for(var i = 0 ; i < arr.length ; i++){
  console.log(arr[i]);
}

arr.forEach(function(value , index , obj){
  console.log(value);
}); 需要函数作为参数
数组中有几个元素 函数就会执行几次 每次执行时 浏览器会将遍历到的元素
以实参的形式传递进来 我们可以定义形参 来读取这些内容
浏览器会在回调函数中传递三个参数
  第一个参数 就是当前正在遍历的元素
  第二个参数 就是当前正在遍历元素的索引
  第三个参数 就是当前正在遍历的对象（数组）

十四.数组去重
//创建一个数组
  var arr = [1,2,3,2,2,1,3,4,2,5];
  //获得数组中的每一个元素
  for(var i=0 ; i<arr.length ; i++){
    //获得当前元素后的元素
    for(var j=i+1 ; j<arr.length ; j++){
      //判断两个元素的值是否相等
      if(arr[i] == arr[j]){
        //如果相等则删除j对应的元素
        arr.splice(j,1);
        //当删除当前的j所在的元素以后 后边的元素会自动补位
        //此时将不会再比较这个元素 所以需要再比较一次j所在位置的元素
        j--;
      }
    }
  }

十五.Date对象
  使用Date对象表示时间
  创建对象 会封装成当前代码执行的时间
  var d = new Date();
  alert(d);
  创建一个指定的事件对象
  var d2 = new Date("12/03/2016 11:30:10");
  console.log(d2);
  var date = d2.getDate();
  console.log(date);

  方法：
  1、getdate() 获取当前几日
  2、getDay() 获取当前周几 0表示周日 1表示周一...
  3、getMonth() 获取当前月份 0表示1月 11表示12月 所以返回时要+1
  4、getTime() 获取时间戳 1970年1月1日 0时0分0秒 到当前的毫秒数 1s=1000mms

十六.正则表达式
  1.创建正则表达式的对象:
    var 变量 = new RegExp("正则表达式","匹配模式");
    使用typeof检查正则对象 返回object
    匹配模式 在构造函数中可以传递一个匹配模式作为第二参数
      i 忽略大小写
      g 全局匹配模式
  2.正则表达式的方法：
    test()
      使用这个方法可以用来检查一个字符串是否符合正则表达式的规则
      如果符合返回true 不符合返回false

      var rag = new RegExp("a");
      var str = "a";
      var result = reg.test(str);
      console.log(result);//true
      console.log(reg.test("abc"));//ture
      这个正则表达式 检查字符串里是否含有a
  3.使用字面量创造正则表达式 更加的 不灵活
      var 变量 = /正则表达式/匹配模式;
      比如：reg = /a/i;

      检查是否含有a或b
      reg = /a|b/;
      reg = /[ab]/;

      检查是否有字母
      reg = /[a-z]/i;
      reg = /[A-z];

      检查是否有abc或adc或aec
      reg = /abc|adc|aec/;
      reg = /a[bde]c/;

      reg = /[^ab]/;除了ab以外的

      reg = /[0-9]/;任意数字
  4.字符串和正则相关方法
    var str = "1a2b3c4d5e6f7";

      1、split() 将字符串拆分成一个数组 
        想根据任意字母来拆分字符串
        方法中可以传递一个正则表达书作为参数 方法根据正则表达式拆分字符串
        var result = str.split(/[A-z]/);
        console.log(result);//"1,2,3,4,5,6,7"

      2、search() 搜索字符串中是否含有指定内容
        str = "hello abc hello";
        var result = str.search("abc");
        console.log(result);//6 abc第一次出现的索引为6 
        如果搜索到指定内容 返回第一次出现的索引 没有就返回-1 
        可以接受一个正则表达式作为参数 并根据正则表达式检索字符串

        搜索是否有abc或adc或aec
        result = str.search(/a[bef]c/);
        console.log(result);

      3、match() 可以根据正则表达式从一个字符串中将符合条件的内容提取出来 封装到数组返回
        str = "1a2b3c4d5e6f7";
        提取字母
        result = str.match(/[A-z]/);
        console.log(result);//"a"
        想提取所有字母
        result = str.match(/[A-z]/g);//设置全局匹配模式 就会匹配到所有内容
        console.log(result);//"a,b,c,d,e,f"

      4、replace() 可以将字符串中指定内容替换为新的内容
        str.replace("正则表达式","新的替换字符串");
  5.正则表达式语法
    量词：设置一个内容出现的此时
        reg = /a{n}/;a出现n次
    设置一个内容出现1次到3次
        reg = /a{m,n}/;a出现m-n次
        -去记吧
    
    检查是否以a开头
        reg = /^a/;

    结尾
        reg = /a$/;

    检查是否为手机号
        reg = /^1[3-9][0-9]{9}$/;

    找有没有手机号
        reg = /^1[3-9][0-9]{9}/;

    检查是否含有.
        reg = /./;//不对 .表示任意字符 
        正确；reg = /\./;//转义字符\

    转义
        -去记吧

    去除开头结尾空格
        str str.replace(/^\s* /,"");
        str str.replace(/\s*&/,"");

    写电子邮件的正则

**********DOM BOM
一.修改元素的文字: 元素.innerHTML = "value";

二.事件
  1.onclick
    <button id = "btn" onclick = "alert('被点了');">按钮<button>
    or
    btn.onclick = function(){
            alert("被点了");
        };
  2.onmousemove

三.获取元素对象
  1、getElementById(): id获取一个元素节点对象
  2、gatElementsByTagName(): 返回一个类数组对象 标签名获取一组元素节点对象//div
  2、getElementsByName(): name属性获取一组元素节点对象

四.获取元素节点子节点
  1、getElementsByTagName(): 返回当前节点的指定标签后代节点
  2、childNodes: 表示当前节点的所有子节点
  3、firstChild: 表示当前节点的第一个子节点
  4、lastChild: 表示当前节点的最后一个子节点

五.获取父节点和兄弟节点
  1、parentNode: 表示当前节点的父节点
  2、previousSibling: 表示当前节点的前一个兄弟节点
  3、nextSibling: 表示当前节点的后一个兄弟节点

六.图片切换
  var img = document.getElementsByTagName("img")[0];
  var imgArr = ["img/1.jpg" , "img/2.jpg" , "img/2.jpg" , "img/4.jpg" , "img/5.jpg"];
  var index = 0;
  prev.onclick = function(){
    index--;
    if(index < 0){
      index=imgArr.length - 1;
    }
    img.src = imgArr[index]; 
    info.innerHTML = "一共" + imgArr/length + "张图片，当前是第" + (index+1) + "张";     
  };
  next/onclick = function(){
    index++;
    if(index > imgArr.length - 1){
      index=0;
    }
    img.src = imgArr[index];
    info.innerHTML = "一共" + imgArr/length + "张图片，当前是第" + (index+1) + "张";     
  };

七.全选
  checked属性可以获取或设置多选框是否选中
    items[i].checked = ture;//全选 false全不选

  反选
    判断多选框的状态
    for(var i = 0 ; i < items.length ; i++){
    if(items[i].checked){
      items[i].checked = false;//已选中设为没选中
    }else{
      items[i].checked = ture;//没选中设为选中
      或
      items[i].checked = !items[i].checked;
    }
    };

  提交
    遍历items
    for(var i = 0 ; i<items.length ; i++){
        if(items[i].checked){
            alert(items[i].value);
        }
    }

  全选/全不选
    大的状态 = 小的状态
    
    判断小的框是否都选-->只要有一个没选 就不是全选
    

  for(var i=0 ; i<items.length ; i++){
    items[i].onclick = funtion(){
      变量 = true;//初始值
    for(var j = 0 ; j<items.length ; j++){
      if(!items[j].checked){
        变量.checked = false;
        break;//一旦进入判断 就不进入循环 效率提升o
    }
  }
    }
    
  }
    
八.querySelector
  document.querySelector()
    需要一个选择器的字符串作为参数 可以根据一个css选择器来查询一个元素节点对象
    var div = document.querySelector(".box1 div");
    选择box1中的第一个div
  document.querySelectorAll()
    所有div

九.增加节点
  var li = document.createElement("li");//创建li
  li.innerHTML = "gz";//向li中设置文本
  city.appendChild(li);//将li添加到city中

十.div跟随鼠标移动练习
  1、开启box绝对定位
      position:absolute;
  2、获取box
      var box = document.getElementById("box");
  3、绑定鼠标事件
      box.onmousemove = function(event){
  4、获取鼠标坐标
      var left = event.pageX;
      var top = event.pageY;
      //page 相对于页面
  5、设置div的偏移量
      box.style.left = left + "px";
      box.style.top = top + "px";
      }

十一.事件
1、事件的冒泡
  冒泡就是事件的向上传导 当后代元素上的事件被触发时 其祖先元素的相同事件也会被触发
  取消冒泡方法：
    将事件对象的cancelBubble设置为true
    event.cancelBubble = true;

2、事件的委派
  只绑定一次 把事件引用到新加的元素
  将事件统一绑定给共同的祖先元素 这样后代元素的事件触发 会冒泡到祖先元素 通过祖先的响应函数来处理事件
  taget
    event中的taget表示的触发事件的对象
    if(event.taget.className == "元素中的class"){}

3、事件的绑定
  使用 对象.事件 = 函数 的形式绑定响应函数 只能为一个元素绑定一个函数 绑多了后面会覆盖前面
  addEventListener() 方法可以帮到响应函数
  参数1、事件的字符串 不要on 2、回调函数 3、是否在捕获阶段触发事件 需要一个布尔值 一般为false
  比如：
  btn1.addEventListener("click",function(){
    alert(1);
  },false);
  btn1.addEventListener("click",function(){
    alert(2);
  },false);
  btn1.addEventListener("click",function(){
    alert(3);
  },false);

4、事件的传播
  微软：事件由内向外传播 应该先触发当前元素上的事件
  网景：由外向内 先触发最外层的祖先元素的事件
  三个阶段
    1、捕获阶段
      在捕获阶段时从最外层的祖先元素 向目标元素进行事件的捕获 默认此时不触发事件
    2、目标阶段
      事件捕获目标元素 捕获结束开始在目标元素上出发事件
    3、冒泡阶段
      事件从目标元素向祖先元素传递 依次触发事件 如果希望在捕获阶段执行 可以将false设为true

十二.BOM
  1、Navigator
    代表当前浏览器的信息 通过该对象可以来识别不同的浏览器
    UserAgent
      var 变量 = navigator.userAgent;
  2、History
    代表浏览器的历史记录 可以通过该对象来操作浏览器的历史记录
    由于隐私原因 该对象不能获取到具体的历史记录 只能向前或向后
    back() 
      回退
      history.back();
    forward()
      前进
      history.forward();
    go()
      跳转
      history.go(跳转页面);
  3、Location
    封装了浏览器的地址栏信息
    assign()
      跳转//保留历史
      location.assign("新页面地址");
    reload()
      刷新
      location.reload(true);
    replace()
      替换//无历史记录
      location.replace;

**********JS高级
一.原型与原型链
原型(prototype)
  每个函数都有一个prototype属性 它默认指向一个object空对象 称为原型对象
  原型对象中有一个属性constructor 它指向函数对象
    函数.prototype.constructor === 函数
  给原型对象添加属性(一般是方法)===>实例对象可以访问
    Fun.prototype.test = function(){
      console.log('test()')
    }
    var fun = new Fun()
    fun.test()//test()

显式原型和隐式原型//保存相等的地址值
  1、每个函数都有一个prototype 即显式原型(属性) 指向一个空的obj对象
  2、每个实例对象都有一个__proto__ 即隐式原型(属性) 指向
  3、对象的隐式原型的值为其对应构造函数的显式原型的值
    function Fn(){//内部语句：this.prototype = {}}
    var fn = new Fn()//创建实例对象 内部语句：this.__proto__ = Fn.prototype
    console.log(Fn.prototype===fn.__proto__)//true
  4、内存结构图

原型链
  访问一个对象的属性时
  先在自身属性中找 找到返回
  如果没有 沿着__proto__这条链向上查找 找到返回
  如果都没找到 返回undefined
  别名：隐式原型链
  作用：查找对象的属性（方法）

  构造函数/原型/实体对象的关系(图解)
  1、函数的显式原型指向的对象默认时空的object实例对象
    对Object不满足
  2、所有函数都是Function的实例(包含Function)
  3、Object的原型对象是原型链的尽头

属性问题
  function Fn(){

  }
  Fn.prototype.a = 'xxx'
  var fn1 = new Fn()
  console.log(fn1.a)

  var fn2 = new Fn()
  fn2.a = 'yyy'
  console.log(fn1.a,fn2.a)//xxx yyy

  1、读取对象的属性时 会自动到原型链中找
  2、设置对象的属性值时 不会查找原型链 如果当前对象中没有此属性 直接添加此属性并设置其值
  3、方法一般定义在原型中 属性一般通过构造函数定义在对象身上

instanceof
  1、instanceof是如何判断的？
    A实例对象 instanceof B构造函数
    如果B函数的显式原型对象在A对象的原型链上 返回true 否则false      
  2、Function是通过new自己产生的实例

二.作用域与作用域链
  作用域
  定义了几个函数+1=作用域个数
  1、理解：
    作用域就是一块地盘 一个代码段所在的区域
    他是静态的 相对于上下文 在编写代码时就确定了
  2、分类：
    全局作用域
    函数作用域
  3、作用
    隔离变量 不同作用域下同名变量不会冲突

  作用域链
  由里向外找
  1、理解
    多个上下级关系的作用域形成的链 它的方向是从内到外
    查找变量时就是沿着作用域链来查找的
  2、查找一个变量的查找规则
    在当前作用域下的执行上下文中查找对应的属性 如果有返回 无进入2
    在上一级作用域的执行上下文中查找对应的属性 如果有返回 无进入3
    再次执行2的相同操作 直到全局作用域 如果无就抛出找不到的异常

三.闭包
监听
  点击某个按钮 提示"点击的是第n个按钮"
  错误：
  var btns = document.getElementsByTagName('button')
  for(var i = 0,length=btns.length ; i < length ; i++){
    var btn = btns[i]
    btn.onclick = function (){
      alert('第'+(i+1)+'个')
    }
  }
  console.log(i)
  正确：
  var btns = document.getElementsByTagName('button')
    for(var i = 0,length=btns.length ; i < length ; i++){
      (function (i){
        var btn = btns[i]
        btn.onclick = function (){
          alert('第'+(i+1)+'个')
        }
      })(i)
  }

理解闭包
  1、如何产生闭包？
    当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量(函数)时 就产生了闭包
  2、闭包到底是什么？
    理解一：闭包是嵌套的内部函数
    理解二：包含被引用变量(函数)的对象
  3、闭包产生的条件
    函数嵌套
    内部函数引用了外部函数的数据(变量/函数)

常见的闭包
  1、将函数作为另一个函数的返回值
  function fn1() {
    var a = 2
    function fn2() {
      a++
      console.log(a)
    }
    return fn2
  }
  var f = fn1()
  f()//3
  f()//4
  2、将函数作为实参传递给另一个函数调用
  function showDelay(msg,time){
    setTimeout(function(){
      alert(msg)
    },time)
  }
  showDelay('atguigu',2000)//atguigu

闭包的作用
  1、使用函数内部的变量在函数执行完后 仍然存活在内存中(延长了局部变量的生命周期)
  2、让函数外部可以操作到函数内部的数据
  问题：
    1、函数执行完后 函数内部声明的局部变量是否还存在？一般是不存在 存在于闭包中的变量才可能存在
    2、在函数外部能直接访问函数内部的局部变量吗？不能 但是可以通过闭包让外部操作它

闭包的生命周期
  1、产生：在嵌套内部函数定义执行完时就产生了(不是再调用)
  2、死亡：在嵌套的内部函数成为垃圾对象时(f = null)

闭包的缺点
  1、缺点：函数执行完后 函数内的局部变量没有释放 占用内存时间会变长 容易造成内存泄漏
  2、内存溢出：
    一种程序运行出现的错误
    当程序运行需要的内存超过了剩余的内存时 就会抛出内存溢出的错误
    var obj = {}
    for(var i = 0 ; i < 10000 ; i++){
      obj[i] = new Array(1000000)
      console.log('---------')
    }
  3、内存泄漏
    占用的内存没有及时释放
    内存泄漏积累多了就容易导致内容溢出
    常见的内容泄露
      意外的全局变量
      没有及时清理的计时器或回调函数
      闭包
  
**********ES6
一.声明变量
  let
  1、变量不能重复声明
      let star = 's'
      let star = 'a'
  2、块级作用域
      if else while for 都是块
  3、不存在变量提升
  4、不影响作用域链
  const
  1、定义常量 值不能修改 一定要赋初始值
  2、一般的常量使用大写
  3、块级作用域
  4、对于数组和对象的元素修改 不算常量 不报错

二.模板字符串
  1、声明
    let str = `sjhajhbkj`
  2、内容中可以直接出现换行符
    let str = `<ul>
                <li>shenteng</li>
                <li>mali</li>
                </ul>`
  3、变量拼接
    let lovest = `a`
    let out = `${lovest}b`
    console.log(out)//ab

三.对象简化
  let name = 'shangguigu'
  let change = function(){
    console.log('sa')
  }
  const school = {
    name,
    change
    improve(){
    }
  }

四.箭头函数
  1、声明一个函数
    let fn = function(){

    }
    ↓
    let fn = () => {

    }
  2、调用函数
    fn()
  3、特点：
    this是静态的 始终指向函数声明时所在作用域下的 this 的值
    function getName(){
      console.log(this.name)
    }
    let getName2 = () => {
      console.log(this.name)
    }

    //设置 window 对象的 name 属性
    window.name = 'shangguigu'
    const school = {
      name:"ABU"
    }
    getName()//shangguigu
    getName2()//shangguigu

    //call方法调用
    getName.call(school)//ABU
    getName2.call(school)//shangguigu
  4、不能作为构造实例化对象
    let Person = (name,age) => {
      this.name = name
      this.age = gae
    }
    let me = new Person('xiao',30)
    console.log(me)//报错
    5、不能使用 arguments 变量
    6、简写：
    省略小括号：当形参有且只有一个
    省略花括号：当代码体只有一条语句 return也必须省略
      let pow = (n) => n*n
      console.log(pow(8))//64

    定时器：setTimeout(回调函数,倒计时毫秒)
    箭头函数适合于 this 无关的回调 定时器 数组的方法回调
    不适合与 this 有关的回调 事件回调 对象的方法

五.symbol
特点：
  1、Symbol 的值是唯一的 用来解决命名冲突的问题
  2、Symbol 值不能与其他数据进行运算
  3、Symbol 定义的对象属性不能使用 for in 循环遍历 但是可以 Reflect.ownKeys 来获取对象的所有键名
如何创建？
  let s = Symbol()
  console.log(s, typeof s)//Symbol
  let s2 = Symbol('shangguigu')
  let s3 = Symbol('shangguigu')
  console.log(s2===s3)//false

  let s4 = Symbol.for('shangguigu')
  console.log(s4, typeof s4)//Symbol
不能与其他数据进行运算(对比/拼接)
如何使用？
  向对象中添加方法 up down
  let game = {...
    //声明对象
    up:Symbol(),
    down:Symbol()
  }
  game[menthods.up] = function(){
    console.log("我可以改变形状")
  }
  game[methods.dowm] = function(){
    console.log("我可以快速下降")
  }
  console.log(game)

  let youxi = {
    name:"狼人杀",
    [Symbol('say')]:function(){
        console.log("我可以发言")
    },
    [Symbol('zibao')]:function(){
        console.log('我可以自爆')
    }
  }
  console.log(youxi)

六.迭代器
是一种接口 为不同的数据结构提供统一的访问机制
原生具备 iterator 接口的数据
  声明一个数组
  const xiyou = ['唐僧','孙悟空','猪八戒','沙僧']
  使用 for...of 遍历数组
  for(let v of xiyou){//for in保存键名 for of保存键值
      console.log(v)
  }
工作原理
  1、创建一个指针对象 指向当前数据结构的起始位置
  2、第一次调用对象的 next 方法 指针自动指向数据结构的第一个成员
  3、接下来不断调用 nest 方法 指针一直往后移动 直到指向最后一个成员
  4、每调用 next 方法返回一个包含 value 和 done 属性的对象
应用
  //声明一个对象
  const banji = {
    name:"终极一班",
    stus:[
        'xiaoming',
        'xiaoning',
        'xiaotian',
        'knight'
    ]
  [Symbol.iterator](){
    //索引变量
    let index = 0
    return{
      next:function(){
        if(index < this.stus.length){
            return{value:_this.stus[index],done:false}
            //下标自增
            index++
            //返回结果
            return result
          }else{
            return{value:undefined,done,true}
          }
        }
      }
    }
  }
  //遍历这个对象
  for(let v of banji){
      console.log(v)
  }

七.生成器
  生成器是一个特殊的函数
  异步编程 纯回调函数
  yield 函数代码分隔符
  function * gen(){
      console.log("ad")
  }
  let iterator = gen()
  iteratir.next()//ad

  function * gen(){
      console.log(1)
      yield 'a'
      console.log(2)
      yield 'b'
      console.log(3)
      yield 'c'
      console.log(4)
  }
  let iterator = gen()
  iteratir.next()//1
  iteratir.next()//2
  iteratir.next()//3
  iteratir.next()//4

  遍历
  for(let v of gen()){
      console.log(v)//a b c
  }

  console.log(iteratir.next())//{value:"a",done:false}
  console.log(iteratir.next())//{value:"b",done:false}
  console.log(iteratir.next())//{value:"c",done:false}
  console.log(iteratir.next())//{value:undefined,done:true}

  生成器的函数参数
  gen('AAA')//AAA 如果有输出就会输出这个参数
  next方法传入实参 next('BBB') 第二次next参数作为第一个yield语句的返回结果

八.promise
  异步编程的解决方案 是一个构造函数封装异步操作
  //实例化Promise对象
  const p = new Promise(function(resolve,reject){
      setTimaout(function(){
          //resolve
          let data = '数据库中的用户数据'
          resolve(data)
          //let err = '数据读取失败'
          //reject(err)
      },1000)
  })
  //调用 Promise 对象的 then 方法
  p.then(function(value){
      console.log(value)//数据库中的用户数据
  },function(reason){
      consolo.error(reason)

  })

  读取文件内容
  1、引入 fs 模块
  2、调用方法读取文件
  3、使用 Promise 封装
      const P = new Promise(function(resolve,reject){

      })

  then方法
  //创建 Promise 对象
      const P = new Promise((resolve,reject) => {
          setTimeout(()=>{
              resoleve('用户数据')
          },1000)
      })
  //调用then方法 返回结果是 Promise 对象 对象状态由回调函数的执行结果决定
      const result = p.then(value => {
          console.log(value)
      },reason => {
          console.log.warn(reason)
      })
      console.log(result)

