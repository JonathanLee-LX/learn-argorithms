
/**
 * 使用TypeScript描述二叉查找树
 */

/**
 * 节点数据模型
 * @class BSTNode
 */
class BSTNode{
    public key: number
    public value: string
    public left: BSTNode
    public right: BSTNode
    public childrenNumber: number = 0
    constructor (key, value) {
        this.key = key
        this.value = value
    }
}


class BinarySearchTree {
    private root: BSTNode

    public getRoot () {
        return this.root
    }

    public put(node: BSTNode, root: BSTNode = this.getRoot()): BSTNode{
        if(root === null){
            this.root = node
            return this.root
        }
        if(node.key < root.key){
            this.put(node, root.left)
        }else if(node.key > root.key){
            root = root.right
            this.put(node, root.right)
        }else {
            root.value = node.value
        }
    }

    public find(key, root): BSTNode {
        if(root === null) return null
        if(root.key === key) return root
        if(root.key > key){
            return this.find(key, root.left)
        }else if(root.key < key){
            return this.find(key, root.right)
        }
    }

    // public update(BSTNode: BSTBSTNode): void{
    //     let target = this.find(BSTNode)
    //     if(target)
    //     target.value = BSTNode.value
    // }
    // public delete(root:BSTBSTNode, key){
    //     if(root == null) return null
    //     let cmp = key.compareTo(root.key)
    //     if(cmp < 0) return this.delete(root.left) 
    //     else if(cmp < 0) return this.delete(root.right)
    // }
    // public get(key) {
    //     let x = this.root
    //     while(x !== null){
    //         let cmp = key.compareTo(x.key)
    //         if(cmp === 0) return x
    //         if(cmp < 0) x = x.left
    //         else if(cmp > 0) x = x.right
    //     }
    //     return null
    // }

    // public put(x, key, value){
    //     if( x == null) return new BSTBSTNode(key, val, 1)
    //     let cmp = key.compareTo(x.key)
    //     if(cmp < 0) x.left = put(x.left, key, val)
    //     else if(cmp > 0) x.right = put(x.right, key, val)
    //     else x.val = val
    //     x.N = size(x.left) + size(x.right) + 1
    //     return x
    // }

    // public put(x, key, value){
    //     while(x !== null){
    //         let cmp = key.compareTo(x.key)
    //         if(cmp < 0) x = x.left
    //         else if (cmp > 0) x = x.right
    //         else {
    //             x.value = value
    //             x.N = size(x.left) + size(x.right) + 1
    //             return x
    //         } 
    //     }
    //     return new BSTBSTNode(key, value, 1)
    // }
}

let bst = new BinarySearchTree()
let node = new BSTNode(1, 'LX')
bst.put(node)
let node1  = new BSTNode(10, 'WPL')
bst.put(node1)
let node2 = new BSTNode(0, 'NT')
bst.put(node2)

console.log(bst.find(10, bst.getRoot()))
console.log(bst)