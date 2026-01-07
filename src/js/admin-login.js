// Admin Login JavaScript

// TEMPORARY CREDENTIALS (Replace with real authentication in production)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'Champion2026!'
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Check credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        // Set session token
        const sessionToken = btoa(Date.now() + '-' + Math.random());
        localStorage.setItem('adminSession', sessionToken);
        localStorage.setItem('adminSessionTime', Date.now());
        
        // Redirect to dashboard
        window.location.href = 'admin-dashboard.html';
    } else {
        // Show error
        errorMessage.style.display = 'block';
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
});

// Check if already logged in
if (localStorage.getItem('adminSession')) {
    const sessionTime = localStorage.getItem('adminSessionTime');
    const now = Date.now();
    
    // Session expires after 24 hours
    if (now - sessionTime < 24 * 60 * 60 * 1000) {
        window.location.href = 'admin-dashboard.html';
    } else {
        // Clear expired session
        localStorage.removeItem('adminSession');
        localStorage.removeItem('adminSessionTime');
    }
}
