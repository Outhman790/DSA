function mergeTwoLists(list1, list2) {
  // Create a dummy node to act as the start of the merged list
  let dummy = new ListNode();
  let current = dummy;

  // Traverse both lists and merge them
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If one of the lists is not empty, append it to the merged list
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // The merged list starts at dummy.next
  return dummy.next;
}

// Example usage:
// Define the ListNode class inline (if needed)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Create linked lists manually for testing
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

let mergedList = mergeTwoLists(list1, list2);

// Function to print the merged list (for testing purposes)
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

printList(mergedList); // Output: [1, 1, 2, 3, 4, 4]

// Test case with empty lists
let list3 = null;
let list4 = null;
let mergedList2 = mergeTwoLists(list3, list4);
printList(mergedList2); // Output: []

// Test case with one empty list
let list5 = null;
let list6 = new ListNode(0);
let mergedList3 = mergeTwoLists(list5, list6);
printList(mergedList3); // Output: [0]
