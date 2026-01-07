// AI Questionnaire JavaScript
let currentStep = 1;
const totalSteps = 4;

function nextStep() {
    // Validate current step
    const currentStepDiv = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    const inputs = currentStepDiv.querySelectorAll('input[required], select[required], textarea[required]');
    
    let valid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (!valid) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (currentStep < totalSteps) {
        // Hide current step
        document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
        
        currentStep++;
        
        // Show next step
        document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
        
        // If review step, populate summary
        if (currentStep === 4) {
            populateReviewSummary();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevStep() {
    if (currentStep > 1) {
        document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
        
        currentStep--;
        
        document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function populateReviewSummary() {
    const form = document.getElementById('aiQuestionnaireForm');
    const formData = new FormData(form);
    const reviewSummary = document.getElementById('reviewSummary');
    
    const sections = [
        {
            title: 'Personal Information',
            fields: [
                { key: 'fullName', label: 'Name' },
                { key: 'email', label: 'Email' },
                { key: 'age', label: 'Age' },
                { key: 'gender', label: 'Gender' },
                { key: 'height', label: 'Height', suffix: 'cm' },
                { key: 'currentWeight', label: 'Current Weight', suffix: 'kg' },
                { key: 'goalWeight', label: 'Goal Weight', suffix: 'kg' }
            ]
        },
        {
            title: 'Goals & Lifestyle',
            fields: [
                { key: 'primaryGoal', label: 'Primary Goal' },
                { key: 'timeline', label: 'Timeline' },
                { key: 'activityLevel', label: 'Activity Level' },
                { key: 'trainingType', label: 'Training Type' },
                { key: 'occupation', label: 'Occupation' }
            ]
        },
        {
            title: 'Diet Preferences',
            fields: [
                { key: 'dietType', label: 'Diet Type' },
                { key: 'allergies', label: 'Allergies' },
                { key: 'mealsPerDay', label: 'Meals Per Day' },
                { key: 'cookingTime', label: 'Cooking Time' },
                { key: 'budget', label: 'Budget', prefix: '$' }
            ]
        }
    ];
    
    let html = '';
    sections.forEach(section => {
        html += `<div class="review-section">
            <h3>${section.title}</h3>`;
        
        section.fields.forEach(field => {
            const value = formData.get(field.key);
            if (value) {
                html += `<div class="review-item">
                    <span class="review-label">${field.label}:</span>
                    <span class="review-value">${field.prefix || ''}${value}${field.suffix || ''}</span>
                </div>`;
            }
        });
        
        html += `</div>`;
    });
    
    reviewSummary.innerHTML = html;
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('aiQuestionnaireForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Processing... ⏳';
        submitBtn.disabled = true;
        
        // Gather all form data
        const formData = new FormData(form);
        const data = {
            submittedAt: new Date().toISOString(),
            personalInfo: {},
            goals: {},
            diet: {}
        };
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        try {
            // TODO: Replace with actual Lambda endpoint
            // For now, simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Save to localStorage for admin dashboard demo
            const submissions = JSON.parse(localStorage.getItem('aiSubmissions') || '[]');
            submissions.push({
                id: Date.now(),
                data: data,
                status: 'pending',
                submittedAt: new Date().toISOString()
            });
            localStorage.setItem('aiSubmissions', JSON.stringify(submissions));
            
            // Show success message
            alert('✅ Thank you! Your questionnaire has been submitted successfully.\n\nOur AI will generate your personalized meal plan within 24 hours. Tarren will review and approve it before sending it to you (typically 3-4 days).\n\nYou will receive an email confirmation shortly.');
            
            // Redirect to home
            window.location.href = 'index.html';
            
        } catch (error) {
            console.error('Submission error:', error);
            alert('Sorry, there was an error submitting your questionnaire. Please try again or contact us directly.');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
});
