


//document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("navlist ul li a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });


//form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (!form) {
        console.error("Form element not found!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (!name || !email || !message) {
            console.error("One or more form fields are missing.");
            return;
        }

        if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
            alert("All fields are required!");
            return;
        }

        if (!validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        form.submit();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});



        // Hamburger menu functionality
        const hamburger = document.querySelector('.hamburger');
        const navList = document.querySelector('.navlist');
        const closeMenu = document.querySelector('.close-menu');
        
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        closeMenu.addEventListener('click', () => {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        });
        
        // Close menu when clicking on a link (for mobile)
        document.querySelectorAll('.navlist a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
      

        function sendMail(){
            let parms ={
                name : document.getElementById("name").value,
                email : document.getElementById("email").value,
                message : document.getElementById("message").value,
            }
            emailjs.send("service_k339elb", "template_88pc5mf", parms).then(alert("Email Sent!"))
        }


        const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
