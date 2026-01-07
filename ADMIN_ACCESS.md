# Admin Dashboard Access Guide

## 🔑 How to Access Admin Dashboard

### Option 1: Direct URL (Recommended)

**If deployed to AWS Amplify:**
```
https://champion-test.mccallitsolutions.co.nz/admin-dashboard.html
```

**If testing locally:**
```
http://localhost:8000/admin-dashboard.html
```

### Option 2: Add Admin Link to Website

I can add a hidden admin link to the footer or create a secret URL pattern.

---

## 📊 What You'll See:

### Dashboard Overview:
- **Statistics Cards:**
  - Pending Review count
  - Approved count
  - Total Submissions count

### Submissions List:
- All AI questionnaire submissions
- Name, email, goals, activity level
- Submission date/time
- Status (pending/approved)

### Actions Available:
1. **View Full Details** - Opens popup with all questionnaire data
2. **Generate & Approve Plan** - Simulates AI generation (3 seconds)
3. See status change from pending → approved

---

## 🧪 How to Test It:

### Step 1: Submit a Test Questionnaire
1. Go to: `champion-test.mccallitsolutions.co.nz/ai-questionnaire.html`
2. Fill out the 4-step form with test data:
   ```
   Name: Test Client
   Email: test@example.com
   Age: 30
   Weight: 80kg
   Goal: Lose weight
   Activity: Moderately active
   ```
3. Submit the form

### Step 2: View in Admin Dashboard
1. Go to: `champion-test.mccallitsolutions.co.nz/admin-dashboard.html`
2. You'll see your test submission
3. Click "View Full Details" to see all data
4. Click "Generate & Approve Plan" to test mock AI

---

## 🔐 Security Note:

**Current Setup:** No authentication (for testing)
- Anyone with the URL can access it
- Uses browser localStorage (no real database yet)

**For Production (Phase 3B):**
- Add AWS Cognito authentication
- Admin login required
- Real database (DynamoDB)
- Secure API endpoints

---

## 💡 Quick Access Options:

### Option A: Bookmark the URL
Just save the admin dashboard URL in your browser bookmarks

### Option B: Add Admin Link to Footer (Hidden)
I can add a small link in the footer that only you know about:
```html
<a href="admin-dashboard.html" style="color: transparent;">·</a>
```

### Option C: Secret URL Pattern
Create a special URL like:
```
champion-test.mccallitsolutions.co.nz/admin2026
```

---

## 📱 Mobile Access:

Yes! The admin dashboard is mobile responsive.
- View on phone/tablet
- Same URL works everywhere
- Touch-friendly buttons

---

## 🐛 Troubleshooting:

### "No submissions yet"?
- You need to submit a test questionnaire first
- Go to `/ai-questionnaire.html` and fill it out
- Then refresh the admin dashboard

### Dashboard not loading?
- Check the URL is correct: `/admin-dashboard.html`
- Check browser console for errors (F12)
- Clear browser cache and reload

### Submissions disappeared?
- Using localStorage (browser-based)
- Clearing browser data clears submissions
- Each browser/device has separate data
- (In production, this will use real database)

---

## 🔄 Data Persistence:

**Current (Testing):**
- Stored in browser localStorage
- Separate per browser/device
- Clearing cache = loses data
- Perfect for testing/demo

**Future (Production):**
- DynamoDB database
- Persistent across all devices
- Backed up automatically
- Searchable and exportable

---

## Want me to add an admin link to the website?

I can add:
1. Hidden admin link in footer
2. Admin button (password protected)
3. Secret URL redirect
4. Or just use direct URL

**Which do you prefer?** 🔐
