const boxContainer = document.getElementById('boxContainer');
const btnCreateBox = document.getElementById('btnCreateBox');
const btnRemoveBoxes = document.getElementById('btnRemoveBoxes');

function getRandomColor(){
    const maxVal = 0xFFFFFF; // Represents #FFFFFF
    let randomNumber = Math.floor(Math.random() * (maxVal + 1)); // +1 to include 0xFFFFFF
    let hexColor = randomNumber.toString(16);
    hexColor = hexColor.padStart(6, '0'); // Pad with leading zeros if needed
    return '#' + hexColor.toUpperCase();
}

function createBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = document.querySelectorAll(".box").length + 1;
    box.style.backgroundColor = getRandomColor();
    boxContainer.appendChild(box);
}

function removeAllBoxes() {
    boxContainer.innerHTML = "";
}

btnCreateBox.addEventListener("click", createBox);
btnRemoveBoxes.addEventListener("click", removeAllBoxes);
