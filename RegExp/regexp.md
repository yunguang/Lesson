# 正则表达式

### 正则表达式的定义

   正则表达式，也叫规则表达式；是 regular expression 的中文名。
 
   简单的说，正则表达式就是设置了某种规则，通过这种规则可以匹配以及捕获字符串中符合规则的子字符串。
 
   
### 创建正则的方式

1. 字面量的方式
```
var reg=/\d/;
```
2. 构造函数的模式

   用法：
   可以传两个参数，第一个参数可以是字符串或者正则表达式；第二个参数是字符串，代表修饰符。

   注意：
   如果第一参数中有转义字符，需要在转义字符前面再加上转义字符进行转义，例如 ‘\\d’；
   
   究其原因是在字符串中“\”有转义的特殊含义，如果需要显示“\”，需要这样写“\\”;
   ```
   var str="\a";
   console.log(str);  //输出 ‘a’
   
   var str="\\a";
   console.log(str);  //输出 ‘\a’
   ```
   
   兼容性：
   1、在ES5中，如果第一个参数是正则表达式，就不可以写第二个参数了。
   
   2、在ES6中，如果第一个参数是正则表达式，还可以写第二个参数，第二个参数会把第一个参数中的修饰符覆盖掉。

```
  var reg=new RegExp("\\d","g");
  
  var reg=new RegExp(/\d/img,"i"); // ES5不支持，ES6支持，最后的修饰符是i
```

### 正则的组成部分

  1. 原义字符
  
     定义：代表字符本身含义的字符，如a,b,c,d...   1,2,3...等等
  
  2. 元字符
  
     定义：具有特殊含义的字符，如 ^  $ [] () {m} . \d \D \r \n \s \S \b \B  \w \W 等等
     
  3. 修饰符
  
     i 忽略大小写
     
     m 多行匹配
     
     ```
     //m修饰符的作用是修改^和$在正则表达式中的作用，让他们分别表示行首和行尾
     // 默认状态下，一个字符串无论是否换行只有一个^和结尾$,如果采用多行匹配，那么每一行都有一个^和结尾$
     // 字符串中 \r和\n可以代表换行
     例一：
     var str="This is my\n home";
     var reg=/my$/;
     console.log(reg.test(str));  //false
     以上代码尽管已经换行，但是没有m多行匹配，所有my不是字符串行的结尾
     
     例二：
     var str="This is my\n home";
     var reg=/my$/m;
     console.log(reg.test(str));  //true
     因为采用了多行匹配，所以my也是字符串行的结尾
     
     例三：
     var str="my\rself"
     var reg=/^s/;
     console.log(reg.test(str)); //false
     
     例四：
     var str="my\rself" 
     var reg=/^s/m;
     console.log(reg.test(str)); //true
     ```
     
     g 全局匹配
     
     u (ES6) unicode
     
     y (ES6) 也是全局匹配，和g有些区别
     
### 正则对象的属性

1. ignoreCase: 表示是否存在i修饰符，值为布尔值，如果有i为true,没有i则为false

2. multiline: 表示是否存在m修饰符，值为布尔值，如果有m为true,没有m则为false

3. global: 表示是否存在g修饰符，值为布尔值，如果有g为true,没有g则为false

4. unicode (ES6): 表示是否存在u修饰符，值为布尔值，如果有u为true,没有u则为false

5. sticky (ES6): 表示是否存在y修饰符，值为布尔值，如果有y为true,没有y则为false

6. flags (ES6): 当前正则对象的修饰符
```
/\d/i.flags    // "i"
```
7. source : 正则对象中的字符串 
 ```
 /\d/i.source   // "\d" 
 ```  
8. lastIndex  开始进行匹配的索引值

### 元字符详解

1. 点 "."
  定义：代表除了\r\n(\r代表回车符 \n代表换行符)的任意字符，但无法代表unicode码点大于\uffff的值，要想识别，必须加上u修饰符
  
```
var s = '𠮷';

/^.$/.test(s) // false
/^.$/u.test(s) // true
```  

