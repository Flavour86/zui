# 移动端

## 目录

1. 配置 viewport 声明
1. 配置格式检测声明
1. CSS 厂商前缀
1. 字体选择
1. 高清屏支持
1. 点击事件
1. 固定定位
1. 输入框
1. 用户选择
1. 阴影
1. 动画效果

## 配置 viewport 声明

  - 头部需要添加 viewport 的 meta 标签
  - width 与 initial-scale 不可缺少

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
```

## 配置格式检测声明

  - 需要根据实际情况，配置格式检测声明，比如正常的一串数字在 Android/iOS 上会被识别成电话号码或者日期

```html
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
```

## CSS 厂商前缀

  - 不应使用非必要的厂商前缀，比如明确不需要兼容IE的，使用了 -ms-，比如目标浏览器已经支持无前缀的属性，却使用了前缀

## 字体选择

  - 字体定义应充分考虑不同平台

## 高清屏支持

  - 应考虑到高清屏幕的特点，比如图片、字体等的尺寸值取半

## 点击事件

  - 使用了非 button、a 标签来做点击事件，应加上 cursor:pointer，否则 iOS 点击无反应

## 固定定位

  - 使用 fixed 布局，iOS 会出现布局框样式错乱，应使用 focus 和 blur 事件来处理页面滚动后

## 输入框

  - iOS 下 input 设置 disabled 属性后的透明问题，正常输入在 input 里面的文字颜色很淡，应使用 -webkit-text-fill-color , -webkit-opacity:1 做处理
  - 使用 fixed 或者 absolute 布局的输入框，没有处理输入框被键盘盖住问题

## 用户选择

  - 在样式里面设置了 -webkit-user-select: none 后，会导致 Android 下 input 输入框无法输入

## 阴影

  - 减少使用 CSS3 阴影效果，因为对性能会有较大损耗，特别是结合动画的情况下

## 动画效果

  - 优先使用 CSS3 实现动画效果
  - 优先使用 translate3D 开始 GPU 加速
