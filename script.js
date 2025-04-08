// Function to change the background image when hovering over an image
function changeBackground(imgElement) {
    document.body.style.backgroundImage = `url('${imgElement.src}')`;
    document.body.style.backgroundSize = 'cover'; // Ensure the image covers the whole screen
    document.body.style.backgroundPosition = 'center center'; // Center the image
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
    caption.innerHTML = imgElement.alt; // Caption is set to the alt text of the image
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
