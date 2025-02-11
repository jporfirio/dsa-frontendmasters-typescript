type Node<T> = {
    val: T;
    next?: Node<T> | null;
};

export default class Queue<T> {
    public length: number;
    public head: Node<T> | null;
    public tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    enqueue(item: T): void {
        const node: Node<T> = { val: item, next: null };
        this.length++;
        if (this.tail) {
            this.tail.next = node;
            this.tail = this.tail.next;
        } else {
            this.head = node;
            this.tail = node;
        }
    }
    deque(): T | undefined {
        if (!this.head) return;
        this.length--;
        const node = this.head;
        if (this.length) this.head = node.next ?? null;
        else {
            this.head = null;
            this.tail = null;
        }
        node.next = null;
        return node.val;
    }
    peek(): T | undefined {
        if (this.head?.val) return this.head.val;
        return;
    }
}
