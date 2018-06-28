# CSS性能

## CSS性能优化
- 衡量属性和布局的消耗代价
- 探索W3C的性能优化新规范
- 用测试数据判断优化策略

### 慎重选择高消耗的样式（Expensive Styles）
1. 合理安排Selectors(selectors瘦身);
2. 高消耗属性？-> 绘制前需要浏览器进行大量计算;


- box-shadows
- border-radius
- transparency
- transforms
- CSS filters（性能杀手）
```
/* expression */
.class{width:expression(this.width>100?'100px':'auto');}

/* filter */
.class{filter:alpha(opacity=50);}
```

### 避免过分重排(Reflow)
1. 浏览器重新计算布局位置与大小。
2. 常见的重排元素;


- width
- height
- padding
- margin
- display
- border-width
- border
- top
- position
- font-size
- float
- text-align
- overflow-y
- font-weight
- overflow
- left
- font-family
- line-height
- vertical-align
- right
- clear
- white-space
- bottom
- min-height


### 避免过分重绘(Repaints)
1.常见的重绘元素;


- color
- border-style
- visibility
- background
- text-decoration
- background-image
- background-position
- background-repeat
- outline-color
- outline
- outline-style
- border-radius
- outline-width
- box-shadow(性能杀手)
- background-size

### W3C的性能优化新规范
```
CSS Will Change
```
1. 思路：把GPU利用起来（老方法 使用translateZ() (或 translate3d())的Hack）
```
GPU即图形处理器，是与处理和绘制图形相关的硬件。GPU是专为执行复杂的数学和几何计算而设计的，可以让CPU从图形处理的任务中解放出来，从而执行其他更多的系统任务，例如，页面的计算与重绘。
```
2. 新的标准：直接使用 Will-Change 属性
3. 适用场景：transform, opacity等
4. 使用位置：提前告知浏览器

“will-change”属性可以让我们提前通知浏览器要对哪个元素进行什么样的更改，以便在需要之前就对其进行适当的优化，从而避免对页面响应产生负面的不必要的启动开销。这些元素可以更宽的进行渲染和改变，网页能更快速的响应更新，从而提供一个更流畅的界面体验。

例如，当我们在元素上使用CSS的 translate3d 时，元素和它的内容会被提升到一个新的层，在它们被合成（绘制到屏幕上）之前。然而，在一个新的层中设置元素是一个相对复杂的渲染操作，它可能会引起变换动画的启动延迟一秒钟，从而引起明显的“闪烁”。

为了避免这种延迟，在实际发生变化之前，可以提前通知浏览器哪些元素要进行有关的更改。这样，浏览器将有一些时间来准备这些更改，以便当这些更改发生时，元素的层早已准备好，转换动画执行时页面马上对元素进行渲染，从而达到页面的快速更新。

**will-change**的使用很简单，只需将该规则添加到期望转换的元素中即可：
```
will-change: transform;
```
如果同时需要修改多个属性，只需使用逗号隔开即可
```
will-change: transform, opacity;
```
- 语法

```
/* 关键字值 */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform;        /* <custom-ident>示例 */
will-change: opacity;          /* <custom-ident>示例 */
will-change: left, top;        /* 两个<animateable-feature>示例 */

/* 全局值 */
will-change: inherit;
will-change: initial;
will-change: unset;
```

其中：

**auto**

就跟width:auto一样，实际上没什么用，作用就是来重置其他的值。

**scroll-position**

告诉浏览器，表示开发者希望在不久后改变滚动条的位置或者使之产生动画。

**contents**

告诉浏览器，表示开发者希望在不久后改变元素内容中的某些东西，或者使它们产生动画。

**custom-ident**

表示开发者希望在不久后改变指定的属性名或者使之产生动画。如果属性名是简写，则代表所有与之对应的简写或者全写的属性

**animateable-feature**

可动画的一些特征值。比方说left, top, margin之类。移动端，非transform, opacity属性的动画性能都是低下的，所以都是建议避免使用left/top/margin之流进行位移等。。

- 使用

**使用hover**

不要像下面这样直接写在默认状态中，因为will-change会一直挂着：
```
.will-change {
  will-change: transform;
  transition: transform 0.3s;
}
.will-change:hover {
  transform: scale(1.5);
}
```
可以让父元素hover的时候，声明will-change，这样，移出的时候就会自动remove，触发的范围基本上是有效元素范围
```
.will-change-parent:hover .will-change {
  will-change: transform;
}
.will-change {
  transition: transform 0.3s;
}
.will-change:hover {
  transform: scale(1.5);
}
```
**适合始终挂着使用的场景**

如果某个应用在按下键盘的时候会翻页，比如相册或者幻灯片一类，它的页面很大很复杂，此时在样式表中写上will-change是合适的。这会使浏览器提前准备好过渡动画，当键盘按下的时候就能即看到灵活轻快的动画
```
.slide {
  will-change: transform;
}
```

- 注意


1. 不要将will-change应用到太多元素上：浏览器已经尽力尝试去优化一切可以优化的东西了。有一些更强力的优化，如果与will-change结合在一起的话，有可能会消耗很多机器资源，如果过度使用的话，可能导致页面响应缓慢或者消耗非常多的资源

2. 有节制地使用：通常，当元素恢复到初始状态时，浏览器会丢弃掉之前做的优化工作。但是如果直接在样式表中显式声明了will-change属性，则表示目标元素可能会经常变化，浏览器会将优化工作保存得比之前更久。所以最佳实践是当元素变化之前和之后通过脚本来切换will-change的值

3. 不要过早应用will-change优化：如果页面在性能方面没什么问题，则不要添加will-change属性来榨取一丁点的速度。will-change的设计初衷是作为最后的优化手段，用来尝试解决现有的性能问题。它不应该被用来预防性能问题。过度使用will-change会导致大量的内存占用，并会导致更复杂的渲染过程，因为浏览器会试图准备可能存在的变化过程。这会导致更严重的性能问题

4. 给它足够的工作时间：这个属性是用来让页面开发者告知浏览器哪些属性可能会变化的。然后浏览器可以选择在变化发生前提前去做一些优化工作。所以给浏览器一点时间去真正做这些优化工作是非常重要的。使用时需要尝试去找到一些方法提前一定时间获知元素可能发生的变化，然后为它加上will-change属性
