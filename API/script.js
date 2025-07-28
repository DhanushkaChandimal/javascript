const singleDogButton = document.getElementById("single-dog-button");
const multipleDogButton = document.getElementById("multiple-dog-button");
const singleDogContainer = document.getElementById("single-dog-container");
const multipleDogContainer = document.getElementById("multiple-dog-container");

async function getSingleDogImage(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    singleDogContainer.innerHTML = "";
    const dogImage = document.createElement("img");
    dogImage.src = data.message;
    singleDogContainer.appendChild(dogImage);
}

async function getMultipleDogImage(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const data = await response.json();
    multipleDogContainer.innerHTML = "";
    data.message.forEach(imageUrl => {
        const dogImage = document.createElement("img");
        dogImage.src = imageUrl;
        multipleDogContainer.appendChild(dogImage);
    });
}

singleDogButton.addEventListener("click", getSingleDogImage);
multipleDogButton.addEventListener("click", getMultipleDogImage);