2. 量词

  +  表示 1-多次
  *  表示 0-多次
  ？ 表示 0-1次
  {m} 表示m次
  {m,n} 表示m-n次
  {m,}  表示至少m次 即大于等于m
  
  如果想表示最多m次，不是{,m},而是{0,m}
  
3. []  在正则中[]可以表示一类

```
  字符类：
 /[abc]/  代表a,b,c中的任意一个字符
 
  范围类：
  /[a-zA-Z0-9]/ 代表a-z,A-Z,0-9的任意一个字符，但不代表-
  /[a-z-]/ 前面的-代表的是范围，后面的-才代表-
  
  取反：
  /[^a]/  ^在[]不代表以...开头，如果是在开头就是取反的意思，如果不在开头就代表^字符本身 
  
  注意：
  [.()*+?|^$] 这些单符号的元字符在[]里，不具有元字符的含义，而只是它本身原有的意思；
  但是转义字符\除外，^在[]开头表示非

  [\s\S\d\D] 这些元字符意义不变
  
  例如：
  /[^123]/ 不是1或者不是2或者不是3的任意一个字符
  /[1^23]/  此时^代表他本身
  
  例二：
  var reg=/[[]]/;  其中第一位的[ 和第三位的] 组成了元字符[],其他两个代表本身
  var str='[';  //false
  var str="[]"; //true
  var str="]";  //false
  
  例三:
  var reg=/[\[\]]/;
  var str='[';  //true
  var str="[]"; //true
  var str="]";  //true
```

4. 预定义类

```
.（点） [^\r\n]   除了回车符和换行符之外的所有字符

\d      [0-9]     数字字符

\D      [^0-9]    非数字字符

\s      [\t\n\x0B\f\r]  空白符

\S      [^\t\n\x\0B\f\t]   非空白符

\w      [a-zA-Zz_0-9]      单词字符（字母、数字下划线）

\W      [^a-zA-Zz_0-9]     非单词字符
```

5. 边界

```

^   以xxx开始（加在前面,^xxx）

$   以xxx结束（加在后面,xxx$）

\b  单词边界  单词边界是\w和\W的交界，取出来的边界值始终为空字符串

\B  非单词边界
```

6. 贪婪模式和非贪婪模式

   在正则中，默认是贪婪模式，即正则会尽可能多的匹配字符串
   ```
   var reg=/\d{3,6}/;
   var str="123456";
   console.log(reg.exec(str));  // ["123456"]
   如上正则是匹配3-6个数字，由于默认是贪婪模式，就会取到6个
   ```
   
   那么如何阻止贪婪模式呢？
   
   很简单，只需要在量词的后面加上？即可，就会成为非贪婪模式。
   
   非贪婪模式会尽可能少的匹配字符串
   ```
   var reg=/\d{3,6}?/;
   var str="123456";
   console.log(reg.exec(str));  // ["123"]
   如上正则是匹配3-6个数字，由于在量词后面加上了？变成了非贪婪模式，就会取到3个
   ```
   
7. 分组

```
如果只想获取匹配字符串的一部分，可以使用分组。
分组用()将要获取的内容括起来
```
8. 忽略分组

```
如果必须要用括号，但是又不想获取分组的内容，就可以在括号的开头加上"?:"来忽略分组

例一：
var reg=/o(n|o)ff/;
var str="onffee";
console.log(reg.exec(str))  //["onff","n"]
如上由于没有忽略分组，所以会获取到分组内容

例一：
var reg=/o(?:n|o)ff/;
var str="onffee";
console.log(reg.exec(str))  //["onff"]
如上由于忽略分组，所以不会获取到分组内容
```
9. 或者 |

```
var reg=/on|off/;  匹配 on 或者 off
var str="once";
console.log(reg.test(str)) //false

//如果用括号括起来的话,结果就会不一样了
var reg=/o(n|o)ff/;  匹配 onff或者 ooff
var str="once";
console.log(reg.test(str))  //false
```

10. 元字符优先级

