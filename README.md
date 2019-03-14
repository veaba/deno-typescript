> 基于deno typescript runtime 开发typescript代码的demo、笔记

## 安装deno 省略
    - windows 安装
    - linux 安装
## 版本
    - deno:0.3.2
    - v8:7.4.238
    - typescript:3.2.1
## deno run linux
![linux jpg](/images/deno_run_linux.jpg)
## deno run windows
![windwos jpg](/images/deno_run_windows.jpg)

## wow!! deno 和 node 去测试一段代码，结果感人！！
- node 测试的代码 10次循环打印
```js
console.time('js')
for(let i=0;i<10;i++){
    console.log('_______'+i+'_______')
}
console.timeEnd('js')
```
- deno 测试的代码 10次循环打印
```typescript
console.time('ts')
for(let i=0;i<10;i++){
    console.log('_______'+i+'_______')
}
console.timeEnd('ts')
```

### 如果一万次呢？

- node 测试10000次
![node test 10000 times](/images/node_test_10000_time.png)
- deno 测试10000次
![deno test 10000 times](/images/deno_test_10000_time.png)

### 但是，如果不console

- node code
```js
console.time('js')
for(let i=0;i<10000;i++){
    // console.log('_______'+i+'_______')
}
console.timeEnd('js')
```
- deno code

```typescript
console.time('ts')
for(let i=0;i<10000;i++){
    // console.log('_______'+i+'_______')
}
console.timeEnd('ts')
```

结果：

![no_console_print.png](/images/no_console_print.png)


## bug 和不足
1. 无法识别import from，必须是绝对路径
2. 且后缀无法省略
![module_err.png](/images/module_err.png)
__________________________-
2019年3月14日16:31:28
by @veaba