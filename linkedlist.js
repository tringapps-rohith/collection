class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    let temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    temp.nextNode = new Node(value);
                }
            }
            
        addByIndex(value,index){
            let n=new Node(value,index);
            if(this.rootNode==null){
                this.rootNode=n;
            }
            else if(index==1){ 
                n.nextNode=this.rootNode;    
                this.rootNode=n;              
                        
            }
            else{
                let temp=this.rootNode;
                let p=this.rootNode;
                for(let i=1;i<index;i++)
                {
                    temp=p;
                    p=p.nextNode;
                }
                temp.nextNode = n;
                n.nextNode=p;

            }
        }
        removeElement(index){
               if(this.rootNode==null)
               {
                console.log("Elements are empty");
               }
               else{
                let temp=this.rootNode;
                let p=this.rootNode;
                for(let i=1;i<index;i++)
                {
                    temp=p;
                    p=p.nextNode;
                }
                temp.nextNode=p.nextNode;
                p=null;
               }
             }  
        printElements()
        {
            let temp = this.rootNode;
            if(temp == null){
                console.log("Is empty!")
            }else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
            }
            }
        }
}
let list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.addByIndex(5,3);
list.addByIndex(6,3);
list.removeElement(4);
list.addByIndex(16,1);
list.addByIndex(33,1);
list.removeElement(7)
list.printElements();
