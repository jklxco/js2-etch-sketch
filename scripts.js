function createGameBoard() {
    const containerDiv = document.querySelector('.container');
    
    for (i = 0; i < 16; i++) {
       let rowDiv = document.createElement('div');
       rowDiv.classList.add('row-div');
       for (j = 0; j < 16; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            rowDiv.appendChild(cellDiv)
       } 
       containerDiv.appendChild(rowDiv);
    }
}

function addEventListener(){
    const cells = document.querySelectorAll('.cell')
    Array.from(cells).forEach(function(e) {
        e.addEventListener('mouseover', function() {e.classList.add('hovered') });
    });
}

createGameBoard()
addEventListener()