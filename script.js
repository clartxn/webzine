document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const images = document.querySelectorAll(".story-image");

    images.forEach(image => {
        // Get container size
        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;

        // Set max distance between images
        let maxDistance = 100; // Change this to adjust spacing

        // Generate random positions within the constraints
        let randomX = Math.min(Math.random() * containerWidth, containerWidth - maxDistance);
        let randomY = Math.min(Math.random() * containerHeight, containerHeight - maxDistance);

        // Apply position styles
        image.style.position = "absolute";
        image.style.left = `${randomX}px`;
        image.style.top = `${randomY}px`;
    });
});
