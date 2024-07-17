var container = document.querySelector("#container");
let rows = 50;
let cols = 50;
for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
        var box = document.createElement("div");
        box.classList.add("square");
        container.appendChild(box);
    }
}
container.style.height = `${rows * 10}px`;
container.style.width = `${cols * 10}px`;
document.addEventListener("DOMContentLoaded", function() {
    let isMouseDown = false;

    document.addEventListener('mousedown', function() {
        isMouseDown = true;
    });

    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    const pixelArt = document.getElementById('container');
    pixelArt.addEventListener('mouseover', function(event) {
        if (isMouseDown && event.target.classList.contains('square')) {
            changeColor(event.target);
        }
    });
});

function changeColor(square) {
    square.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
