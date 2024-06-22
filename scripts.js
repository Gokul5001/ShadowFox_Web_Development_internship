document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault()
            const hash = this.getAttribute('href');
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
