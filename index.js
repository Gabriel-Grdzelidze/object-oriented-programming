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

//----------------------
//---singlyLinkedList---
//----------------------

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail = newNode.next;
//       this.tail = newNode;
//     }
//   }

//   pop() {
//     if (this.tail) return "there is nothing to pop";
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }

//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//   }

//   shift() {
//     if (!this.head) return "there is nothing to shift";
//     let currentHead = this.head;
//     currentHead.next = this.head;
//     this.length--;
//   }

//   unshift(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let current = this.head;
//     let counter = 0;
//     while (counter != index) {
//       current = current.next;
//       counter++;
//     }

//     return current;
//   }

//   set(val, index) {
//     if (index < 0 || index >= this.length) return null;
//     let selectedNode = this.get(index);
//     if (selectedNode) {
//       selectedNode.val = val;
//     }
//   }

//   insert(val, index) {
//     let newNode = new Node(val);
//     if (index === 0) return this.unshift(val);
//     if (index === this.length - 1) return this.push(val);
//     if (index < 0 || index >= this.length) return null;
//     let prev = this.get(index - 1);
//     let temp = prev.next;
//     prev.next = newNode;
//     temp = newNode.next;
//     this.length++;
//   }

//   remove(index) {
//     if (index < 0 || index >= this.length) return null;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     let prev = this.get(index - 1);
//     let removed = this.get(index);
//     prev.next = removed.next;
//   }
// }

//----------------------
//---DoubleLinkedList---
//----------------------

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoubleLinkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;

//     return newNode;
//   }

//   pop() {
//     if (this.length === 0) return "there is nothing to pop";
//     let poped = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {

//       this.tail = poped.prev;
//       this.tail.next.prev = null;
//       this.tail.next = null;
//     }
//     this.length--;

//     return poped;
//   }

//   shift() {
//     if (this.length === 0) return "there is nothing to shift";
//     let shifted = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = shifted.next;
//       this.head.prev.next = null;
//       this.prev=null
//     }
//     this.length--

//     return shifted
//   }

//   unshift(val){
//     let newNode = new Node(val);
//     if(this.length===1){
//       this.tail=newNode;
//       this.head-newNode
//     }else{
//       this.head.prev=newNode;
//       newNode.next=this.head;
//       this.head-newNode
//     }
//     this.length++

//     return newNode
//   }
// }

// let d_list = new DoubleLinkedList;
// d_list.push('james bond')
// d_list.push('jason born')
// d_list.push('agent_047')
// console.log(d_list);

//----------------------
//------PlayList--------
//----------------------

// class Song {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class PlayList {
//   constructor() {
//     this.tail = null;
//     this.head = null;
//     this.length = 0;
//   }

//   addSongLast(val) {
//     let newSong = new Song(val);
//     if (this.length === 0) {
//       this.head = newSong;
//       this.tail = newSong;
//     } else {
//       this.tail.next = newSong;
//       newSong.prev = this.tail;
//       this.tail = newSong;
//     }
//     this.length++;

//     return newSong;
//   }

//   addSongFirst(val) {
//     let newSong = new Song(val);
//     if (this.length === 0) {
//       this.head = newSong;
//       this.tail = newSong;
//     } else {
//       this.head.prev = newSong;
//       newSong.next = this.head;
//       this.head = newSong;
//     }
//     this.length++;

//     return newSong;
//   }

//   findSongByName(val) {
//     if (this.length === 0)return "there are no songs in your playlist, add them now";

//     let current = this.head;
//     let counter=1
//     while (current) {
//       if (current.val === val) {
//         return "song found: " + val+`, its is number ${counter} in your playlist`;
//       }
//       counter++
//       current = current.next;
//     }
//     return "no songs found with typed name";
//   }

//   findSongByIndex(index) {
//     if (this.length === 0) return "there are no songs in your playlist, add them now";
//     if (this.length <= 0) return "index must be natural number";
//     if (index > this.length) return "there is no songs with typed index";
//     let current = this.head;
//     let counter = 1;
//     while (counter != index) {
//       counter++;
//       current = current.next;
//     }
//     return `number ${index} song in your playlist: `+ current.val;
//   }

//   nextSong(val) {
//     if (this.length === 0) return "There are no songs in your playlist, add them now";

//     let current = this.head;
//     while (current.val !== val) {
//         current = current.next;
//     }

//     if (current === null) return "Song not found in the playlist";

//     return current.next ? current.next.val : "End of playlist";
// }

// prevSong(val) {
//   if (this.length === 0) return "There are no songs in your playlist, add them now";

//   let current = this.head;
//   while (current.val !== val) {
//       current = current.next;
//   }

//   if (current === null) return "Song not found in the playlist";

//   return current.prev ? current.prev.val : "End of playlist";
// }

//   wholePlaylist(){
//     if (this.length === 0) return "There are no songs in your playlist, add them now";
//     let playlistArr=[]
//     let current=this.head
//     while(current){
//       playlistArr.push(current.val)
//       current=current.next
//     }

