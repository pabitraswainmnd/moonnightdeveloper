// script.js - Consolidated JavaScript for MND Development Website

// Global variables
let currentSlide = 0;
let slideInterval;
const slideDuration = 4000; // 4 seconds

// Search and Filter state for projects page
let currentFilter = 'all';
let currentSearch = '';

// Support widget state
let selectedAmount = 3;

// Project data with multiple images
const projectData = {
    creative: {
        title: "creative Website",
        images: [
            "./assets/gif/creative-hero.gif",
        ],
        description: "A fully responsive HTML/CSS template designed for yoga studios and wellness centers. This template features a calming color scheme, intuitive navigation, and sections for class schedules, instructor profiles, and meditation resources.",
        price: "₹499.00",
        tech: "HTML/CSS",
        responsive: "Yes",
        type: "Frontend Template",
        categories: ["html-css", "template"],
        featured: true,
        date: "2024-01-15"
    },
    yoga: {
        title: "Yoga Website",
        images: [
            "./img/Yoga Website.png",
            "./img/Yoga Website.png",
            "./img/Yoga Website.png"
        ],
        description: "A fully responsive HTML/CSS template designed for yoga studios and wellness centers. This template features a calming color scheme, intuitive navigation, and sections for class schedules, instructor profiles, and meditation resources.",
        price: "₹499.00",
        tech: "HTML/CSS",
        responsive: "Yes",
        type: "Frontend Template",
        categories: ["html-css", "template"],
        featured: true,
        date: "2024-01-15"
    },
    travel: {
        title: "Tours & Travel Website",
        images: [
            "./img/Tours & Travel Website.jpg",
            "./img/Tours & Travel Website.jpg",
            "./img/Tours & Travel Website.jpg"
        ],
        description: "A beautiful and responsive frontend website for travel agencies and tour operators. Features destination showcases, booking forms, testimonials, and an interactive map section.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Single Page Application",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-02-10"
    },
    travel2: {
        title: "Website",
        images: [
            "./assets/gif/website.gif",
        ],
        description: "A beautiful and responsive frontend website for travel agencies and tour operators. Features destination showcases, booking forms, testimonials, and an interactive map section.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Single Page Application",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-02-10"
    },
    grocery: {
        title: "Grocery Website Design",
        images: [
            "./img/Grocery Website Design.jpg",
            "./img/Grocery Website Design.jpg",
            "./img/Grocery Website Design.jpg"
        ],
        description: "A modern e-commerce design for grocery stores with product categories, shopping cart functionality, and delivery scheduling. Perfect for online grocery businesses.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Frontend E-commerce",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: false,
        date: "2024-01-28"
    },
    furniture: {
        title: "Furniture Website",
        images: [
            "./img/Furniture Website.jpg",
            "./img/Furniture Website.jpg",
            "./img/Furniture Website.jpg"
        ],
        description: "An elegant furniture store website with product galleries, category filters, and a clean aesthetic that showcases furniture pieces effectively.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Frontend E-commerce",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: true,
        date: "2024-03-05"
    },
    fitness: {
        title: "Fitness Website",
        images: [
            "./img/Fitness Website2.jpg",
            "./img/Fitness Website2.jpg",
            "./img/Fitness Website2.jpg"
        ],
        description: "A dynamic fitness website with workout plans, trainer profiles, membership options, and class schedules. Designed to motivate and convert visitors.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Frontend Template",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-02-22"
    },
    nike: {
        title: "Nike Shoes E-Commerce Website",
        images: [
            "./img/Nike Shoes E-Commerce Website.jpg",
            "./img/Nike Shoes E-Commerce Website.jpg",
            "./img/Nike Shoes E-Commerce Website.jpg"
        ],
        description: "A premium e-commerce template specifically designed for shoe stores, featuring product variations, size selectors, and a modern shopping experience.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "E-commerce Frontend",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: true,
        date: "2024-03-12"
    },
    gaming: {
        title: "Gaming Website Template",
        images: [
            "./img/Gaming Website Template.png",
            "./img/Gaming Website Template.png",
            "./img/Gaming Website Template.png"
        ],
        description: "A vibrant gaming website with game showcases, news sections, and community features. Perfect for gaming studios or gaming news portals.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Frontend Template",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-01-18"
    },
    grocery2: {
        title: "Grocery Website",
        images: [
            "./img/Grocery Website.jpg",
            "./img/Grocery Website.jpg",
            "./img/Grocery Website.jpg"
        ],
        description: "Another variation of a grocery website with a different layout and feature set, focusing on fresh produce and daily deals.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Frontend E-commerce",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: false,
        date: "2024-02-05"
    },
    "credit-card": {
        title: "Online Credit Card Website Design",
        images: [
            "./img/Online Credit Card Website Design.png",
            "./img/Online Credit Card Website Design.png",
            "./img/Online Credit Card Website Design.png"
        ],
        description: "A financial services website for credit card companies with application forms, benefits showcases, and secure design elements.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Financial Services Template",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-03-01"
    },
    hospital: {
        title: "Hospital Website",
        images: [
            "./img/Hospital Website.jpg",
            "./img/Hospital Website.jpg",
            "./img/Hospital Website.jpg"
        ],
        description: "A professional hospital website with department information, doctor profiles, appointment booking, and health resources.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Healthcare Template",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-02-14"
    },
    gaming2: {
        title: "Gaming Website",
        images: [
            "./assets/gif/gaming.gif",
        ],
        description: "A professional hospital website with department information, doctor profiles, appointment booking, and health resources.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Healthcare Template",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-02-14"
    },
    food: {
        title: "Food Website Design",
        images: [
            "./img/Food Website Design.jpg",
            "./img/Food Website Design.jpg",
            "./img/Food Website Design.jpg"
        ],
        description: "A mouth-watering food website perfect for restaurants, food bloggers, or recipe sites with beautiful food photography and easy navigation.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Food & Restaurant Template",
        categories: ["html-css", "javascript", "template"],
        featured: true,
        date: "2024-03-08"
    },
    flower: {
        title: "Flower Website",
        images: [
            "./img/Flower Website.jpg",
            "./img/Flower Website.jpg",
            "./img/Flower Website.jpg"
        ],
        description: "A floral website design for flower shops with bouquet showcases, occasion categories, and online ordering functionality.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "E-commerce Frontend",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: false,
        date: "2024-01-25"
    },
    education: {
        title: "Online Education Website",
        images: [
            "./img/Online Education Website.jpg",
            "./img/Online Education Website.jpg",
            "./img/Online Education Website.jpg"
        ],
        description: "An educational platform with course listings, instructor profiles, and learning resources. Ideal for online schools or tutoring services.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Education Template",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-02-28"
    },
    service: {
        title: "Online Service Provider Website Design",
        images: [
            "./img/Online Service Provider Website Design.jpg",
            "./img/Online Service Provider Website Design.jpg",
            "./img/Online Service Provider Website Design.jpg"
        ],
        description: "A service-based business website with service packages, booking forms, and client testimonials. Suitable for various service industries.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Service Business Template",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-03-15"
    },
    portfolio: {
        title: "Personal Portfolio Website",
        images: [
            "./img/Personal Portfolio Website2.jpg",
            "./img/Personal Portfolio Website2.jpg",
            "./img/Personal Portfolio Website2.jpg"
        ],
        description: "A professional portfolio website to showcase your work, skills, and experience. Customizable for various professions and creative fields.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Portfolio Template",
        categories: ["html-css", "javascript", "template"],
        featured: true,
        date: "2024-02-18"
    },
    pet: {
        title: "Pet Shop Website",
        images: [
            "./img/Pet Shop Website.jpg",
            "./img/Pet Shop Website.jpg",
            "./img/Pet Shop Website.jpg"
        ],
        description: "A pet store website with product categories, pet care resources, and adoption services. Designed for pet lovers and pet businesses.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Pet Business Template",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: false,
        date: "2024-01-30"
    },
    plant: {
        title: "Plant Shop Website",
        images: [
            "./img/Plant Shop Website.jpg",
            "./img/Plant Shop Website.jpg",
            "./img/Plant Shop Website.jpg"
        ],
        description: "A green and fresh website for plant nurseries with plant categories, care guides, and online purchasing options.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "E-commerce Frontend",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: false,
        date: "2024-03-03"
    },
    book: {
        title: "Book Website",
        images: [
            "./img/Book Website.jpg",
            "./img/Book Website.jpg",
            "./img/Book Website.jpg"
        ],
        description: "A bookstore website with book categories, author spotlights, and reading recommendations. Perfect for online bookstores or libraries.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "Bookstore Template",
        categories: ["html-css", "javascript", "ecommerce"],
        featured: false,
        date: "2024-02-08"
    },
    app: {
        title: "App Landing Page Website",
        images: [
            "./img/App Landing Page Website2.jpg",
            "./img/App Landing Page Website2.jpg",
            "./img/App Landing Page Website2.jpg"
        ],
        description: "A conversion-focused landing page for mobile apps with feature highlights, download buttons, and user testimonials.",
        price: "₹499.00",
        tech: "HTML/CSS/JS",
        responsive: "Yes",
        type: "App Landing Page",
        categories: ["html-css", "javascript", "template"],
        featured: false,
        date: "2024-03-20"
    }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
    initializeAllFunctionality();
});

