class Node{
    next;
    data;
    constructor(data)
    {
        this.data=data;
    }
}
class QueueList
{
    rootNode=null;
    enqueue(element)
    {
        element=new Node(element);
        if(this.rootNode==null)
        {
            this.rootNode=element;
        }
        else{
            var temp=this.rootNode;
            while(temp.next!=null)
            {
                temp=temp.next;
            }
            temp.next=element;
        }

    }
    dequeue()
    {
        if(this.rootNode==null)
            {
                console.log("Dequeue is impossible")
            }
            else{
                this.rootNode=this.rootNode.next;
                
            }
    }
    display()
    {
        var temp=this.rootNode;
        if(temp==null)
        {
            console.log("Empty");
        }
        else{
            while(temp!=null)
            {
                console.log(temp.data);
                temp=temp.next;
            }
        }

    }
}
var queue=new QueueList()
queue.enqueue(56);
queue.enqueue(67);
queue.dequeue();
queue.enqueue(678);
queue.dequeue();
queue.enqueue(43);
queue.display();