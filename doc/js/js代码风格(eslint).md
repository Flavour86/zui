# 前端代码风格规范

## 开发工具配置

* idea 可以在 Editor>Code Style>HTML 里勾选 In empty tag

## eslint 规则

### 规则值

* "off" 或 0 - 关闭规则
* "warn" 或 1 - 开启规则，使用警告级别的错误：warn ( 不会导致程序退出 )
* "error" 或 2 - 开启规则，使用错误级别的错误：error ( 当被触发的时候，程序会退出 )

### 规则项

参考：http://eslint.cn/docs/rules/

* eslint-config-standard

```
    "accessor-pairs": "error",// 强制 getter 和 setter 在对象中成对出现
    "arrow-spacing": ["error", { "before": true, "after": true }],// 强制箭头函数的箭头前后使用一致的空格
    "block-spacing": ["error", "always"],// 强制在单行代码块中使用一致的空格
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],// 强制在代码块中使用一致的大括号风格
    "camelcase": ["error", { "properties": "never" }],// 强制使用骆驼拼写法命名约定
    "comma-dangle": ["error", "never"],// 要求或禁止末尾逗号
    "comma-spacing": ["error", { "before": false, "after": true }],// 强制在逗号前后使用一致的空格
    "comma-style": ["error", "last"],//强制使用一致的逗号风格
    "constructor-super": "error",//要求在构造函数中有 super() 的调用
    "curly": ["error", "multi-line"],//强制所有控制语句使用一致的括号风格
    "dot-location": ["error", "property"],//强制在点号之前和之后一致的换行
    "eol-last": "error",//要求或禁止文件末尾存在空行
    "eqeqeq": ["error", "always", { "null": "ignore" }],//要求使用 === 和 !==
    "func-call-spacing": ["error", "never"],//require or disallow spacing between function identifiers and their invocations
    "generator-star-spacing": ["error", { "before": true, "after": true }],//强制 generator 函数中 * 号周围使用一致的空格
    "handle-callback-err": ["error", "^(err|error)$" ],//要求回调函数中有容错处理
    "indent": ["error", 2, { "SwitchCase": 1 }],//强制使用一致的缩进
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],//强制在对象字面量的属性中键和值之间使用一致的间距
    "keyword-spacing": ["error", { "before": true, "after": true }],//强制在关键字前后使用一致的空格
    "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],//要求构造函数首字母大写
    "new-parens": "error",//要求调用无参构造函数时有圆括号
    "no-array-constructor": "error",//禁用 Array 构造函数
    "no-caller": "error",//禁用 arguments.caller 或 arguments.callee
    "no-class-assign": "error",//禁止修改类声明的变量
    "no-cond-assign": "error",//禁止条件表达式中出现赋值操作符
    "no-const-assign": "error",//禁止修改 const 声明的变量
    "no-constant-condition": ["error", { "checkLoops": false }],//禁止在条件中使用常量表达式
    "no-control-regex": "error",//禁止在正则表达式中使用控制字符
    "no-debugger": "error",//禁用 debugger
    "no-delete-var": "error",//禁止删除变量
    "no-dupe-args": "error",//禁止 function 定义中出现重名参数
    "no-dupe-class-members": "error",//禁止类成员中出现重复的名称
    "no-dupe-keys": "error",//禁止对象字面量中出现重复的 key
    "no-duplicate-case": "error",//禁止出现重复的 case 标签
    "no-duplicate-imports": "error",//disallow duplicate module imports
    "no-empty-character-class": "error",//禁止在正则表达式中使用空字符集
    "no-empty-pattern": "error",//禁止使用空解构模式
    "no-eval": "error",//禁用 eval()
    "no-ex-assign": "error",//禁止对 catch 子句的参数重新赋值
    "no-extend-native": "error",//禁止扩展原生类型
    "no-extra-bind": "error",//禁止不必要的 .bind() 调用
    "no-extra-boolean-cast": "error",//禁止不必要的布尔转换
    "no-extra-label": "error",//禁用不必要的标签
    "no-extra-parens": ["error",// "functions"],禁止不必要的括号
    "no-fallthrough": "error",//禁止 case 语句落空
    "no-floating-decimal": "error",//禁止数字字面量中使用前导和末尾小数点
    "no-func-assign": "error",//禁止对 function 声明重新赋值
    "no-global-assign": "error",//disallow assignments to native objects or read-only global variables
    "no-implied-eval": "error",//禁止使用类似 eval() 的方法
    "no-inner-declarations": ["error", "functions"],//禁止在嵌套的块中出现变量声明或 function 声明
    "no-invalid-regexp": "error",//禁止 RegExp 构造函数中存在无效的正则表达式字符串
    "no-irregular-whitespace": "error",//禁止在字符串和注释之外不规则的空白
    "no-iterator": "error",//禁用 __iterator__ 属性
    "no-label-var": "error",//不允许标签与变量同名
    "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],//禁用标签语句
    "no-lone-blocks": "error",//禁用不必要的嵌套块
    "no-mixed-operators": ["error", {
      "groups": [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true
    }],//禁止混合使用不同的操作符
    "no-mixed-spaces-and-tabs": "error",//禁止空格和 tab 的混合缩进
    "no-multi-spaces": "error",//禁止使用多个空格
    "no-multi-str": "error",//禁止使用多行字符串
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],//禁止出现多行空行
    "no-negated-in-lhs": "error",//被no-unsafe-negation代替。disallow negating the left operand of relational operators
    "no-new": "error",//disallow new operators outside of assignments or comparisons
    "no-new-func": "error",//禁止对 Function 对象使用 new 操作符
    "no-new-object": "error",//	禁用 Object 的构造函数
    "no-new-require": "error",//禁止调用 require 时使用 new 操作符
    "no-new-symbol": "error",//disallow new operators with the Symbol object
    "no-new-wrappers": "error",//禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-obj-calls": "error",//禁止把全局对象作为函数调用
    "no-octal": "error",//禁用八进制字面量
    "no-octal-escape": "error",//禁止在字符串中使用八进制转义序列
    "no-path-concat": "error",//禁止对 __dirname 和 __filename 进行字符串连接
    "no-proto": "error",//禁用 __proto__ 属性
    "no-redeclare": "error",//禁止多次声明同一变量
    "no-regex-spaces": "error",//禁止正则表达式字面量中出现多个空格
    "no-return-assign": ["error",// "except-parens"],禁止在 return 语句中使用赋值语句
    "no-self-assign": "error",//禁止自我赋值
    "no-self-compare": "error",//禁止自身比较
    "no-sequences": "error",//禁用逗号操作符
    "no-shadow-restricted-names": "error",//禁止将标识符定义为受限的名字
    "no-sparse-arrays": "error",//禁用稀疏数组
    "no-tabs": "error",//disallow all tabs
    "no-template-curly-in-string": "error",//disallow template literal placeholder syntax in regular strings
    "no-this-before-super": "error",//禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-throw-literal": "error",//禁止抛出异常字面量
    "no-trailing-spaces": "error",//禁用行尾空格
    "no-undef": "error",//禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-undef-init": "error",//disallow initializing variables to undefined
    "no-unexpected-multiline": "error",//禁止出现令人困惑的多行表达式
    "no-unmodified-loop-condition": "error",//禁用一成不变的循环条件
    "no-unneeded-ternary": ["error",// { "defaultAssignment": false }],禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unreachable": "error",//禁止在return、throw、continue 和 break 语句之后出现不可达代码
    "no-unsafe-finally": "error",//禁止在 finally 语句块中出现控制流语句
    "no-unsafe-negation": "error",//disallow negating the left operand of relational operators
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],//禁止出现未使用过的表达式
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],//禁止出现未使用过的变量
    "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],//禁止在变量定义之前使用它们
    "no-useless-call": "error",//禁止不必要的 .call() 和 .apply()
    "no-useless-computed-key": "error",//disallow unnecessary computed property keys in object literals
    "no-useless-constructor": "error",//禁用不必要的构造函数
    "no-useless-escape": "error",//	禁用不必要的转义字符
    "no-useless-rename": "error",//disallow renaming import, export, and destructured assignments to the same name
    "no-useless-return": "error",//disallow redundant return statements
    "no-whitespace-before-property": "error",//禁止属性前有空白
    "no-with": "error",//禁用 with 语句
    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],//强制将对象的属性放在不同的行上
    "one-var": ["error", { "initialized": "never" }],//强制函数中的变量要么一起声明要么分开声明
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],//强制操作符使用一致的换行符
    "padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }],//要求或禁止块内填充
    "prefer-promise-reject-errors": "error",//require using Error objects as Promise rejection reasons
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],//强制使用一致的反勾号、双引号或单引号
    "rest-spread-spacing": ["error", "never"],//enforce spacing between rest and spread operators and their expressions
    "semi": ["error", "never"],//require or disallow semicolons instead of ASI
    "semi-spacing": ["error", { "before": false, "after": true }],//强制分号之前和之后使用一致的空格
    "space-before-blocks": ["error", "always"],//强制在块之前使用一致的空格
    "space-before-function-paren": ["error", "always"],//强制在 function的左括号之前使用一致的空格
    "space-in-parens": ["error", "never"],//强制在圆括号内使用一致的空格
    "space-infix-ops": "error",//要求操作符周围有空格
    "space-unary-ops": ["error", { "words": true, "nonwords": false }],//强制在一元操作符前后使用一致的空格
    "spaced-comment": ["error", "always", {
      "line": { "markers": ["*package", "!", "/", ","] },
      "block": { "balanced": true, "markers": ["*package", "!", ",", ":", "::", "flow-include"], "exceptions": ["*"] }
    }],//强制在注释中 // 或 /* 使用一致的空格
    "symbol-description": "error",//require symbol descriptions
    "template-curly-spacing": ["error", "never"],//要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "template-tag-spacing": ["error", "never"],//require or disallow spacing between template tags and their literals
    "unicode-bom": ["error", "never"],//要求或禁止 Unicode 字节顺序标记 (BOM)
    "use-isnan": "error",//要求使用 isNaN() 检查 NaN
    "valid-typeof": ["error", { "requireStringLiterals": true }],//强制 typeof 表达式与有效的字符串进行比较
    "wrap-iife": ["error", "any", { "functionPrototypeMethods": true }],//要求 IIFE 使用括号括起来
    "yield-star-spacing": ["error", "both"],//强制在 yield* 表达式中 * 周围使用空格
    "yoda": ["error", "never"],//要求或禁止 “Yoda” 条件
    "standard/object-curly-even-spacing": ["error", "either"],//Like object-curly-spacing from ESLint except it has an either option which lets you have 1 or 0 spaces padding
    "standard/array-bracket-even-spacing": ["error", "either"],//Like array-bracket-even-spacing from ESLint except it has an either option which lets you have 1 or 0 spacing padding
    "standard/computed-property-even-spacing": ["error", "even"],//Like computed-property-spacing around ESLint except is has an even option which lets you have 1 or 0 spacing padding
    "promise/param-names": "error" // Enforce consistent param names when creating new promises.
```

* eslint-config-standard-jsx

```
    "jsx-quotes": ["error", "prefer-single"],//强制在 JSX 属性中一致地使用双引号或单引号
    "react/jsx-boolean-value": "error",//Enforce boolean attributes notation in JSX
    "react/jsx-curly-spacing": ["error", "never"],//Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    "react/jsx-equals-spacing": ["error", "never"],//Enforce or disallow spaces around equal signs in JSX attributes
    "react/jsx-indent": ["error", 2],//Validate JSX indentation
    "react/jsx-indent-props": ["error", 2],//Validate props indentation in JSX
    "react/jsx-no-duplicate-props": "error",//Prevent duplicate props in JSX
    "react/jsx-no-undef": "error",//Disallow undeclared variables in JSX
    "react/jsx-space-before-closing": "error",//Validate spacing before closing bracket in JSX
    "react/jsx-uses-react": "error",//Prevent React to be incorrectly marked as unused
    "react/jsx-uses-vars": "error",//Prevent variables used in JSX to be incorrectly marked as unused
    "react/self-closing-comp": "error" // Prevent extra closing tags for components without children
```
