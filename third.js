// Elements from the HTML
const decomposeBtn = document.getElementById("decomposeBtn");
const rewardMessage = document.getElementById("rewardMessage");
const askProductBtn = document.getElementById("askProductBtn");
const productInput = document.getElementById("productInput");
const submitProductBtn = document.getElementById("submitProductBtn");
const reward = document.getElementById("reward");

// Show reward message when user clicks Decompose
decomposeBtn.addEventListener("click", () => {
    decomposeBtn.style.display = "none";  // Hide the Decompose button
    rewardMessage.style.display = "block";  // Show reward message
});

// Ask for product input after reward message
askProductBtn.addEventListener("click", () => {
    rewardMessage.style.display = "none";  // Hide reward message
    productInput.style.display = "block";  // Show product input form
});

// Handle product submission
submitProductBtn.addEventListener("click", () => {
    const productName = document.getElementById("productName").value.trim();
    if (productName) {
        productInput.style.display = "none";  // Hide product input form
        reward.style.display = "block";  // Show reward message
    } else {
        alert("Please enter a product name.");
    }
});
