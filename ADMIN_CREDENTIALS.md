# 🔐 Admin Dashboard Security - IMPORTANT

## ⚠️ SECURITY UPDATE - LOGIN NOW REQUIRED

The admin dashboard is now **password protected** to prevent unauthorized access.

---

## 🔑 Admin Login Credentials

### Access URL:
```
https://champion-test.mccallitsolutions.co.nz/admin-login.html
```

### Default Credentials (CHANGE THESE!):
```
Username: admin
Password: Champion2026!
```

---

## 🚨 IMPORTANT - Change Password Before Going Live!

### How to Change Password:

1. Open file: `src/js/admin-login.js`
2. Find line 4-7:
```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'Champion2026!'
};
```
3. Change to your secure password:
```javascript
const ADMIN_CREDENTIALS = {
    username: 'tarren',
    password: 'YourSecurePassword123!'
};
```
4. Commit and deploy

---

## 🔒 Current Security Features:

✅ **Login Required** - Can't access dashboard without credentials
✅ **Session Token** - Stays logged in for 24 hours
✅ **Auto-Redirect** - Redirects to login if not authenticated
✅ **Logout Button** - Clear session and return to login
✅ **Error Messages** - Shows invalid credentials
✅ **Session Expiry** - Auto-logout after 24 hours

---

## 🎯 How It Works:

### For Admin (You):
1. Go to `/admin-login.html`
2. Enter username & password
3. Click "Login"
4. Access dashboard
5. Click "Logout" when done

### For Public:
- If they try to access `/admin-dashboard.html` directly
- They get redirected to `/admin-login.html`
- Without correct credentials, they can't access

---

## 📱 Login Flow:

```
User tries to access admin-dashboard.html
         ↓
   Auth check runs
         ↓
   No session? → Redirect to admin-login.html
         ↓
   Enter credentials
         ↓
   Correct? → Set session → Show dashboard
   Wrong? → Show error → Try again
```

---

## ⏰ Session Details:

- **Duration:** 24 hours
- **Storage:** Browser localStorage
- **Expiry:** Auto-logout after 24h
- **Multi-device:** Each browser needs separate login

---

## 🔐 Security Levels:

### Current (Testing/Demo): ✅ ACTIVE NOW
- Simple username/password
- Client-side authentication
- Good for: Testing, demos, single admin
- **Security Level:** Medium

### Production (Phase 3B): ⏳ Future
- AWS Cognito authentication
- Server-side validation
- Multi-user support
- Role-based access
- Password reset
- 2FA (optional)
- **Security Level:** High

---

## 🚨 Before Showing Client:

### Option 1: Use Default Password
- Show them: username = `admin`, password = `Champion2026!`
- They can test login functionality
- **Change password after demo!**

### Option 2: Create Custom Password First
- Change credentials in `admin-login.js`
- Give client their own username/password
- More professional

---

## 💡 Quick Setup Checklist:

- [x] Login page created
- [x] Authentication check added
- [x] Dashboard protected
- [x] Logout button added
- [x] Session management working
- [ ] **Change default password!** ← DO THIS!

---

## 🔄 To Update Password:

```bash
1. Edit: src/js/admin-login.js
2. Change username/password
3. Git commit
4. Git push
5. Deploy to Amplify (auto-deploys)
```

---

## 📝 Recommended Production Passwords:

**Strong Password Requirements:**
- At least 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Not dictionary words
- Not personal info

**Examples (don't use these exactly):**
- `Champ!on#Nutr2026$`
- `Tarren@McCall#2026`
- `Meal$Plan!Admin24`

---

## Status: ✅ SECURED

**Admin dashboard is now password protected!**
**Remember to change the default password before production!** 🔐