// Main initialization function
function initializeAllFunctionality() {
    initializeCommonFeatures();
    initializeServicePage();
    initializeProjectsPage();
    initializeAboutPage();
    initializeHomePage();
}

// Common features across all pages
function initializeCommonFeatures() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileNavToggle && mobileNav) {
        mobileNavToggle.addEventListener('click', function () {
            mobileNav.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');

            // Animate hamburger to X
            const spans = mobileNavToggle.querySelectorAll('span');
            if (mobileNavToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileNav.classList.remove('active');
                mobileNavToggle.classList.remove('active');

                // Reset hamburger animation
                const spans = mobileNavToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
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

    // Initialize scroll animations
    initializeScrollAnimations();

    // Security features
    initializeSecurityFeatures();
}

// Security features
function initializeSecurityFeatures() {
    // Disable right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    document.onkeydown = (e) => {
        if (
            event.keyCode === 123 ||
            ctrlShiftKey(e, 'I') ||
            ctrlShiftKey(e, 'J') ||
            ctrlShiftKey(e, 'C') ||
            (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
        ) {
            return false;
        }
    };

    function ctrlShiftKey(e, keyCode) {
        return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe various elements for animation
    document.querySelectorAll('.service-card, .project-card, .testimonial-card, .stat-card, .mission-card, .process-step').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Service Page Functionality
function initializeServicePage() {
    // Service button click handlers
    document.querySelectorAll('.service-button').forEach(button => {
        button.addEventListener('click', function () {
            const serviceName = this.closest('.service-card').querySelector('.service-name').textContent;
            alert(`Thank you for your interest in our ${serviceName}! This would redirect to a contact form in a real implementation.`);
        });
    });

    // FAQ toggle functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // CTA button click handler
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This would navigate to the contact page in a real implementation.');
            }
        });
    }
}

// Projects Page Functionality
function initializeProjectsPage() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    renderProjectCards();
    initializeProjectModal();
    initializeSearchAndFilter();
}

