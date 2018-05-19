var ST = /** @class */ (function () {
    function ST() {
    }
    ST.prototype.put = function (key, value) {
        this[key] = value;
    };
    ST.prototype.get = function (key, counts) {
        return this[key];
    };
    ST.prototype.contains = function (key) {
        return this.get(key);
    };
    return ST;
}());
var fs = require('fs');
var txt = fs.readFileSync('tiny-tale.txt', 'utf8');
var arr = txt.split(' ');
// console.log(txt)
// console.log(arr)
var st = new ST();
arr.forEach(function (word, i) {
    if (!st.contains(word))
        st.put(word, 1);
    else
        st.put(word, st.get(word) + 1);
});
for (var key in st) {
    console.log(key + " has " + st[key]);
}
// console.log(st)
// const minLen = 2;
