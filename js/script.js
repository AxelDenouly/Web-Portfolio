

/* =========================== TYPING ANIMATION =========================== */
var typed = new Typed(".typing",{
    strings:["Full-Stack Web development", "Mobile App Development", "Ethical Hacking", "Cyber-Security", "Data-base Science"],
    typeSpeed : 120,
    BackSpeed : 50,
    loop: true   
});


/* =========================== SCROLL ANIMATION =========================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('div ul a');

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
                document.querySelector('div ul a[href*=' + id + ']').classList.add('active');
            });
            // ACTIVE SECTION FOR ANIMATION ON SCROLL
            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate')
        }
        

    })};
