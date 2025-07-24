document.addEventListener('DOMContentLoaded', () => {
    const siraDots = document.querySelectorAll('.sira-dot');
    if (siraDots.length === 0) return;

    let mouseX = 0, mouseY = 0;

    const dotPositions = Array.from(siraDots).map(() => ({ x: 0, y: 0 }));
    const speed = 0.25;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Initialize position to prevent initial jump
        if (dotPositions[0].x === 0 && dotPositions[0].y === 0) {
            for (let i = 0; i < dotPositions.length; i++) {
                dotPositions[i].x = mouseX;
                dotPositions[i].y = mouseY;
            }
        }
    });

    function animateSira() {
        dotPositions[0].x += (mouseX - dotPositions[0].x) * speed;
        dotPositions[0].y += (mouseY - dotPositions[0].y) * speed;
        siraDots[0].style.left = `${dotPositions[0].x}px`;
        siraDots[0].style.top = `${dotPositions[0].y}px`;

        for (let i = 1; i < siraDots.length; i++) {
            dotPositions[i].x += (dotPositions[i - 1].x - dotPositions[i].x) * speed;
            dotPositions[i].y += (dotPositions[i - 1].y - dotPositions[i].y) * speed;
            siraDots[i].style.left = `${dotPositions[i].x}px`;
            siraDots[i].style.top = `${dotPositions[i].y}px`;
        }

        requestAnimationFrame(animateSira);
    }

    animateSira();
});
