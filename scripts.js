function createGameBoard(height = 16, width = 16, ) {
    const containerDiv = document.querySelector('.container');
    containerDiv.replaceChildren()
    
    for (i = 0; i < width; i++) {
       let rowDiv = document.createElement('div');
       rowDiv.classList.add('row-div');
       for (j = 0; j < height; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.style.height = `${400/height}px`
            cellDiv.style.width = `${400/width}px`
            rowDiv.appendChild(cellDiv)
       } 
       containerDiv.appendChild(rowDiv);
    }
    addEventListener()
}

function addEventListener(){
    const cells = document.querySelectorAll('.cell')
    Array.from(cells).forEach(function(e) {
        e.addEventListener('mouseover', function() {e.classList.add('hovered') });
    });
}

function changeGridSize(){
    const btnChangeGrid = document.getElementById('btn-change-grid')
    btnChangeGrid.addEventListener('click', function(){
        let height = prompt('How Many Squares Tall?')
        let width = prompt('How Many Squares Wide?')
        createGameBoard(height, width)
    })
}

createGameBoard()
changeGridSize()