// main.js - Global Navbar Styles and Functionality

// Navbar Styles
const navbarStyles = `
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #1C1B1F;
    background-color: #fef2f2;
    font-size: 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Main content area */
.main-content {
    flex: 1;
    padding: 40px 20px;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    animation: fadeIn 0.5s ease-in;
}

/* Loading animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Blog specific styles */
.blog-container {
    background: white;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.blog-title {
    font-size: 2.5rem;
    color: #1c3974;
    margin-bottom: 20px;
    text-align: center;
}

.blog-content {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
}

.blog-content p {
    margin-bottom: 20px;
}

/* Header Styles */
.header {
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 12px 0;
    transition: all 0.3s ease;
}

.header.scrolled {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    padding: 8px 0;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.creator-info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.logo {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background: linear-gradient(135deg, #1c3974, #4a74c7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white;
    font-size: 18px;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.logo:hover {
    transform: scale(1.05);
}

.creator-name {
    font-size: 20px;
    font-weight: 700;
}

.creator-name a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
}

.creator-name a:hover {
    color: #1c3974;
}

.supporter-count {
    font-size: 14px;
    color: #717171;
}

.tabs {
    display: flex;
    gap: 20px;
}

.tab {
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    color: #1C1B1F;
    text-decoration: none;
    position: relative;
    transition: color 0.2s;
    white-space: nowrap;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.tab:hover {
    color: #1c3974;
    background-color: rgba(28, 57, 116, 0.05);
}

.tab.active {
    color: #1c3974;
    font-weight: 600;
}

.tab.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1c3974;
    border-radius: 2px;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 16px;
}

.auth-buttons {
    display: flex;
    gap: 12px;
}

.login-btn {
    font-size: 14px;
    color: #1C1B1F;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
    padding: 8px 16px;
    border-radius: 4px;
}

.login-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.signup-btn {
    font-size: 14px;
    background-color: #1c3974;
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.signup-btn:hover {
    background-color: #4a74c7;
    transform: translateY(-1px);
}

/* Footer Styles */
.footer {
    background-color: #1c3974;
    color: white;
    padding: 40px 0 20px;
    margin-top: auto;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
}

.footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
}

.footer-link {
    color: white;
    text-decoration: none;
    font-size: 12px;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border-radius: 3px;
}

.footer-link:hover {
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.1);
}

.footer-divider {
    width: 1px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0.3);
}

.footer-cta h5 {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.8;
}

/* Mobile Menu Toggle */
.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.3s ease;
}

.menu-toggle:hover {
    transform: scale(1.1);
}

.menu-toggle span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #1c3974;
    border-radius: 3px;
    transition: all 0.3s ease;
}

/* Menu toggle animation */
.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #1c3974;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: #4a74c7;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Loading Spinner */
.loading-spinner {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.loading-spinner.active {
    display: flex;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #1c3974;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Toast Notifications */
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #1c3974;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
}

.toast.show {
    transform: translateX(0);
}

.toast.success {
    background: #10b981;
}

.toast.error {
    background: #ef4444;
}

.toast.warning {
    background: #f59e0b;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #0f172a;
        color: #e2e8f0;
    }
    
    .blog-container {
        background: #1e293b;
        color: #e2e8f0;
    }
    
    .header {
        background-color: #1e293b;
        border-bottom: 1px solid #334155;
    }
    
    .tab {
        color: #e2e8f0;
    }
    
    .tab:hover {
        color: #60a5fa;
    }
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .tabs {
        gap: 15px;
    }
    
    .tab {
        font-size: 13px;
        padding: 6px;
    }
}

@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
    
    .header-container {
        flex-wrap: wrap;
        gap: 16px;
    }

    .creator-info {
        flex: 1;
    }

    .menu-toggle {
        display: flex;
    }

    .tabs {
        display: none;
        flex-direction: column;
        width: 100%;
        background: white;
        position: absolute;
        top: 100%;
        left: 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        padding: 16px 0;
        gap: 0;
        border-radius: 0 0 8px 8px;
    }

    .tabs.active {
        display: flex;
    }

    .tab {
        padding: 12px 20px;
        width: 100%;
        border-bottom: 1px solid #f0f0f0;
    }

    .tab:last-child {
        border-bottom: none;
    }

    .tab.active::after {
        display: none;
    }

    .tab.active {
        background-color: #f0f4ff;
    }

    .auth-buttons {
        display: none;
    }

    .main-content {
        padding: 20px 15px;
    }

    .blog-container {
        padding: 25px;
        margin-top: 10px;
    }

    .blog-title {
        font-size: 2rem;
    }

    .footer-links {
        flex-direction: column;
        gap: 10px;
    }

    .footer-divider {
        display: none;
    }
    
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    body {
        font-size: 16px;
    }
}

@media (min-width: 1025px) {
    body {
        font-size: 18px;
    }
}
`;

