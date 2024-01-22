

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
    const contentContainer = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');
    


    const imagesToLoad = document.querySelectorAll('.pidoras'); // Переконайтеся, що цей селектор правильний
    let imagesLoaded = 0;

    // Функції



    // function showSection(sectionId) {
    //     const sectionsNames = ['artContent', 'artProjectsContent', 'commercialContent', 'contactContent'];
    //     sectionsNames.forEach(sectionName => {
    //         const content = document.getElementById(sectionName);
    //         content.style.display = sectionName === sectionId ? 'flex' : 'none';

    //         content.classList.toggle('fade-in', sectionName === sectionId);
    //         content.classList.toggle('fade-out', sectionName !== sectionId);
    //     });
    // }

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
    }

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad.length) {
            document.getElementById('loader').style.display = 'none';
            showSection('artProjectsContent'); // Початкова секція
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
    imagesToLoad.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.onload = imageLoaded;
            img.onerror = imageLoaded;
        }
    });

    // Обробники для попапів
    // document.querySelectorAll('.gallery-cover').forEach(item => {
    //     item.addEventListener('click', function() {
    //         const folderId = this.id + 'Folder';
    //         const folderToOpen = document.getElementById(folderId);
    //         folderToOpen.style.display = 'flex';
    //     });
    // });


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
