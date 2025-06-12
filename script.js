const hamburger = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#closebtn");
const navlinks = document.querySelector("#navlinks");

//open mobile nav
hamburger.addEventListener("click", () => {
    navlinks.classList.remove("hidden");
    hamburger.classList.add("hidden");
    closeBtn.classList.remove("hidden");
});

//close mobile nav
closeBtn.addEventListener("click", () => {
    navlinks.classList.add("hidden");
    closeBtn.classList.add("hidden");
    hamburger.classList.remove("hidden");
});

console.log("navbar added and close button added and hamburger button hidden");


const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item => {
  item.addEventListener("click", () =>{
    //set active state
    navItems.forEach(el => {
      el.classList.remove('scale:105', 'text-cyan-500');
    });
    item.classList.add('scale:105', 'text-cyan-500');

    //close mobile nav if open
    if(window.innerWidth < 768){ // close on small screen
      navlinks.classList.add("hidden");
      closeBtn.classList.add("hidden");
      hamburger.classList.remove("hidden");
    }
  });
});

// Type writing effect

const phrases = [
    "Frontend Developer",
    "Web Developer",
    "Coder",
    "Future MERN Stack Developer"
  ];

  const textElement = document.getElementById('text');
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const pauseTime = 1000;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    textElement.innerHTML = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => isDeleting = true, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
  }

  type();

const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input, textarea');
  const btn = form.querySelector('button[type="submit"]');

  function checkFormValidity() {
    let allFilled = true;
    inputs.forEach(input => {
      if (!input.value.trim()) allFilled = false;
    });
    btn.disabled = !allFilled;
    btn.classList.toggle('opacity-50', !allFilled);
    btn.classList.toggle('cursor-not-allowed', !allFilled);
  }

  inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
  });

  checkFormValidity();

  //scroll top button
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  window.onscroll = function(){
    scrollFunction();
  };

  function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behaviour: 'smooth'
  });
});