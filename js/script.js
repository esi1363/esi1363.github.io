// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

};

// animation tags with scroll js

ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img,   .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'right' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left' });
    
// typed js
const typed = new Typed('.multiple-text',{
    strings: [
     'طراح رزومه حرفه‌ای'
     ,'طراح پست و ویدئوی اینستاگرام'
     ,'طراح موشن گرافی'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//ُارسال ایمیل
// const form = document.querySelector('form');
// const fullName=document.getElementById('name');
// const email=document.getElementById('email');
// const phone=document.getElementById('phone');
// const subject=document.getElementById('subject');
// const mess=document.getElementById('message');

// function sendEmail(){
//     const bodyMessage = 'Full name: ${fullName.value} <br> Email: ${email.value} <br> Phone: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${mess.value}';
    
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "esfandiyari1363@gmail.com",
//         Password : "70F4560E36EB860BFF9F22E21B07579D3CB3",
//         To : 'esfandiyari1363@gmail.com',
//         From : "esfandiyari1363@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => alert(message)
//     );
// }
// form.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     sendEmail();
// });
