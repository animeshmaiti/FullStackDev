// crud + data transformation
let dataArray=[
    {name:'iron man',lead:'tony stark',collection:'200mi'},
    {name:'man of steel',lead:'clark',collection:'210mil'},
    {name:'spider man',lead:'peter parker',collection:'230mil'},
];
const render=(dataSource=dataArray)=>{
    movieListObj=document.getElementById('movieList');
    let html='';
    dataSource.map((obj,index)=>{
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
    dataArray.push(tmpObj);
    render();
    console.log(dataArray);
}
const deleteCard=(index)=>{
    dataArray.splice(index,1);
    render();
}

const search=()=>{
    let searchInput=document.getElementById('searchip').value.toLowerCase();
    
    let result = dataArray.filter((obj)=>{
        let sourceData = Object.values(obj).join(" ");
        return sourceData.includes(searchInput);
    })
    console.log(result);
    render(result);
}