```
//从上到下，优先级逐渐降低
\                            转义符
() (?!) (?=) []              括号、字符组、环视
* + ? {n} {n,} {n,m}         量词
^ $                          起始结束位置
|                            选择
```
11. 反向引用
```
\1,\2...  反向引用  匹配之前的第一、第二...组括号内的表达式匹配的文本

反向引用允许在正则表达式内部引用之前捕获分组匹配的文本，形式是\num，num表示所引用分组的编号

例如：
//重复字母
/([a-z])\1/
console.log(/([a-z])\1/.test('aa'));//true
console.log(/([a-z])\1/.test('ab'));//false

反向引用可以用于建立前后联系。HTML标签的开始标签和结束标签是对应的

例如：
//开始标签
<([^>]+)>
//标签内容
[\s\S]*?
//匹配成对的标签
/<([^>]+)>[\s\S]*?<\/\1>/

console.log(/<([^>]+)>[\s\S]*?<\/\1>/.test('<a>123</a>'));//true
console.log(/<([^>]+)>[\s\S]*?<\/\1>/.test('<a>123</b>'));//false
```
12. 转义字符 \

13. 正向肯定预查和正向否定预查

   (?=pattern) 表示正向肯定预查(先行断言)
   ```
   x(?=y)称为先行断言（Positive look-ahead），x只有在y前面才匹配，y不会被计入返回结果。比如，要匹配后面跟着百分号的数字，可以写成/\d+(?=%)/。
   
   “先行断言”中，括号里的部分是不会返回的。
   
   var m = 'abc'.match(/b(?=c)/);
   m // ["b"]
   ```
   
   (?!pattern) 表示正向否定预查(先行否定断言)
   ```
   x(?!y)称为先行否定断言（Negative look-ahead），x只有不在y前面才匹配，y不会被计入返回结果。比如，要匹配后面跟的不是百分号的数字，就要写成/\d+(?!%)/。
   
   /\d+(?!\.)/.exec('3.14')
   // ["14"]
  上面代码中，正则表达式指定，只有不在小数点前面的数字才会被匹配，因此返回的结果就是14。
  
  “先行否定断言”中，括号里的部分是不会返回的。
 
   var m = 'abd'.match(/b(?!c)/);
   m // ['b']
   上面的代码使用了先行否定断言，b不在c前面所以被匹配，而且括号对应的d不会被返回。
   ```
   
14. 反向肯定预查和反向否定预查

   反向肯定预查（后行断言）
   
   JavaScript 语言的正则表达式，只支持先行断言（lookahead）和先行否定断言（negative lookahead），不支持后行断言（lookbehind）和后行否定断言（negative lookbehind）。
   
   目前，有一个提案，引入后行断言。V8 引擎4.9版已经支持，Chrome 浏览器49版打开”experimental JavaScript features“开关（地址栏键入about:flags），就可以使用这项功能。
   
   ”先行断言“指的是，x只有在y前面才匹配，必须写成/x(?=y)/。比如，只匹配百分号之前的数字，要写成/\d+(?=%)/。”先行否定断言“指的是，x只有不在y前面才匹配，必须写成/x(?!y)/。比如，只匹配不在百分号之前的数字，要写成/\d+(?!%)/。
   
   ```
   /\d+(?=%)/.exec('100% of US presidents have been male')  // ["100"]
   /\d+(?!%)/.exec('that’s all 44 of them')                 // ["44"]
   ```
   上面两个字符串，如果互换正则表达式，就会匹配失败。另外，还可以看到，”先行断言“括号之中的部分（(?=%)），是不计入返回结果的。
   
   反向否定预查（后行否定断言）
   
   “后行断言”正好与“先行断言”相反，x只有在y后面才匹配，必须写成/(?<=y)x/。比如，只匹配美元符号之后的数字，要写成/(?<=\$)\d+/。”后行否定断言“则与”先行否定断言“相反，x只有不在y后面才匹配，必须写成/(?<!y)x/。比如，只匹配不在美元符号后面的数字，要写成/(?<!\$)\d+/。
   
   ```
   /(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
      /(?<!\$)\d+/.exec('it’s is worth about €90')                // ["90"]
   ```
   上面的例子中，“后行断言”的括号之中的部分（(?<=\$)），也是不计入返回结果。
   
   “后行断言”的实现，需要先匹配/(?<=y)x/的x，然后再回到左边，匹配y的部分。这种“先右后左”的执行顺序，与所有其他正则操作相反，导致了一些不符合预期的行为。
   
   首先，”后行断言“的组匹配，与正常情况下结果是不一样的。
   
   ```
   /(?<=(\d+)(\d+))$/.exec('1053') // ["", "1", "053"]
   /^(\d+)(\d+)$/.exec('1053') // ["1053", "105", "3"]
   ```
   上面代码中，需要捕捉两个组匹配。没有"后行断言"时，第一个括号是贪婪模式，第二个括号只能捕获一个字符，所以结果是105和3。而"后行断言"时，由于执行顺序是从右到左，第二个括号是贪婪模式，第一个括号只能捕获一个字符，所以结果是1和053。
   
   其次，"后行断言"的反斜杠引用，也与通常的顺序相反，必须放在对应的那个括号之前。
   
   ```
   /(?<=(o)d\1)r/.exec('hodor')  // null
   /(?<=\1d(o))r/.exec('hodor')  // ["r", "o"]
   ```
   上面代码中，如果后行断言的反斜杠引用（\1）放在括号的后面，就不会得到匹配结果，必须放在前面才可以。
   
   
