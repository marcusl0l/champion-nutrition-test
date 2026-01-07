// Admin Dashboard JavaScript

function loadSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('aiSubmissions') || '[]');
    const submissionsList = document.getElementById('submissionsList');
    
    // Update stats
    const pending = submissions.filter(s => s.status === 'pending').length;
    const approved = submissions.filter(s => s.status === 'approved').length;
    
    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('approvedCount').textContent = approved;
    document.getElementById('totalCount').textContent = submissions.length;
    
    if (submissions.length === 0) {
        submissionsList.innerHTML = '<div class="empty-state"><p>No submissions yet</p></div>';
        return;
    }
    
    // Display submissions (most recent first)
    submissionsList.innerHTML = submissions
        .sort((a, b) => b.id - a.id)
        .map(submission => `
            <div class="submission-card ${submission.status}">
                <div class="submission-header">
                    <div>
                        <h3>${submission.data.fullName || 'No Name'}</h3>
                        <p>${submission.data.email || ''}</p>
                    </div>
                    <span class="status-badge ${submission.status}">${submission.status}</span>
                </div>
                <div class="submission-details">
                    <p><strong>Goal:</strong> ${submission.data.primaryGoal || 'Not specified'}</p>
                    <p><strong>Age:</strong> ${submission.data.age} | <strong>Weight:</strong> ${submission.data.currentWeight}kg</p>
                    <p><strong>Activity:</strong> ${submission.data.activityLevel || 'Not specified'}</p>
                    <p><strong>Diet Type:</strong> ${submission.data.dietType || 'Not specified'}</p>
                    <p><strong>Submitted:</strong> ${new Date(submission.submittedAt).toLocaleString()}</p>
                </div>
                <div class="submission-actions">
                    <button class="btn btn-small btn-secondary" onclick="viewSubmission(${submission.id})">View Full Details</button>
                    ${submission.status === 'pending' ? `
                        <button class="btn btn-small btn-primary" onclick="approvePlan(${submission.id})">Generate & Approve Plan</button>
                    ` : `
                        <button class="btn btn-small" disabled>Plan Sent</button>
                    `}
                </div>
            </div>
        `).join('');
}

function viewSubmission(id) {
    const submissions = JSON.parse(localStorage.getItem('aiSubmissions') || '[]');
    const submission = submissions.find(s => s.id === id);
    
    if (!submission) return;
    
    const details = Object.entries(submission.data)
        .filter(([key, value]) => value && key !== 'consent')
        .map(([key, value]) => `<p><strong>${formatKey(key)}:</strong> ${value}</p>`)
        .join('');
    
    const popup = window.open('', 'Submission Details', 'width=800,height=600,scrollbars=yes');
    popup.document.write(`
        <html>
            <head>
                <title>Submission Details</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
                    h1 { color: #e74c3c; }
                    p { margin: 10px 0; line-height: 1.6; }
                    strong { color: #333; }
                </style>
            </head>
            <body>
                <h1>Submission Details - ${submission.data.fullName}</h1>
                ${details}
                <hr>
                <p><strong>Status:</strong> ${submission.status}</p>
                <p><strong>Submitted:</strong> ${new Date(submission.submittedAt).toLocaleString()}</p>
            </body>
        </html>
    `);
}

function formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}

async function approvePlan(id) {
    if (!confirm('Generate AI meal plan for this client?\n\nThis will simulate AI generation (takes ~3 seconds) and mark as approved.')) {
        return;
    }
    
    const btn = event.target;
    btn.textContent = 'Generating AI Plan...';
    btn.disabled = true;
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Update status
    const submissions = JSON.parse(localStorage.getItem('aiSubmissions') || '[]');
    const submission = submissions.find(s => s.id === id);
    
    if (submission) {
        submission.status = 'approved';
        submission.approvedAt = new Date().toISOString();
        submission.mealPlan = generateMockMealPlan(submission.data);
        localStorage.setItem('aiSubmissions', JSON.stringify(submissions));
    }
    
    alert(`✅ Meal plan generated and approved!\n\nClient: ${submission.data.fullName}\n\nIn production, this would:\n- Send email to ${submission.data.email}\n- Attach PDF meal plan\n- Store in database`);
    
    loadSubmissions();
}

function generateMockMealPlan(data) {
    return {
        generatedAt: new Date().toISOString(),
        calories: calculateCalories(data),
        macros: calculateMacros(data),
        meals: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'],
        notes: `Personalized plan for ${data.primaryGoal}`
    };
}

function calculateCalories(data) {
    // Simple BMR calculation (mock)
    const weight = parseFloat(data.currentWeight);
    const height = parseFloat(data.height);
    const age = parseInt(data.age);
    
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (data.gender === 'male') bmr += 5;
    else bmr -= 161;
    
    // Activity multiplier
    const multipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        very: 1.725,
        athlete: 1.9
    };
    
    return Math.round(bmr * (multipliers[data.activityLevel] || 1.5));
}

function calculateMacros(data) {
    const calories = calculateCalories(data);
    return {
        protein: Math.round(calories * 0.3 / 4),
        carbs: Math.round(calories * 0.40 / 4),
        fats: Math.round(calories * 0.3 / 9)
    };
}

// Load on page load
document.addEventListener('DOMContentLoaded', loadSubmissions);
