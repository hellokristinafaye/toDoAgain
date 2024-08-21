// console.log("Hello There!");

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Execute a function when the user presses a key on the keyboard
inputBox.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }
});

function addTask() {
    if (inputBox.value === "") {
        alert("Enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

