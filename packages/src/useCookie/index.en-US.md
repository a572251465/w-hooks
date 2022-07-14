# useCookie

A Hook that store state into Cookie.

## API

```javascript
const [getCookie, setCookie, getCookies] = useCookie()

// get cookie
const token = getCookie('token')
// set cookie
setCookie('token', 'xxx', { path: '/' })
// get all cookie
getCookies()
// remove cookie
setCookie('xxx', undefined)
```

If you want to delete this record from document.cookie, use `setCookie(undefined)`.

### Params

| Property  | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| cookieKey | Cookie key                   | `string`  | -       |
| options   | See the following parameters | `Options` | -       |

### Result

| Property  | Description | Type       |
| --------- | ----------- | ---------- |
| getCookie | get Cookie  | `function` |
| setCookie | set Cookie  | `function` |

### getCookie params

| Property  | Description | Type     |
| --------- | ----------- | -------- |
| cookieKey | Cookie key  | `string` |

### setCookie params

| Property    | Description                  | Type     |
| ----------- | ---------------------------- | -------- |
| cookieKey   | Cookie key                   | `string` |
| cookieValue | Cookie value                 | `string` |
| options     | See the following parameters | `object` |

### Options

| Property     | Description                                                                                | Type                                                       | Default     |
| ------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | ----------- |
| defaultValue | Optional. Default value, but not store to Cookie                                           | `string` \| `undefined` \| `(() => (string \| undefined))` | `undefined` |
| expires      | Optional. Set Cookie expiration time                                                       | `number` \| `Date`                                         | -           |
| path         | Optional. Specify available paths                                                          | `string`                                                   | `/`         |
| domain       | Optional. Specify available domain. Default creation domain                                | `string`                                                   | -           |
| secure       | Optional. Specify whether the Cookie can only be transmitted over secure protocol as https | `boolean`                                                  | `false`     |
| sameSite     | Optional. Specify whether the browser can send this Cookie along with cross-site requests  | `strict` \| `lax` \| `none`                                | -           |
