let data=[2,4,6,8,4,5];
let result=data.map((ele,index,arr)=>{
    return ele*ele;
})
console.log(result);
data=[
    {name:'Priya',age:23},
    {name:'Ranjit',age:23},
    {name:'Krishna',age:23},
    {name:'Deepak',age:23},
]
names=data.map((obj)=>obj.name.toUpperCase());
console.log(names);
data=[
    {name:'Priya',age:14},
    {name:'Ranjit',age:30},
    {name:'Krishna',age:15},
    {name:'Deepak',age:20},
]
result = data.map((obj)=>{
    if(obj.age>=18){
        obj['status']='Major';
    }
    else{
        obj['status']='Minor';
    }
    return obj
})

console.log(result);
result = data.filter((obj)=>{
    return obj.age>=18;
})
console.log(result);

result = data.filter((obj)=>{
    return obj.age>=18;
}).map((obj)=>obj.age)//chain map
console.log(result);