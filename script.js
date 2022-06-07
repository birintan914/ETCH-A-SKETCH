let body = document.body;
let currShade = 0.1;

createGrid(16)

// Reset Menu:
const openMenuButtons = document.querySelectorAll('[data-open-Menu]')
const closeMenuButtons = document.querySelectorAll('[data-close-Menu]')
const overlay = document.getElementById('overlay')

openMenuButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        const modal = document.querySelector(button.dataset.openMenu)
        openModal(modal);
    })
})

closeMenuButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})


function openModal(modal){
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const gridSize = document.getElementById('gridSize')
const gridStyle = document.querySelectorAll('.radio-input')
const submit = document.getElementById('menu-submit')

submit.addEventListener('click', () => {
    let msg = "";
    let styleSelected = false;
    let selectedStyle;
    gridStyle.forEach(style => {
        // console.log(style.value, style.checked)
        if(style.checked==true){
            styleSelected = true;
            selectedStyle = style.value;
        }
    })
    if(styleSelected==false){
        msg += "Please select a style."
    }
    if((gridSize.value < 0) || (gridSize.value > 100)){
        msg += "\nPlease choose a number between 0 and 100."
    }
    if((gridSize.value === '')){
        msg += "\nPlease enter a grid size"
    }
    if(msg==''){
        const modal = submit.closest('.modal')
        closeModal(modal)
        deleteGrid();
        console.log(selectedStyle)
        createGrid(Number(gridSize.value), selectedStyle)
    }
    else {
        alert(msg)
    }
})

//Reset Grid Functions:
function deleteGrid(){
    let rows = body.querySelectorAll(".row");
    for(let i=0; i<rows.length; i++){
        while(rows[i].firstChild){
            rows[i].removeChild(rows[i].lastChild)
        }
    }
    while(rows.firstChild){
        rows[0].parentNode.removeChild(rows.lastChild)
    }
    rows.forEach(row => {
        body.removeChild(row)
    })
}

function createGrid(gridSize, gridStyle){
    for(let i=0; i<gridSize; i++){
        let row = document.createElement('div')
        row.classList.add("row")
        for(let x=0; x<gridSize; x++){
            let box = document.createElement('div')
            box.classList.add("box")
            row.appendChild(box)
        }
        body.appendChild(row)
    }
    let boxes = document.querySelectorAll('.box')

    boxes.forEach(box => box.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'black';
    }))

    if(gridStyle=='shades'){
        shadesStyle();
    }
    else if(gridStyle=='rainbow'){
        rainbowStyle();
    }
}

function rgba(r, g, b, a){
    return "rgb("+r+","+g+","+b+","+a+")";
  }

function rainbowStyle(){
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let boxes = document.querySelectorAll('.box')

    boxes.forEach(box => box.addEventListener('mouseover', function(e){
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = rgba(red,green,blue,1)
    }))
}

function shadesStyle(){
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = rgba(1,1,1,currShade)
        currShade +=0.1;
        console.log(currShade)
        if(currShade>1){
            currShade = 0.1;
        }
    }))
}


// Main:
