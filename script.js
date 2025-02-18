document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".story-image");
    const container = document.querySelector(".container");

    function getRandomPosition(imgWidth, imgHeight) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        let left, top, isOverlapping;
        let attempts = 0;
        
        do {
            isOverlapping = false;
            left = Math.random() * (containerWidth - imgWidth);
            top = Math.random() * (containerHeight - imgHeight);
            
            // Check if new position overlaps with any existing images
            images.forEach(img => {
                const imgRect = img.getBoundingClientRect();
                if (
                    left < imgRect.right &&
                    left + imgWidth > imgRect.left &&
                    top < imgRect.bottom &&
                    top + imgHeight > imgRect.top
                ) {
                    isOverlapping = true;
                }
            });
            
            attempts++;
        } while (isOverlapping && attempts < 50); // Prevent infinite loops

        return { left, top };
    }

    images.forEach(img => {
        const { left, top } = getRandomPosition(img.clientWidth, img.clientHeight);
        img.style.left = `${left}px`;
        img.style.top = `${top}px`;
    });
});
