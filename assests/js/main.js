/* ======mixitup filter======*/ 
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* active work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a) =>a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click' , activeWork));

/* ======Contact form======*/ 
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name');
contactEmail =document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage =document.getElementById('contact-message');


const sendEmail =(e) => {
    e.preventDefault();

    //check if the field has a value
    if (contactName.value ==='' || contactEmail.value ==='' || Message.value ===''){
        
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');
       
        //show message
        contactMessage.textContent='Write all the input feilds';
    }else{
        //serviceID-templateID-#form-publickey
        emailjs.sendForm('service_javv6hj','template_dtv1wkz','contact-form','8RhmpaLDW5qjHGsI7')
        .then(() => {
            //show message and color, window + dot to open emoji
           contactMessage.classList.add('color-light');
           contactMessage.textContent ='Message sent ';

           //remove message after 5 seconds
           setTimeout(() =>{
            contactMessage.textContent ='';
           }, 5000);
        });
    }

};

contactForm.addEventListener('submit',sendEmail);