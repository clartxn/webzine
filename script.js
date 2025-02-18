document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const images = document.querySelectorAll(".story-image");

    const containerWidth = window.innerWidth;
    const containerHeight = Math.max(document.body.scrollHeight, window.innerHeight);

    images.forEach(image => {
        let placed = false;
        
        while (!placed) {
            let randomX = Math.random() * (containerWidth - image.clientWidth);
            let randomY = Math.random() * (containerHeight - image.clientHeight);
            
            // Check for overlap (Basic version)
            let overlapping = [...document.querySelectorAll(".story-image")].some(other => {
                if (other === image) return false; // Don't compare with itself
                
                let rect1 = other.getBoundingClientRect();
                let rect2 = { left: randomX, top: randomY, right: randomX + image.clientWidth, bottom: randomY + image.clientHeight };

                return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
            });

            if (!overlapping) {
                image.style.left = `${randomX}px`;
                image.style.top = `${randomY}px`;
                placed = true;
            }
        }
    });

    // Adjust container height to fit content
    container.style.height = `${containerHeight}px`;
});
