function Linkelist() {
  // 节点类
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  this.header = null;
  this.length = 0;

  Linkelist.prototype.append = (element) => {
    var node = new Node(element);
    if (this.length === 0) {
      this.header = node;
    } else {
      var current = this.header;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  };

  Linkelist.prototype.insert = (element, position) => {
    // 对position 进行越界判断
    if (position < 0 || position >= this.length) {
      return false;
    }
    let node = new Node(element);
    let previous = null;
    let current = this.header;
    if (position === 0) {
      previous = this.header;
      this.header = node;
      this.header.next = previous;
    } else {
      var index = 0;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
    }

    this.length++;
    return true;
  };

  Linkelist.prototype.toString = () => {
    let result = "";
    var current = this.header;

    while (current) {
      result += JSON.stringify(current.data) + " ";
      current = current.next;
    }
    return result;
  };
}

var link = new Linkelist();
link.append({ name: "张三", age: 18 });
link.append({ name: "李四", age: 19 });
link.append({ name: "王五", age: 20 });
link.append({ name: "赵六", age: 21 });
link.append({ name: "田七", age: 22 });
console.log(link.insert({ name: "赵ba", age: 23 }, 3));
console.log(link.toString());
