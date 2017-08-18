
// 解构赋值

// 1.数组  2.对象  3. 字符串  4.数字   5.布尔

// for(var i=0;i<10;i++){
//     console.log(i);
//     var i=100;
// }

//正常赋值  嵌套赋值   省略赋值  默认值

//  var str="天地无极，乾坤给我";
//
//  console.log(typeof(str.charCodeAt(4)));
//
// var name = 'zfpx',age = 8;
// function desc(strings,values,hah){
//     console.log(strings,values,hah);
// }
// desc`${name} is ${age}`;
// var sym = Symbol('My symbol');
//
// console.log(typeof String(sym));// 'Symbol(My symbol)'
// console.log(typeof sym.toString());

function Field(val){
    var value=val;
    this.getValue = function(){
        return value;
    };
    this.setValue = function(val){
        value = val;
    };
}

var field = new Field("test3");
console.log(field.getValue());
// => "test2"
