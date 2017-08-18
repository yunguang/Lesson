//var str='realapp_d8fd8dc3bff9478b9e6d0382790629f1({"name": "realapp_d8fd8dc3bff9478b9e6d0382790629f1", "path": "", "type": "page", "openStyle": "-1", "manifest": [{"id": "realapp_d8fd8dc3bff9478b9e6d0382790629f1.js?zwxND24DsO", "src": "test2/project/js/realapp_d8fd8dc3bff9478b9e6d0382790629f1.js?zwxND24DsO", "type": "javascript"}, {"id": "realapp_d8fd8dc3bff9478b9e6d0382790629f1_mc", "src": "test2/project/json/realapp_d8fd8dc3bff9478b9e6d0382790629f1_mc.json?mmCYgs8YW0", "callback": "realapp_d8fd8dc3bff9478b9e6d0382790629f1_mc", "type": "manifest"}], "transition": {"next": {"effect": {"key": "move_in", "direction": "B_T", "duration": 0.5},"trigger": ["swipe_up"]},"prev": {"effect": {"key": "move_in", "direction": "T_B", "duration": 0.5},"trigger": ["swipe_down"]}}})';

//var reg=/(\w+)\(([\s\S]*?)\)/.exec(str);

// var str='women 123fere';
// console.log(str);
// console.log(str.replace(/[\s\n\r]/g,''));

// function fn(x,y,z) {
//     console.dir(arguments.length);
//     console.dir(fn);
//     console.dir(arguments.callee.length);
// }
// fn(1,2);

// function testCaller() {
//     var caller = testCaller.caller;
//     console.dir(caller);
// }
//
// function aCaller() {
//     testCaller();
// }
//
// aCaller();

function func(a = 55) {
    console.log(func);
}
func(1);