### 正则对象的方法

1. test(test不要跟g一起用)
```
实例一：（不加g）
var reg=/\w/;
reg.test('a');  //true
reg.test('a');  //true

实例二：（加g）
var reg=/\w/g;
reg.test('a'); //true
reg.test('a'); //false
reg.test('a'); //true
reg.test('a'); //false
实例二之所以出现不稳定的原因是因为加上g之后，每次匹配lastIndex都会改变
```

2. exec

   1. 如果有匹配返回一个数组，否则返回null
   
      匹配到的数组的第一项是匹配到的字符串，如果有分组，后面依次是分组匹配到内容
   
   2. 返回的数组有两个属性 index和input
   
      其中index是匹配文本的第一个字符位置，input存放被检索的字符串
      
   3. 非全局调用
   
      lastIndex一直为0，不会改变
      
   4. 全局调用
   
      每次调用lastIndex都会改变
      
   ```
   var reg=/\w/g;
   reg.exec("abc");  // ["a"] index:0  input:"abc"
   reg.exec("abc");  // ["b"] index:1  input:"abc"
   reg.exec("abc");  // ["c"] index:2  input:"abc"
   ```
   
### 字符串对象的方法

1. search

   search用于检索字符串中指定的子字符串或者检索与正则表达式相匹配的子字符串
   
   返回第一个匹配结果的index,查找不到返回-1
   
   search方法不执行全局匹配，会忽略g，并且总是从字符串的开始进行检索
   
   ```
   实例一：
   var str="abc";
   str.search('b');  //1
   str.search('c');  //2
   str.search('f');  //-1
   
    实例二：
    var str="abc";
    str.search(/ab/);  //0
    str.search(/c/);  //2
    str.search(/c/g);  //2
   ```
   
2. match

   检索字符串，找到一个或者多个与正则相匹配的文本
   
   正则是否具有g对结果影响很大
   
   ```
   1. 非全局调用
   
      没有g,只能执行一次匹配
      
      如果找到，返回一个数组，存放的是匹配到的文本；如果没找到，返回null
      
      返回的数组有一个index和input
      
      实例一：
      var str="a23b0888e";
      var reg=/\w/;
      str.match(reg); //["a"]  index:0  input:"a23b0888e"
      
   2. 全局调用
   
      如果正则中有g,则match将执行全局检索，找到字符串中的所有匹配字符串
      
      如果找到，返回一个数组，没有返回null
      
      数组对象没有index和input属性
      
      数组中没有分组的内容
      
      实例二：
      var str="a23b0888e";
      var reg=/\w/;
      str.match(reg); //["a","b","e"]
   ```
   
