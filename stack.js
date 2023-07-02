var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    Stack.prototype.gett = function (item) {
        this.storage.push(item);
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    Stack.prototype.pop = function () {
        return +this.storage.pop();
    };
    return Stack;
}());
var stack = new Stack();
stack.gett(4);
stack.gett(9);
console.log(stack.pop());
