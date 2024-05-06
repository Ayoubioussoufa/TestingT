// Get the password input and toggle button
const passwordInput = document.getElementById('passwordInput');
const passwordToggleBtn = document.getElementById('passwordToggleBtn');

// Add event listener to toggle button
passwordToggleBtn.addEventListener('click', function() {
  // Toggle password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggleBtn.innerHTML = '<i class="bi bi-eye" style="color: white;"></i>';
    } else {
        passwordInput.type = 'password';
        passwordToggleBtn.innerHTML = '<i class="bi bi-eye-slash" style="color: white;"></i>';
    }
});

