// function App() {
    
// }

// export default App;

// App.js

// Create a new paragraph element
const paragraph = document.createElement('p');

// // Set the text content of the paragraph
paragraph.textContent = 'Hello, world! This paragraph was created using JavaScript.';

// // Append the paragraph to the body of the document
document.body.appendChild(paragraph);

let dv = document.createElement('div');
dv.className = "button-container";

function createButton(type, value, classes) {
    var button = document.createElement(type); // Create button element
    button.setAttribute("class", classes); // Add classes to the button
    button.setAttribute("value", value); // Set value attribute for input elements
    button.textContent = value; // Set text content for non-input elements
    // document.getElementById("button-container").appendChild(button); // Append button to container
    return button;
}

// Create buttons using the createButton function
dv.appendChild(createButton("a", "Link", "btn btn-primary")); // Anchor element
dv.appendChild(createButton("button", "Button", "btn btn-primary")); // Button element
dv.appendChild(createButton("input", "Input", "btn btn-primary")); // Input type button
dv.appendChild(createButton("input", "Submit", "btn btn-primary")); // Input type submit
dv.appendChild(createButton("input", "Reset", "btn btn-primary")); // Input type reset

document.body.appendChild(dv);