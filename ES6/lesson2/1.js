/**
 * Created by 57450 on 2017/5/31.
 */
// function move({x = 0, y = 0}={}) {
//     return [x, y];
// }
//
// console.log(move({x: 3, y: 8})); //[3,8]
// console.log(move({x: 3})); //[3,0]
// console.log(move({}));//[0,0]
// console.log(move()); //[0,0]


// function move({x, y} = {x: 0, y: 0}) {
//     return [x, y];
// }
//
// console.log(move({x: 3, y: 8})); //[3,8]
// console.log(move({x: 3})); //[3,undefined]
// console.log(move({})); //[undefined,undefined]
// console.log(move()); //[0,0]


({p:a,q:b}={a:1,b:2});

console.log(a,b);
