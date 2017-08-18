
# let和const

### let的基本用法
   
一、let的基本用法

1. let的作用和var相似，也是用来声明变量的，
       不同的是，let声明的变量只在let命令所在的代码块中有效。
       
```
   {
       let a=1;
       var b=2;
   }    
   console.log(a);
   console.log(b);
```       
       
2. let特别适用用到for循环中，在for循环中有三个特点
    
    1. let声明的变量只在for循环中有效，在循环外调用会报错
    ```
    for(let a=0;a<10;a++){
        
    }
    console.log(a);
    ```
    
    2. let声明的变量只在当前循环有效，每次循环都会重新声明这个变量，
    每次循环JavaScript引擎都会记住本次循环的变量，等到下次重新声明该变量的时候
    会根据上一次循环的值进行计算
    ```
    //for循环使用var声明
    var a = [];
    for (var i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    a[6](); // 10
    ```
    ```
    //for循环使用let声明
    var a = [];
    for (let i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    a[6](); // 6
    ```
    
    3. for循环中，循环语句部分是一个父作用域，循环体内部是一个单独的子作用域
    ```
    for (let i = 0; i < 3; i++) {
      let i = 'abc';
      console.log(i);
    }
    ```
    
3. let声明的变提升量不存在变量

```
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

4. 暂时性死区

    1. 在代码块中，使用let声明变量之前，该变量是不可用的，在语法上叫 暂时性死区。
    ```
    var tmp = 123;
    
    if (true) {
      tmp = 'abc'; // ReferenceError
      let tmp;
    }
    ```
    2. ES6明确规定，在代码块中，只要有let和const的命令，这个代码块对于let和const声明的变量，
    从一开始就形成了封闭的作用域，凡是声明之前使用，就会报错
    
    ```
    if (true) {
      // TDZ开始
      tmp = 'abc'; // ReferenceError
      console.log(tmp); // ReferenceError
    
      let tmp; // TDZ结束
      console.log(tmp); // undefined
    
      tmp = 123;
      console.log(tmp); // 123
    }
    ```
    ```
    for(let i=0;i<10;i++){
        console.log(i);
    }
    
    for(let i=0;i<10;i++){
        console.log(i);
        let i=100;
    }
    ```
    
5. let不允许重复声明,也不能在函数中重新声明参数

```
// 报错
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  let a = 10;
  let a = 1;
}
```
```
function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```

### 块级作用域
1. var的两个问题

    1. var 没有块级作用域，变量名重复的话会把以前的覆盖
    
    2. for循环中的var声明的变量会被外面所引用
    
2. 如何实现块级作用域

3. 不会污染全局变量

4. 闭包新写法

    
    
    
### const  （大部分与let相同,有几个不同之处）
1. const 必须声明和定义一起， let可以只声明不定义
2. const 定义了变量不能被改变，let可以改变
3. const 对于引用数据来说是不改变引用地址

### 顶级作用域

1. 在浏览器中顶级作用域是window,在Node.js中顶级作用域是global

2. 在ES5中，全局变量等同于window下的对象；在ES6中，用let和const声明的变量并不是window下的对象

