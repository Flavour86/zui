# jQuery

## 目录

1. 需要多次使用的 DOM 对象，应缓存起来
1. 使用类选择器时应指定元素的类型
1. 对于异步加载的内容，没有使用代理来绑定事件处理
1. 理解子元素和父元素的关系：尽量使用 $parent.find('.child') 来查找
1. 使用链式写法。比如：$('div').find('h3').eq(2).html('Hello')
1. 改动 DOM 结构开销很大
1. 正确处理循环
1. 尽管jQuery不会抛出异常，但开发者也应该检查对象

## 需要多次使用的 DOM 对象，应缓存起来

  - 选中某一个网页元素，是开销很大的步骤。所以，使用选择器的次数应该越少越好，并且尽可能缓存选中的结果，便于以后反复使用。

``` js
// avoid:
jQuery('#top').find('p.classA');
jQuery('#top').find('p.classB');

// recommended:
var cached = jQuery('#top');
cached.find('p.classA');
cached.find('p.classB');
```

## 使用类选择器时应指定元素的类型

  - jQuery中第二快的选择器就是tag选择器。因为它和直接来自于原生的Javascript方法getElementByTagName()。所以最好总是用tag来修饰class(并且不要忘了就近的ID)

``` js
// avoid:
jQuery(".products");

// recommended:
jQuery("div.products");

```

## 对于异步加载的内容，没有使用代理来绑定事件处理。

  - 如果没有这么处理，那么异步加载回来的数据，就可能需要每次都去绑定事件。
  - 当你在一个容器中有许多节点，你想对所有的节点都绑定一个事件（包括还未在容器内的元素），delegation很适合这样的应用场景。使用Delegation，我们仅需要在父级绑定事件，然后查看哪个子节点(目标节点)触发了事件。当你有一个很多数据的table的时候，你想对td节点设置事件，这就变得很方便。先获得table，然后为所有的td节点设置delegation事件
  - Delegated events do not work for SVG  

``` js
// recommended:
$( "#dataTable tbody" ).on( "click", "tr", function() {
  console.log( $( this ).text() );
});
```

## 理解子元素和父元素的关系：尽量使用  $parent.find('.child') 来查找

  - 下面 6 个选择器，都是从父元素中选择子元素

```
$parent.find('.child')
这条是最快的语句。.find() 法会调用浏览器的原生方法（getElementById、getElementByName、getElementByTagName 等），所以速度较快。

$('.child', $parent)   
这条语句的意思是，给定一个 DOM 对象，然后从中选择一个子元素。jQuery 会自动把这条语句转成 $.parent.find('child')，这会导致一定的性能损失。它比最快的形式慢了 5%-10%。

$('.child', $('#parent'))
jQuery内部会将这条语句转成 $('#parent').find('.child')，比最快的形式慢了 23%。

$parent.children('.child')
这条语句在 jQuery 内部，会使用 $.sibling() 和 DOM 的 nextSibling 方法，一个个遍历节点。它比最快的形式大约慢 50%。

$('#parent > .child')
jQuery 内部使用 Sizzle 引擎，处理各种选择器。Sizzle 引擎的选择顺序是从右到左，所以这条语句是先选 .child，然后再一个个过滤出父元素 #parent，这导致它比最快的形式大约慢 70%。

$('#parent .child')
这条语句与上一条是同样的情况。但是，上一条只选择直接的子元素，这一条可以于选择多级子元素，所以它的速度更慢，大概比最快的形式慢了 77%。　
```

## 使用链式写法

  - 采用链式写法时，jQuery自动缓存每一步的结果，因此比非链式写法要快。根据测试，链式写法比（不使用缓存的）非链式写法，大约快了25%。

``` js
// recommended:
　$('div').find('h3').eq(2).html('Hello');;
```

## 改动 DOM 结构开销很大

  - 不要频繁使用.append()、.insertBefore()和.insetAfter()这样的方法
  - 如果你要对一个DOM元素进行大量处理，应该先用.detach()方法，把这个元素从DOM中取出来，处理完毕以后，再重新插回文档
  - 如果要插入多个元素，就先把它们合并，然后再一次性插入。根据测试，合并插入比不合并插入，快了将近10倍
  - 如果你要在DOM元素上储存数据，不要写成下面这样：  

``` js
// avoid:
var elem = $('#elem');
elem.data(key, value);

// recommended:
var elem = $('#elem');
$.data(elem[0], key, value);
```

## 正确处理循环

  - 循环总是一种比较耗时的操作，如果可以使用复杂的选择器直接选中元素，就不要使用循环，去一个个辨认元素
  - 原生循环方法 for 和 while，要比 jQuery 的 .each() 方法快

##  尽管jQuery不会抛出异常，但开发者也应该检查对象

  - 尽管 jQuery 不会抛出大量的异常给用户，但是开发者也不要依赖于此
  - jQuery 通常会执行了一大堆没用的函数之后才确定一个对象是否存在，所以在对一个作一系列引用之前，应先检查一下这个对象存不存在
