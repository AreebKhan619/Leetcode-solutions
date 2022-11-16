
var MyStack = function() {
    this.data = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.data.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.data.splice(this.data.length - 1, 1)[0]
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.data[this.data.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.data.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */