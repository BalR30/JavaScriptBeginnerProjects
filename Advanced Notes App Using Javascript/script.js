/*
    Author: BR
    Date: 03-October-2024
    Project: Notes App using JavaScript
*/

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to show notes from local storage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Function to update local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function for note box creation after click
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);
    img.src = "delete.png";
    img.alt = "Delete Note"; // Accessibility improvement
    inputBox.appendChild(img); // Append img to inputBox
    notesContainer.appendChild(inputBox); // Append inputBox to notesContainer

    // Update local storage when a new note is added
    updateStorage();
});

// Event listener for deleting notes and updating local storage
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        e.target.onkeyup = function() {
            updateStorage();
        };
    }
});

// Prevent default Enter key behavior in editable paragraphs
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

