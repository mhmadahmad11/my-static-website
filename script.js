// Function to change the background image when hovering over an image
function changeBackground(imgElement) {
    document.body.style.backgroundImage = `url('${imgElement.src}')`; // Set background to the image source
    document.body.style.backgroundSize = 'cover'; // Make sure the image covers the whole screen
    document.body.style.backgroundPosition = 'center center'; // Center the background image
    document.body.style.backgroundAttachment = 'fixed'; // Fix the background image in place
}

// Function to open the modal and show the clicked image
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");

    // Open the modal
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    caption.innerHTML = imgElement.alt; // Set the caption as the alt text of the image
}

// Function to close the modal when clicking outside the image or on the image itself
function closeModal(event) {
    // Check if the click is on the modal background (not on the image itself)
    if (event.target === document.getElementById("imageModal")) {
        var modal = document.getElementById("imageModal");
        modal.style.display = "none"; // Close the modal
    }
}
