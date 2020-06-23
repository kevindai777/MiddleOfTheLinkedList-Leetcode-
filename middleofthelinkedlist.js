//Objective is to find the middle node of a linked list and return it as a list.
//If list has an even number of nodes, return the right middle node.

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let l1 = new Node(2)
l1.next = new Node(3)
l1.next.next = new Node(4)
l1.next.next.next = new Node(5)
l1.next.next.next.next = new Node(6)
l1.next.next.next.next.next = new Node(7)
l1.next.next.next.next.next.next = new Node(8)


//O(n) solution that iterates over the list with two pointers - one fast and one slow.
//The fast pointer will iterate over the list twice as fast as the slow one, so once the fast
//pointer finishes, the slow pointer will return the middle of the list.

let slow = l1
let fast = l1 

//Here we don't have to check slow's boundaries since it will never reach the end.
//Instead, we check whether fast exists AND whether fast.next exists. If fast.next 
//does not exist, we cannot do fast.next.next

while (fast !== null && fast.next !== null) {
    slow = slow.next 
    fast = fast.next.next
}

return slow
