h1array=document.getElementsByTagName('h1')
let count=0;
const sum =()=>{
    h1array[0].innerHTML= ++count;
    h1array[1].innerHTML=count*count;
    if(count>10){
        h1array[0].style['background-color']='red';
    }
    else
    h1array[0].style['background-color']='blue';
}
const sub =()=>{
    h1array[0].innerHTML= --count;
    h1array[1].innerHTML=count*count;
    if(count>10){
        h1array[0].style['background-color']='red';
    }
    else
    h1array[0].style['background-color']='blue';
}