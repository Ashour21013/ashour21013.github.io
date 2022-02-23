
const numbefCard = 16
let opencards = []
let compareCards = []


for (let index = 1; index < 9; index++) {
    opencards.push(index)
    
}
for (let index = 1; index < 9; index++) {
    opencards.push(index)
    
}
opencards.sort(function(a, b) {
    return a - b;
  });



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  
  shuffle(opencards);
  

console.log(opencards)





// Karten werte zuweisen
for (let index = 0; index < 16; index++){
   const b = document.querySelector("#front"+index)
   b.innerHTML = opencards[index];
   b.type = opencards[index]
   console.log(b.type)
   //const a = document.querySelector("#flip"+index)
    
   //a.dataset.framework = opencards[index];
   
}


const karten = document.querySelectorAll(".flip-container");

let geflipt = false;
let ersteK;
let zweiteK;

function flipkarte() {
  this.classList.toggle("flip");

  if(!geflipt){
    geflipt = true;
    ersteK = this;

  }
  else{
    geflipt = false;
    zweiteK = this;

    // überprüfen ob die karten falsch sind
  if(ersteK.querySelectorAll(".front") === zweiteK.querySelectorAll(".front")){
    ersteK.removeEventListner('click', flipkarte)
    zweiteK.removeEventListener('click', flipkarte)
    }
    
    else{

      setTimeout(() => {

        ersteK.classList.remove("flip")
        zweiteK.classList.remove("flip")
      },1500)
      
    }
    

  }
}

karten.forEach(karten => karten.addEventListener("click", flipkarte))

