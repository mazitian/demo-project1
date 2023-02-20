********************HTML+CSS

软件的定义：一系列按照特定的顺序组织的计算机数据和指令，是电脑的非有型部分。

网站：由多个网页组成(网站!=网页)

浏览器的作用：浏览器将代码渲染成多彩的网页

浏览器内核：渲染引擎，解析网页语法，并渲染显示网页

常见的浏览器内核：
-Trident（三叉戟）：IE、360、搜狗、百度、UC
-Gecko（壁虎）：火狐
-Presto（极板乐曲）
-Webkit：Safari
-Blink：Gogle、Edge

HTML：超文本标记语言

HTML的基本结构：html -> head -> body

单标签元素(没有结束标签的元素)：img input 

元素的属性(属性嵌套在第一个标签里面): 属性名称 + 属性值 比如: class = "属性值"

常用属性: class(标记) a(超链接,属性值为链接)

公用属性: class id title

特有属性: img元素的alt属性

元素之间的关系:
-父子关系: ul和li li和div
-兄弟关系: 两个div 两个span

HTML常见元素: h1-h6/p元素 img/a/iframe元素 div/span元素 

文档类型声明: 声明文档类型,声明html和html版本,<!DOCTYPE html> 告诉你是html5的页面,让浏览器用html5的标准去解析识别内容 放在文档最前面,不能省略,否则出现兼容性问题

head元素: 规定文档相关配置信息(元数据) 包括文档的标题/引用文档样式/脚本/图标
-meta: charset="utf-8"字符编码 

body元素: 大部分HTML元素都在body编写

img元素: 可替换元素 单标签元素 img没有设置src本身也会占位置
-src属性: 地址
-alt属性: 说明

图片的路径
-绝对路径: 从根盘符出发,找到这个东西
-相对路径: ./表示当前文件夹 ../表示上一层文件夹

a元素
-href属性: 指定要打开的URL地址/也可以是本地地址(本地相对路径)
-target属性: 
  _self默认值: 在当前窗口打开URL 
  _blank: 在新窗口打开URL
  _parent: 与iframe结合,在上一层打开网页
  _top: 与iframe结合,在最上层打开网页
<a href="" target="_self/_blank"></a>
-锚点链接: 跳转到页面中的具体位置
  <a href="#theme01">跳转到主题一</a>
  <a href="#theme02">跳转到主题二</a>
  <a href="#theme03">跳转到主题三</a>
  <h2 id="theme01">主题一</h2>
  <p>文本一</P>
  <h2 id="theme02">主题二</h2>
  <p>文本二</P>
  <h2 id="theme03">主题三</h2>
  <p>文本三</P>
  1.在跳转到的元素上添加id
  2.定义a元素,并在a元素的href属性指向id

a元素嵌套img: <a href="" target=""><img src="" alt=""></a>

iframe元素: 在一个HTML文档中嵌套另一个HTML文档
-src属性: 地址
-frameborder属性: 1显示边框 0不显示边框

div元素: 盒子 包裹 
span元素: 修饰 行内

不常用的元素: strong强调 i斜体 code等宽 br换行 

HTML的全局属性: id class style title
-id: 唯一
-class: 类名
-style: 给元素添加内联样式
-title: 包含表示与其所属元素相关信息的文本,这些信息通常可以作为提示呈现给用户,但不是必须的(当用户把鼠标放上去的时候有提示)

URL格式: [协议类型]://[服务器地址]:[端口号]/[文件路径][文件名]?[查询]#[片段ID] http://123.123.207.222:80/abc/why/mi.png

URI: 统一资源标识符,用于标识Web技术使用的逻辑或物理资源
URL: 统一资源定位符,俗称网络地址,相当于网络中的门牌号
URL作为一个网络Web资源的地址,可以唯一将一个资源识别出来,所以URL是一个URI,所以URL是URI的一个子集

SEO: 搜索引擎优化

CSS三种写法
-内联样式
  <div style="color:red; font-size: 30px"></div>
