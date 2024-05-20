import './router.js';

document.getElementById('colorPicker').addEventListener('click', function() {
    var colorPickerContainer = document.getElementById('colorPickerContainer');
    if (colorPickerContainer.style.display === 'none') {
      colorPickerContainer.style.display = 'block';
    } else {
      colorPickerContainer.style.display = 'none';
    }
    colorPickerContainer.classList.toggle('show'); // Toggle the 'show' class
  });

  // Add event listeners to color options
  var colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      // Change the background color of targeted elements
      // For demonstration, changing the body background color
      document.documentElement.style.setProperty('--color', option.querySelector('i').style.color);
    });
  });
