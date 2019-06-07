##docker 
> docker pull registry.cn-beijing.aliyuncs.com/veaba/deno-typescript-service:latest

## deno run typescript code demo! 

使用deno 去运行同一段代码，分别为js、ts后缀，测试发现deno运行ts后缀的文件比deno运行js文件性能提升了——100%，结果感人！ry，请收下膝盖吧！

> 基于deno typescript runtime 开发typescript代码的demo、笔记。以下测试纯属test，不在是非常严格的环境下进行的。

## 安装deno 省略
    - windows 安装
    - linux 安装
## 测试版本
    - deno:0.3.2
    - v8:7.4.238
    - typescript:3.2.1
## linux run deno
![linux jpg](/images/deno_run_linux.jpg)
## windows run deno
![windwos jpg](/images/deno_run_windows.jpg)

## wow!! deno 和 node 去测试一段代码，结果感人！！
- node 测试的代码，10次循环打印
```js
console.time('js')
for(let i=0;i<10;i++){
    console.log('_______'+i+'_______')
}
console.timeEnd('js')
```
- deno 测试的代码，10次循环打印
```typescript
console.time('ts')
for(let i=0;i<10;i++){
    console.log('_______'+i+'_______')
}
console.timeEnd('ts')
```

### 如果一万次打印?

- node 测试10000次

![node test 10000 times](/images/node_test_10000_times.png)

- deno 测试10000次

![deno test 10000 times](/images/deno_test_10000_times.png)

### 分别测试 node 运行js、deno 运行ts，console 1w次,10个回合对比

    - 打印次数1w次
    - 代码两份，代码内容一样，分别为`run_test.js`、`run_test.ts`


 单位:ms,round 10次！,

|round|node `run_test.js`|deno `run_test.ts`|result|winner|
|----|----|----|----|----|
|1|9047.543|9145|-97.457|`node`|
|2|8927.828|8885|+42.828|`deno`|
|3|8184.502|8199|-14.498|`node`|
|4|8714.305|8721|-6.695|`node`|
|5|9162.195|9223|-60.805|`neno`|
|6|8721.956|8684|+37.956|`deno`|
|7|8750.158|8618|+132.158|`deno`|
|8|8955.538|8867|+88.538|`deno`|
|9|8794.462|8820|-25.538|`node`|
|10|8484.291|8380|+104.291|`deno`|
||||||

- 结果：deno vs node === 5:5，擦,一样，震惊了。


### 但是，如果不console呢？

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


### deno vs node，无console 1w次for循环比较

打印了数次，结果deno全是0，意味着什么吗？！！node 在打印空的for循环，压根就没运行！！！没错，这就是传说中的安全了吧？？

![test_10000_times_node_vs_deno_console.png](/images/test_10000_times_node_vs_deno_console.png)

### deno 完全可以替代node呀！！deno 分别测试 同一个代码的js文件和ts文件

- js 文件，1w次打印

代码：

```js
console.time('js')
for(let i=0;i<10000;i++){
    console.log('_______'+i+'_______')
}
console.timeEnd('js')
```

截图：

![deno_run_test_js_10000_times.png](/images/deno_run_test_js_10000_times.png)


- ts 文件，1w次打印

代码：
```typescript
console.time('ts')
for(let i=0;i<10000;i++){
    console.log('_______'+i+'_______')
}
console.timeEnd('ts')
```

截图：

![deno_run_test_ts_10000_times.png](/images/deno_run_test_ts_10000_times.png)


- 结果：

> 非常感人！！使用deno 去运行同一个段代码，ts文件比js文件，性能 提升100% ！！

    - js 1393ms
    - ts 696ms  !!

> ry，请收下我的膝盖吧~~~


### node、deno 分别测试run_test.js,1w次打印,对比10次

- 结果如下：
 - node 和 deno 运行同一个js文件，几乎表现无异(为了确保其他因素干扰，分别开两个cmd窗口)
 

 单位:ms,round 10次！

|round|node|deno|result|winner|
|----|----|----|----|----|
|1|12481.508|12687|-205.492|`node`|
|2|13735.104|13468|+267.104|`deno`|
|3|7394.730|7329|+65.730|`deno`|
|4|7441.146|7404|+37.146|`deno`|
|5|7617.898|7986|-368.102|`node`|
|6|7980.040|8237|-256.960|`node`|
|7|7496.829|7746|-249.171|`node`|
|8|7595.771|7923|-327.229|`node`|
|9|8089.464|8506|-416.536|`node`|
|10|7611.490|7856|-244.510|`node`|
||||||

结果：deno vs node === 3：7
- 在1w次console下，node 反而比deno好！

> 吐槽：deno为啥每次都是整数？？

![run_js_node_vs_deno.png](/images/run_js_node_vs_deno.png)

## bug和不足
1. 无法识别import from，必须是绝对路径
2. 且后缀无法省略
![module_err.png](/images/module_err.png)


__________________________

2019年3月14日16:31:28

by @veaba
