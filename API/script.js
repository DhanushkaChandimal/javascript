// Get the buttons and containers from the HTML
const singleDogButton = document.getElementById("single-dog-button");
const multipleDogButton = document.getElementById("multiple-dog-button");
const singleDogContainer = document.getElementById("single-dog-container");
const multipleDogContainer = document.getElementById("multiple-dog-container");

// Make updates easy for screen readers
singleDogContainer.setAttribute("aria-live", "polite");
multipleDogContainer.setAttribute("aria-live", "polite");

// This function gets dog images from the API and shows them on the page
async function fetchDogImages(url, container, count = 1) {
    // Show a loading message
    container.innerHTML = "<p>Loading...</p>";
    try {
        // Get data from the API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not connect to the dog API");
        }
        const data = await response.json();

        // Make sure we always have an array of images
        let images;
        if (Array.isArray(data.message)) {
            images = data.message;
        } else {
            images = [data.message];
        }

        // Show the images on the page
        let html = "";
        for (let i = 0; i < images.length; i++) {
            html += `<img src="${images[i]}" alt="A cute dog" loading="lazy" style="width:200px;margin:8px;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);" />`;
        }
        container.innerHTML = html;
    } catch (error) {
        // Show an error message if something goes wrong
        container.innerHTML = `<p style="color:red;">Sorry, could not load dog image${count > 1 ? "s" : ""}.<br>${error.message}</p>`;
    }
}

// When the single dog button is clicked, show one dog image
singleDogButton.addEventListener("click", function() {
    fetchDogImages("https://dog.ceo/api/breeds/image/random", singleDogContainer, 1);
});

// When the multiple dog button is clicked, show three dog images
multipleDogButton.addEventListener("click", function() {
    fetchDogImages("https://dog.ceo/api/breeds/image/random/3", multipleDogContainer, 3);
});