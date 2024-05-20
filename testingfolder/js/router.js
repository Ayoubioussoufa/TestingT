import state from './state.js';

const routes = {
    '#home': './home.html',
    '#about': './about.html',
    '#contact': './contact.html',
    '#login': './login.html',
    '#loginbefore': './loginbefore.html',
    '#data': './data.html',
    '#tournament': './tournament.html',
    '#leaderboard': './leaderboard.html',
    '#gameplay': './gameplay.html',
    '#playerprofile': './playerprofile.html',
};

function loadView(view) {
    fetch(view)
        .then(response => response.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
            const script = document.querySelector(`#${view.replace('./', '').replace('.html', '')}-script`);
            if (script) {
                const newScript = document.createElement('script');
                newScript.src = script.src;
                newScript.type = 'module';
                console.log(newScript);
                document.body.appendChild(newScript);
            }
            if (view === './data.html') {
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
