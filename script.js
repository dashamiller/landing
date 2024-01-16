function closeGallery(idOfComponentToClose) {
    const galleryPopup = document.getElementById(idOfComponentToClose);
    galleryPopup.style.display = 'none';
}

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
                    <div id="rubik" class="gallery-cover">
                        <img src="photos/art/1.jpg" alt="Cover" loading="lazy" class="cover-image">
                        <img src="photos/art/2.jpg" alt="Hover" loading="lazy" class="hover-image">
                    </div>
                </div>
            <div class="photo-column">
                <div id="rubik" class="gallery-cover">
                    <img src="photos/art/1.jpg" alt="Cover" loading="lazy" class="cover-image">
                    <img src="photos/art/2.jpg" alt="Hover" loading="lazy" class="hover-image">
                </div>
            </div>
          
            `;
// дістаємо елемент по якому будемо клікать
            const rubikItem = document.getElementById('rubik');
            // обявляємо що будемо слухать клік (внутрощі функції будуть виконуватись на клік)
            rubikItem.addEventListener('click', function () {
                // дістаємо в константу елемент фолдера (сірий попап на даннйи момент з однією фоткою)
                const rubikFolderToOpen = document.getElementById('rubikFolder');
                // цьому щє нєвідімому елементу задаємо відімость (перетираючи дісплей нон дісплей флєксом)
                rubikFolderToOpen.style.display = 'flex';
            });
//============================
            // дстаємо елемент сірого попапа на данний момент з однуєю фотографією
            const rubikFolderToClose = document.getElementById('rubikFolder');
// кажемо що будемо слухати клік (внутрощі функції будуть виконуватись на клік)
            rubikFolderToClose.addEventListener('click', function (e) {
            //    строчка магії - питай у чата джіпіті (з допомогою цієї функції розуміємо що клікнулі на пустоту)
                if (e.target === rubikFolderToClose) {
                    // нашому попапу (папочкє що дісталу двумя строчками вищє - задаємо дісплей нон)
                    rubikFolderToClose.style.display = 'none'; // Приховуємо галерею
                }
            });

        }






        else if (section === 'artProjects') {
            contentContainer.innerHTML = `
             <div class="gallery-container">
                <div class="photo-column">
                  <div id="move" class="gallery-cover">
                       <img src="photos/artProjects/Move/coverMove.jpg" alt="artProjects 1" loading="lazy" class="cover-image">
                       <img src="photos/artProjects/Move/hoverMove.jpg" alt="artProjects 2" loading="lazy" class="hover-image">
                   </div>
               </div>
               <div class="photo-column">
                  <div id="move" class="gallery-cover">
                       <img src="photos/artProjects/Move/coverMove.jpg" alt="artProjects 1" loading="lazy" class="cover-image">
                       <img src="photos/artProjects/Move/hoverMove.jpg" alt="artProjects 2" loading="lazy" class="hover-image">
                   </div>
               </div>
             </div>
            `;

           const moveItem = document.getElementById('move');
           moveItem.addEventListener('click', function() {
             const moveFolderToOpen = document.getElementById('moveFolder');
             moveFolderToOpen.style.display = 'flex';
           });
           const moveFolderToClose = document.getElementById('moveFolder');
           moveFolderToClose.addEventListener('click', function(e){
            if (e.target === moveFolderToClose) {
                moveFolderToClose.style.display = 'none';
            }
        });

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