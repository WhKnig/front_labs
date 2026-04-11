class TreeNode<T> {
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(public value: T) {}
}

class BinaryTree<T> {
    private root: TreeNode<T> | null = null;

    constructor(private compareFn: (a: T, b: T) => number) {}

    public insert(value: T): void {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (this.compareFn(newNode.value, node.value) < 0) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    public search(value: T): TreeNode<T> | null {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (!node) return null;
        const cmp = this.compareFn(value, node.value);
        if (cmp === 0) return node;
        return cmp < 0 ? this.searchNode(node.left, value) : this.searchNode(node.right, value);
    }

    public update(oldValue: T, newValue: T): void {
        this.remove(oldValue);
        this.insert(newValue);
    }

    public remove(value: T): void {
        this.root = this.removeNode(this.root, value);
    }

    private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (!node) return null;

        const cmp = this.compareFn(value, node.value);
        if (cmp < 0) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (cmp > 0) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            // Found node to delete
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Node with two children: get inorder successor
            const minNode = this.findMin(node.right);
            node.value = minNode.value;
            node.right = this.removeNode(node.right, minNode.value);
            return node;
        }
    }

    private findMin(node: TreeNode<T>): TreeNode<T> {
        return node.left ? this.findMin(node.left) : node;
    }

    public getHeight(): number {
        return this.calculateHeight(this.root);
    }

    private calculateHeight(node: TreeNode<T> | null): number {
        if (!node) return 0;
        return 1 + Math.max(this.calculateHeight(node.left), this.calculateHeight(node.right));
    }
}

export { BinaryTree, TreeNode };
