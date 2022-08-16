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
