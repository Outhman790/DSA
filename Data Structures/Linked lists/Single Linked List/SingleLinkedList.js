class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return temp;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.tail === temp) {
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  get(index) {
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
      if (!temp) return null;
    }
    return temp;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let temp = this.head;
    while (temp) {
      if (!temp.next) return temp;
      temp = temp.next;
    }
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.data = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    let temp = this.get(index - 1);
    if (temp) {
      let newNode = new Node(value);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }
  getLength() {
    let temp = this.head;
    let counter = 0;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const ll = new LinkedList(1);
ll.push(2);
ll.insert(2, 10);
console.log(ll);
console.log(ll.getLength());
