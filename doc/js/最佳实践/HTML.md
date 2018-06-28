# HTML

## 目录

1. 语言与编码
1. 性能问题
1. 保持完整的基础结构
1. 使用合适的文档类型声明
1. 标签闭合应保持一致
1. 使用合理的语义化标签
1. 合理嵌套
1. 标签、属性
1. 无障碍网页

## 保持完整的基础结构

  - doctype, html, body, etc.
  - charset 与 title 不可缺少

```html
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title></title>
  </head>
  <body></body>
</html>
```

## 使用合适的文档类型声明

  - 建议使用 HTML5 的文档类型声明，更简单，兼容性也更好，也更符合未来的标准

```html
<!doctype html>
```

## meta 应在 title 之前

  - charset 等 meta 声明应在 title 标签之前

```html
<!-- recommended: -->
<meta charset=utf-8>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello, world.</title>
```

## 语言与编码

  - While defining the language and character encoding is optional, it's recommended to always declare both at document level, even if they're specified in your HTTP headers. Favor UTF-8 over any other character encoding.

```html
<!-- avoid: -->
<!doctype html>
<title>Hello, world.</title>

<!-- recommended: -->
<!doctype html>
<html lang=en>
  <meta charset=utf-8>
  <title>Hello, world.</title>
</html>
```

## 标签闭合应保持一致

  - void element 要统一自闭合或不闭合

```html
<!-- avoid: -->
<p>
  <input type="text">
  <br />
  Hello
  <br/>
  world
</p>
```

```html
<!-- recommended: -->
<p>
<input type="text">
<br>
Hello
<br>
world
</p>
```

## 使用合理的语义化标签

  - HTML5 provides us with lots of semantic elements aimed to describe precisely the content. Make sure you benefit from its rich vocabulary.

```html
<!-- avoid: -->
<div id="main">
  <div class="article">
    <div class="header">
      <h1>Blog post</h1>
      <p>Published: <span>21st Feb, 2015</span></p>
    </div>
    <p>…</p>
  </div>
</div>

<!-- recommended: -->
<main>
  <article>
    <header>
      <h1>Blog post</h1>
      <p>Published: <time datetime="2015-02-21">21st Feb, 2015</time></p>
    </header>
    <p>…</p>
  </article>
</main>
```

  - Make sure you understand the semantics of the elements you're using. It's worse to use a semantic element in a wrong way than staying neutral.

```html
<!-- avoid: -->
<h1>
  <figure>
    <img alt=Company src=logo.png>
  </figure>
</h1>

<!-- recommended: -->
<h1>
  <img alt=Company src=logo.png>
</h1>
```

## 合理嵌套

  - 应尽量避免嵌套过深
  - 应使用合理的嵌套

```html
<!-- avoid: -->
<!-- table 与 tr 间 除了 thead/tbody/tfoot 外不应该存在其它标签 -->
<table>
  <div>
    <tr></tr>
  </div>
</table>

<dl>
  <li></li>
</dl>
```

## 标签、属性

  - 标签名、属性名只能包含遵循小写、连线符
  - 属性值必须使用双引号括起来
  - 性名与值的等号前后不应存在空格
  - 不要错误地使用属性名
    - 比如 W3C 规范中 style 标签没有 rel 属性，就不应该在 style 标签里设置 rel 属性（特殊情况下允许使用，比如用于 JS 获取）

## 无障碍网页

  - Accessibility shouldn't be an afterthought. You don't have to be a WCAG expert to improve your website, you can start immediately by fixing the little things that make a huge difference, such as:

* learning to use the `alt` attribute properly
* making sure your links and buttons are marked as such (no `<div class=button>` atrocities)
* not relying exclusively on colors to communicate information
* explicitly labelling form controls

```html
<!-- avoid: -->
<h1><img alt="Logo" src="logo.png"></h1>

<!-- recommended: -->
<h1><img alt="My Company, Inc." src="logo.png"></h1>
```

## 性能问题

  - Unless there's a valid reason for loading your scripts before your content, don't block the rendering of your page. If your style sheet is heavy, isolate the styles that are absolutely required initially and defer the loading of the secondary declarations in a separate style sheet. Two HTTP requests is significantly slower than one, but the perception of speed is the most important factor.

```html
<!-- avoid: -->
<!doctype html>
<meta charset=utf-8>
<script src=analytics.js></script>
<title>Hello, world.</title>
<p>...</p>

<!-- recommended: -->
<!doctype html>
<meta charset=utf-8>
<title>Hello, world.</title>
<p>...</p>
<script src=analytics.js></script>
```
