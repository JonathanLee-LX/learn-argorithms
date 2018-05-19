// 符号表数据结构的实现

class SequentialSearchST {
    first: Item
    get(key) {
        for (let x = this.first; x != null; x = x.next) {
            if (key = x.key) {
                return x
            }
        }
        return null
    }
    put(key, value) {
        for (let x = this.first; x != null; x = x.next) {
            if (key === x.key) {
                x.value = value
            }
        }
        // 如果不存在该属性， 那么就在该符号表的first上添加这个Item
        this.first = new Item(key, value, this.first)
    }
    // 将被删除的节点的前一个节点的next属性指向该节点的next所指向的节点
    delete(key) {
        for (let x = this.first; x != null; x = x.next) {
            if (key === x.next.key) {
                x.next = x.next.next
            }
        }
    }
    size() {
        let size = 0;
        for (let x = this.first; x != null; x = x.next) {
            size++;
        }
        return size
    }
    keys() {
        let keys = []
        for (let x = this.first; x != null; x = x.next) {
            keys.push(x.key)
        }
        return keys
    }
}

class Item {
    key: string
    value: string
    next: Item
    constructor(key, value, next) {
        this.key = key
        this.value = value
        this.next = next
    }
}


let ss = new SequentialSearchST()
ss.put('wpl', 22)
ss.put('lx', 23)
ss.put('wpl', 23)
ss.put('dwq', 24)
ss.put('haha', 2323)
console.log(ss)
ss.delete('wpl')
console.log(ss)
ss.delete('lx')
console.log(ss)
ss.delete('dwq')
console.log(ss)


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
