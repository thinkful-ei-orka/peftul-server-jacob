class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if(this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if(this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;

        if(node === this.last) {
            this.last = null;
        }
        return node;
    }
    show() {
        return this.first.data;
    }
    all() {
        let line = [];
        let currNode = this.first;
        while(currNode !== null) {
            line.push(currNode.data);
            currNode = currNode.next;
        }
        return line;
    }
}

module.exports = Queue;

module.exports = Queue;
