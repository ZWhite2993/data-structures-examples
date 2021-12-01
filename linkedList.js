function Node(value) {
  this.value = value
  this.next = null
}


function LinkedList() {
  this.head = null;
  this.add = function(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  };
  
  this.size = 0;
  this.inspect = function() {
    let outputString = '';
    let currentNode = this.head;
    while(currentNode){
      outputString += currentNode.value + ' ';
      currentNode = currentNode.next;
    }
    console.log(outputString);
  }
};

const newList = new LinkedList();
newList.add(1);
newList.add(2);
newList.add(3);
newList.add(4);
newList.add(5);
newList.add(6);
console.log(newList.inspect());
