type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const node: Node<T> = { val: item, next: this.head };
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.length) return;
        this.length--;
        const node = this.head;
        this.head = node?.next;
        return node?.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
