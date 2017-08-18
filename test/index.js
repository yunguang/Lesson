// const redis=require('redis');
// const client=redis.createClient('6379','127.0.0.1');

// client.select('1',function (error) {
//    if(error){
//        console.log(error);
//    } else{
//        client.set("myself","周云广",function (error,res) {
//            console.log(error);
//            if(error){
//                console.log(error);
//            }else{
//                console.log(res);
//            }
//            client.end('end');
//        });
//    }
// });

// client.select('1',function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         client.get('myself',function (error,res) {
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(res);
//             }
//             client.end('end');
//         })
//     }
// });

// client.select('1',function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         let obj={
//             'name':'火速移动',
//             'address':'东直门',
//             'tel':110
//         };
//         client.hmset('age',obj,function (error,res) {
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(res);
//             }
//         });
//     }
// });

// client.select('1',function (error) {
//    if(error){
//        console.log(error);
//    } else{
//        client.hmget('age','name',function (error,res) {
//            if(error){
//                console.log(error);
//            }else{
//                console.log(res);
//            }
//            client.end('end');
//        })
//    }
// });

// client.select('1',function (error) {
//    if(error){
//        console.log(error);
//    } else{
//        client.hgetall('age',function (error,res) {
//            if(error){
//                console.log(error);
//            }else{
//                console.log(res);
//            }
//            client.end('end');
//        })
//    }
// });

// client.select('1',function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         client.lpush('list','周云广');
//         client.lpush('list','刘泽伟');
//         client.lpush('list','孙万鑫');
//         client.lpush('list','王静静');
//         client.end('end');
//     }
// });

// client.select('1',function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         client.lrange('list1','0','-1',function (err,res) {
//             if(err){
//                 console.log(err);
//             }else {
//                 console.log(res);
//             }
//         })
//     }
// });

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
//
// timeout(100).then((value) => {
//     console.log(value);
// });
// Promise.resolve().then(function (val) {
//     setTimeout(function () {
//         console.log(1);
//     },5000)
// }).then(function (val) {
//     setTimeout(function () {
//         console.log(2);
//     },3000)
// }).then(function (val) {
//     setTimeout(function () {
//         console.log(3);
//     },1000)
// });
const async=require('async');
function func1(callback) {
    setTimeout(function () {
        console.log(1);
        callback(null);
    },5000)
}
function func2(callback) {
    setTimeout(function () {
        console.log(2);
        callback(null);
    },3000)
}
function func3(callback) {
    setTimeout(function () {
        console.log(3);
        callback(null);
    },1000)
}
async.series([function(callback){
    func1(callback);
},function(callback){
    func2(callback);
},function(callback){
    func3(callback);
}],function(err,result){
    // func1,func2,func3全部按顺序执行完的回调
    console.log(result);
});

// async.waterfall([
//     function(callback) {
//         callback(null, 'one', 'two');
//     },
//     function(arg1,arg2, callback) {
//         console.log(arg1);
//         // arg1 now equals 'one' and arg2 now equals 'two'
//         callback(null, 'three');
//     },
//     function(arg1, callback) {
//         // arg1 now equals 'three'
//         callback(null, 'done');
//     }
// ], function (err, result) {
//     // result now equals 'done'
//     console.log(result);
// });

// var funcs = [func1, func2, func3];
// var funcPromise = funcs.map(function(func, i) {
//     return new Promise(function(resolve) {
//         func();
//         console.log('func'+(i+1)+' well done!');
//         resolve();  //如果 func 是异步方法的话需要把 resolve 定义到方法的 callback 中
//     });
// });
// Promise.all(funcPromise).then(function() {
//     console.log('all well done');
// });




