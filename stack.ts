
// to this structure that mean the first push and so is that leave
// pop ==> p party bazi
interface IStack<T> {
    gett(item: T): void;
    pop(): number;
    size(): number;
}

class Stack<T> implements IStack<T> {
    private storage: T[] = [];

    public gett(item: T) {
        this.storage.push(item)
    }

    size() {
        return this.storage.length;
    }
    pop(): number {
        return +this.storage.pop()!;
    }

}

const stack = new Stack();
stack.gett(4);
stack.gett(9);
console.log(stack.pop());
