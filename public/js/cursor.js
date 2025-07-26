document.addEventListener('DOMContentLoaded', () => {
    const siraDots = document.querySelectorAll('.sira-dot');
    if (siraDots.length === 0) return;

    let mouseX = 0, mouseY = 0;
    const dotPositions = Array.from(siraDots).map(() => ({ x: 0, y: 0 }));
    const speed = 0.3;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateSira() {
        // First dot follows mouse directly
        dotPositions[0].x += (mouseX - dotPositions[0].x) * speed;
        dotPositions[0].y += (mouseY - dotPositions[0].y) * speed;
        
        siraDots[0].style.left = `${dotPositions[0].x - 6}px`;
        siraDots[0].style.top = `${dotPositions[0].y - 6}px`;

        // Other dots follow the previous dot
        for (let i = 1; i < siraDots.length; i++) {
            dotPositions[i].x += (dotPositions[i - 1].x - dotPositions[i].x) * speed;
            dotPositions[i].y += (dotPositions[i - 1].y - dotPositions[i].y) * speed;
            
            const offset = siraDots[i].classList.contains('med-dot') ? 4 : 2.5;
            siraDots[i].style.left = `${dotPositions[i].x - offset}px`;
            siraDots[i].style.top = `${dotPositions[i].y - offset}px`;
        }

        requestAnimationFrame(animateSira);
    }

    animateSira();
});
