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
class Queue<T> {
    constructor(
        private elemants: Record<number,T> = {},
        private 
    ){}
}