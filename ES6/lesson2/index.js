/**
 * Created by 57450 on 2017/4/21.
 */
var _templateObject = _taggedTemplateLiteral(["Hello ", ""], ["Hello ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var num = 888;
var num1 = 666;

function desc(str1) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    //console.log(str1, args);
}
desc(_templateObject, num);


// let [x, [y,z]] = [1, [2.1, 2.2]];
// console.log(x,y,z);