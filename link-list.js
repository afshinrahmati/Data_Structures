var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
    return ListNode;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.fist = null;
        this.end = null;
    }
    LinkList.prototype.isEmpty = function () {
        return this.fist === null;
    };
    LinkList.prototype.append = function (val) {
        var newNode = new ListNode(val);
        var keep = this.isEmpty();
        if (keep) {
            this.fist = newNode;
            this.end = newNode;
        }
        else {
            this.end.next = newNode;
            this.end = newNode;
        }
    };
    LinkList.prototype.prepend = function (val) {
        var newNode = new ListNode(val);
        var keep = this.isEmpty();
        console.log(newNode);
        if (keep) {
            this.fist = newNode;
            this.end = newNode;
        }
        else {
            newNode.next = this.fist;
            this.fist = newNode;
        }
    };
    LinkList.prototype.delete = function (val) {
        if (this.isEmpty()) {
            return;
        }
        if (this.fist.val === val) {
            this.fist = this.fist.next;
            if (this.fist == null) {
                this.end = null;
            }
            return;
        }
        var current = this.fist;
        while (current.next !== null) {
            if (current.next.val === val) {
                current.next = current.next.next;
                if (current.next === null) {
                    this.end = current;
                }
                return;
            }
            current = current.next;
        }
    };
    LinkList.prototype.toArray = function () {
        var result = [];
        var current = this.fist;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    };
    return LinkList;
}());
var linkedList = new LinkList();
linkedList.append(10);
linkedList.prepend(5);
linkedList.append(20);
console.log(linkedList.toArray()); // Output: [5, 20]
