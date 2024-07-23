document.querySelectorAll('.friend').forEach(friend => {
    friend.addEventListener('click', function() {
        const friendName = this.getAttribute('data-friend');
        document.getElementById('friend-name').textContent = friendName;
        // if (document.querySelector('.conversation').style.display == 'none')
            document.querySelector('.conversation').style.display = 'block';
        // else
            // document.querySelector('.conversation').style.display = 'none';
        // Load conversation content dynamically
        document.getElementById('conversation-content').innerHTML = `<p>Chatting with ${friendName}...</p>`;
        document.querySelector('.Text').style.display = 'none';
    });
});

document.getElementById('back-button').addEventListener('click', function() {
    document.querySelector('.friend-list').style.display = 'block';
    document.querySelector('.conversation').style.display = 'none';
    document.querySelector('.Text').style.display = 'block';
});

document.getElementById('search-btn').addEventListener('click', function() {
    if (document.getElementById('search-bar').style.display == 'block')
    {
        document.getElementById('search-bar').style.display = 'none';
        document.getElementById('add-friend-bar').style.display = 'none';
    }
    else {
        document.getElementById('search-bar').style.display = 'block';
        document.getElementById('add-friend-bar').style.display = 'none';
    }
});

document.getElementById('add-btn').addEventListener('click', function() {
    if (document.getElementById('search-bar').style.display == 'block')
    {
        document.getElementById('search-bar').style.display = 'none';
        document.getElementById('add-friend-bar').style.display = 'none';
    }
    else
    {
        document.getElementById('search-bar').style.display = 'block';
        document.getElementById('add-friend-bar').style.display = 'none';
    }
});

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

setInterval(createBubble, 300);