3. split

   1. 把字符串分割为数组
   
   ```
   var str="a#b#c";
   str.split('#');   //["a", "b", "c"]
   ```
   
   2. 在一些复杂的情况下可以使用正则表达式分割
   
    ```
      var str="a#b!c&u";
      str.split(/[#!&]/);   //["a", "b", "c", "u"]
      
      var str="a1b2c3d4e";
      str.split(/\d/);  //["a", "b", "c", "d", "e"]
    ```
      
4. replace
 
   1. replace的参数有三种情况
   ```
   1.replace(str,replaceStr)
   
   例如：
   var str="2017-08-09";
   str.replace("-","/");  //"2017/08-09"  只匹配一次
   
   2.replace(reg,replaceStr)
   
   例如：
   var str="2017-08-09";
   str.replace(/[-]/,"/");  //"2017/08-09"  不加g只匹配一次
   
   var str="2017-08-09";
   str.replace(/[-]/g,"/");  //"2017/08/09"  加g全局匹配
   
   3.replace(reg,function)
   
     function会在每次匹配的时候调用，至少有3个参数
     
     1. 匹配的子字符串
     2. 分组内容 （如果没有分组，就没有这个参数）
     3. index
     4. input 
     
     例如：
     var str="2017-08-09";
     str.replace(/[-]/g,function(){
         console.log(arguments);  //["-", 4, "2017-08-09"]  ["-", 7, "2017-08-09"] 
     });
   ```
   
   2. replace()返回的replacement中如果有$,则会有特殊的含义
   
   ```
   1. $1、$2、...、$99  如regexp中的第1到第99个分组匹配的文本
   
      var str="2017-09-08";
      str.replace(/(-)/g,'$1')
   
   2. $& 与regexp相匹配的子串
   
      var str="2017-09-08";
      str.replace(/-/g,'$&')
      
   3. $` 位于匹配子串左侧的文本
   
      var str="2017-09-08";
      str.replace(/-/g,'$`')
      
   4. $' 位于匹配子串左侧的文本
      
      var str="2017-09-08";
      str.replace(/-/g,"$'")
      
   5. $$ 直接量符号 
   
      var str="2017-09-08";
      str.replace(/-/g,"$$")
   ```
   
### RegExp的几个属性

1. input 属性 ($_) (RegExp) (JavaScript)

   返回执行正则表达式搜索所针对的字符串。只读。
   
   ```
   function inputDemo(){
      var s;
      var re = new RegExp("d(b+)(d)","ig");
      var str = "cdbBdbsbdbdz";
      var arr = re.exec(str);
      s = "The string used for the match was " + RegExp.input; 
      return(s);
   }
   ```
2. $1...$9 属性 (RegExp) (JavaScript)
   
   返回在模式匹配期间找到的，所存储的最近的九个部分。只读。
   
   ```
   var newLine = "<br />";
   
   var re = /(\w+)@(\w+)\.(\w+)/g
   var src = "Please send mail to george@contoso.com and someone@example.com. Thanks!"
   
   var result;
   var s = "";
   
   // Get the first match.
   result = re.exec(src);
   
   while (result != null) {
       // Show the entire match.
       s += newLine;
   
       // Show the match and submatches from the RegExp global object.
       s += "RegExp.lastMatch: " + RegExp.lastMatch + newLine;
       s += "RegExp.$1: " + RegExp.$1 + newLine;
       s += "RegExp.$2: " + RegExp.$2 + newLine;
       s += "RegExp.$3: " + RegExp.$3 + newLine;
   
       // Show the match and submatches from the array that is returned
       // by the exec method.
       for (var index = 0; index < result.length; index++) {
           s +=  index + ": ";
           s += result[index];
           s += newLine;
       }
   
       // Get the next match.
       result = re.exec(src);
   }
   document.write(s);
   
   // Output:
   //  RegExp.lastMatch: george@contoso.com
   //  RegExp.$1: george
   //  RegExp.$2: contoso
   //  RegExp.$3: com
   //  0: george@contoso.com
   //  1: george
   //  2: contoso
   //  3: com
   
   //  RegExp.lastMatch: someone@example.com
   //  RegExp.$1: someone
   //  RegExp.$2: example
   //  RegExp.$3: com
   //  0: someone@example.com
   //  1: someone
   //  2: example
   //  3: com
   ```
   
3. index 属性 (RegExp) (JavaScript)

   返回字符位置，它是被搜索字符串中第一个成功匹配的开始位置。只读。
   
   ```
   function RegExpTest()
   {
      var ver = Number(ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion())
      if (ver < 5.5)
      {
         document.write("You need a newer version of JavaScript for this to work");
         return;
      }
   
      var src = "The quick brown fox jumps over the lazy dog.";
   
      // Create regular expression pattern with a global flag.
      var re = /\w+/g;
   
      // Get the next word, starting at the position of lastindex.
      var arr;
      while ((arr = re.exec(src)) != null)
         {
         // New line:
         document.write ("<br />");  
         document.write (arr.index + "-" + arr.lastIndex + " ");
         document.write (arr);
         }
   }
   ```
   
4. lastIndex 属性 (RegExp) (JavaScript)

`  返回字符的位置，该位置是被搜索字符串中下一次匹配的开始位置。

   ```
   function RegExpTest()
   {
      var ver = Number(ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion())
      if (ver < 5.5)
      {
         document.write("You need a newer version of JavaScript for this to work");
         return;
      }
   
      var src = "The quick brown fox jumps over the lazy dog.";
   
      // Create regular expression pattern with a global flag.
      var re = /\w+/g;
   
      // Get the next word, starting at the position of lastindex.
      var arr;
      while ((arr = re.exec(src)) != null)
         {
         // New line:
         document.write ("<br />");  
         document.write (arr.index + "-" + re.lastIndex + " ");
         document.write (arr);
         }
   }
   ```
   