// Enhanced page detection with URL parameters support
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');

    // Map file names to page keys
    const pageMap = {
        'index.html': 'home',
        'index': 'home',
        '': 'home',
        'about.html': 'about',
        'about': 'about',
        'services.html': 'services',
        'services': 'services',
        'team.html': 'team',
        'team': 'team',
        'project.html': 'project',
        'project': 'project',
        'blog.html': 'blog',
        'blog': 'blog',
        'contact.html': 'contact',
        'contact': 'contact'
    };

    return pageParam || pageMap[page] || 'home';
}

// Enhanced Navbar HTML Structure
function createNavbarHTML(currentPage = null) {
    if (!currentPage) {
        currentPage = getCurrentPage();
    }

    const pages = {
        'home': { name: 'Home', url: 'index.html' },
        'about': { name: 'About', url: 'about.html' },
        'services': { name: 'Services', url: 'services.html' },
        'team': { name: 'Team', url: 'team.html' },
        'project': { name: 'Project', url: 'project.html' },
        'blog': { name: 'Blog', url: 'blog.html' },
        'contact': { name: 'Contact', url: 'contact.html' }
    };

    let tabsHTML = '';
    for (const [key, value] of Object.entries(pages)) {
        const isActive = key === currentPage ? 'active' : '';
        tabsHTML += `<a href="${value.url}" class="tab ${isActive}">${value.name}</a>`;
    }

    return `
    <header class="header">
        <div class="header-container">
            <div class="creator-info">
                <div class="logo" onclick="window.location.href='index.html'">MND</div>
                <div>
                    <h1 class="creator-name"><a href="index.html">MND</a></h1>
                    <p class="supporter-count">Development</p>
                </div>
            </div>

            <button class="menu-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="tabs">
                ${tabsHTML}
            </nav>

            <div class="auth-buttons">
                <a href="#" class="login-btn">Log in</a>
                <a href="#" class="signup-btn">Sign up</a>
            </div>
        </div>
    </header>
    `;
}

// Toast notification system
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// Loading spinner management
function showLoading() {
    let spinner = document.querySelector('.loading-spinner');
    if (!spinner) {
        spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = `
            <div class="spinner"></div>
            <p style="margin-top: 15px; color: #1c3974;">Loading...</p>
        `;
        document.body.appendChild(spinner);
    }
    spinner.classList.add('active');
}

function hideLoading() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.classList.remove('active');
    }
}

// Enhanced Navbar Functionality
function initializeNavbar() {
    // Add styles to document
    const styleSheet = document.createElement('style');
    styleSheet.textContent = navbarStyles;
    document.head.appendChild(styleSheet);

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const tabs = document.querySelector('.tabs');

    if (menuToggle && tabs) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            tabs.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.header-container')) {
                tabs.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a tab
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function () {
                tabs.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Enhanced login/signup buttons with loading states
    document.querySelectorAll('.login-btn, .signup-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const isLogin = this.classList.contains('login-btn');
            
            showLoading();
            setTimeout(() => {
                hideLoading();
                showToast(
                    `${isLogin ? 'Login' : 'Signup'} functionality coming soon!`, 
                    'info', 
                    2000
                );
            }, 1000);
        });
    });

    // Update active tab based on current page
    updateActiveTab();

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize back to top button
    initializeBackToTop();
}

// Back to top functionality
function initializeBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Enhanced Function to update active tab
function updateActiveTab() {
    const currentPage = getCurrentPage();
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.classList.remove('active');
        const href = tab.getAttribute('href');
        if (href) {
            const tabPage = href.replace('.html', '').replace('index', 'home');
            if (tabPage === currentPage || (currentPage === 'home' && tabPage === 'home')) {
                tab.classList.add('active');
            }
        }
    });
}

