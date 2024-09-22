
const container = document.getElementById('container');

const button= document.getElementById('button');

let input = document.getElementById('input');



let userInput=16;

let totalGrid= userInput*userInput;

button.addEventListener('click',()=>{


  let promptInput= input.value;
  userInput=parseInt(promptInput);
  
  if(userInput===''|| userInput<1|| userInput>100){
    alert('please enter a valid number between 1 and 100.');
    return;
  }

  totalGrid= userInput*userInput;

  
  clearGrid();

  createGrid();

 
  input.value='';
})

function createDiv(){
  const div = document.createElement('div');
  container.appendChild(div);
  div.classList.add('gridElement');
  div.style.flexBasis=`calc(100%/${userInput})`; // Divides containerr evenly 
  div.style.flexGrow= '1';
  div.style.aspectRatio= '1'; // Keeps squares 
  div.style.outline= '1px solid black';
  div.style.boxSizing= 'border-box'; // Include padding and borders in element size 
  div.style.padding= '0'; // Remove extra padding 

  div.addEventListener('mouseover',()=>{
    div.style.backgroundColor='black';
  })
 
}

function createGrid() {
  for (let i = 0; i < totalGrid; i++) {
    createDiv();
    
  }

 
}

function clearGrid() {
  container.innerHTML = ''; // Remove any existing divs
  
}





createGrid();