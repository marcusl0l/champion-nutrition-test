// Admin Authentication Check
// This runs on admin-dashboard.html to protect it

function checkAdminAuth() {
    const session = localStorage.getItem('adminSession');
    const sessionTime = localStorage.getItem('adminSessionTime');
    
    if (!session || !sessionTime) {
        // No session - redirect to login
        window.location.href = 'admin-login.html';
        return false;
    }
    
    const now = Date.now();
    const timeElapsed = now - sessionTime;
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (timeElapsed > twentyFourHours) {
        // Session expired
        localStorage.removeItem('adminSession');
        localStorage.removeItem('adminSessionTime');
        window.location.href = 'admin-login.html';
        return false;
    }
    
    return true;
}

// Logout function
function logout() {
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminSessionTime');
    window.location.href = 'admin-login.html';
}

// Run auth check immediately
if (!checkAdminAuth()) {
    // Will redirect if not authenticated
}
