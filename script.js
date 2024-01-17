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
        const page1 = document.getElementById('artContent');
        const page2 = document.getElementById('artProjectsContent');
        const page3 = document.getElementById('commercialContent');
        const page4 = document.getElementById('contactContent');

        if (section === 'art') {

            page1.style.display = 'flex'
            page2.style.display = 'none'
            page3.style.display = 'none'
            page4.style.display = 'none'

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
            page1.style.display = 'none'
            page2.style.display = 'flex'
            page3.style.display = 'none'
            page4.style.display = 'none'


            const moveItem = document.getElementById('move');
            moveItem.addEventListener('click', function () {
                const moveFolderToOpen = document.getElementById('moveFolder');
                moveFolderToOpen.style.display = 'flex';
            });
            const moveFolderToClose = document.getElementById('moveFolder');
            moveFolderToClose.addEventListener('click', function (e) {
                if (e.target === moveFolderToClose) {
                    moveFolderToClose.style.display = 'none';
                }
            });

            const enterTheVoidItem = document.getElementById('enterTheVoid');
            enterTheVoidItem.addEventListener('click', function () {
                const enterTheVoidFolderToOpen = document.getElementById('enterTheVoidFolder')
                enterTheVoidFolderToOpen.style.display = 'flex';
            });
            const enterTheVoidFolderToClose = document.getElementById('enterTheVoidFolder');
            enterTheVoidFolderToClose.addEventListener('click', function (e) {
                if (e.target === enterTheVoidFolderToClose) {
                 enterTheVoidFolderToClose.style.display = 'none'
                }

            });

            const handOfGodItem = document.getElementById('handOfGod');
            handOfGodItem.addEventListener('click', function () {
                const handOfGodFolderToOpen = document.getElementById('handOfGodFolder')
                handOfGodFolderToOpen.style.display = 'flex';
            });
            const handOfGodFolderToClose = document.getElementById('handOfGodFolder');
            handOfGodFolderToClose.addEventListener('click', function (e) {
                if (e.target === handOfGodToClose) {
                    handOfGodFolderToClose.style.display = 'none'
                }

            });

            const blueRoomItem = document.getElementById('blueRoom');
            blueRoomItem.addEventListener('click', function () {
                const blueRoomFolderToOpen = document.getElementById('blueRoomFolder')
                blueRoomFolderToOpen.style.display = 'flex';
            });
            const  blueRoomFolderToClose = document.getElementById('blueRoomFolder');
            blueRoomFolderToClose.addEventListener('click', function (e) {
                if (e.target === blueRoomFolderToClose) {
                    blueRoomFolderToClose.style.display = 'none'
                }

            });

        }
        else if (section === 'commercial') {
            page1.style.display = 'none'
            page2.style.display = 'none'
            page3.style.display = 'flex'
            page4.style.display = 'none'
        }


        else if (section === 'contact') {
            page1.style.display = 'none'
            page2.style.display = 'none'
            page3.style.display = 'none'
            page4.style.display = 'flex'
        }
    }
});