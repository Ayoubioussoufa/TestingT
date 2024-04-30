import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


// Inside a script in your Vite project

async function fetchData() {
  try {
    const response = await fetch('http://localhost:8000/api/data/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    // Update your frontend UI with the data
    document.getElementById('message').innerText = data.message;
    document.getElementById('content').innerText = data.content;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData();
