// ===================================
// NAVIGATION BAR - SCROLL EFFECT
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
avToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===================================
// IP COPY FUNCTIONALITY
// ===================================
const ipBox = document.getElementById('ipBox');
const ipTooltip = document.getElementById('ipTooltip');
const serverIP = 'play.inferno.net';

ipBox.addEventListener('click', () => {
    // Copy IP to clipboard
    navigator.clipboard.writeText(serverIP).then(() => {
        // Show tooltip
        ipTooltip.classList.add('show');
        
        // Hide tooltip after 2 seconds
        setTimeout(() => {
            ipTooltip.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy IP:', err);
        alert('IP: ' + serverIP);
    });
});

// ===================================
// DYNAMIC PLAYER COUNT (SIMULATED)
// ===================================
const playerCountElement = document.getElementById('playerCount');
let currentCount = 1204;

// Simulate player count fluctuation
setInterval(() => {
    const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
    currentCount = Math.max(1000, Math.min(2000, currentCount + change));
    
    // Animate number change
    playerCountElement.style.transform = 'scale(1.1)';
    playerCountElement.textContent = currentCount.toLocaleString();
    
    setTimeout(() => {
        playerCountElement.style.transform = 'scale(1)';
    }, 200);
}, 5000); // Update every 5 seconds

// ===================================
// SMOOTH SCROLL WITH OFFSET
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only handle internal links
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// SCROLL ANIMATIONS (FADE IN ON SCROLL)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe news cards
document.querySelectorAll('.news-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});

// Observe deep dive sections
document.querySelectorAll('.deep-dive-content, .deep-dive-image').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s ease';
    observer.observe(element);
});

// ===================================
// PARALLAX EFFECT ON HERO
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// EASTER EGG: KONAMI CODE
// ===================================
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated
            document.body.style.filter = 'hue-rotate(180deg)';
            alert('🔥 INFERNO MODE ACTIVATED 🔥');
            konamiIndex = 0;
            
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 5000);
        }
    } else {
        konamiIndex = 0;
    }
});

// ===================================
// LOG WELCOME MESSAGE
// ===================================
console.log('%c🔥 WELCOME TO INFERNO 🔥', 'color: #FF4500; font-size: 24px; font-weight: bold;');
console.log('%cServer IP: play.inferno.net', 'color: #8B0000; font-size: 16px;');
console.log('%cBuilt with passion for the grind.', 'color: #B8B8B8; font-size: 12px;');
