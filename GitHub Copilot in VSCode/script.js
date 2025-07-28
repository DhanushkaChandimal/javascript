// Create a function that removes duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Create a reusable Card component with props for title and content
function Card({ title, content }) {
    const card = document.createElement("div");
    card.className = "card";
    
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
    
    const cardContent = document.createElement("p");
    cardContent.textContent = content;
    
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    
    return card;
}

document.body.appendChild(Card({ title: "Card Title", content: "Card Content" }));

// create array of users
const users = [
    { name: "John Doe", email: "john@example.com", age: 30 },
    { name: "Jane Smith", email: "jane@example.com", age: 25 },
    { name: "Bob Johnson", email: "bob@example.com", age: 40 }
];

// add a search input to filter users
const searchInput = document.createElement("input");
searchInput.placeholder = "Search users...";
searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
    displayUsers(filteredUsers);
});

document.getElementById("search-container").appendChild(searchInput);

// create a function to display users
function displayUsers(users) {
    document.getElementById("user-list").innerHTML = ""; // Clear previous content
    const userList = document.createElement("ul");
    
    users.forEach(user => {
        const userItem = document.createElement("li");
        userItem.textContent = `${user.name} (${user.email}) - Age: ${user.age}`;
        userList.appendChild(userItem);
    });

    document.getElementById("user-list").appendChild(userList);
}

displayUsers(users);

