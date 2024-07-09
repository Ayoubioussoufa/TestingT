// Get the password input and toggle button
const passwordInput = document.getElementsByClassName('passwordInput');
const passwordToggleBtn = document.getElementsByClassName('passwordToggleBtn');
const passwordSimilar1 = document.getElementById("passW1");
const passwordSimilar2 = document.getElementById("passW2");

// Add event listener to toggle button
for (let i = 0; i < passwordToggleBtn.length; i++) {
    passwordToggleBtn[i].addEventListener('click', function() {
    console.log('Toggle button clicked');
    // Toggle password visibility
    if (passwordInput[i].type === 'password') {
        passwordInput[i].type = 'text';
        passwordToggleBtn[i].innerHTML = '<i class="bi bi-eye" style="color: white;"></i>';
    } else {
        passwordInput[i].type = 'password';
        passwordToggleBtn[i].innerHTML = '<i class="bi bi-eye-slash" style="color: white;"></i>';
    }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signUpForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default signUp submission
        if (passwordSimilar1.value != passwordSimilar2.value)
        {
            alert('Password does not meet the requirements.');
            return; // Stop further execution
        }
        const formData = new FormData(this);

        const username = formData.get('loginID');
        const password = formData.get('password');
        console.log('Username:', username);
        console.log('Password:', password);

        // Send the form data using Fetch API
        // fetch('/submit', { // Specify the server endpoint directly
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json()) // Parse JSON response
        // .then(data => {
        //     // Handle the response data
        //     document.getElementById('response').textContent = JSON.stringify(data);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    }); // waiting for the backend how we will treat this !!! 
});