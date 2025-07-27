let number = 1;

function createBox() {
    const container = document.getElementById('container');
    const box = document.createElement('div');
    box.className = 'box';
    const innerText = document.createElement('p');
    innerText.textContent = number;
    box.appendChild(innerText);

    const maxVal = 0xFFFFFF; // Represents #FFFFFF
    let randomNumber = Math.floor(Math.random() * (maxVal + 1)); // +1 to include 0xFFFFFF
    let hexColor = randomNumber.toString(16);
    hexColor = hexColor.padStart(6, '0'); // Pad with leading zeros if needed
    box.style.backgroundColor = '#' + hexColor.toUpperCase();

    container.appendChild(box);
    number++;
}

function removeAllBoxes() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    number = 1;
}


