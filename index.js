let currentIndex = 0; 
const images = document.querySelectorAll('.imgs img'); 
const totalImages = images.length; 
const imagesToShow = 3; 


function showImages() {
    images.forEach((img, index) => {
        if (index >= currentIndex && index < currentIndex + imagesToShow) {
            img.style.display = 'block'; 
        } else {
            img.style.display = 'none'; 
        }
    });
}

function nextImages() {
    currentIndex += imagesToShow;
    if (currentIndex >= totalImages) {
        currentIndex = 0; 
    }
    showImages();
}

function prevImages() {
    currentIndex -= imagesToShow;
    if (currentIndex < 0) {
        currentIndex = Math.floor(totalImages / imagesToShow) * imagesToShow; 
    }
    showImages();
}

document.getElementById('nextBtn').addEventListener('click', nextImages);
document.getElementById('prevBtn').addEventListener('click', prevImages);

showImages();
