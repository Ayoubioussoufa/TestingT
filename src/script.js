// // Get the icon element
// var icon = document.getElementById("toggleIcon");

// // Add click event listener to toggle colors
// icon.addEventListener("click", function() {
//     // Toggle background color and text color
//     if (document.body.style.backgroundColor === "black") {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     } else {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//     }
// });

// Get the icon element and color picker input
var icon = document.getElementById("toggleIcon");
var colorPicker = document.getElementById("colorPicker");
var colorPickerText = document.getElementById("colorPickerText");
var primaryButtons = document.querySelectorAll('.btn-primary');
// var button = document.getElementsByClassName("btn-primary");
// var button = document.getElementById("myButton");

// Add click event listener to toggle colors
icon.addEventListener("click", function() {
    // Toggle background color and text color
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});

// Add change event listener to color picker
colorPicker.addEventListener("change", function() {
    // Update background color to the selected color
    console.log("Before color:", document.body.style.backgroundColor);
    document.body.style.backgroundColor = colorPicker.value;
    console.log("After color:", document.body.style.backgroundColor);

});

colorPickerText.addEventListener("change", function() {
    console.log("Selected color:", colorPickerText.value);
    // var bodyTextColor = window.getComputedStyle(document.body).color;
    // console.log("Before color:", bodyTextColor);

    // Update text color of the body to the selected color
    document.body.style.color = colorPickerText.value;
    
    // Log the updated text color
    console.log("After color:", document.body.style.color);
});

// Get all buttons with the class "btn-primary"
var primaryButtons = document.querySelectorAll('.btn-primary');

// Add click event listener to each button
primaryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Toggle the custom class to change colors
        if (button.classList.contains("green-button")) {
            button.classList.remove("green-button"); // Remove custom class
        } else {
            button.classList.add("green-button"); // Add custom class
        }
    });
});
