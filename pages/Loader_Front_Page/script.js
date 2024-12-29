document.addEventListener('DOMContentLoaded', () => {
    // Images ko load hone ke baad animate karne ke liye
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    images.forEach(img => {
        img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === images.length) {
                startAnimation();
            }
        });
    });

    // Animation start karne ke liye
    function startAnimation() {
        const spans = document.querySelectorAll('.loader-wrapper span');
        spans.forEach(span => {
            span.style.display = 'block';
        });
    }

    // Images par hover effect
    const containers = document.querySelectorAll('.loader-wrapper span');
    containers.forEach(container => {
        container.addEventListener('mouseover', () => {
            container.style.transform = 'scale(1.1)';
        });
        
        container.addEventListener('mouseout', () => {
            container.style.transform = 'scale(1)';
        });
    });

    // 5 seconds baad main page pe redirect
    setTimeout(() => {
        // TODO: Add your main page URL here
        // window.location.href = '/pages/main/index.html';
    }, 5000);
}); 