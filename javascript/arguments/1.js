/*
* arguments,caller,callee
*
* */
var length = 10;
function fn(){
    alert(this.length)
}
var obj = {
    length: 5,
    method: function(fn) {
        arguments[0]()
    }
};
obj.method(fn)//输出1


// 1.前言
// arguments, caller ,   callee 是什么？
// 在JavaScript 中有什么样的作用？本篇会对于此做一些基本介绍。

// 2. arguments
// arguments:  在函数调用时， 会自动在该函数内部生成一个名为 arguments的隐藏对象。 该对象类似于数组， 但又不是数组。可以使用[]操作符获取函数调用时传递的实参。
function testArg()
{
    alert("real parameter count: "+arguments.length);
    for(var i = 0; i < arguments.length; i++)
    {
        alert(arguments[i]);
    }
}


testArg(11);  //count: 1
testArg('hello','world');  // count: 2
// 看上去很简单。 需要注意的是 argument 保存的实参的信息。
//
// 上面有说，   arguments 不是一个数组，何以见得？ 执行以下部分就可以知道了

(function () {
    alert(arguments instanceof Array); // false
    alert(typeof(arguments)); // object
})();

// 对于以上立即执行函数写法不清楚的话， 可以参考
// http://blog.csdn.net/oscar999/article/details/8507919
//
//     只有函数被调用时，arguments对象才会创建，未调用时其值为null：
alert(new Function().arguments);//return null

// arguments 的完整语法如下：
// [function.]arguments[n]
// 参数function ：选项。当前正在执行的 Function 对象的名字。 n ：选项。要传递给 Function 对象的从0开始的参数值索引。

// 3. caller
// 在一个函数调用另一个函数时，被调用函数会自动生成一个caller属性，指向调用它的函数对象。如果该函数当前未被调用，或并非被其他函数调用，则caller为null。
function testCaller() {
    var caller = testCaller.caller;
    alert(caller);
}

function aCaller() {
    testCaller();
}

aCaller();

// 4. callee
// 当函数被调用时，它的arguments.callee对象就会指向自身，也就是一个对自己的引用。
// 由于arguments在函数被调用时才有效，因此arguments.callee在函数未调用时是不存在的（即null.callee），且解引用它会产生异常。
// [javascript] view plain copy
function aCallee(arg) {
    alert(arguments.callee);
}

function aCaller(arg1, arg2) {aCallee();}

aCaller();

// 5. arguments.length 是实参长度

// arguments.callee.length 是形参长度
