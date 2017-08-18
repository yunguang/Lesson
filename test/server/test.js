var datas=[
    {a:1, b:2},
    {a:10, b:1},
    {a:5, b:2},
    {a:3, b:4},
    {a:2, b:1}
];
datas.sort(function (a,b) {
    return a.a-b.a;
})
function rank(datas) {

    var finalArr=[];
    var arr=[];
    datas.forEach(function (item) {
        arr.push(item.a);
    });

    arr.sort(function(a,b){return a-b}).forEach(function (list) {
        datas.forEach(function (item) {
            if(item.a==list){
                finalArr.push(item);
            }
        });
    });

    return finalArr;
}
console.log(rank(datas));
