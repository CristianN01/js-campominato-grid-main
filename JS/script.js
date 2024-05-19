const gridContainer = document.querySelector('section.container')
const playButton = document.querySelector('button.play')



// ? <article class="cell"></article>

playButton.addEventListener('click', function(){
    document.querySelector('section.container').innerHTML = "";
    
    for (let index = 0; index < 64; index++) {

    const cellElement = document.createElement('article');
    cellElement.classList.add('cell')
    cellElement.append(index + 1)
    cellElement.addEventListener('click', function(){
        cellElement.classList.toggle('active')
    });


    gridContainer.appendChild(cellElement)
}
});


    
