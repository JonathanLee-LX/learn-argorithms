class BST {
    private root: Node  
    get(key){
        let root = this.root
        while(root != null){

        }
        return null
    }

    put(key, value){
        let root = this.root
        while(root != null){
            let comp = key.compareTo(root)
            if(comp > 0) root = root.left
            else if(comp < 0) root = root.right
            else{
                root.value = value
                root.N = root.left.size() + root.right.size() + 1
            } 
        }
    }
    constructor(){
        this.root = new Node()
    }
}

class Node {
    private key
    private value
    private left
    private right
    private n
    constructor(key, value, n) {
        this.key = key
        this.value = value
        this.n = n
    }
}
