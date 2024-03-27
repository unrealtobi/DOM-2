// Function to generate a random hexadecimal color code
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the color of the box
function changeColor() {
    let colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = getRandomColor();
}

// Add event listener to the button
document.getElementById('changeColorBtn').addEventListener('click', changeColor);
