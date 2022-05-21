# Util

### get
    get(source: any,  path: number | string,  defaultvalue?: any): any

通过路径获取值，当值不存在时返回 defaultvalue

**example**
```js
import { Util } from '@xhs_npm/utils';

const object = {
  a: {
    b: 1,
  },
};

Util.get(object, 'a'); // { b: 1 }
Util.get(object, 'a.b'); // 1
Util.get(object, 'a[b]'); // 1

const array = ['a', ['b', 'c']];

Util.get(array, 1); // ['b', 'c']
Util.get(array, '1.0'); // 'b'
Util.get(array, '[1][1]'); // 'c'
```

---
### isDate
    isDate(input: unknown); return boolean

检查是否为日期是否为日期

Parameters
- input: unknown  
要检查的值

Returns boolean

---
### isEmpty
    isEmpty(input?: any); return boolean

检查是否为空 当值为 null，undefined, '', [], {} 都判定为空是否为空

---
### isFalse
    isFalse(input: any); return boolean

检查是否为 false。 自动处理 'true' 为 true, 'false' 为 false 当且仅当参数为字符串 'false' 或其他可转为 false 的值时返回 true是否为 false

---
### isTrue
	isTrue(input: any): boolean

检查是否为 true。 自动处理 'true' 为 true, 'false' 为 false。 当且仅当参数不为字符串 'false' 或其他可转为 true 的值时返回 true是否为 true

---
### isNaN
    isNaN(input: unknown): boolean

检查值是否为 NaN是否为 NaN

---
### isFunction
    isFunction(input: unknown): boolean

检查是否为函数是否为函数

---
### isNumber
    isNumber(input: unknown): input is number

检查是否为数字是否为数字

---
### isObject
    isObject(input: unknown): boolean

检查是否为对象是否为对象

---
### isArray
    isArray(input: unknown); return boolean

检查是否为数组是否为数组

Parameters
- input: unknown

Returns boolean

---
### isString
    isString(input: unknown): input is string

检查是否为字符串是否为字符串

---
### isType
	isType(input: any, type: any): boolean

检查值是否为 某一类型

---
### isUndefined
	isUndefined(input: unknown): input is undefined

检查值是否为 undefined是否为 undefined

---

# Url
### parseQuery
	parseQuery(str: string): {}

解析 query 字符串

**example**
```
import { Url } from '@xhs_npm/utils'; 

Url.parseQuery('?a=1&b=2'); // { a: '1', b: '2' } 
Url.parseQuery('a=1&b=2'); // { a: '1', b: '2' }
```

Parameters

- str: string
  
  query 字符串

Returns {}
  
query 对象

---
### stringifyQuery
	stringifyQuery(query: any): string

序列化 query 对象

example
```
import { Url } from '@xhs_npm/utils';

Url.stringifyQuery({ a: 1, b: 2 }); // 'a=1&b=2' 
```

Parameters
- query 对象

  query: any

Returns string

query 字符串

---

# Env

### isAndroid

	isAndroid: boolean

example
```
import { Env } from '@xhs_npm/utils';

Env.isAndroid; // true || false
```


---
### isIOS
	isIOS: boolean

