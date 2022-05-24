let body = document.body;

for(let i=0; i<16; i++){
    let col = document.createElement('div')
    col.classList.add("col")
    for(let x=0; x<3; x++){
        let row = document.createElement('div')
        row.classList.add('row');
        col.appendChild(row);
    }
    body.appendChild(col)
}

