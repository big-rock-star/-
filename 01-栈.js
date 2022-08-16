function Stack() {
  this.items = [];
  // 压栈
  // this.push = ()=> {

  // }
  Stack.prototype.push = (element) => {
    this.items.push(element);
  };

  // 栈顶删除元素同时返回被删除的元素
  Stack.prototype.pop = (element) => {
    return this.items.pop();
  };

  // 返回栈顶的元素，不会对栈进行任何修改
  Stack.prototype.peek = () => {
    return this.items[this.items.length - 1];
  };

  // 判断栈是否为空
  Stack.prototype.isEmpty = () => {
    return this.items.length === 0;
  };

  // 返回栈中的元素个数
  Stack.prototype.size = () => {
    return this.items.length;
  };

  // 栈结构中的内容以字符串的形式返回
  Stack.prototype.toString = () => {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + "\n";
    }
    return str;
  };
}

// 十进制转二进制
var dec2bin = (decNember) => {
  var s = new Stack();
  while (decNember > 0) {
    s.push(decNember % 2);
    decNember = Math.floor(decNember / 2);
  }
  var binString = "";
  while (!s.isEmpty()) {
    binString += s.pop();
  }
  return binString;
};

console.log(dec2bin(1001));
