function PriorityQueue(element, priority) {
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.items = [];
  PriorityQueue.prototype.enqueue = (element, priority) => {
    queueElement = new QueueElement(element, priority);

    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          return;
        }
      }
      this.items.push(queueElement);
    }
  };
}
