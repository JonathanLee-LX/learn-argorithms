// 符号表数据结构的实现
var SequentialSearchST = /** @class */ (function () {
    function SequentialSearchST() {
    }
    SequentialSearchST.prototype.get = function (key) {
        for (var x = this.first; x != null; x = x.next) {
            if (key = x.key) {
                return x;
            }
        }
        return null;
    };
    SequentialSearchST.prototype.put = function (key, value) {
        for (var x = this.first; x != null; x = x.next) {
            if (key === x.key) {
                x.value = value;
            }
        }
        // 如果不存在该属性， 那么就在该符号表的first上添加这个Item
        this.first = new Item(key, value, this.first);
    };
    // 将被删除的节点的前一个节点的next属性指向该节点的next所指向的节点
    SequentialSearchST.prototype["delete"] = function (key) {
        for (var x = this.first; x != null; x = x.next) {
            if (key === x.next.key) {
                x.next = x.next.next;
            }
        }
    };
    SequentialSearchST.prototype.size = function () {
        var size = 0;
        for (var x = this.first; x != null; x = x.next) {
            size++;
        }
        return size;
    };
    SequentialSearchST.prototype.keys = function () {
        var keys = [];
        for (var x = this.first; x != null; x = x.next) {
            keys.push(x.key);
        }
        return keys;
    };
    return SequentialSearchST;
}());
var Item = /** @class */ (function () {
    function Item(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
    return Item;
}());
var ss = new SequentialSearchST();
ss.put('wpl', 22);
ss.put('lx', 23);
ss.put('wpl', 23);
ss.put('dwq', 24);
ss.put('haha', 2323);
console.log(ss);
ss["delete"]('wpl');
console.log(ss);
ss["delete"]('lx');
console.log(ss);
ss["delete"]('dwq');
console.log(ss);
// console.log(ss)
// console.log('--------')
// console.log(ss.get('wpl'))
// console.log('--------')
// console.log(ss.keys())
// console.log('--------')
// ss.delete('wpl')
// console.log(ss.size())
// console.log('--------')
// console.log(ss.keys())
// console.log(ss)
