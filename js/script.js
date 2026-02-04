// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements to animate on scroll
document.querySelectorAll('.project-card, .skill-category, .learning-card, .stat').forEach(el => {
    observer.observe(el);
});

// Add animation classes dynamically
document.querySelectorAll('.project-card, .skill-category, .learning-card, .stat').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

// Form submission handling (if contact form is added later)
document.addEventListener('DOMContentLoaded', function() {
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = '#2ecc71';
                }
            });
            
            if (isValid) {
                // In a real implementation, you would send the form data
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });
});

// Algorithm visualization interaction
document.querySelectorAll('.algorithm-section').forEach(section => {
    section.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// Add some dynamic effects to the ML algorithm visuals
function animateAlgorithmVisuals() {
    const dots = document.querySelectorAll('.dot');
    const lines = document.querySelectorAll('.line');
    
    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.transition = 'transform 0.5s ease';
                dot.style.transform = 'scale(1.2)';
                
                setTimeout(() => {
                    dot.style.transform = 'scale(1)';
                }, 500);
            }, index * 200);
        });
    }
    
    if (lines.length > 0) {
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '0.7';
                
                setTimeout(() => {
                    line.style.opacity = '0.3';
                }, 500);
            }, index * 200);
        });
    }
}

// Run animation when page loads
window.addEventListener('load', animateAlgorithmVisuals);

// Add scroll-to-top button
function addScrollTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.id = 'scroll-top-btn';
    scrollTopBtn.title = 'Scroll to Top';
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
}

// Initialize scroll to top button
addScrollTopButton();

// Add some CSS for the scroll to top button
const style = document.createElement('style');
style.textContent = `
    #scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 999;
        transition: all 0.3s ease;
    }
    
    #scroll-top-btn:hover {
        background: #2980b9;
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
    
    .animate {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);

// Update resume download link to copy the resume file
function setupResumeDownload() {
    const resumeLink = document.querySelector('a[href="job_hunt/resume/nadeem_data_scientist_resume_2025.pdf"]');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            // The link should work normally to download the file
            console.log("Resume download initiated");
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', setupResumeDownload);