// class Student{
//     constructor(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.apsent = 0;
//         let scores = [];
//     }

//     fullName(){
//         let first_name=this.firstName[0].toUpperCase() + this.firstName.slice(1)
//         let last_name=this.lastName[0].toUpperCase() + this.lastName.slice(1)
//         return `you full name is ${first_name} ${last_name}`
//     }

//     countApsents(){
//         this.apsent++
//         let first_name=this.firstName[0].toUpperCase() + this.firstName.slice(1)
//         let last_name=this.lastName[0].toUpperCase() + this.lastName.slice(1)
//         return `${first_name} ${last_name} has been late for ${this.apsent} times`
//     }

//     // addScores(...scores){
//     //     this.scores.push(...scores).fleat
//     //     let first_name=this.firstName[0].toUpperCase() + this.firstName.slice(1)
//     //     let last_name=this.lastName[0].toUpperCase() + this.lastName.slice(1)
//     //     return `${first_name} ${last_name}'s scores are ${scores}`
//     // }

// }

// let student_1 = new Student("ilia" , "topuria")

// console.log(student_1.fullName())
// console.log(student_1.countApsents())
// // console.log(student_1.addScores())
// console.log(student_1)

// class Point{
//     constructor(x,y){
//         this.x = x;
//         this.y = y
//     }

//     static distance(a,b){
//         let dx = a.x - b.x;
//         let dy = a.y - b.y;
//         return Math.hypot(dx,dy)
//     }

// }

// let point_1 = new Point(3,7)
// let point_2 = new Point(6,11)

// console.log(Point.distance(point_1,point_2))

// class ReverceNum{
//     constructor(numbers){
//         this.numbers = numbers
//     }

//     reverse(){
//         const reversed = this.numbers.toString().split("").reverse().join('')
//         return parseInt(reversed)
//     }
// }

// let number_1 = new ReverceNum(123)

// console.log(number_1.reverse())

// class ReverseStr{
//     constructor(string){
//         this.string = string
//     }

//     reverse(){
//         return this.string.split("").reverse().join('')
//     }
// }

// let str_1 = new ReverseStr("hello")
// console.log(str_1.reverse())

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode.next;
      this.tail = newNode;
    }
  }

  pop() {
    if (this.tail) return "there is nothing to pop";
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  }

  shift() {
    if (!this.head) return "there is nothing to shift";
    let currentHead = this.head;
    currentHead.next = this.head;
    this.length--;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter != index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(val, index) {
    if (index < 0 || index >= this.length) return null;
    let selectedNode = this.get(index);
    if (selectedNode) {
      selectedNode.val = val;
    }
  }

  insert(val, index) {
    let newNode = new Node(val);
    if (index === 0) return this.unshift(val);
    if (index === this.length - 1) return this.push(val);
    if (index < 0 || index >= this.length) return null;
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    temp = newNode.next;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prev = this.get(index - 1);
    let removed = this.get(index);
    prev.next = removed.next;
  }
}
