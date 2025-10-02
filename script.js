function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("nav-links").classList.toggle("hidden");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.style.animationFillMode = 'forwards';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.15)';
        nav.style.backdropFilter = 'blur(25px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        nav.style.backdropFilter = 'blur(20px)';
    }
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

window.addEventListener('load', () => {
    const titleElement = document.querySelector('.info-box h1');
    if (titleElement) {
        const originalText = titleElement.textContent;
        setTimeout(() => {
            typeWriter(titleElement, originalText, 150);
        }, 1000);
    }
});

document.querySelectorAll('.bnt, .project-card, .grid-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform += ' scale(1.02)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = element.style.transform.replace(' scale(1.02)', '');
    });
});

const skillsSection = document.querySelector('#Skills');
const skillIcons = document.querySelectorAll('.skill i');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.animation = `fadeInUp 0.6s ease forwards`;
                    icon.style.animationDelay = `${index * 0.1}s`;
                }, index * 100);
            });
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('mobile-menu');
    
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
