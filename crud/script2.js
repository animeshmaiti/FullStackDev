// crud + data transformation
let dataArray=[
    {name:'iron man',lead:'tony stark',collection:'200mi'},
    {name:'man of steel',lead:'clark',collection:'210mil'},
    {name:'spider man',lead:'peter parker',collection:'230mil'},
];

// render the data base 
const render=()=>{
    movieListObj=document.getElementById('movieList');
    let html='';
    dataArray.map((obj,index)=>{
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

// add movie data in db
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

//delete from db
const deleteCard=(index)=>{
    dataArray.splice(index,1);
    render();
}


// render search result
const renderResult=(result)=>{
    resultObj=document.getElementById('searchResult');
    let html='';
    result.map((obj,index)=>{
        html+=`<div class="card">
        <div class="name">${obj.name}</div>
        <div class="lead">${obj.lead}</div>
        <div class="collection">${obj.collection}</div>
        <button onclick='deleteHistory(${index})'>Delete</button>
    </div>`
    })
    resultObj.innerHTML+=html;
}
// delete from search
const deleteHistory=(index)=>{
    searchObj.splice(index,1);
    renderResult();
}
// search movie func
let searchObj=[];
const searchMovie=()=>{
    inputVal=document.getElementById('search').value;
    // console.log(inputVal);
    indVal=0;
    const result=dataArray.filter((obj)=>{
        if(inputVal==obj.name){
            return true;
        }
    })
    searchObj=result;
    renderResult(result);
}
