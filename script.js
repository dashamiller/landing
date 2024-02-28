

function preloadImage(imageUrl) {
    const img = new Image();
    img.src = imageUrl;
    // Ви можете додати логіку для подій 'load' або 'error', якщо потрібно
    img.onload = () => console.log(`Image preloaded: ${imageUrl}`);
}
preloadImage('photos/art/1.jpg');



function closeGallery(idOfComponentToClose) {
    const galleryPopup = document.getElementById(idOfComponentToClose);
    galleryPopup.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {

    function autoToggleHoverImages() {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth < 600) { // Перевірка чи пристрій мобільний
            const galleryCovers = document.querySelectorAll('.gallery-cover');
    
            galleryCovers.forEach(cover => {
                let isVisible = false; // Початковий стан: cover видимий, hover невидимий
                setInterval(() => {   // Змінюємо видимість зображень
                    const hoverImage = cover.querySelector('.hover-image');
                    isVisible = !isVisible;
                    hoverImage.style.opacity = isVisible ? '1' : '0';
                }, 5500); // Інтервал зміни зображень (5 секунд)
            });
        }
    }
    // Викликаємо функцію autoToggleHoverImages
    autoToggleHoverImages();
    

    
    const contentContainer = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');
    

    const artProjectImagesToLoad = document.querySelectorAll('#artProjectsContent .pidoras'); // Переконайтеся, що цей селектор правильний
    const commercialContentImagesToLoad = document.querySelectorAll('#commercialContent .pidoras'); // Переконайтеся, що цей селектор правильний
    
    let artProjectsImagesLoaded = 0;
    let commercialImagesLoaded = 0;


    //-------- Функції------------

    


function showSection(sectionId) {
    const sectionsNames = ['artContent', 'artProjectsContent', 'commercialContent', 'contactContent'];   
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    sectionsNames.forEach(sectionName => {
        const content = document.getElementById(sectionName);
                if (screenWidth < 600) {
            // Для мобільних пристроїв
            content.style.display = sectionName === sectionId ? 'block' : 'none';
        } 
        else {
            // Для широких екранів
            content.style.display = sectionName === sectionId ? 'flex' : 'none';
        }
        content.classList.toggle('fade-in', sectionName === sectionId);
        content.classList.toggle('fade-out', sectionName !== sectionId);
    });
}


//=============================

// const sectionsNames = ['artContent', 'artProjectsContent', 'commercialContent', 'contactContent'];

// for (let i = 0; i < sectionsNames.length; i++) {
//     const sectionName = sectionsNames[i];
//     console.log('hui' + sectionName);
// }

// sectionsNames.forEach(sectionName=>{
//     console.log(sectionName);
// });

// sectionsNames.forEach();



//=============================



    function setHeaderColor(color) {
        document.querySelectorAll('header a').forEach(link => {
            link.style.color = color;
        });
        document.getElementById('brand-name').style.color = color;
      
    }

    function artProjectImageLoaded() {
        artProjectsImagesLoaded++;
        if (artProjectsImagesLoaded === artProjectImagesToLoad.length) {
            document.getElementById('loader').style.display = 'none';
            showSection('artProjectsContent'); // Початкова секція
            setHeaderColor('black'); // Колір для початкової секції
        }
    }
    function commercialImageLoaded() {
        commercialImagesLoaded++;
        if (commercialImagesLoaded === commercialContentImagesToLoad.length) {
            document.getElementById('loader').style.display = 'none';
            showSection('commercialContent'); // Початкова секція
            setHeaderColor('black'); // Колір для початкової секції
        }
    }

    

    function loadContent(section) {
        setTimeout(() => {
            const bgColor = section === 'contact' ? '#050000' : 'white';
            const textColor = section === 'contact' ? 'white' : 'black';
            document.body.style.backgroundColor = bgColor;
            setHeaderColor(textColor);
    
            // Викликати showSection для кожного розділу
            showSection(section + 'Content');
        }, 500);
    }
    

    // Ініціалізація
    loadContent('art');
    document.querySelector('[data-section="art"]').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.getAttribute('data-section');
            loadContent(section);
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Обробка завантаження зображень
    artProjectImagesToLoad.forEach(img => {
        if (img.complete) {
            artProjectImageLoaded();
        } else {
            img.onload = artProjectImageLoaded;
            img.onerror = artProjectImageLoaded;
        }
    });
    commercialContentImagesToLoad.forEach(img => {
        if (img.complete) {
            commercialImageLoaded();
        } else {
            img.onload = commercialImageLoaded;
            img.onerror = commercialImageLoaded;
        }
    });


    document.querySelectorAll('.gallery-cover').forEach(item => {
        item.addEventListener('click', function() {
            const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;           
            const folderId = this.id + 'Folder';
            const folderToOpen = document.getElementById(folderId);
            if (screenWidth < 600) {
                folderToOpen.style.display = 'block';
            }
             else {
            folderToOpen.style.display = 'flex';
    }});
    });




    document.querySelectorAll('.gallery-popup').forEach(folder => {
        folder.addEventListener('click', function(e) {
            if (e.target === folder || e.target.className === 'close-btn') {
                folder.style.display = 'none';
            }
        });
    });
});