-内部样式
  <head>
    <style>
      .div-one {
        color: red;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="div-one"></div>
  </body>
-外部样式
  css文件:
  .title {
    font-size: 30px;
    color: red;
  }
  html文件:
   <head>
    <link rel="stylesheet href="css的相对路径">
  </head>
  <body>
    <div class="title"></div>
  </body>
  (用link元素引入css文件)
  在css文件通过@import引入其他css资源
  @import url(其他css相对路径)
  @import url(其他css相对路径)

常见的CSS样式: 
-font-size
-color
-background-color
-width
-height

不让div独占一行(先了解): 
  <style>
    display: inline-block
    vertical-align: top//顶置
    float: left//左浮动
  </style>

link元素补充: 
-href属性: 指定被链接资源的URL
-rel属性: 指定链接类型 icon站点:图标 stylesheet:CSS样式 dns-prefetch:提示浏览器该资源需要在用户点击链接前进行DNS查询和协议握手

CSS的颜色的表示方法:
-颜色关键字: 
-RGB(R:red G:green B:blue): background-color: rgb(0~255,0~255,0~255) rgb(0,0,0)黑色 rgb(255,255,255)白色
-十六进制: rgb(100,100,100)=#646464 (100的十六进制为64) rgb(255,255,255)=#FFFFFF

文本: CSS文本属性(内部样式放在style的元素样式里):
-text-decoration: none无任何装饰线 underline下划线 overline上划线 line-through删除线
-text-transform(一般): capitalize首字母大写 uppercase全部大写 lowercase全部小写
-text-indent(一般): 首行缩进(px:像素/em:相对于字体大小) 
-text-align(行内元素相对于块父元素对齐): left左对齐 right右对齐 center居中显示 justify两端对齐(第一行和最后一行之间)
-letter/word-spacing(一般): letter字母之间缝隙 word单词之间缝隙

字体: CSS字体属性:
-font-size: 单位px/em(相对父元素大小)/%(查文档)
-font-family: '字体', '备用字体1', '备用字体2'
-font-weight: 100~900 默认(400) bold(700)
-font-style: italic斜体
-font-height(重要): 居中 行高=height
font缩写属性: style variant weight size height family

选择器: 
-通用选择器: * {} / body, p, h2, span {}
-元素选择器: div {}
-类选择器(class 一个元素可以定义多个class 空格连接): .box {}
-id选择器: #id {}
-属性选择器: [title=值(可以不写)] {} 选中有title的元素 [class=值] {} 选中class
-后代选择器: .home span {}(名字为home的div后代中的所有span) .home > span {}(名字为home的div的子代中的span)
-兄弟选择器: .box + div(相邻的div) .box ~ div(所有兄弟div)
-交集选择器: div.box {}(既是div又叫box)
-并集选择器: body, p, h1, h2 {}(都选中)

伪类(伪类是选择器的一种 它用于选择处于待定状态的元素):
-hover: div:hover {}(鼠标放到div 改变样式)
-link(未访问的链接): a:link {}
-visited(已访问的链接): a:visited{}
-active(鼠标长按未松开): a:active {}
-focus(拥有输入焦点的元素)
<!-- :hover要放在:link/:visited后面
     :active要放在:hover后面
     建议编写顺序 :link :visited :hover :active 
     除了a元素 :hover/:active也可以用在其他元素上 -->
鼠标放在元素上,显示阴影:
-元素:hover {box-shadow: 0 15px 30px rgb(0,0,0,0.5); position: relative; top: -2px;(向上走2px的效果)}

伪元素(使用伪元素时不能省略content):
-::first-line: 针对首行文本设置属性
-::first-letter: 对首字母设置属性
-::before: content:"" 元素前设置文本和样式
-::after: content:"" 元素后设置文本和样式

CSS的属性大部分有继承性: 继承的是计算值不是设置值
CSS属性的层叠: 一个类可以有多个名 每个名设置不同样式 则具有一定优先级排
-!important(在属性值后面加) 10000: color: red !important 
-内联样式 1000
-id选择器 100
-类选择器 10
-元素选择器 1
-通配选择器 0

行内元素: span a img 
块元素: div h1 p
-display属性: block块 inline行内 inline-block行内块(设置来包裹内容) none隐藏
-行内非替换元素不能设置宽高
-不要在p元素中放div
-行内不能放块

HTML元素的四种隐藏方法:
-display: none
-visibility: hidden
-color: rgba(`,`,`,0) 透明度=0
-opacity: 0 透明度 

CSS属性-overflow:
-scroll值: 滚动条
-auto值: 内容超出元素 有滚动条 没超出 没有滚动条

盒子模型:
由里到外(属性): 内容(content) -> 内边距(padding) -> 边框(border) -> 外边距(margin)
1. content
  width 宽度
  height 高度
  max-width 最大宽度 页面拉大到这个像素 元素不会再变大
  min-width 最小宽度 页面缩小到这个像素 元素不会再变小(页面再缩小底下会出现滚动条)
  max-height
  min-height
2. padding
  padding-top
  padding-bottom
  padding-left
  padding-right
  简写属性: 
  padding: top right bottom left
3. border(transparent透明)
  border-top-width 设置上面边框宽度
  border-top-style 设置上面边框样式(solid dashed groove ridge)
  border-top-color 设置上面边框颜色
  简写属性:
  border-width: top right bottom left
  border-style: top right bottom left
  border-color: top right bottom left
  圆角:
  border-radius :具体值/百分比(查文档) 其实也分四边 但是通常一样的
4. margin(行内元素不能设置margin 如果要用 先加上: display: inline-block)
  margin-top
  简写属性:
  margin: top right bottom left
  <!-- 
  上下margin的传递(子盒子影响父盒子):
  左右不会传递,上下会,解决方案: 用padding/设置border(不好)/触发外盒子的BFC overflow: auto 
  上下margin的折叠(垂直方向上相邻的两个margin有可能合并为一个):
  折叠之后,取大值
   -->
5. outline 外轮廓
  不占据空间 默认显示在border外面 语法和border一样
6. shadow 阴影
  box-shadow: 5px 5px 10px 10px red (xy偏移量 模糊半径 延伸半径 颜色)
  box-shadow: 5px 5px 10px 10px red inset (阴影往盒子里面走)
  text-shadow: 一样
  阴影叠加用","隔开即可

块级元素的居中问题(不好的方案):
-消除浏览器样式: margin: 0; padding: 0
-text-align: center (可以让行内元素居中)
-margin: auto (可以让块元素居中)

以上盒子模型的属性对行内非替换元素不能直接用: span a strong i(i用来做小图标)

CSS属性-box-sizing
-border-box: 盒子模型所有属性加起来的尺寸(box-sizing: border-box)

background:
-background-image: url(), url() 层叠
-background-repeat: no-repeat 取消平铺/repeat-x 在水平平铺/repeat-y 竖直平铺
-background-size: cover 覆盖/100% 100% 宽高百分百拉伸/auto 默认值/contain 缩放图片保持宽高比
-background-position: 100px 100px 一左上角为原点设置xy像素距离/top center 设置上下左右中位置
-background-attachment: scroll 滚动内容时背景固定/local 滚动内容的时候背景跟着滚动 默认repeat/fixed 相对于浏览器视口固定

HTML高级元素:
<!-- 难搞 这个要记好久 -->
一. 列表元素:
1.div方式
2.列表语法
  -有序列表: ol-li
  -无序列表: ul-li
  -定义列表: dl-dt-dd 默认无序
  -list-style-type: none 消除列表序号
  序号微调(找到ul下面的第一个li):
    ul > li: nth-child(1) 属性值 {}
  图标微调: 每个图标设置成属性 在元素里加这个属性即可
  列表上下间距: 设置每个元素的margin(top)
二. 表格元素: tr行 td列
1.重构代码:
<table>
  <caption></caption>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
    </tr>
  </tfoot>
</table>
2.添加边框: td {border: 1px solid #333}
3.边框合并: table {border-collapse: collapse}
4.选择器: table tbody tr: nth-child(1) {}
5.单元格合并属性:
  -colspan(跨列合并): 最左边的单元格上colspan属性,并且省略掉合并的td
  <tr>
    <td colspan="2"></td>
  </tr>
  -rowspan(跨行合并): 最上面的单元格上rowspan属性,并且省略掉后面tr中的td
  <tr>
    <td rowspan="2"></td>
  </tr>
三. 表单元素
1.form: 表单
  -<form action="服务器地址" method="post" target="_blank">
     <div>
       <label for="">
         用户: <input id="" type="" name="">
       </label>
     </div>
     <div>
       <label for="">
         密码: <input id="" type="" name="">
       </label>
     </div>
   </form>
   (所有input/buttom都加name,才能把值传给服务器)
2.input: 输入框
  -<input type="text"> 显示
  -<input type="password"> 隐藏
  -<input type="data"> 日期
  -<input type="radio"> 圆形按钮
  -<input type="reset" value="重置按钮"> 
   <button type="reset">重置按钮</button>
  -<input type="submit" value="提交按钮">
   <button type="submit">提交按钮</button>
   (input提交值提交的是value)
  -<label for="username">
     用户:
     <input id="username" type="text">
   </label>
   (label可以实现鼠标点击"用户"就可以将光标自动放置在input里)
3.textarea: 多行文本输入
  -<textarea name="" id="" cols="'列数'" rows="'行数'"></textarea>
4.select/option: 
  -<select name="" id="">
     <option value="apple">苹果</option>
     <option value="bannana" checked(默认选中)>香蕉</option>
   </select>

<!-- 了解emmet语法 -->

结构伪类:
1. :nth-child(1) 是父元素中的第一个子元素: ul > li:nth-child(3){} (找到ul中的第3个li 会被干扰项干扰)
   :nth-child(2n) 选中所有偶数
2. :nth-last-child() 选中倒数的第几个 
3. :nth-of-type() 选中父元素中的第几个子元素: .box > div:nth-of-type(3){} (不管干扰项 只找div)
4. :nth-last-of-type() 选中倒数的第几个 
5. 其他结构伪类:
  -:first-child
  -:last-child
  -:first-of-type
  -:last-of-type
  -:only-child 是父元素中唯一的子元素
  -:only-of-type 是父元素中唯一的这种类型的子元素
6. :root{} (根元素:HTML元素)
7. :empty{} (空的时候设置样式)

border的图形:
-旋转:  transform-origin: center 25%
        transform: rotate(180deg)
-网络字体:
  @font-face {
    font-family: "hyfont01"
    src: url(地址)
  }
  body {
    font-family: "hyfont01"
  }

光标cursor:
-auto: 浏览器根据上下文决定指针的显示样式,比如根据文本和非文本切换指针样式
-default: 由操作系统决定,一般就是一个小箭头
-pointer: 一只小手,鼠标指针挪到连接上默认就是这个样式
-none: 没有指针元素

定位:
<!-- 难搞 一定要理解 -->
<!-- 标准流(文档流): 从左到右 从上到下按顺序排好 兄弟元素互相不出现层叠现象 -位置调整: margin-padding(但是会影响到别人) -->
1. position属性(子绝父相/子绝父绝):
-relative(相对定位)
  依然在标准流中 相对位置为本元素原来位置的左上角
  不设置position: relative: 会把附近元素挤开
  设置position: relative: 不会把附近元素挤开,可以使用left/top/right/bottom来移动,比如left: 30px; top: 50px
-absolute(绝对定位)
  脱离标准流
  可以使用left/right/top/bottom进行定位
  定位参照对象是最邻近的定位祖先元素 如果没有就选择视口
-fixed(固定定位)
  脱离标准流
  可以使用left/right/top/bottom进行定位
  定位参照对象是视口 当画布滚动时 固定不动
-将position设置为absolute/fixed元素的特点
  可以随意设置宽高
  宽高默认由内容决定(和行内块元素类似)
  不再受标准流的约束(不再严格从上到下从左到右排布)
  不再给父元素汇报宽高
  脱标元素内部默认还是按照标准流布局
  希望绝对定位元素在参照对象中居中显示: left:0 right:0 top:0 bottom:0 margin:auto 另外还得设置具体宽高值
-sticky(粘性定位)
  可以看作是相对定位和固定(绝对)定位的结合体
  它允许被定位元素表现得像相对定位一样 直到它滚动到某个阈值点 当它到达这个阈值点时就变成固定(绝对)定位
  语法:
  元素 {
    position: sticky;
    top: 0; (当元素上界碰到视口时 就固定在这个位置)
  }
  sticky是相对于最近的滚动祖先包含滚动视口的(可用overflow: scroll)
-z-index:
  用来设置定位元素的层叠顺序(仅对定位元素有效)
  取值: 正数 负数 0

浮动:
<!-- 浮动之后也会脱离标准流 也属于一种定位 属性float: left/right --> 
-左浮动右浮动不会超出父元素(包含块)
-定位元素会层叠在浮动元素上面(层级: 普通元素 < 浮动元素 < 定位元素)
-浮动元素之间不能层叠
-浮动元素不能与行内级元素层叠,行内级内容会被浮动元素推出,比如inline-block元素/块元素的文字内容(可做文字环绕图片等)
-进行行内元素之间的间隙处理

flex布局:
<!-- 难搞 十分重要 -->
一.认识flexbox
-flexbox翻译为弹性盒子 是一种用于按行或按列布局元素的一维布局方法
-元素可以膨胀以填充额外的空间,收缩以适应更小的空间
-让div变成弹性盒子: display: flex (flex container为块元素) / display: inline-flex (flex container行内元素)
二.两个重要概念
-开启flex布局的元素叫 flex container
-flex container 里面的直接子元素叫做 flex item
-当 flex container 中的子元素变成了 flex item 时,具备以下特点:
  flex item 的布局将受 flex container 属性的设置来进行控制和布局
  flex item 不再严格区分块级元素和行内元素
  flex item 默认情况下是包裹内容的 但是可以设置宽度和高度
三.布局模型
-主轴(main axis): 默认为盒子从左到右的线
-交叉轴(cross axis): 当内容过多有换行需求时 就有一条从上到下的线
 (main start主轴开始 / main end主轴结束 / cross start交叉轴开始 / cross end交叉轴结束)
四.container属性
1.flex-direction
- flex-direction 决定了 main axis 的方向 有4个取值
  row 默认值:从左到右 / row-reverse 反转:从右向左 / column 列:从上到下 / column-reverse 反转:从下到上
2.flex-wrap
- flex-wrap: nowrap 元素不换行 在一行显示 自动压缩
- flex-wrap: wrap 放不下自动换行
- flex-wrap: wrap-reverse 和wrap反转
3.flex-flow
-是 flex-direction 和 flex-wrap 的简写 比如 flex-flow: row wrap;
4.justify-content
- justify-content: flex-end 向右对齐
- justify-content: center 居中对齐(通常结合margin使用)
- justify-content: space-between 两端对齐 中间空隙等分
- justify-content: space-evenly 两端中间一起等分
- justify-content: space-around 中间等分 两端空间是中间的一半
5.align-items
-align-items 决定了 flex items 在 cross axis 上的对齐方式
- align-items: center 竖直居中对齐
- align-items: end 最底部对齐
- align-items: baseline 与文本基线对齐
6.align-content
-align-content 决定了多行 flex items 在 cross axis 上的对齐方式
- align-content: space-between 水平 items 在竖直方向上两端等分对齐
- align-content: flex-start 从上往下对齐
7.flex-grow(拉伸)
-给 flex-items 设置 默认值0
- flex-grow: 几份(1/2)
-扩展后最终 size 不能超过 max-width\max-height
8.flex-shrink(压缩)
-默认的 flex-shrink: 0
- flex-shrink: 1 (只压缩1)
9.flex-basis
-设置基础尺寸
<!-- flex缩写属性: flex: 不学 -->
五.对齐方式解决
-在盒子后面加"列数-2"个<span></span>元素 并且设置: .container > span {width: 所有div的名字(item)相同值}

重置:
-清除浮动:
  元素::after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .clear_fix {
    *zoom: 1;
  }
  元素 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  ul, li {
    list-style: none;
  }

HTML5语义化元素:
- <top> 顶部元素
- <header> 头部元素
- <nav> 导航元素
- <section> 定义文档某个区域的元素
- <article> 内容元素
- <aside> 侧边栏元素
- <footer> 尾部元素

HTML5新增元素:
1. video: <vidio src="相对地址(mp4)" controls></video>
-width height
-controls: 布尔类型 是否显示控制栏
-autoplay: 布尔类型 是否自动播放
-muted: 布尔类型 是否静音播放
-preload: 预加载
2. audio: <audio src="相对地址(mp3)" controls autoplay muted></audio>

HTML5自定义属性:
-data-*: 比如 data-name="why" data-age="18"

section/option:
  <input type="text" placeholder="占位文本" autofocus>
  <select multiple>
    <option value="">苹果</option>
    <option value="">香蕉</option>
    <option value="">橘子</option>
  </select>

CSS函数:
1. var: 使用css定义的变量
  html {
    <!-- 定义一个变量 -->
    --main-color: #fff;
  }
  .box {
    color: var(--main-color);
  }
2. calc 计算css值 通常用于计算元素的大小或位置
  width: calc(100% - 60px);
3. blur: 毛玻璃效果
4. gradient: 颜色渐变函数

BFC:
1. 在哪些情况下会创建BFC
-根元素
-浮动元素
-绝对定位元素
-弹性元素
-...
2. BFC特点
-在BFC中 box会在垂直方向上一个挨着一个排布
-垂直方向间距由margin属性决定
-在同一个BFC中 相邻的两个box之间的margin会折叠
-在BFC中 每个元素的左边缘是紧挨着包含块的左边缘
3. BFC作用
-解决margin的折叠问题
-解决浮动高度坍塌问题
  要满足两个条件:
  浮动元素的父元素触发BFC 形成独立的块级格式化上下文
  浮动元素的父元素高度是auto
4. BFC高度是auto的情况下 如何计算高度
-如果只有inline-block 是行高的顶部和底部的距离
-如果有block-level 是由最底层的块上边缘和最底层块盒子的下边缘之间的距离
-如果有绝对定位元素 将被忽略
-如果有浮动元素 那么会增加高度以包括这些浮动元素的下边缘

媒体查询的三种方法:
1. @import是可以和媒体查询结合来使用
  @import url(改变样式相对路径) (max-width: 800px);
2. link元素
  <link rel=stylesheet" media="(max-width: 800px)" href="改变样式相对路径">
3.  @media
  @media (max-width: 800px) {
    body {
      background-color: orange;(改变样式)
    }
  }
  @media (max-width: 800px) and (min-width: 500px) {
    body {
      background-color: orange;(改变样式)
    }
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .box {font-size: 15px;}
  }
  @media (min-width: 375px) and (max-width: 414px) {
    .box {font-size: 18px;}
  }
  @media (min-width: 414px) and (max-width: 480px) {
    .box {font-size: 21px;}
  }
  @media (min-width: 480px) {
    .box {font-size: 24px;}
  }
  等价于
  @media (min-width: 320px) {
    .box {font-size: 15px;}
  }
  @media (min-width: 375px) {
    .box {font-size: 18px;}
  }
  @media (min-width: 414px) {
    .box {font-size: 21px;}
  }
  @media (min-width: 480px) {
    .box {font-size: 24px;}
  }

媒体类型
-all: 适用于所有设备
-print: 适用于打印预览模式下在屏幕上查看的分页材料和文档
-screen: 主要用于屏幕
-speech: 适用于语音合成器

媒体特性
-宽高颜色设备比例方向分辨率...

CSS属性-transform:
该属性允许对某一个元素进行某些形变,包括旋转/缩放/倾斜/平移等-行内级元素不能形变
-语法:
  .box {transform: function();}
-function:
  平移: translate(x,y) - 一个值时 设置x上的位移 父元素不会跟着走 值为百分比是相对于自身的宽度/高度
  缩放: scale(x,y)
    -transform: scale(60%, 60%)
    -transform: scale(2, 0.5)
  旋转: rotate(deg)
    -deg表示角度 整数顺时针 负数逆时针 比如 transform: rotate(90deg)
  倾斜: skew(deg,deg)
  改变原点位置: transform-origin
    -transform-origin: left top
    -transform-origin: 20px 20px

transition动画:
-transition-property: left; (方向)
-transition-duration: 1s; (时间)
-transition-timing-function: easr-in; (轨迹)
-transition-delay: 2s; (延迟)
简便属性: transition: 方向 时间 轨迹 延迟

animation动画:
animation-delay: 2s;
animation-name: moveAnim;
animation-duration: 3s;
animation-timing-function: ease-in-out;
animation-iteration-count: 2; (执行动画次数)
animation-direction: reverse;
animation-fill-mode: fowards/backwards (最后停留位置)

@keyframes moveAnim {
  0% {
    transform: translate(0, 0) scale(0.5, 0.5);
  }
  33% {
    transform: translate(0, 200px) scale(1.2, 1.2);
  }
  66% {
    transform: translate(400px, 200px) scale(1, 1);
  }
  100% {
    transform: translate(400px, 0) scale(0.5, 0.5);
  }
}
简写属性: moveAnim duration timing-function delay iteration-count direction fill-mode;

CSS长度单位
-绝对长度单位: px
-相对长度单位: rem vw 
  -em: 在font-size中使用是相对于父元素的字体大小 在其他属性中使用是相对于自身的字体大小 如width
  -rem: 相对于html的font-size
    html {
      font-size: 1px;
    }
    .box {
      width: 100rem;
      height: 100rem;
      font-size: 5rem;
    }
  -vw(viewport width)/vh(viewport height): 相对于视口宽高的1%

CSS三种预处理器:
-Sass/Scss
-Less
-Stylus

Less:
1.less的基本使用:
  嵌套写法
    .container {
      .box{

      }
    }
2.将less转回css:
  js代码自动转成:  
  <link rel="stylesheet/less" href="相对路径.less">
  <script src="https://cdn.jsdelivr.net/npm/less@4"></script>
3.less常见用法:
  -兼容css代码
  -定义变量: @变量名: 变量值; (写在less文件里 也在less文件中的属性引用)
  -and符号: &选中当前选择器的父级
    a.link {
      &:hover {

      }
      &:nth-child(1) {

      }
    }
  -运算: + - * /
  -混合(Mixins): 
    -混入的基本使用:
    .nowrap_ellipsis {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .box {
      .nowrap_ellipsis()
    }
    -混入传递参数:
    .box_border(@borderWidth: 5px, @borderColor: purple) {
      border: @borderWidth solid @borderColor;
    }
    .box {
      .box_border(10px, orange)
    }
    -混入和映射:
    .box_size {
      width: 100px;
      height: 100px;
    }
    .box {
      width: .box_size()[width];
    }

移动端适配:
1.视口: 布局视口-默认宽度980px 视觉视口-可见区域视口 理想视口-布局视口=视觉视口
  -设置布局视口的宽度: <meta names="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimun-scale=1.0, maximum-scale=1.0">
2.适配方案: 
  -rem: 375px屏幕中html的font-size=37.5px 盒子的宽度=1rem 盒子最终宽度=37.5px 公式: rem=px/37.5 (用媒体查询或js设置font-size大小)
    编写js动态: 
    <script>
        //1.获取html元素
      const htmlEl = document.documentElement
      function setRemUnit() {
        //2.获取html的宽度(视口宽度)
        const htmlWidth = htmlEl.clientWidth
        //3.根据宽度计算第一个html的font-size大小
        const htmlFontSize = htmlWidth / 10
        //4.将font-size设置到html上
        htmlEl.style.fontSize = htmlFontSize + "px"
      }
      //保证第一次进来时 可以设置一次font-size
      setRemUnit()
      //当屏幕尺寸发生变化时 实时来修改html的font-size
      window.addEventListener("resize",setRemUnit)
    </script>
  -vw
  -flex布局: lib-flexible
3.px换成rem
  -公式
  -less混合映射
    .pxToRem(@px) {
      result: 1rem * (@px / 37.5);
    }
    .box {
      width: .pxToRem(100)[result];
      height: .pxToRem(100)[result];
    }
    .p {
      font-size: .pxToRem(14)[result];
    }
  -插件: width: 100px (选择rem)
4.vw对比rem优势:
  -不需要计算html的font-size大小 也不需要给html设置font-size
  -不必要给body设置font-size
  -不依赖font-size
  -1vw=0.01的viewport大小 更语义化
  -具备rem所有优点

水平居中方法总结:
1.行内级元素:
  设置父元素的 text-align: center
2.块级元素:
  设置当前块级元素(宽度) margin: 0 auto
3.绝对定位:
  元素有宽度的情况下 left0 + right0 + marigin:0 auto
4.flex:
  justify-content: center

垂直居中:
1.绝对定位:
  元素有高度情况下 top0 + right0 + marigin:auto 0
  -弊端:脱离标准流+要设置高度
2.flex:
  -弊端:局部所有元素都要垂直居中
3.top/translate:
  -让元素向下位移父元素的50%
  -让元素向上唯一自身的50%
  position: relative;
  top: 50%;
  transform: translate(0, -50%);

田字布局:
<div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
.item {
  width: ;
  height: ;
  margin-top: 1.6vw;

  &:nth-child(2n) {
    margin-left: 1.6vw;
  }
}