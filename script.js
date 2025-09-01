// Mobile Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll Animation
const scrollElements = document.querySelectorAll('.skill-card, .project-card, .certificate-card, .testimonial-card');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.getBoundingClientRect().height;
    const windowHeight = window.innerHeight;
    
    return (
        elementTop <= windowHeight * (percentageScroll / 100) &&
        elementTop + elementHeight > 0
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initialize animation on page load
window.addEventListener('load', () => {
    handleScrollAnimation();
});

// Form Submission
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Skills Filter Functionality
const skillFilterBtns = document.querySelectorAll('#skills .filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        skillFilterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        skillCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Projects Filter Functionality
const projectFilterBtns = document.querySelectorAll('#projects .filter-btn');
const projectCards = document.querySelectorAll('.project-card');

projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').substring(1) === current) {
            li.classList.add('active');
        }
    });
});

// Add CSS class for active nav link
document.addEventListener('DOMContentLoaded', () => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule('.nav-links a.active { color: #64ffda !important; }', styleSheet.cssRules.length);
});