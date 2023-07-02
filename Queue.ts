// In this tutorial, you will learn what a queue is. Also, you will find implementation of queue in typescript
// Queue follows the First In First Out (FIFO) rule - the item that goes in first is the item that comes out first
// Basic Operations of Queue
// A queue is an object (an abstract data structure - ADT) that allows the following operations:

// Enqueue: Add an element to the end of the queue
// Dequeue: Remove an element from the front of the queue
// IsEmpty: Check if the queue is empty
// IsFull: Check if the queue is full
// Peek: Get the value of the front of the queue without removing it
interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}

console.log("Sacasc")
class Queue<T> implements IQueue<T>{
    private storage: T[] = [];
    constructor(private count: T) { }
    enqueue(item: T) {
        if (this.size() === this.count) {
            throw new Error("Queue is Full");
        }
        return this.storage.push(item)
    }
    dequeue() {
        return this.storage.shift();
    }
    size() {
        return this.storage.length
    }

}

const queue = new Queue<string>("");

queue.enqueue("A");
queue.enqueue("B");
const size = queue.size();    // Output: 2
const dequeue = queue.dequeue(); // Output: "A"
const size2 = queue.size();    // Output: 1
console.log(size, dequeue, size2)