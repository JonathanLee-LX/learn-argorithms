var ST = /** @class */ (function () {
    function ST() {
    }
    ST.prototype.put = function (key, i) {
        this[key] = i;
    };
    ST.prototype.get = function (key) {
        return this[key];
    };
    return ST;
}());
var str = 'hello world';
var st = new ST();
for (var i = 0; i < str.length; i++) {
    var key = str[i];
    st.put(key, i);
}
for (var i = 0; i < str.length; i++) {
    console.log(st.get(str[i]));
}
