class ListNode<T>{
    val: T;
    public next: ListNode<T> | null = null;
    public prev: ListNode<T> | null = null;

    constructor(val: T) {
        this.val = val;
    }
}


class LinkList<T> {
    fist: ListNode<T> | null;
    end: ListNode<T> | null;

    constructor() {
        this.fist = null;
        this.end = null;
    }
    isEmpty(): boolean {
        return this.fist === null;
    }

    append(val: T): void {

        const newNode = new ListNode(val);
        const keep = this.isEmpty();
        if (keep) {
            this.fist = newNode;
            this.end = newNode
        } else {
            this.end!.next = newNode;
            this.end = newNode
        }
    }
    prepend(val: T): void {
        const newNode = new ListNode(val);
        const keep = this.isEmpty();
        console.log(newNode);
        
        if (keep) {
            this.fist = newNode;
            this.end = newNode;
        } else {
            newNode.next = this.fist;
            this.fist = newNode;
        }
    }

    delete(val: T): void {
        if (this.isEmpty()) {
            return;
        }
        if (this.fist!.val === val) {
            this.fist = this.fist!.next;
            if (this.fist == null) {
                this.end = null;
            }
            return;
        }
        let current = this.fist;
        while (current!.next !== null) {
            if (current!.next.val === val) {
                current!.next = current!.next.next;
                if (current!.next === null) {
                    this.end = current;
                }
                return;
            }
            current = current!.next;
        }
    }
    toArray(): T[] {
        const result: T[] = [];
        let current = this.fist;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}
const linkedList = new LinkList<number>();
linkedList.append(10);
linkedList.prepend(5);
linkedList.append(20);

console.log(linkedList.toArray()); // Output: [5, 20]