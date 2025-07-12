/**
 * Surxrat - Main JavaScript File
 * Provides interactivity and animations for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Active menu item based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Phone Carousel Animation
    const phones = document.querySelectorAll('.phone-mockup');
    let currentPhoneIndex = 0;
    
    // Initially show the first phone
    if (phones.length > 0) {
        phones[0].classList.add('active');
    }
    
    // Set up the carousel to cycle through phones
    function cyclePhones() {
        // Hide current phone
        phones[currentPhoneIndex].classList.remove('active');
        
        // Move to next phone
        currentPhoneIndex = (currentPhoneIndex + 1) % phones.length;
        
        // Show next phone
        phones[currentPhoneIndex].classList.add('active');
    }
    
    // Start cycling after the initial animations complete (9 seconds)
    setTimeout(() => {
        // Cycle every 3 seconds
        setInterval(cyclePhones, 3000);
    }, 9000);

    // Testimonial slider functionality
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialSlider.classList.add('active');
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        testimonialSlider.addEventListener('touchstart', (e) => {
            isDown = true;
            testimonialSlider.classList.add('active');
            startX = e.touches[0].pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });

        testimonialSlider.addEventListener('touchend', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
    }

    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            const videoContainer = document.querySelector('.video-container');
            
            // Replace placeholder with actual video embed
            // This is a placeholder - in a real implementation, you would replace with actual video URL
            videoContainer.innerHTML = `
                <iframe width="100%" height="350" src="https://youtu.be/X6amKwCs5QQ?si=VjfXSePPSMYpIYwv" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            `;
        });
    }

    // Animation for feature cards on hover
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Single pricing card hover effect
    const singlePricingCard = document.querySelector('.single-pricing-card');
    
    if (singlePricingCard) {
        singlePricingCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        singlePricingCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Buy now button click tracking
    const buyButtons = document.querySelectorAll('.buy-now');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // In a real implementation, you might want to track clicks or show a confirmation
            console.log('Buy button clicked:', this.getAttribute('href'));
            // Uncomment the following line to prevent default and show a custom modal instead
            // e.preventDefault();
        });
    });

    // Table row hover effects
    const tableRows = document.querySelectorAll('.features-table tr, .android-table tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(108, 99, 255, 0.05)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Prevent image downloads
    const protectedImages = document.querySelectorAll('.protected-image');
    
    protectedImages.forEach(img => {
        // Prevent right-click
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Prevent drag
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Prevent selection
        img.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
    });

    // Add additional protection to the entire document
    document.addEventListener('keydown', function(e) {
        // Prevent print screen and save page shortcuts
        if (
            (e.ctrlKey && e.key === 'p') || 
            (e.ctrlKey && e.key === 's') ||
            (e.key === 'PrintScreen')
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Preload images for better performance
    function preloadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                const newImg = new Image();
                newImg.src = src;
            }
        });
    }
    
    preloadImages();
});
