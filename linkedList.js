function Node(value) {
  this.value = value
  this.next = null
}


function LinkedList() {
  this.head = null;
  this.size = 0;
  
  //Adds value to the front of the list
  this.unshift = function(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this;
  };

  //Removes value from front of the list
  this.shift = function() {
    let headNode = this.head;
    if(headNode) {
      this.head = headNode.next;
    } else {
      return null;
    }
    this.size--;
    console.log(this.head.value);
  }

  //Adds value to end of list
  this.push = function(value) {
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    } 
    currentNode.next = new Node(value);
    this.size++;
  }

  //Removes value from end of list
  this.pop = function() {
    let currentNode = this.head;
    while(currentNode.next.next) {
      currentNode = currentNode.next;
    } 
    console.log(currentNode.next);
    currentNode.next = null;  
    this.size--;
  }
  
  //Inspects and returns the items in the list
  this.inspect = function() {
    let outputString = '';
    let currentNode = this.head;
    while(currentNode){
      if(!currentNode.next){
        outputString += currentNode.value
      } else {
      outputString += currentNode.value + ' -> ';
      }
      currentNode = currentNode.next;
    }
    console.log(outputString);
  }
};

const newList = new LinkedList();
newList.unshift(4).unshift(2).unshift(1);
newList.push(5);
newList.pop();
console.log(newList.inspect());
