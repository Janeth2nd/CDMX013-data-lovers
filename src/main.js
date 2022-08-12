import { example} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

<<<<<<< Updated upstream
=======
console.log(example)
data.results.forEach(element =>{
        let html= `
        <section id="pickles">
        <img src=${element.image} class="image">
        <div class="lettersWrap">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img  id="see-through" src= "img/pinRick&M.png" class="pin">

            <div id="myModal" class="modal">
              <!-- Modal content -->
              <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
              </div>

            </div>

        </div>
        </section>
        `;
        section.insertAdjacentHTML('beforebegin', html);
        
    
})
    // Get the <span> element that closes the modal
   // var modal=document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    let window=document.getElementsById("see-through")
    window.addEventListener("onmouseover", mouseFunction)

    function mouseFunction() {
     
    modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
>>>>>>> Stashed changes




