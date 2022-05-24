let body = document.body;

for(let i=0; i<16; i++){
    let row = document.createElement('div')
    row.classList.add("row")
    for(let x=0; x<16; x++){
        let box = document.createElement('div')
        box.classList.add("box")
        row.appendChild(box)
    }
    body.appendChild(row)
}



let boxes = document.querySelectorAll('.box')
// boxes.forEach(box => box.addEventListener('mouseover', function(event){
//     console.log(event.target)
// })

// );

boxes.forEach(box => box.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'white';
}))