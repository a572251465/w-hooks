## useClipboard

Copy / cut the text and the contents of the input box. At the same time, you can also copy a paragraph of content to the clipboard separately

[简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useClipboard/index.zh-CN.md) | English

## Examples

### Default Usage

```html
<body>
  <div id="div">sdfsfsdfdsfsfs</div>
  <input type="text" value="sdfsfsdfsdfsf23456" id="input" />
  <button onclick="handle1()">moveToClipboard</button>
  <button onclick="handle2()">copy div</button>
  <button onclick="handle3()">copy input</button>
  <button onclick="handle4()">cut div</button>
  <button onclick="handle5()">cut input</button>
  <script>
    const { useClipboard } = wHooks
    // 如果函数useClipboard 设置了默认值 在调用copy/ cut可以不进行参数传递
    const [copy, cut, moveToClipboard] = useClipboard()

    function handle1() {
      moveToClipboard('testteststsfsfsdfsdtest')
    }

    function handle2() {
      copy('#div')
    }

    function handle3() {
      copy('#input')
    }

    function handle4() {
      cut('#div')
    }

    function handle5() {
      cut('#input')
    }
  </script>
</body>
```

## API

```typescript
const [copy, cut, moveToClipboard] = useClipboard(defaultElement)
```

### methods

#### 1. `copy`

| Property | Description | Type     | Value | Required | Return |
| -------- |-------------| -------- | ----- | -------- | -------- |
| element | dom/ string | `html/ string` | -      | -    | Promise<string | boolean> |
> Return value: if it is a string type, it indicates that the action is successful. If false, it means failure halfway

#### 2. `cut`

| Property | Description | Type     | Value | Required | Return |
| -------- |-------------| -------- | ----- | -------- | -------- |
| element | dom/string  | `html/ string` | -      | -    | Promise<string | boolean> |
> Return value: if it is a string type, it indicates that the action is successful. If false, it means failure halfway


#### 3. `moveToClipboard`

| Property | Description | Type     | Value | Required | Return |
| -------- |-------------| -------- | ----- | -------- | -------- |
| value | string      | `string` | -      | -    | Promise<string | boolean> |
> Return value: if it is a string type, it indicates that the action is successful. If false, it means failure halfway
