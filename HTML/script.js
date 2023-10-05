// JavaScript for smooth scrolling to anchor links
document.addEventListener('DOMContentLoaded', function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// JavaScript for form submission (example: you may need to replace the form handling logic)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Example: You can use Fetch API or other methods to handle form submission here
        // Replace the code below with your actual form submission logic
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        alert('Form submitted! (This is a placeholder)');
    });
});