import { filterGender } from './data.js'; 
import { filterSpecies } from './data.js';
import { filterStatus } from './data.js';
import { filterType } from './data.js';
import { filterOrigin } from './data.js';
import { filterLocation } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
console.log(filterSpecies);
console.log(data.results[0]);

const section = document.getElementById('container'); 

data.results.forEach(element =>{
        let html= `
        <section class="pickles class="flex-boxx"">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">
           
        </div>
        </section>
        `;
       section.innerHTML+=html
})
//Button scrolls to the top of the document
let mybutton = document.getElementById("button");
mybutton.addEventListener("click",topFunction)
   function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

let dataCharacters= data.results


//GENDER --opciones
const busqueda = dataCharacters.reduce((dato, filtro)=>{
  dato[filtro.species] = ++dato[filtro.species] || 0;
  return dato; 
}) 

console.log(busqueda);
//Filtrado género
const gender = document.getElementById("gender");
gender.addEventListener("change", (e)=>{
     console.log(filterGender(e.target.value, dataCharacters));
  
      let typeGender = filterGender(e.target.value, dataCharacters);
      section.innerHTML="";
      const content=document.getElementById("content")
      content.innerHTML="";
      console.log(typeGender);
      typeGender.forEach(element =>{
       
        let ejercicio = `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       content.innerHTML+=ejercicio;
       
      })
     
})
// filter Species
const species= document.getElementById("species");
species.addEventListener("change", (e)=>{
     console.log(filterSpecies(e.target.value, dataCharacters));
  
      let typeSpecies = filterSpecies(e.target.value, dataCharacters);
      section.innerHTML="";
      const content=document.getElementById("content")
      content.innerHTML="";
      console.log(typeSpecies);
      typeSpecies.forEach(element =>{
       
        let ejercicio = `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       content.innerHTML+=ejercicio;
      })
    })

    // filter Status
const status= document.getElementById("status");
status.addEventListener("change", (e)=>{
     console.log(filterStatus(e.target.value, dataCharacters));
  
      let typeStatus = filterStatus(e.target.value, dataCharacters);
      section.innerHTML="";
      const content=document.getElementById("content")
      content.innerHTML="";
      console.log(typeStatus);
      typeStatus.forEach(element =>{
       
        let ejercicio = `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       content.innerHTML+=ejercicio;
      })
    })

    // filter Type
const type= document.getElementById("type");
type.addEventListener("change", (e)=>{
     console.log(filterType(e.target.value, dataCharacters));
  
      let type = filterType(e.target.value, dataCharacters);
      section.innerHTML="";
      const content=document.getElementById("content")
      content.innerHTML="";
      console.log(type);
      type.forEach(element =>{
       
        let ejercicio = `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       content.innerHTML+=ejercicio;
      })
    })

    // filter Origin
const origin= document.getElementById("origin");
origin.addEventListener("change", (e)=>{
     console.log(filterOrigin(e.target.value, dataCharacters));
  
      let typeOrigin = filterOrigin(e.target.value, dataCharacters);
      section.innerHTML="";
      const content=document.getElementById("content")
      content.innerHTML="";
      console.log(typeOrigin);
      typeOrigin.forEach(element =>{
       
        let ejercicio = `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       content.innerHTML+=ejercicio;
      })
    })

    // filter Location
const location= document.getElementById("location");
location.addEventListener("change", (e)=>{
     console.log(filterLocation(e.target.value, dataCharacters));
  
      let typeLocation = filterLocation(e.target.value, dataCharacters);
      section.innerHTML="";
      const content=document.getElementById("content")
      content.innerHTML="";
      console.log(typeLocation);
      typeLocation.forEach(element =>{
       
        let ejercicio = `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       content.innerHTML+=ejercicio;
      })
    })