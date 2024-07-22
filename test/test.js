document.addEventListener("DOMContentLoaded", () => {
    const numberOfBalls = 0;
    const balls = [];
    const ballSize = 20;

    for (let i = 0; i < numberOfBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        document.body.appendChild(ball);
        balls.push({
            element: ball,
            x: Math.random() * (window.innerWidth - ballSize),
            y: Math.random() * (window.innerHeight - ballSize),
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
        });
    }

    function animate() {
        balls.forEach(ball => {
            ball.x += ball.vx;
            ball.y += ball.vy;

            if (ball.x < 0 || ball.x > window.innerWidth - ballSize) ball.vx *= -1;
            if (ball.y < 0 || ball.y > window.innerHeight - ballSize) ball.vy *= -1;

            ball.element.style.left = ball.x + 'px';
            ball.element.style.top = ball.y + 'px';
        });

        requestAnimationFrame(animate);
    }

    animate();

    const video = document.getElementById('background-video');
    video.addEventListener('pause', function() {
        video.play();
    });
});
