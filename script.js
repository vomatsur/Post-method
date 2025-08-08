let div = document.querySelector('.box')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let inp3 = document.querySelector('.inp3')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let inp4 = document.querySelector('.inp4')

fetch('https://688de2e3a459d5566b137125.mockapi.io/Ali/Aziz')
 .then(reponce => reponce.json())
 .then((data)=>{
     console.log(data);
 
     data.map((item)=>{
         div.innerHTML +=`
         
     <div>
        <img src=${item.url}  alt="">
           <h1>${item.id}</h1>
        <div class="card">
        
          <b>${item.name}</b>
         <h2> ${item.parol}</h2>
        </div>
     </div>
         
         `
     })
     
 })

btn1.addEventListener('click',()=>{
    
fetch('https://688de2e3a459d5566b137125.mockapi.io/Ali/Aziz',{
    method: "POST",
    headers:{
     "Content-Type":"application/json"
    },
    body:JSON.stringify({ name:inp1.value , parol:inp2.value, url:inp4.value})
 
 })

 .then(reponce => reponce.json())
 .then((data)=>{
     console.log(data);
 
 
 
     data.map((item)=>{
         div.innerHTML +=`
         
     <div>
         <h1>${item.id}</h1>
         <h2> ${item.parol}</h2>
        <b>${item.name}</b>
     </div>
         
         `
     })
     
 })

})


btn2.addEventListener('click',()=>{
    fetch(`https://688de2e3a459d5566b137125.mockapi.io/Ali/Aziz/${inp3.value}`,{
        method:"DELETE",
       
    })

})