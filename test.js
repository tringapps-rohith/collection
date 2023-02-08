let arr1=[1,45,78,65,489,2];
let arr2=[4,5,6,7,88,77];
let conres=arr1.concat(arr2);
console.log("Concatenation is..."+conres);
function User (name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User('Rohith', 21);
console.log("Constructor is...");
console.log(user1);
let fruits = ["Banana", "Orange", "Apple", "Mango",2,8,7];
fruits.copyWithin(2,0);
console.log("Copywithin..."+fruits);
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log("Entries... ");
for-of(let i=0;i<array1.length;i++)
{
    console.log(iterator1.next().value);
}
const everymethod=[3,4,5,6,2,7,6];
let x;
function isprime(x)
{
    let count=0;
    for(let i=1;i<=x;i++)
    {
        if(x%i==0)
        {
            count+=1;
        }
    }
    if(count==2)
    {
        return true;
    }
}
let res=everymethod.every(value => isprime(value));
console.log("Every method returns "+res);
res=everymethod.some(value => isprime(value));
console.log("Some method returns "+res);
res = everymethod.filter(value=>isprime(value));
console.log("Filter method .. "+res);
res=everymethod.find(isprime);
//returns the first true element
console.log("Find method... "+res);
res=everymethod.fill(14,0,2);
console.log("Fill method... "+res);
res=everymethod.findIndex(value=>isprime(value));
console.log("Find index... "+res);
console.log("Foreach method...")
res=everymethod.forEach(function(value)
{
   console.log(value*2);
})
everymethod.push(76);
console.log("Push 76 at last.. "+everymethod);
everymethod.pop();
console.log("Pop 76 at last... "+everymethod);
everymethod.unshift(90);
console.log("Unshift method... "+everymethod);
everymethod.shift();
console.log("Shift method... "+everymethod);
res=Array.isArray([4]);
console.log("isArray method... "+res);
res=everymethod.join("+1+");
console.log("Join method ... "+res);
console.log("Key method... "+Object.keys(everymethod));
console.log("Length... "+everymethod.length);
res=everymethod.map(value =>isprime(value));
console.log("Map method... "+res);
res=everymethod.map(value =>value*12);
console.log("Map method... "+res);
res=everymethod.reduce((a,b)=>a/b);
console.log("Reduce method... "+res);
res=everymethod.reduceRight((a,b)=>a/b);
console.log("Reduce right method... "+res);
res=everymethod.reverse();
console.log("Reverse method... "+res);
res=everymethod.sort(function(a,b){return a-b;})
console.log("Sorted in ascending order... "+res);
console.log(everymethod)
res=everymethod.splice(3,2,45,67,65);
console.log("splice method... "+everymethod);
res=everymethod.slice(3,1,45,67,65);
console.log("slice method... "+everymethod);
res=everymethod.toString();
console.log("To string... "+res);
res=everymethod.lastIndexOf(14);
console.log("Last index of "+res);
User.prototype.college="Mepco";
user1 = new User("Rohith", "20", "Mepco");
console.log("Prototype ... "+user1.college);
res=15.63
console.log("Value of... "+ res.valueOf());
console.log("From method... "+Array.from('Rohith Tringapps'));//create a array from string
console.log("Index of method... "+everymethod.indexOf(14));
console.log("Includes method... "+everymethod.includes(141));
