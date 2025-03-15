// Menu button functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    submitButton.innerHTML = '<span class="loading-spinner"></span> Sending...';
    submitButton.classList.add('loading');
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    setTimeout(() => {
        submitButton.classList.remove('loading');
        submitButton.classList.add('success');
        submitButton.innerHTML = '✓ Sent Successfully!';
        
        form.reset();
        
        setTimeout(() => {
            submitButton.innerHTML = 'Send Message';
            submitButton.classList.remove('success');
        }, 2000);
    }, 1500);
    
    return false;
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll with highlight effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
            
            targetElement.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            targetElement.style.boxShadow = '0 0 20px rgba(130, 95, 245, 0.3)';
            targetElement.style.backgroundColor = '#825ff510';
            
            setTimeout(() => {
                targetElement.style.backgroundColor = 'transparent';
                targetElement.style.boxShadow = 'none';
            }, 1200);
        }
    });
});

// Tilt effect
document.querySelectorAll('.tilt-element').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Scroll Progress Indicator
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
};