// Render project cards
function renderProjectCards() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    Object.keys(projectData).forEach(projectId => {
        const project = projectData[projectId];
        const card = document.createElement('div');
        card.className = 'extra-card';
        card.setAttribute('data-categories', project.categories.join(' '));

        // Format date
        const date = new Date(project.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        card.innerHTML = `
            ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
            <img src="${project.images[0]}" alt="${project.title}" class="extra-image">
            <div class="extra-content">
                <div class="project-meta">
                    <div class="project-date">${formattedDate}</div>
                </div>
                <h3 class="extra-title">${project.title}</h3>
                <p class="extra-description">${project.description}</p>
                <div class="extra-price">${project.price}</div>
                <button class="add-to-cart-btn" data-project="${projectId}">View</button>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // Add event listeners to view buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });
}

// Project Modal Functionality
function initializeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalTech = document.getElementById('modalTech');
    const modalResponsive = document.getElementById('modalResponsive');
    const modalType = document.getElementById('modalType');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Slider elements
    const imageSlider = document.getElementById('imageSlider');
    const sliderDots = document.getElementById('sliderDots');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');

    // Price section elements
    const modalTotalPrice = document.getElementById('modalTotalPrice');
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

    // Function to open modal with project data
    window.openModal = function (projectId) {
        const project = projectData[projectId];

        if (project) {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalPrice.textContent = project.price;
            modalTech.textContent = project.tech;
            modalResponsive.textContent = project.responsive;
            modalType.textContent = project.type;

            // Set up the image slider
            setupSlider(project.images);

            // Reset quantity and price
            if (quantityInput) quantityInput.value = "1";
            updatePrice();

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Start auto-sliding
            startAutoSlide();
        }
    };

    // Set up the slider with images
    function setupSlider(images) {
        if (!imageSlider || !sliderDots) return;

        // Clear previous slides and dots
        imageSlider.innerHTML = '';
        sliderDots.innerHTML = '';
        currentSlide = 0;

        // Create slides
        images.forEach((image, index) => {
            const slide = document.createElement('img');
            slide.src = image;
            slide.alt = `Project image ${index + 1}`;
            slide.classList.add('slide');
            imageSlider.appendChild(slide);

            // Create dot indicator
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            sliderDots.appendChild(dot);
        });

        // Update slider position
        updateSliderPosition();
    }

    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSliderPosition();
        updateDots();
        resetAutoSlide();
    }

    // Update slider position based on current slide
    function updateSliderPosition() {
        const imageSlider = document.getElementById('imageSlider');
        if (imageSlider) {
            imageSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    // Update active dot
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Next slide
    function nextSlideFunc() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length === 0) return;
        
        currentSlide = (currentSlide + 1) % slides.length;
        updateSliderPosition();
        updateDots();
    }

    // Previous slide
    function prevSlideFunc() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length === 0) return;
        
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSliderPosition();
        updateDots();
    }

    // Start auto-sliding
    function startAutoSlide() {
        slideInterval = setInterval(nextSlideFunc, slideDuration);
    }

    // Stop auto-sliding
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Reset auto-slide timer
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Close modal functions
    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        stopAutoSlide();
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside the content
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    // Slider navigation
    if (prevSlide) {
        prevSlide.addEventListener('click', () => {
            prevSlideFunc();
            resetAutoSlide();
        });
    }

    if (nextSlide) {
        nextSlide.addEventListener('click', () => {
            nextSlideFunc();
            resetAutoSlide();
        });
    }

    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModalFunc();
        }
    });

    // Function to update price based on quantity
    function updatePrice() {
        if (!quantityInput || !priceInput || !modalTotalPrice) return;

        const quantity = parseInt(quantityInput.value) || 1;
        const basePrice = 100.20;
        const totalPrice = basePrice * quantity;

        priceInput.value = `$ ${totalPrice.toFixed(2)}`;

        // Update the displayed price
        modalTotalPrice.textContent = `$${(443.37 * quantity).toFixed(2)}`;
    }

    // Quantity input event listener
    if (quantityInput) {
        quantityInput.addEventListener('input', updatePrice);
    }

    // Add to cart button in modal
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', function () {
            const quantity = quantityInput ? quantityInput.value : '1';
            const price = priceInput ? priceInput.value : '$100.20';

            alert(`Added ${quantity} item(s) to cart for ${price}`);
            closeModalFunc();
        });
    }

    // Initialize price on page load
    updatePrice();
}

// Search and Filter Functionality
function initializeSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const projectsGrid = document.getElementById('projectsGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsInfo = document.getElementById('resultsInfo');

    if (!searchInput || !projectsGrid) return;

    // Search input event listener
    searchInput.addEventListener('input', function () {
        currentSearch = this.value.toLowerCase().trim();
        filterProjects();
    });

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update current filter
            currentFilter = this.getAttribute('data-filter');
            filterProjects();
        });
    });

    // Clear filters button
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function () {
            searchInput.value = '';
            currentSearch = '';

            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            currentFilter = 'all';

            filterProjects();
        });
    }

    // Filter projects function
    function filterProjects() {
        const projectCards = document.querySelectorAll('.extra-card');
        let visibleCount = 0;

        projectCards.forEach(card => {
            const title = card.querySelector('.extra-title').textContent.toLowerCase();
            const description = card.querySelector('.extra-description').textContent.toLowerCase();
            const categories = card.getAttribute('data-categories');

            const matchesSearch = currentSearch === '' ||
                title.includes(currentSearch) ||
                description.includes(currentSearch);

            const matchesFilter = currentFilter === 'all' ||
                categories.includes(currentFilter);

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update results info
        if (resultsInfo) {
            resultsInfo.textContent = `Showing ${visibleCount} of ${projectCards.length} projects`;
        }

        // Show empty state if no projects match
        if (emptyState && projectsGrid) {
            if (visibleCount === 0) {
                emptyState.style.display = 'block';
                projectsGrid.style.display = 'none';
            } else {
                emptyState.style.display = 'none';
                projectsGrid.style.display = 'grid';
            }
        }
    }

    // Initialize with all projects visible
    filterProjects();
}

// About Page Functionality
function initializeAboutPage() {
    // Initialize particle animation if on about page
    const particleBackground = document.getElementById('particle-background');
    if (particleBackground) {
        initializeParticleAnimation();
    }

    // CTA buttons functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This would navigate to the respective page in a real implementation.');
            }
        });
    });
}

// Particle Animation for About Page
function initializeParticleAnimation() {
    class Particle {
        constructor(svg, coordinates, friction) {
            this.svg = svg;
            this.steps = (window.innerHeight) / 2;
            this.item = null;
            this.friction = friction;
            this.coordinates = coordinates;
            this.position = this.coordinates.y;
            this.dimensions = this.render();
            this.rotation = Math.random() > 0.5 ? "-" : "+";
            this.scale = 0.5 + Math.random();
            this.siner = 200 * Math.random();
        }

        destroy() {
            this.item.remove();
        }

        move() {
            this.position = this.position - this.friction;
            let top = this.position;
            let left = this.coordinates.x + Math.sin(this.position * Math.PI / this.steps) * this.siner;
            this.item.css({
                transform: "translateX(" + left + "px) translateY(" + top + "px) scale(" + this.scale + ") rotate(" + (this.rotation) + (this.position + this.dimensions.height) + "deg)"
            })

            if (this.position < -(this.dimensions.height)) {
                this.destroy();
                return false;
            } else {
                return true;
            }
        }

        render() {
            this.item = $(this.svg, {
                css: {
                    transform: "translateX(" + this.coordinates.x + "px) translateY(" + this.coordinates.y + "px)"
                }
            });
            $("#particle-background").append(this.item);
            return {
                width: this.item.width(),
                height: this.item.height()
            };
        }
    }

    const rhombus = '<svg viewBox="0 0 13 14" class="particle-svg"><path class="rhombus" d="M5.9,1.2L0.7,6.5C0.5,6.7,0.5,7,0.7,7.2l5.2,5.4c0.2,0.2,0.5,0.2,0.7,0l5.2-5.4 C12,7,12,6.7,11.8,6.5L6.6,1.2C6.4,0.9,6.1,0.9,5.9,1.2L5.9,1.2z M3.4,6.5L6,3.9c0.2-0.2,0.5-0.2,0.7,0l2.6,2.6 c0.2,0.2,0.2,0.5,0,0.7L6.6,9.9c-0.2,0.2-0.5,0.2-0.7,0L3.4,7.3C3.2,7.1,3.2,6.8,3.4,6.5L3.4,6.5z" /></svg>';

    const pentahedron = '<svg viewBox="0 0 561.8 559.4" class="particle-svg"><path class="pentahedron" d="M383.4,559.4h-204l-2.6-0.2c-51.3-4.4-94-37-108.8-83l-0.2-0.6L6,276.7l-0.2-0.5c-14.5-50,3.1-102.7,43.7-131.4 L212.1,23C252.4-7.9,310.7-7.9,351,23l163.5,122.5l0.4,0.3c39,30.3,56,82.6,42.2,130.3l-0.3,1.1l-61.5,198 C480.4,525.6,435.5,559.4,383.4,559.4z M185.5,439.4h195.2l61.1-196.8c0-0.5-0.3-1.6-0.7-2.1L281.5,120.9L120.9,241.2 c0,0.3,0.1,0.7,0.2,1.2l60.8,195.8C182.5,438.5,183.7,439.1,185.5,439.4z M441,240.3L441,240.3L441,240.3z"/></svg>';
    const x = '<svg viewBox="0 0 12 12" class="particle-svg"> <path class="x" d="M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5 C4.3,11.2,5,12,6,12s1.7-0.8,1.7-1.7V7.7h2.5C11.2,7.7,12,7,12,6S11.2,4.3,10.3,4.3z"/></svg>';

    const circle = '<svg x="0px" y="0px" viewBox="0 0 13 12" class="particle-svg"> <path class="circle" d="M6.5,0.1C3.4,0.1,0.8,2.8,0.8,6s2.6,5.9,5.7,5.9s5.7-2.7,5.7-5.9S9.7,0.1,6.5,0.1L6.5,0.1z M6.5,8.8 C5,8.8,3.8,7.6,3.8,6S5,3.2,6.5,3.2S9.2,4.4,9.2,6S8,8.8,6.5,8.8L6.5,8.8z"/> </svg>';

    const point = '<svg viewBox="0 0 12 12" class="particle-svg"> <path class="point" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>';

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const data = [point, rhombus, pentahedron, circle, x];

    let isPaused = false;
    window.onblur = function () {
        isPaused = true;
    }.bind(this)
    window.onfocus = function () {
        isPaused = false;
    }.bind(this)

    let particles = [];

    setInterval(function () {
        if (!isPaused) {
            particles.push(
                new Particle(data[randomInt(0, data.length - 1)], {
                    "x": (Math.random() * window.innerWidth),
                    "y": window.innerHeight
                }, (1 + Math.random() * 3))
            )
        }
    }, 200);

    function update() {
        particles = particles.filter(function (p) {
            return p.move();
        });
        requestAnimationFrame(update.bind(this));
    }
    update();
}

// Home Page Functionality
function initializeHomePage() {
    // Support widget functionality
    const coffeeOptions = document.querySelectorAll('.coffee-option');
    const supportButton = document.getElementById('supportButton');

    if (coffeeOptions.length > 0 && supportButton) {
        // Coffee option selection
        coffeeOptions.forEach(option => {
            option.addEventListener('click', function () {
                // Remove active class from all options
                coffeeOptions.forEach(opt => opt.classList.remove('active'));

                // Add active class to clicked option
                this.classList.add('active');

                // Update selected amount and button text
                selectedAmount = parseInt(this.dataset.amount);
                supportButton.textContent = `Support $${selectedAmount}`;
            });
        });

        // Support button click handler
        supportButton.addEventListener('click', function () {
            alert(`Thank you for your support of $${selectedAmount}! This would redirect to payment processing in a real implementation.`);
        });
    }

    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This would navigate to the respective page in a real implementation.');
            }
        });
    });
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Export functions for global access (if needed)
window.MND = {
    openModal,
    initializeAllFunctionality,
    projectData
};