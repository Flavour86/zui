## css 分类方法

#### 1.命名

1.1 文件的分类以及命名规范
常用的文件命名：
 * 全局：global.css
 * 结构：layout.css
 * 模块：module.css
 * 主题：themes.css

 较长文件名必须以 - 中横杠符连接，项目里面的私有样式文件：项目名-业务模块名称.css，\
 主题参照模块命名，引用顺序基本也是按着上面的分类顺序

```
/* 项目名为cloud */

/* good */
cloud-home.css

/* bad */
cloudHome.css;
```

1.2 CSS内部的命名分类及其顺序
* 重置（reset）和默认（base）：消除默认样式和浏览器差异，并设置部分标签的初始样式，以减少后面的重复劳动！你可以根据你的网站需求设置！
* 统一处理：建议在这个位置统一调用背景图（这里指多个布局或模块或元件共用的图）和清除浮动（这里指通用性较高的布局、模块、元件内的清除）等统一设置处理的样式！
* 布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！
* 模块（module）（.m-）：通常是一个语义化的可以重复使用的较大的模块
* 组件（component）（.c-）：通常是指一个可以重复使用的组件
* 元件（unit）（.u-）：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输入框、loading、图标等！
* 功能（function）（.f-）：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来
* 皮肤（skin）（.s-）：如果你需要把皮肤型的样式抽离出来，通常为文字色、背景色（图）、边框色等，非换肤型网站通常只提取文字色！
* 状态（.z-）：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}），具体详见命名规则的扩展相关项。

例如：
```
/* reset */
div,p,ul,ol,li{margin:0;padding:0;}
/* 默认 */
strong,em{font-style:normal;font-weight:bold;}
/* 统一调用背景图 */
.m-logo a,.m-nav a,.m-nav em{background:url(images/sprite.png) no-repeat 9999px 9999px;}
/* 统一清除浮动 */
.g-bdc:after,.m-dimg ul:after,.u-tab:after{display:block;visibility:hidden;clear:both;height:0;overflow:hidden;content:'.';}
.g-bdc,.m-dimg ul,.u-tab{zoom:1;}
/* 布局 */
.g-sd{float:left;width:300px;}
/* 模块 */
.m-logo{width:200px;height:50px;}
/* 元件 */
.u-btn{height:20px;border:1px solid #333;}
/* 功能 */
.f-tac{text-align:center;}
/* 皮肤 */
.s-fc,a.s-fc:hover{color:#fff;}
```


