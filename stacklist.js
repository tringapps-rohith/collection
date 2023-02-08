class Node{
    data;
    next;
    constructor(data)
    {
        this.data=data;
    }
}
class Stack
{
        rootNode=null;
        push(element)
        {
            element=new Node(element)
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
        pop()
        {
             
             if(this.rootNode==null)
             {
                console.log("Pop is not possible");
             }
             else{
                var temp=this.rootNode,temp1;
                while(temp.next!=null)
                {
                    temp1=temp;
                    temp=temp.next;     
                }
                temp1.next=null;  
             }
        }
        display()
        {
            var temp=this.rootNode;
            if(temp==null)
            {
                console.log("No elements");
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
var stack=new Stack()
stack.push(45);
stack.push(456);
stack.push(53);
stack.push(21);
stack.pop();
stack.pop();
stack.push(341);
stack.push(2165);
stack.pop();
stack.push(2123);
stack.push(21221);
stack.pop();
stack.display();
