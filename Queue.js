// In this tutorial, you will learn what a queue is. Also, you will find implementation of queue in typescript
// Queue follows the First In First Out (FIFO) rule - the item that goes in first is the item that comes out first
// Basic Operations of Queue
// A queue is an object (an abstract data structure - ADT) that allows the following operations:
console.log("Sacasc");
var Queue = /** @class */ (function () {
    function Queue(count) {
        this.count = count;
        this.storage = [];
    }
    Queue.prototype.enqueue = function (item) {
        if (this.size() === this.count) {
            throw new Error("Queue is Full");
        }
        return this.storage.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    return Queue;
}());
var queue = new Queue("");
queue.enqueue("A");
queue.enqueue("B");
var size = queue.size(); // Output: 2
var dequeue = queue.dequeue(); // Output: "A"
var size2 = queue.size(); // Output: 1
console.log(size, dequeue, size2);
