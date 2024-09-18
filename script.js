/* 

psuedoCode

i need to make a 16x16 grid box dynamicly by javascript. how do i do it? 

get the container div by id, 
then append 256 divs inside it. 

so 256 divs need to be there by default and then it should be able to 
change its grids based on what input user gives. 

---whatever number user inputs inside the input form first needs to 
multiplied by itself. and then through a variable it will pass on to 
the function what amount of grid needs to be created. 

but how will i make appear 256 grids? 


 


const container = document.getElementById('container');

const button = document.getElementById('button'); 

let userInput=16; 
let totalGrid=userInput*userInput; 

function createDiv(){
  const div = document.createElement('div');
  container.appendChild(div);
  div.style.flexBasis=`calc(100%/${userInput})`; // Divides containerr evenly 
  div.style.flexGrow= '1';
  div.style.aspectRatio= '1'; // Keeps squares 
  div.style.outline= '1px solid black';
  div.style.boxSizing= 'border-box'; // Include padding and borders in element size 
  div.style.padding= '0'; // Remove extra padding 
 
}

function gridLoop(){
for( let i=0; i<totalGrid;i++){
  createDiv();
}}



button.addEventListener('click',()=>{
  input= document.getElementById('input').value;
  userInput= (input==='')?16:input;
  totalGrid=userInput*userInput; 
  clearGrid();
  gridLoop()


})




*/

const container = document.getElementById('container');



const input = document.getElementById('input');

let userInput=16;

let totalGrid= userInput*userInput;

input.addEventListener('click',()=>{


  let promptInput= prompt('ENTER THE AMOUNT OF GRIDS DESIRED(1-100)');
  userInput=parseInt(promptInput);

  
  if(userInput===''|| userInput<1|| userInput>100){
    alert('please enter a valid number between 1 and 100.');
    return;
  }

  totalGrid= userInput*userInput;
  
  clearGrid();

  createGrid();

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