
// ele={
//     name:'h1',
//     innerText:'welcome',
//     style:{color:'blue',width:'100px'}
// }
// console.log(ele);
// console.log(ele.style.color);
// ele.style.color='red'
// console.log(ele.style);
// add a new property in style object like height
// ele.style['height']='300px';
// console.log(ele.style);
// ele2=document.getElementsByTagName('h1');
ele = document.getElementsByTagName('h1')
ele[0].innerHTML='go away'
ele[0].style.color='blue'
ele[0].style['background-color']='yellow'
ele[0].style.width='unset'
ele[0].style.height='unset'
ele[0].style['margin']='20px'
ele[0].style['text-align']='center'