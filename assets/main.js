// global.js - Global JavaScript for MND Website

// Global configuration
const CONFIG = {
    siteName: "MND Development",
    contactEmail: "hello@mnddevelopment.com",
    supportEmail: "support@mnddevelopment.com",
    currentYear: new Date().getFullYear()
};

// User authentication state
let userState = {
    isLoggedIn: false,
    currentUser: null,
    token: null
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeGlobalFeatures();
    updateFooterYear();
    setupNavigation();
    setupAuthButtons();
    checkAuthState();
});

// Initialize global features
function initializeGlobalFeatures() {
    console.log(`${CONFIG.siteName} - Initializing global features`);
    
    // Set current year in footer
    updateFooterYear();
    
    // Setup navigation active states
    setupNavigation();
    
    // Setup authentication buttons
    setupAuthButtons();
    
    // Check if user is logged in
    checkAuthState();
}

// Update footer copyright year
function updateFooterYear() {
    const yearElements = document.querySelectorAll('.footer-cta h2');
    yearElements.forEach(element => {
        if (element.textContent.includes('2025')) {
            element.textContent = element.textContent.replace('2025', CONFIG.currentYear.toString());
        }
    });
}

// Setup navigation active states
function setupNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.tab');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === 'mndprojects.html') ||
            (currentPage === '' && linkHref === 'mndprojects.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Setup authentication buttons functionality
function setupAuthButtons() {
    const loginButtons = document.querySelectorAll('.login-btn');
    const signupButtons = document.querySelectorAll('.signup-btn');
    
    loginButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal('login');
        });
    });
    
    signupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal('signup');
        });
    });
}

// Open authentication modal
function openAuthModal(type) {
    // Create modal HTML if it doesn't exist
    if (!document.getElementById('authModal')) {
        createAuthModal();
    }
    
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authModalTitle');
    const form = document.getElementById('authForm');
    const submitBtn = document.getElementById('authSubmitBtn');
    const switchText = document.getElementById('authSwitchText');
    const switchLink = document.getElementById('authSwitchLink');
    
    if (type === 'login') {
        title.textContent = 'Login to Your Account';
        submitBtn.textContent = 'Login';
        switchText.innerHTML = 'Don\'t have an account? ';
        switchLink.textContent = 'Sign up';
        switchLink.onclick = () => openAuthModal('signup');
        
        // Update form for login
        form.innerHTML = `
            <div class="form-group">
                <label for="authEmail" class="form-label">Email Address</label>
                <input type="email" id="authEmail" class="form-input" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="authPassword" class="form-label">Password</label>
                <input type="password" id="authPassword" class="form-input" placeholder="Enter your password" required>
            </div>
            <div class="form-options">
                <label class="checkbox-label">
                    <input type="checkbox" id="rememberMe">
                    <span class="checkmark"></span>
                    Remember me
                </label>
                <a href="#" class="forgot-password">Forgot password?</a>
            </div>
        `;
    } else {
        title.textContent = 'Create Your Account';
        submitBtn.textContent = 'Sign Up';
        switchText.innerHTML = 'Already have an account? ';
        switchLink.textContent = 'Login';
        switchLink.onclick = () => openAuthModal('login');
        
        // Update form for signup
        form.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label for="authFirstName" class="form-label">First Name</label>
                    <input type="text" id="authFirstName" class="form-input" placeholder="First name" required>
                </div>
                <div class="form-group">
                    <label for="authLastName" class="form-label">Last Name</label>
                    <input type="text" id="authLastName" class="form-input" placeholder="Last name" required>
                </div>
            </div>
            <div class="form-group">
                <label for="authEmail" class="form-label">Email Address</label>
                <input type="email" id="authEmail" class="form-input" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="authPassword" class="form-label">Password</label>
                <input type="password" id="authPassword" class="form-input" placeholder="Create a password" required>
            </div>
            <div class="form-group">
                <label for="authConfirmPassword" class="form-label">Confirm Password</label>
                <input type="password" id="authConfirmPassword" class="form-input" placeholder="Confirm your password" required>
            </div>
            <div class="form-options">
                <label class="checkbox-label">
                    <input type="checkbox" id="agreeTerms" required>
                    <span class="checkmark"></span>
                    I agree to the <a href="Privacy_Policy_Terms.html" target="_blank">Terms of Service</a> and <a href="Privacy_Policy_Terms.html" target="_blank">Privacy Policy</a>
                </label>
            </div>
        `;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Create authentication modal
function createAuthModal() {
    const modalHTML = `
        <div class="modal" id="authModal">
            <div class="modal-content auth-modal">
                <div class="modal-header">
                    <h2 class="modal-title" id="authModalTitle">Login</h2>
                    <button class="close-btn" id="closeAuthModal">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="authForm" class="auth-form">
                        <!-- Form content will be dynamically added -->
                    </form>
                    <div class="auth-footer">
                        <p id="authSwitchText">Don't have an account? <a href="#" id="authSwitchLink">Sign up</a></p>
                    </div>
                    <div class="modal-actions">
                        <button class="modal-btn secondary" id="cancelAuthBtn">Cancel</button>
                        <button class="modal-btn primary" id="authSubmitBtn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners for the auth modal
    const authModal = document.getElementById('authModal');
    const closeBtn = document.getElementById('closeAuthModal');
    const cancelBtn = document.getElementById('cancelAuthBtn');
    const submitBtn = document.getElementById('authSubmitBtn');
    const authForm = document.getElementById('authForm');
    
    closeBtn.addEventListener('click', closeAuthModal);
    cancelBtn.addEventListener('click', closeAuthModal);
    
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleAuthSubmit();
    });
    
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleAuthSubmit();
    });
    
    // Add CSS for auth modal
    addAuthModalStyles();
}

