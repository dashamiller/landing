document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Initialize the page with 'art' section
    loadContent('art');
    document.querySelector('[data-section="art"]').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.getAttribute('data-section');

            // Update the content
            loadContent(section);

            // Update the active class on navigation
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    function loadContent(section) {
        if (section === 'art') {
            contentContainer.innerHTML = `
                <div class="gallery-container">
                    <div class="photo-column">
                        <img src="photos/art/1.jpg" alt="Art 1" loading="lazy">
                        <img src="photos/art/2.jpg" alt="Art 2" loading="lazy">
                    </div>
                    <div class="photo-column">
                        <img src="photos/art/3.jpg" alt="Art 3" loading="lazy">
                        <img src="photos/art/4.jpg" alt="Art 4" loading="lazy">
                    </div>
                </div>
            `;
        } else if (section === 'commercial') {
            contentContainer.innerHTML = `
                <div class="gallery-container">
                    <div class="photo-column">
                        <img src="photos/commercial/dasha.jpeg" alt="Commercial 1" loading="lazy">
                    </div>
                </div>
            `;
        } else if (section === 'contact') {
            contentContainer.innerHTML = `        
            <div>
                <h1>ХУЙ</h1>
                <span>+3809412423874287</span>
                <div>pemis</div>
            </div>
            `;
        }
    }
});