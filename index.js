class Node{
    constructor(name){
        this.name=name;
        this.next=null;
    }

    getName(node){
        return node.name;
    }
}

class LinkList{
    constructor(node){
        this.head=node;
        this.next=null;
    }

    addNewNodeToHead(node){
        node.next=this.head;
        this.head=node;
    }

    addNewNodeToTail(node){
        let currentNode=this.head;
        while(currentNode.next){
            currentNode=currentNode.next;
        }
        currentNode.next=node;
    }
}

let newLinkList=new LinkList(new Node('sanjay'))
console.log(newLinkList);
newLinkList.addNewNodeToHead(new Node('chanda'))
console.log(newLinkList);
// console.log(this.head.next);
newLinkList.addNewNodeToTail(new Node('Sameer'))
console.log(newLinkList);
