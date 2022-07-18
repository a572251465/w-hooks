# useClipboard

对文本以及输入框的内容进行复制/ 剪切。 同时也可以将一段内容单独复制给剪切板

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useClipboard/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

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

## 方法

#### 1. `copy`

| 属性     | 描述         | 类型            | 默认值 | 必须 | 返回值     |
|--------|------------|---------------|-----|------------|----------------|
| element | dom 元素或是字符串 | `html/ string` | -   | -          | Promise<string | boolean> |
> 返回值：如果是 string 类型表示动作成功。如果是 false 表示中途失败

#### 2. `cut`

| 属性     | 描述         | 类型            | 默认值 | 必须 | 返回值     |
| -------- | ------------------ | -------- | ----- | -------- | -------- |
| element | dom 元素或是字符串 | `html/ string` | -      | -    | Promise<string | boolean> |
> 返回值：如果是 string 类型表示动作成功。如果是 false 表示中途失败


#### 3. `moveToClipboard`

| 属性     | 描述         | 类型            | 默认值 | 必须 | 返回值     |
| -------- | ------------------ | -------- | ----- | -------- | -------- |
| value | 字符串 | `string` | -      | -    | Promise<string | boolean> |
> 返回值：如果是 string 类型表示动作成功。如果是 false 表示中途失败
