## 代码风格
1. 缩进: 统一使用 2 个空格缩进
2. 空格:
* 选择器跟 `{` 之间必须包含空格
```
/* good */
.selector {
}

/* bad */
.selector{
}
```
* 属性跟 : 之间不能有空格，: 跟属性值之间必须包含空格。
```
/* good */
.selector {
    color: #3f3f3f;
}

/* bad */
.selector {
    color:#3f3f3f; /* 或 color : #3f3f3f; */
}
```
* \>、+、~选择器的两边各保留一个空格。
```
/* good */
.header > .title {
    padding: .1rem;
}

label + input {
    margin-left: .04rem;
}

input:checked ~ .input-face {
    background-color: #ccc;
}

/* bad */

.header>.title {
    padding: .1rem;
}
```
3. 换行
* 一个rule中有多个选择器时，选择器间必须换行
```
/* good */
p,
div,
input,
textarea {
    font-size: .28rem;
}

/* bad */
p, div, input, textarea {
    font-size: .28rem;
}
```
* 属性值之间必须换行
```
/* good */
.content {
    padding: .1rem;
    color: #3f3f3f;
}

/* bad */
.content {
    padding: .1rem; color: #3f3f3f;
}
```
* 对于超长的样式属性值，可在 空格 或 , 处换行
```
.selector {
    bakcground:
        url(veryveryveryveryveryLongUrlHere/image/icon.png)
        no-repeat 0 0;
}

.selector {
    background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.04, rgb(88,94,124)),
        color-stop(0.52, rgb(115,123,162))
    )
}
```
4. 值与单位
* 文本内容必须用双引号包围
```
/* good */
body {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
}

/* bad */
body {
    font-family: 'Helvetica Neue', Helvetica, STHeiTi, sans-serif;
}
```
* 数值: 数值为 0 - 1 之间的小数，省略整数部分的 0
```
/* good */
body {
    font-size: .28rem;
}

/* bad */ {
    font-size: 0.28rem;
}
```
* 单位: 数值为 0 的属性值须省略单位
```
/* good */
body {
    padding: 0 .1rem;
}

/* bad */
body {
    padding: 0rem .1rem;
}
```
* url() 函数中的路径不加引号,绝对路径可省去协议名
```
/* good */
body {
    background: url(//yunzhijia.com/images/bg.png);
}

/* bad */
body {
    background: url(http://yunzhijia.com/images/bg.png);
}
```
* 颜色:RGB颜色值必须使用十六进制形式 #3f3f3f。不使用 rgb(),alpha（不透明度）的颜色信息可以使用 rgba(), 颜色值不可使用颜色单词
```
/* good */
.border {
    border: 1px solid #dce1e8;
    color: #f00;
}

.overlayer {
   background-color: rgba(0, 0, 0, .7);
}

/* bad */
.border {
    border: 1px solid rgb(220, 225, 232);
    color: red;
}

.overlayer {
    background-color: rgba(0,0,0,.7);
}
```
5. 通用
* 选择器,DOM节点 id、class 属性赋值时 = 之间不得有空格，属性值必须用双引号包围，不得用单引号。
```
/* good */
<div class="container" id="container">
</div>

/* bad */
<div class = "container" id='container'>
</div>
```
* 如无必要，尽量不使用 id 选择器，给 id、class 选择器设置属性时不需要添加类型选择器进行限定。
```
/* good */
#footer,
.container {
    background-color: #fff;
}

/* bad */
div#footer,
div.container {
    background-color: #fff;
}
```
* id 选择器不需嵌套其他选择器
```
<div class="footer">
    <span id="tips">提示语</span>
</div>

/* good */
#tips {
    color: #bdbdbd;
}

/* bad */
.footer #tips {
    color: #bdbdbd;
}
```
* 尽量使用属性缩写
```
/* good */
body {
    font: .28rem/1.25 Helvetica;
}

/* bad */
body {
    font-family: Helvetica;
    font-size: .28rem;
    line-height: 1.25;
}
```
* 属性书写顺序
```
1.位置属性(position, top, right, z-index,display, float, overflow 等)
2.大小(width, height, padding, margin, border)　　
3.文字系列(font, line-height, letter-spacing,color- text-align等)
4.视觉(background, color, list-style等)　　
5.其他(animation, transition等)
```
* 变换与动画
```
/* good */
.tab {
    transition: color 1s, background-color: 1s;
}

/* bad */
.tab {
    transition: all 1s;
}
```
