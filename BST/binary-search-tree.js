/**
 * 使用TypeScript描述二叉查找树
 */
/**
 * 节点数据模型
 * @class BSTNode
 */
var BSTNode = /** @class */ (function () {
    function BSTNode(key, value) {
        this.childrenNumber = 0;
        this.key = key;
        this.value = value;
    }
    return BSTNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
    }
    BinarySearchTree.prototype.getRoot = function () {
        return this.root;
    };
    BinarySearchTree.prototype.put = function (node, root) {
        if (root === void 0) { root = this.getRoot(); }
        if (root === null) {
            this.root = node;
            return this.root;
        }
        if (node.key < root.key) {
            this.put(node, root.left);
        }
        else if (node.key > root.key) {
            root = root.right;
            this.put(node, root.right);
        }
        else {
            root.value = node.value;
        }
    };
    BinarySearchTree.prototype.find = function (key, root) {
        if (root === null)
            return null;
        if (root.key === key)
            return root;
        if (root.key > key) {
            return this.find(key, root.left);
        }
        else if (root.key < key) {
            return this.find(key, root.right);
        }
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
var node = new BSTNode(1, 'LX');
bst.put(node);
var node1 = new BSTNode(10, 'WPL');
bst.put(node1);
var node2 = new BSTNode(0, 'NT');
bst.put(node2);
console.log(bst.find(10, bst.getRoot()));
console.log(bst);
