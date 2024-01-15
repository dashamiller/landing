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
                    <div class="gallery-cover">
                        <img src="photos/art/1.jpg" alt="Cover" loading="lazy" class="cover-image">
                        <img src="photos/art/2.jpg" alt="Hover" loading="lazy" class="hover-image">
                    </div>
                </div>
                <div class="photo-column">
                    <div class="gallery-cover">
                        <img src="photos/art/3.jpg" alt="Art 3" loading="lazy" class="cover-image">
                        <img src="photos/art/4.jpg" alt="Art 4" loading="lazy" class="hover-image">
                    </div>
                </div>
            </div>

          
            `;
  
          } 
        



          
       
          else if (section === 'artProjects') {
            contentContainer.innerHTML = `
                <div class="gallery-container">
                    <div class="photo-column">
                        <img src="photos/art projects/IMG_7408.JPG" alt="Art Progects 1" loading="lazy">
                    </div>
                </div>
            `;
        }

          else if (section === 'commercial') {
            contentContainer.innerHTML = `
                <div class="gallery-container">
                    <div class="photo-column">
                        <img src="photos/commercial/dasha.jpeg" alt="Commercial " loading="lazy">
                    </div>

                    <div class="photo-column">
                        <img src="photos/commercial/IMG_7100.JPG" alt="Commercial 1" loading="lazy">
                        <img src="photos/commercial/IMG_7355.JPG" alt="Commercial 2" loading="lazy">
                    </div>
                    <div class="photo-column">
                        <img src="photos/commercial/IMG_7099.JPG" alt="Commercial 3" loading="lazy">
                        <img src="photos/commercial/IMG_7338.JPG" alt="Commercial 4" loading="lazy">
                    </div>
                </div>
            `;
        }


        else if (section === 'contact') {
            contentContainer.innerHTML = `
                <div id="gif-background"></div> <!-- Напівпрозорий GIF-фон -->
                <div id="contact-info">
                    <h2>CONTACT INFORMATION</h2>
                    <!-- Ваші контактні дані тут -->
                </div>
            `;
        }


    }
});