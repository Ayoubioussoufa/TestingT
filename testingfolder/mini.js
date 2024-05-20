import state from './state.js';
import './router.js';


const routes = {
    '#home': './html/home.html',
    '#about': './html/about.html',
    '#contact': './html/contact.html',
    '#login': './html/login.html',
    '#loginbefore': './html/loginbefore.html',
    '#data': './html/data.html',
    '#tournament': './html/tournament.html',
    '#leaderboard': './html/leaderboard.html',
    '#gameplay': './html/gameplay.html',
    '#playerprofile': './html/playerprofile.html',
};

function loadView(view) {
    fetch(view)
        .then(response => response.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
            if (view === './html/data.html') {
                loadData();
            }
        });
}

function navigate() {
    const hash = window.location.hash || '#home';
    state.currentView = hash;
    loadView(routes[hash]);
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);

function loadData() {
    if (state.data) {
        renderData(state.data);
    } else {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                state.data = data;
                renderData(data);
            });
    }
}

function renderData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = data.map(post => `<p>${post.title}</p>`).join('');
}

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
      document.body.style.backgroundColor = option.querySelector('i').style.color;
    });
  });
