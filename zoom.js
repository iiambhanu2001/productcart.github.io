const bigImage = document.getElementById("big-image");
const zoomBox = document.getElementById("zoom-box");
const magnifier = document.getElementById("magnifier");
const productDetails = document.getElementById("product-details");
const zoomedImage = document.getElementById("zoomed-image");
const bigImageContainer = document.querySelector('.big-image-container');

// Function to set the big image source and update zoomed image on hover
function updateBigImage(imageSrc) {
  bigImage.src = imageSrc;
  zoomedImage.src = imageSrc; // Ensure the zoomed image also updates
}

// Add event listeners to each small image
const smallImages = document.querySelectorAll('.small-image'); // Select all small images
smallImages.forEach(smallImage => {
  smallImage.addEventListener('mouseover', () => {
    const largeImageSrc = smallImage.getAttribute('data-large'); // Get the large image source
    updateBigImage(largeImageSrc); // Update the big image
  });
});

// Zoom functionality for the big image
bigImageContainer.addEventListener("mouseenter", () => {
  magnifier.style.display = "block";
  zoomBox.style.display = "block";
  productDetails.style.display = "none";
});

bigImageContainer.addEventListener("mousemove", (event) => {
  const bounds = bigImageContainer.getBoundingClientRect();
  const magnifierSize = 100; // Size of the magnifier
  let mouseX = event.clientX - bounds.left;
  let mouseY = event.clientY - bounds.top;

  // Constrain the magnifier position within the bounds
  mouseX = Math.max(magnifierSize / 2, Math.min(mouseX, bounds.width - magnifierSize / 2));
  mouseY = Math.max(magnifierSize / 2, Math.min(mouseY, bounds.height - magnifierSize / 2));

  magnifier.style.left = `${mouseX - magnifierSize / 2}px`;
  magnifier.style.top = `${mouseY - magnifierSize / 2}px`;

  const zoomFactor = 2; // Zoom factor
  let zoomX = mouseX * zoomFactor - zoomBox.offsetWidth / 2;
  let zoomY = mouseY * zoomFactor - zoomBox.offsetHeight / 2;

  const zoomedImageMaxX = zoomedImage.offsetWidth - zoomBox.offsetWidth;
  const zoomedImageMaxY = zoomedImage.offsetHeight - zoomBox.offsetHeight;

  // Constrain zoomed image position
  zoomX = Math.max(0, Math.min(zoomX, zoomedImageMaxX));
  zoomY = Math.max(0, Math.min(zoomY, zoomedImageMaxY));

  zoomedImage.style.left = `-${zoomX}px`;
  zoomedImage.style.top = `-${zoomY}px`;
});

bigImageContainer.addEventListener("mouseleave", () => {
  magnifier.style.display = "none";
  zoomBox.style.display = "none";
  productDetails.style.display = "block";
});