//     let str=playlistArr.join(' -> ')
//     return str
//   }
//   revercedPlaylist(){
//     if (this.length === 0) return "There are no songs in your playlist, add them now";
//     let playlistArr=[]
//     let current=this.head
//     while(current){
//       playlistArr.push(current.val)
//       current=current.next
//     }

//     let str=playlistArr.reverse().join(' -> ')
//     return str
//   }

//   removeSong(index){
//     if (this.length === 0) return "there are no songs in your playlist, add them now";
//     if (this.length <= 0) return "index must be natural number";
//     if (index > this.length) return "there is no songs with typed index";

//     let current = this.head;
//     let counter = 1;
//     while (counter != index) {
//       counter++;
//       current = current.next;
//     }
//     let removedSong=current;
//     removedSong.prev.next= removedSong.next
//     removedSong.next.prev= removedSong.prev
//     removedSong.prev
//     this.length--

//     return removedSong
//   }
// }

// let my_playList = new PlayList();
// my_playList.addSongLast("till i collapse");
// my_playList.addSongLast("mockinbird");
// my_playList.addSongLast("make it bun dem");
// my_playList.addSongLast("bad boys");

// console.log(my_playList.wholePlaylist());
// console.log(my_playList);

//----------------------
//---BinarySearchTree---
//----------------------

// class Node{
//   constructor(val){
//     this.val=val;
//     this.right=null;
//     this.left=null
//   }
// }

// class BinarysearchTree{
//   constructor(){
//     this.root=null
//   }

//   insert(val){
//     let newNode = new Node(val);
//     if(this.root===null){
//       this.root=newNode
//       return this
//     }
//     let current=this.root
//     while(true){
//       if(val===current.val) return undefined
//       if(val<current.val){
//         if(current.left===null){
//           current.left=newNode
//           return this
//         }
//         current=current.left
//       }else{
//         if(current.right===null){
//           current.right=newNode
//           return this
//         }
//         current=current.right
//       }
//     }
//   }
// }

//----------------------
//------orders-------
//----------------------

// class Node{
//   constructor(val){
//     this.val=val;
//     this.right=null;
//     this.left=null
//   }
// }

// class BinarysearchTree{
//   constructor(){
//     this.root=null
//   }

//   insert(val){
//     let newNode = new Node(val);
//     if(this.root===null){
//       this.root=newNode
//       return this
//     }
//     let current=this.root
//     while(true){
//       if(val===current.val) return undefined
//       if(val<current.val){
//         if(current.left===null){
//           current.left=newNode
//           return this
//         }
//         current=current.left
//       }else{
//         if(current.right===null){
//           current.right=newNode
//           return this
//         }
//         current=current.right
//       }
//     }
//   }

//   DFS_preOrder(){
//     let result=[]
//     function traverse(node){
//       result.push(node.val)
//       if(node.left) traverse(node.left)
//       if(node.right) traverse(node.right)
//     }
//     traverse(this.root)
//     return result
//   }
//   DFS_postOrder(){
//     let result=[]
//     function traverse(node){
//       if(node.left) traverse(node.left)
//       if(node.right) traverse(node.right)
//       result.push(node.val)
//     }
//     traverse(this.root)
//     return result
//   }

//   DFS_inOrder(){
//     let result=[]
//     function traverse(node){
//       if(node.left) traverse(node.left)
//       result.push(node.val)
//       if(node.right) traverse(node.right)
//     }
//     traverse(this.root)
//     return result
//   }
// }

//----------------------
//--------heap---------
//----------------------

// class MaxBinaryHeap {
//   constructor() {
//     this.values = [];
//   }

//   insert(val) {
//     this.values.push(val);
//     this.bubbleUp();
//     return this;
//   }

//   bubbleUp() {
//     let index = this.values.length - 1;
//     const element = this.values[index];
//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       let parent = this.values[parentIndex];
//       if (element <= parent) break;
//       this.values[parentIndex] = element;
//       this.values[index] = parent;
//       index = parentIndex;
//     }
//   }

//   extractMax() {
//     if (this.values.length === 0) return undefined;
//     const max = this.values[0];
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return max;
//   } 
//   sinkDown() {
//     let index = 0;
//     const length = this.values.length;
//     const element = this.values[0];

//     while (true) {
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIndex < length) {
//         leftChild = this.values[leftChildIndex];
//         if (leftChild > element) {
//           swap = leftChildIndex;
//         }
//       }

//       if (rightChildIndex < length) {
//         rightChild = this.values[rightChildIndex];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && rightChild > leftChild)
//         ) {
//           swap = rightChildIndex;
//         }
//       }

//       if (swap === null) break;

//       this.values[index] = this.values[swap];
//       this.values[swap] = element;
//       index = swap;
//     }
//   }   dequeue() {
//     if (this.values.length === 0) return undefined;
//     const max = this.values[0];
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return max;
//   }
// }