// Handle authentication form submission
function handleAuthSubmit() {
    const form = document.getElementById('authForm');
    const isLogin = document.getElementById('authModalTitle').textContent.includes('Login');
    
    // Basic validation
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Simulate API call
    showLoadingState(true);
    
    setTimeout(() => {
        if (isLogin) {
            // Simulate login success
            const email = document.getElementById('authEmail').value;
            userState.isLoggedIn = true;
            userState.currentUser = { email: email, name: email.split('@')[0] };
            userState.token = 'simulated_token_' + Date.now();
            
            localStorage.setItem('mnd_user', JSON.stringify(userState));
            updateAuthUI();
            showNotification('Login successful!', 'success');
            closeAuthModal();
        } else {
            // Simulate signup success
            const email = document.getElementById('authEmail').value;
            userState.isLoggedIn = true;
            userState.currentUser = { 
                email: email, 
                name: document.getElementById('authFirstName').value + ' ' + document.getElementById('authLastName').value 
            };
            userState.token = 'simulated_token_' + Date.now();
            
            localStorage.setItem('mnd_user', JSON.stringify(userState));
            updateAuthUI();
            showNotification('Account created successfully!', 'success');
            closeAuthModal();
        }
        showLoadingState(false);
    }, 1500);
}

// Close authentication modal
function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Show loading state
function showLoadingState(show) {
    const submitBtn = document.getElementById('authSubmitBtn');
    if (submitBtn) {
        if (show) {
            submitBtn.innerHTML = '<div class="loading-spinner"></div> Loading...';
            submitBtn.disabled = true;
        } else {
            const isLogin = document.getElementById('authModalTitle').textContent.includes('Login');
            submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
            submitBtn.disabled = false;
        }
    }
}

