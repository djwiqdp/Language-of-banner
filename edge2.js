document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    const imageIndices = [6,8,10,21, 22,23, 24, 25, 28, 44, 54, 56, 58, 72, 76, 107, 128, 129, 132, 151, 152, 153 ];

    imageIndices.forEach((index, i) => {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = `img2/${index.toString().padStart(2, '0')}.png`;
            img.alt = `Image ${index}`;
            img.style.animationDelay = `${i * 0.2}s`; // 각 이미지가 0.2초 간격으로 나타남
            imageContainer.appendChild(img);
        }, i * 200); // 이미지 추가 간격을 0.2초로 설정
    });

    // 왼쪽에 나타나는 이미지들을 제외한 영역 클릭 시 index.html로 이동
    document.addEventListener('click', (event) => {
        const isImageContainer = imageContainer.contains(event.target);
        if (!isImageContainer) {
            window.location.href = 'index.html';
        }
    });
});