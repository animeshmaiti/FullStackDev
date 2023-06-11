// crud + data transformation
let datArray=[
    {name:'iron man',lead:'tony stark',collection:'200mi'},
    {name:'man of steel',lead:'clark',collection:'210mil'},
    {name:'spider man',lead:'peter parker',collection:'230mil'},
];
const render=()=>{
    movieListObj=document.getElementById('movieList');
    let html='';
    datArray.map((obj,index)=>{
        html+=`<div class="card">
        <div class="name">${obj.name}</div>
        <div class="lead">${obj.lead}</div>
        <div class="collection">${obj.collection}</div>
        <button onclick='deleteCard(${index})'>Delete</button>
    </div>`
    })
    movieListObj.innerHTML=html;
}
render();
const addMovie=()=>{
    nameObj=document.getElementById('name');
    leadObj=document.getElementById('lead');
    collectionObj=document.getElementById('collection');
    tmpObj={
        name:nameObj.value,
        lead:leadObj.value,
        collection:collectionObj.value,
    }
    datArray.push(tmpObj);
    render();
    console.log(datArray);
}
const deleteCard=(index)=>{
    datArray.splice(index,1);
    render();
}