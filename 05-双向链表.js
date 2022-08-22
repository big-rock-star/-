function DoublyLinkedList() {
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  this.head = null;
  this.tail = null;
  this.length = 0;

  DoublyLinkedList.prototype.append = (data) => {
    var node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  };

  DoublyLinkedList.prototype.insert = (position, data) => {
    // 越界判断
    if (position < 0 || position > this.length) return false;
    var node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else if (position === 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else if (position === this.length) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      var current = this.head;
      for (var i = 0; i < position; i++) {
        current = current.next;
      }
      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
      current.prev = node;
    }
  };

  DoublyLinkedList.prototype.String = () => {
    return this.backwardString();
  };

  DoublyLinkedList.prototype.fowardString = () => {
    var current = this.head;
    var result = "";
    while (current) {
      result += JSON.stringify(current.data) + " ";
      current = current.next;
    }
    return result;
  };

  DoublyLinkedList.prototype.backwardString = () => {
    var crrent = this.tail;
    var result = "";
    while (current) {
      result += current.data + " ";
      current = current.prev;
    }

    return result;
  };
}