5. lastMatch 属性 ($&) (RegExp) (JavaScript)

   返回来自任何正则表达式搜索过程的最后匹配的字符。只读。
   
   ```
   // Create the regular expression pattern.
   var re = new RegExp("d(b+)(d)","ig");
   var str = "cdbBdbsbdbdz";
   
   // Perform the search.
   var arr = re.exec(str);
   
   // Print the output.
   var s = "" 
   s += "$1: " + RegExp.$1 + "<br />";
   s += "$2: " + RegExp.$2 + "<br />";
   s += "$3: " + RegExp.$3 + "<br />";
   s += "input: " + RegExp.input + "<br />";
   s += "lastMatch: " + RegExp.lastMatch + "<br />";
   s += "leftContext: " + RegExp.leftContext + "<br />";
   s += "rightContext: " + RegExp.rightContext + "<br />"; 
   s += "lastParen: " + RegExp.lastParen + "<br />";
   
   document.write(s);
   ```
   
6. lastParen 属性 ($+) (RegExp)

   从任何正则表达式搜索中返回最后一个带括号的子匹配项（如果有）。只读。
   
   ```
   // Create the regular expression pattern.
   var re = new RegExp("d(b+)(d)","ig");
   var str = "cdbBdbsbdbdz";
   
   // Perform the search.
   var arr = re.exec(str);
   
   // Print the output.
   var s = "" 
   s += "$1: " + RegExp.$1 + "<br />";
   s += "$2: " + RegExp.$2 + "<br />";
   s += "$3: " + RegExp.$3 + "<br />";
   s += "input: " + RegExp.input + "<br />";
   s += "lastMatch: " + RegExp.lastMatch + "<br />";
   s += "leftContext: " + RegExp.leftContext + "<br />";
   s += "rightContext: " + RegExp.rightContext + "<br />"; 
   s += "lastParen: " + RegExp.lastParen + "<br />";
   
   document.write(s);
   ```
   
7. leftContext 属性 ($`) (RegExp)

    返回从一个被搜索字符串的开头到最后一个匹配的开头之前的位置之间的字符。只读。
    
    RegExp.leftContext
    
8. rightContext 属性 ($') (RegExp)

   返回一些字符，即从最后一个匹配之后的位置直到被搜索字符串的结尾处的字符。只读。
   
   RegExp.rightContext
   
   
   
   
   
   
   

   
    
    
   
   
     