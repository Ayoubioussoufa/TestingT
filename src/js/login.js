// Get the password input and toggle button
const passwordInput = document.getElementsByClassName('passwordInput');
const passwordToggleBtn = document.getElementsByClassName('passwordToggleBtn');

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
