# 其它

## 目录

1. 应选择合适的图片格式
1. 应压缩图片
1. 单张小图片应考虑转换成 BASE64 格式
1. 多张小图片应使用 css sprites 或 icon font
1. 图片 onerror 进行处理
1. 不要在 HTTPS 页面里引用 HTTP 资源
1. 引入资源使用相对路径，不要指定资源所带的具体协议

## 应选择合适的图片格式

  - 对于颜色值较少的（小于 256）的图片，可以考虑采用 GIF 或 PNG 格式，优先考虑 PNG8
  - 对于颜色值较多的图片，应优先考虑采用 JPEG 格式，可适当压缩质量

## 应压缩图片

  - 使用 Photoshop/Firework 或压缩工具对图片进行压缩，可以是有损或无损压缩

## 单张小图片应考虑转换成 BASE64 格式

  - 为减少并发连接数，单张小图片应考虑转换成 BASE64 格式

## 多张小图片应使用 css sprites 或 icon font

  - 为减少并发连接数，多张小图片应使用 css sprites 或 icon font

## 图片 onerror 进行处理

  - 对于有较大机率出现图片加载失败的情况，需要使用 onerror 进行处理，比如使用默认图片替换等

## 不要在 HTTPS 页面里引用 HTTP 资源

  - 不要在 HTTPS 页面里引用 HTTP 资源，因为可能出现安全警告

## 引入资源使用相对路径，不要指定资源所带的具体协议

```
/* bad */
<script src="http://cdn.com/foundation.min.js"></script>

/* good */
<script src="//cdn.com/foundation.min.js"></script>
```
