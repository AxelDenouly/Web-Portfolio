

/* =========================== SCROLL ANIMATION =========================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header div a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header a[href*=' + id + ']').classList.add('active');
            });
            // ACTIVE SECTION FOR ANIMATION ON SCROLL
            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate')
        }
        
    });

    // STICKY HEADER

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINKS SCROLL

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

