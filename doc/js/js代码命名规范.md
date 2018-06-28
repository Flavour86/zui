## js命名规范

### 变量命名
命名方式 : 小驼峰式命名方法\
命名规范 : 尽量使用类型+对象描述的方式，如果没有明确的类型，可以使用前缀为名词

|  类型 |  小写字母  |
| :---------------: | :---------------: |
| array	| a |
| boolean	|	b |
| function	|	fn |
| int	| i
| object	| o |
| regular	| r |
| string	| s |

```javaScript
/* bad */
var tableTitle = "LoginTable"

/* good */
var getTitle = "LoginTable"
```
### 函数
命名方式 : 小驼峰方式 ( 构造函数使用大驼峰命名法 )\
命名规则 : 前缀为动词

|  动词 |  含义  | 返回值 |
| :---- | :---- | :---- |
| can	| 判断是否可执行某个动作 ( 权限 )| 函数返回一个布尔值。true：可执行；false：不可执行 |
| has	|	判断是否含有某个值 | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is	|	判断是否为某个值 | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get	| 获取某个值 | 函数返回一个非布尔值 |
| set	| 设置某个值 | 无返回值、返回是否设置成功或者返回链式对象 |

### 常量

命名方法 : 全部大写
命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。
```
  var MAX_COUNT = 10;
  var URL = 'http://www.baidu.com';
```

### 类

* 公共属性和方法 : 同变量命名方式
* 私有属性和方法 : 前缀为下划线(_)后面跟公共属性和方法一样的命名方式

```
function Student(name) {
    this._name = name; // 私有成员

    // 公共方法
    this.getName = function () {
        return this._name;
    }

    // 公共方式
    this.setName = function (value) {
        this._name = value;
    }
}
var st = new Student('tom');
st.setName('jerry');
console.log(st.getName()); // => jerry：输出_name私有变量的值
```

### 注释规范

单行注释 ( // )
```
// 调用了一个函数；1)单独在一行
setTitle();

var maxCount = 10; // 设置最大量；2)在代码后面注释

// setName(); // 3)注释代码
```

### 多行注释
```
/*
 * 代码执行到这里后会调用setTitle()函数
 * setTitle()：设置title的值
 */
setTitle();
```

### 函数 ( 方法 ) 注释
```
/**
 * 函数说明
 * @关键字
 */
```

|  注释名 |  语法  | 含义 | 示例 |
| :---- | :---- | :---- | :---- |
| @param	| @param 参数名 {参数类型} 描述信息 | 描述参数的信息 | @param name {String} 传入名称 |
| @return	|	@return {返回类型} 描述信息 | 描述返回值的信息 | @return {Boolean} true:可执行;false:不可执行 |
| @example	|	@example 示例代码 | @example setTitle('测试') | 如下 |

```
/**
 - 合并Grid的行
 - @param grid {Ext.Grid.Panel} 需要合并的Grid
 - @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
 - @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
 - @return void
 - @example  mergeCells('11', '22') => '11,22'
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
```