// Check authentication state from localStorage
function checkAuthState() {
    const savedUser = localStorage.getItem('mnd_user');
    if (savedUser) {
        userState = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Update UI based on authentication state
function updateAuthUI() {
    const authButtons = document.querySelectorAll('.auth-buttons');
    
    authButtons.forEach(container => {
        if (userState.isLoggedIn) {
            container.innerHTML = `
                <div class="user-menu">
                    <button class="user-btn" id="userMenuBtn">
                        <span>👤</span>
                        ${userState.currentUser.name}
                    </button>
                    <div class="user-dropdown" id="userDropdown">
                        <a href="#" class="dropdown-item">Profile</a>
                        <a href="#" class="dropdown-item">My Projects</a>
                        <a href="#" class="dropdown-item">Settings</a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item logout-btn">Logout</a>
                    </div>
                </div>
            `;
            
            // Add event listeners for user menu
            const userMenuBtn = document.getElementById('userMenuBtn');
            const userDropdown = document.getElementById('userDropdown');
            const logoutBtn = document.querySelector('.logout-btn');
            
            userMenuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                userDropdown.classList.toggle('show');
            });
            
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                handleLogout();
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function() {
                userDropdown.classList.remove('show');
            });
        }
    });
}

// Handle user logout
function handleLogout() {
    userState = {
        isLoggedIn: false,
        currentUser: null,
        token: null
    };
    
    localStorage.removeItem('mnd_user');
    updateAuthUI();
    showNotification('Logged out successfully', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.global-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `global-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    const autoHide = setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button event
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoHide);
        hideNotification(notification);
    });
}

// Hide notification
function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Add CSS styles for auth modal and notifications
function addAuthModalStyles() {
    const styles = `
        <style>
            /* Auth Modal Styles */
            .auth-modal {
                max-width: 480px;
            }
            
            .auth-form .form-options {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .checkbox-label {
                display: flex;
                align-items: center;
                font-size: 14px;
                cursor: pointer;
            }
            
            .checkbox-label input {
                margin-right: 8px;
            }
            
            .forgot-password {
                font-size: 14px;
                color: #1c3974;
                text-decoration: none;
            }
            
            .forgot-password:hover {
                text-decoration: underline;
            }
            
            .auth-footer {
                text-align: center;
                margin: 20px 0;
                padding: 20px 0;
                border-top: 1px solid #e5e5e5;
            }
            
            .auth-footer a {
                color: #1c3974;
                text-decoration: none;
                font-weight: 600;
            }
            
            .auth-footer a:hover {
                text-decoration: underline;
            }
            
            /* User Menu Styles */
            .user-menu {
                position: relative;
            }
            
            .user-btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: #f8f9fa;
                border: 1px solid #e5e5e5;
                border-radius: 20px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;
            }
            
            .user-btn:hover {
                background: #e9ecef;
            }
            
            .user-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                background: white;
                border: 1px solid #e5e5e5;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                min-width: 160px;
                z-index: 1000;
                display: none;
                margin-top: 8px;
            }
            
            .user-dropdown.show {
                display: block;
            }
            
            .dropdown-item {
                display: block;
                padding: 12px 16px;
                color: #1C1B1F;
                text-decoration: none;
                font-size: 14px;
                transition: background-color 0.2s;
            }
            
            .dropdown-item:hover {
                background-color: #f8f9fa;
            }
            
            .dropdown-divider {
                height: 1px;
                background-color: #e5e5e5;
                margin: 4px 0;
            }
            
            .logout-btn {
                color: #dc3545;
            }
            
            /* Loading Spinner */
            .loading-spinner {
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 2px solid #ffffff;
                border-radius: 50%;
                border-top-color: transparent;
                animation: spin 1s ease-in-out infinite;
                margin-right: 8px;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            /* Global Notifications */
            .global-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                padding: 0;
                max-width: 400px;
                z-index: 10000;
                transform: translateX(400px);
                opacity: 0;
                transition: all 0.3s ease;
            }
            
            .global-notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .global-notification.success {
                border-left: 4px solid #28a745;
            }
            
            .global-notification.error {
                border-left: 4px solid #dc3545;
            }
            
            .global-notification.info {
                border-left: 4px solid #17a2b8;
            }
            
            .global-notification.warning {
                border-left: 4px solid #ffc107;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px;
            }
            
            .notification-message {
                flex: 1;
                margin-right: 12px;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 18px;
                cursor: pointer;
                color: #717171;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: #1C1B1F;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Utility function to format price
function formatPrice(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Utility function to debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        userState,
        initializeGlobalFeatures,
        formatPrice,
        debounce
    };
}