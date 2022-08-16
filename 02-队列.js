function Queue() {
  this.items = [];
  Queue.prototype.enqueue = (element) => {
    this.items.push(element);
  };

  Queue.prototype.dequeue = () => {
    return this.items.shift();
  };

  Queue.prototype.front = () => {
    return this.items[0];
  };

  Queue.prototype.isEmpty = () => {
    return this.items.length === 0;
  };

  Queue.prototype.size = () => {
    return this.items.length;
  };

  Queue.prototype.toString = () => {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + "\n";
    }
    return str;
  };
}

// 击鼓传花
function passGame(player, num) {
  var queue = new Queue();
  player.forEach(function (item) {
    queue.enqueue(item);
  });
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return queue.front();
}

console.log(passGame(["张三", "李四", "王五", "赵六"], 4));
