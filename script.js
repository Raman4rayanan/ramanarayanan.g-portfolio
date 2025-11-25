document.addEventListener('DOMContentLoaded', () => {

    /* =============================
       ABOUT MODAL
    ==============================*/
    const aboutModal = document.getElementById('about-modal');
    const aboutBtns = document.querySelectorAll('.about-btn');
    const aboutClose = document.querySelector('.about-close');

    const closeAbout = () => {
        aboutModal.classList.remove("active");
        setTimeout(() => aboutModal.style.display = "none", 400);
    };

    aboutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.style.display = "flex";
            setTimeout(() => aboutModal.classList.add("active"), 10);
        });
    });

    aboutClose.addEventListener('click', closeAbout);

    window.addEventListener('click', (e) => {
        if (e.target === aboutModal) closeAbout();
    });


    /* =============================
       SKILLS MODAL
    ==============================*/
    const skillsModal = document.getElementById("skills-modal");
    const skillsBtns = document.querySelectorAll(".skills-btn");
    const closeSkills = document.querySelector(".close-skills");

    const closeSkillsModal = () => {
        skillsModal.classList.remove("active");
        setTimeout(() => skillsModal.style.display = "none", 400);
    };

    skillsBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            skillsModal.style.display = "flex";
            setTimeout(() => skillsModal.classList.add("active"), 10);
        });
    });

    closeSkills.addEventListener("click", closeSkillsModal);

    window.addEventListener("click", (e) => {
        if (e.target === skillsModal) closeSkillsModal();
    });



    /* =============================
   PROJECTS MODAL
    ==============================*/
    const projectsModal = document.getElementById("projects-modal");
    const projectsBtns = document.querySelectorAll(".projects-btn");
    const closeProjects = document.querySelector(".close-projects");

    projectsBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            projectsModal.style.display = "flex";
            setTimeout(() => projectsModal.classList.add("active"), 10);
        });
    });

    closeProjects.addEventListener("click", () => {
        projectsModal.classList.remove("active");
        setTimeout(() => projectsModal.style.display = "none", 500);
    });

    window.addEventListener("click", (e) => {
        if (e.target === projectsModal) {
            projectsModal.classList.remove("active");
            setTimeout(() => projectsModal.style.display = "none", 500);
        }
    });



    /* =============================
       ESC KEY CLOSES ANY MODAL
    ==============================*/
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (aboutModal.classList.contains("active")) closeAbout();
            if (skillsModal.classList.contains("active")) closeSkillsModal();
        }
    });


    /* =============================
       MOBILE MENU
    ==============================*/
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });


    /* =============================
       CUSTOM CURSOR
    ==============================*/
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .social-btn, .skill-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });


    /* =============================
       PARTICLES JS
    ==============================*/
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00f2ff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: { enable: true, color: "#00f2ff", opacity: 0.2 },
                move: { enable: true, speed: 2 }
            }
        });
    }


    /* =============================
       VANILLA TILT
    ==============================*/
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.2
        });
    }


    /* =============================
       SKILLS BAR ANIMATION
       (with centered percentage)
    ==============================*/
    document.querySelectorAll(".skill-bar-item").forEach(item => {
        const bar = item.querySelector(".hover-bar .fill");
        const percentText = item.querySelector(".percent-text");
        const percent = item.dataset.percent;

        item.addEventListener("mouseenter", () => {
            bar.style.height = percent + "%";
            bar.style.opacity = 1;
            percentText.style.opacity = 1;
        });

        item.addEventListener("mouseleave", () => {
            bar.style.height = "0%";
            bar.style.opacity = 0;
            percentText.style.opacity = 0;
        });
    });

});
