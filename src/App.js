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

/*
// Function to fetch JSON data
function fetchJSONData(language) {
    // Define the path to your JSON file
    var jsonFilePath = './path/to/your/data.json';

    // Fetch the JSON file asynchronously
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // Access the content for the user's selected language
            var navContent = data.nav[language];
            var buttonsContent = data.buttons[language];

            // Update the navigation links with the fetched content
            document.getElementById('homeLink').textContent = navContent.home;
            document.getElementById('aboutLink').textContent = navContent.about;
            document.getElementById('contactLink').textContent = navContent.contact;
            document.getElementById('gameLink').textContent = navContent.game;
            document.getElementById('profileLink').textContent = navContent.profile;

            // Update the buttons with the fetched content
            document.getElementById('button1').textContent = buttonsContent.button1;
            document.getElementById('button2').textContent = buttonsContent.button2;
            document.getElementById('button3').textContent = buttonsContent.button3;
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Function to determine user's language preference
function determineLanguage() {
    // You can implement your logic to detect the user's language preference here
    // For example, you can use browser settings, IP geolocation, or user selection
    var userLanguage = 'en'; // Default to English if language detection fails

    // Call fetchJSONData function with the user's language preference
    fetchJSONData(userLanguage);
}

// Call determineLanguage function to fetch data based on user's language preference
determineLanguage();

 */ // akhdma ktiiira awlidi, render all the html page to this