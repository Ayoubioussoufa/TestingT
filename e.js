document.getElementById('colorPicker').addEventListener('click', function() {
  var colorPickerContainer = document.getElementById('colorPickerContainer');
  // Toggle visibility of color picker
  if (colorPickerContainer.style.display === 'none') {
    colorPickerContainer.style.display = 'block';
  } else {
    colorPickerContainer.style.display = 'none';
  }
});

// Add event listeners to color options
var colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    // Change the background color of targeted elements
    // For demonstration, changing the body background color
    document.body.style.backgroundColor = option.style.backgroundColor;
  });
});
