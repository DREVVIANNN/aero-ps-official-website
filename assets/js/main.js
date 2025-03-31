/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_8h48m6j','template_3sz36li','#contact-form','nyMt6masQVVn0lstz')

    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Thanks For Contact Aero-PS Staff Team!'

        //Remove message after 5 seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset()
    }, () =>{
        //SHOW ERROR MESSAGE
        contactMessage.textContent  = 'Message not sent (you are offline/service error) ❌'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //jika scrollnya lebih tinggi dari 350 viewport height, scrollup akan terlihat
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
})

sr.reveal(`.perfil, .contact__form, .banner`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})

/* send information for verified player or not avaible link */
function fun(){
    alert("discord not avaible");
}

function verified(){
    alert("This user verified✅")
}

// Get the audio element
const audioElement = document.getElementById("background-music");
     
// Function to check if audio is playing
function isPlaying(audio) {
    return !audio.paused && !audio.ended && audio.readyState > 2;
}

// Event listener to ensure autoplay works after user interaction (for stricter browsers)
document.addEventListener("click", () => {
    if (!isPlaying(audioElement)) {
        audioElement.play().catch(error => {
            console.error("Autoplay failed. User interaction is required:", error);
        });
    }
});

// Add fallback logic for loading audio sources
audioElement.addEventListener("error", () => {
    console.error("Audio failed to load. Check file paths or URLs.");
    alert("Audio failed to load. Please check your connection or file availability.");
});

// Log when audio starts playing
audioElement.addEventListener("play", () => {
    console.log("Audio is playing.");
});

// Log when audio is paused
audioElement.addEventListener("pause", () => {
    console.log("Audio is paused.");
});

// Attempt to play audio on page load
window.addEventListener("load", () => {
    audioElement.play().catch(error => {
        console.warn("Autoplay might be blocked by the browser:", error);
    });
});