// Enhanced layout setup with performance improvements
function setupPageLayout(currentPage = null) {
    // Show loading spinner during setup
    showLoading();

    setTimeout(() => {
        // Check if navbar already exists
        if (!document.querySelector('.header')) {
            // Add navbar
            const navbarHTML = createNavbarHTML(currentPage);
            document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        }

        // Create main content area if it doesn't exist
        if (!document.querySelector('.main-content')) {
            const mainContent = document.createElement('main');
            mainContent.className = 'main-content';

            // Move existing body content into main content area
            const bodyChildren = Array.from(document.body.children);
            bodyChildren.forEach(child => {
                if (!child.classList.contains('header') && !child.classList.contains('footer')) {
                    mainContent.appendChild(child);
                }
            });
            document.body.appendChild(mainContent);
        }

        // Add footer if it doesn't exist
        if (!document.querySelector('.footer')) {
            const footerHTML = `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-links">
                        <a href="services.html" class="footer-link">Services</a>
                        <div class="footer-divider"></div>
                        <a href="team.html" class="footer-link">Our Team</a>
                        <div class="footer-divider"></div>
                        <a href="privacy.html" class="footer-link">Privacy Policy</a>
                        <div class="footer-divider"></div>
                        <a href="term.html" class="footer-link">Terms of Service</a>
                    </div>
                    <div class="footer-cta">
                        <h5>© Copyright ${new Date().getFullYear()} by MND. All rights reserved!</h5>
                    </div>
                </div>
            </footer>
            `;
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }

        // Initialize functionality
        initializeNavbar();
        
        // Hide loading spinner
        hideLoading();
        
        // Show welcome message
        setTimeout(() => {
            showToast('Welcome to MND Development!', 'success', 2000);
        }, 500);
    }, 500);
}

// Enhanced Security Features
document.addEventListener('contextmenu', (e) => {
    // Allow right-click but prevent default
    e.preventDefault();
    showToast('Right-click is disabled for security', 'warning', 2000);
});

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    ) {
        showToast('This action is not allowed', 'error', 2000);
        return false;
    }
};

// Enhanced Zoom prevention functionality
class NoZoom {
    constructor() {
        this.init();
    }

    init() {
        this.disableZoom();
        this.preventZoomGestures();
    }

    disableZoom() {
        // Set viewport to prevent zooming
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
            );
        } else {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no';
            document.head.appendChild(meta);
        }
    }

    preventZoomGestures() {
        // Prevent double-tap zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function (event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
                showToast('Zoom is disabled', 'info', 1000);
            }
            lastTouchEnd = now;
        }, false);

        // Prevent pinch zoom
        document.addEventListener('touchmove', function (event) {
            if (event.scale !== 1) {
                event.preventDefault();
            }
        }, { passive: false });
    }
}

// Initialize zoom prevention
function preventZoomEverywhere() {
    // Disable zoom via meta viewport
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no';
    }

    // Disable zoom via CSS
    const antiZoomStyle = document.createElement('style');
    antiZoomStyle.textContent = `
        * {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }
        
        input, textarea {
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
        }
    `;
    document.head.appendChild(antiZoomStyle);
}

// Enhanced Blog content setup
function setupBlogContent() {
    const blogContainer = document.querySelector('.blog-container');
    if (blogContainer && !blogContainer.innerHTML.trim()) {
        blogContainer.innerHTML = `
            <h1 class="blog-title">Welcome to Our Blog</h1>
            <div class="blog-content">
                <p>This is where blog content would appear.</p>
                <p>You can add your blog posts, articles, and other content here.</p>
                <p>Check back soon for updates!</p>
            </div>
        `;
    }
}

// Performance monitoring
function monitorPerformance() {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        if (loadTime > 3000) {
            showToast('Loading complete!', 'success', 2000);
        }
    });
}

// Enhanced Main initialization
document.addEventListener('DOMContentLoaded', function () {
    // Setup page layout with navbar and footer
    setupPageLayout();
    
    // Setup blog content if needed
    setupBlogContent();

    // Initialize security features
    new NoZoom();
    preventZoomEverywhere();

    // Additional mobile-specific fixes
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        enableMobileZoomPrevention();
    }

    // Initialize performance monitoring
    monitorPerformance();

    // Debug: Log current page for verification
    console.log('MND Web Development - Page loaded successfully');
    console.log('Current page detected:', getCurrentPage());
    console.log('User Agent:', navigator.userAgent);
});

// Enhanced fallback for older browsers
window.onload = function () {
    // Final viewport enforcement
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no';
    }

    // Force initial scale
    document.body.style.zoom = "1";
    
    // Remove loading spinner if still present
    hideLoading();
};

// Export enhanced functions for global access
window.MND = {
    getCurrentPage,
    setupPageLayout,
    initializeNavbar,
    showToast,
    showLoading,
    hideLoading
};

// Add error handling for better user experience
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
    showToast('An error occurred. Please refresh the page.', 'error', 4000);
});

// Add offline detection
window.addEventListener('offline', function() {
    showToast('You are currently offline', 'warning', 5000);
});

window.addEventListener('online', function() {
    showToast('Connection restored', 'success', 3000);
});