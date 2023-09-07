

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSuject = document.getElementById('contact-subject'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if(contactName.value === '' || contactEmail.value === ''|| Message.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        contactMessage.textContent = 'Write all the input fields'
    }
    else {
        emailjs.sendForm('','','','')
    }

    
};

contactForm.addEventListener('submit', sendEmail);