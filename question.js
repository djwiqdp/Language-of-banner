document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const overlayIndices = [15, 37, 38, 43, 45, 46, 48, 50, 59, 69, 78, 80, 85, 89, 96, 98, 99, 100, 101, 102, 103, 114, 115, 116, 119, 123, 124, 131, 157, 158];

    // Populate the grid with background images
    for (let i = 1; i <= 160; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.backgroundImage = `url('img2/${i.toString().padStart(2, '0')}.png')`;
        gridContainer.appendChild(gridItem);
    }

    // Add the semi-transparent black overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    gridContainer.appendChild(overlay);

    // Overlay specific images on top of the black overlay
    overlayIndices.forEach(index => {
        const overlayImage = document.createElement('div');
        overlayImage.classList.add('grid-item');
        overlayImage.style.backgroundImage = `url('img2/${index.toString().padStart(2, '0')}.png')`;
        overlayImage.style.position = 'absolute';
        overlayImage.style.width = `${100 / 8}vw`; // 8 columns
        overlayImage.style.height = `${100 / 20}vh`; // 20 rows
        overlayImage.style.top = `${Math.floor((index - 1) / 8) * (100 / 20)}vh`;
        overlayImage.style.left = `${((index - 1) % 8) * (100 / 8)}vw`;
        gridContainer.appendChild(overlayImage);
    });
});