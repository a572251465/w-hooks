# useCookie

一个可以将状态存储在 Cookie 中的 Hook 。

## API

```javascript
const [getCookie, setCookie, getCookies] = useCookie()

// 获取cookie
const token = getCookie('token')
// 设置cookie
setCookie('token', 'xxx', { path: '/' })
// 获取所有的cookie
getCookies()
```

注意：如果想从 document.cookie 中删除这条数据，可以使用 `setCookie(key, undefined)`。

### Params

| 参数      | 说明                     | 类型      | 默认值 |
| --------- | ------------------------ | --------- | ------ |
| cookieKey | Cookie 的 key 值         | `string`  | -      |
| options   | 可选项，配置 Cookie 属性 | `Options` | -      |

### Result

| 参数      | 说明           | 类型   |
| --------- | -------------- | ------ |
| getCookie | 获取 Cookie 值 | `函数` |
| setCookie | 设置 Cookie 值 | `函数` |

### getCookie 参数

| 参数      | 说明                 | 类型     |
| --------- | -------------------- | -------- |
| cookieKey | Cookie 对应的 key 值 | `string` |

### setCookie 参数

| 参数        | 说明                  | 类型     |
| ----------- | --------------------- | -------- |
| cookieKey   | Cookie 对应的 key 值  | `string` |
| cookieValue | 得到的是 cookie value | `string` |
| options     | 见下记参数            | `object` |

### Options

| 参数         | 说明                                                 | 类型                                                       | 默认值      |
| ------------ | ---------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| defaultValue | 可选，定义 Cookie 默认值，但不同步到本地 Cookie      | `string` \| `undefined` \| `(() => (string \| undefined))` | `undefined` |
| expires      | 可选，定义 Cookie 存储有效时间                       | `number` \| `Date`                                         | -           |
| path         | 可选，定义 Cookie 可用的路径                         | `string`                                                   | `/`         |
| domain       | 可选，定义 Cookie 可用的域，默认为 Cookie 创建的域名 | `string`                                                   | -           |
| secure       | 可选，Cookie 传输是否需要 https 安全协议             | `boolean`                                                  | `false`     |
| sameSite     | 可选，Cookie 不能与跨域请求一起发送                  | `strict` \| `lax` \| `none`                                | -           |
