class BinarySearchST {
    private keys: key[]
    private values: value[]
    private N: number
    constructor(capacity){
        this.keys = new Comparable[capacity]
        this.values = new Object[capacity ]
    }
    size(node: Node): number{
        return node.keys.length
    }
    size(node: Node): number{
        if(node.left) node.size += node.left + 1
        if(node.right) node.size += node.right + 1
    }
    put(key, value){
        let i = this.rank(key)
        if(i < this.size() && this.keys[i].compareTo(key) === 0){
            this.values[i] = value
            return  
        }
        // 该key值不存在， 新增节点
        for(let j = this.size(); j > i; j--){
            this.keys[j] = this.keys[j-1]
            this.values[j] = this.values[j-1]
        }
        this.keys[i] = key
        this.values[i] = value

    }
    get (key) {
        if(this.isEmpty()) return null
        let i = this.rank(key)
        if(i < this.size() && this.keys[i].compareTo(key) === 0){
            return this.values[i]
        }
        return null
    }
    isEmpty(){
        return this.size() === 0
    }
    rank(key): number{
        let lo = 0, hi = this.size() - 1
        while(lo < hi){
            let mid = Math.floor(lo + (hi - lo)/2)
            if(this.keys[mid].compareTo(key) > 0){
                hi = mid - 1
            }else if(this.keys[mid].compareTo(key) < 0){
                lo = mid + 1
            }else {
                return mid
            }
        }
        return lo
    }
    min(){
        return this.keys[0]
    }
    max(){
        return this.keys[this.size() - 1]
    }
    select(key){
        return this.keys[key]
    }
    delete(key) {
        let i = this.rank(key)
        if(this.keys[i]){
            for(let len = this.size(); i < len - 1; i++){
                this.keys[i] = this.keys[i+1]
                this.values[i] =this.values[i+1]
            }  
        }
    }
    ceiling(key){
        let i = this.rank(key)
        return this.keys[i]
    }
    floor(key){

    }
    deleteMin(x){
        if(x.left === null) return x.right
        x.left = this.deleteMin(x.left)
        x.N = this.size(x.left) + this.size(x.right) + 1
        return x 
    }
}