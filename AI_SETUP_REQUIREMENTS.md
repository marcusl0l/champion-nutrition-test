# AI Diet Plan System - Phase 3 Setup Requirements

## What's Needed to Build & Test

### 1. API Keys (Required)
**Option A: Claude API (Recommended - Cheaper)**
- Sign up: https://console.anthropic.com/
- Get API key from dashboard
- Cost: ~$0.30-0.50 per plan
- Model: Claude 3 Haiku (fast & affordable)

**Option B: OpenAI API (Alternative)**
- Sign up: https://platform.openai.com/
- Get API key from dashboard
- Cost: ~$0.50-1.00 per plan
- Model: GPT-4 or GPT-3.5-turbo

**For Testing:**
- Can use free trial credits from either
- OpenAI gives $5 free credit on new accounts
- Claude gives free trial period

### 2. AWS Services Setup
**DynamoDB:**
- Table for questionnaire responses
- Table for generated meal plans
- Table for approval workflow
- Cost: $2-3/month

**Lambda Functions:**
- AI plan generation function
- Admin approval function
- Email notification function
- PDF generation function
- Cost: $3-5/month

**S3 Bucket:**
- Store generated PDF meal plans
- Archive old plans
- Cost: $1-2/month

**API Gateway:**
- REST API endpoints
- CORS configuration
- Free tier (1M requests/month)

### 3. Email System (AWS SES)
- Already have for contact form
- Add templates for:
  - Plan generation notification
  - Admin approval notification
  - Plan delivery to client
- Cost: Already covered ($1/month)

---

## Can We Test Now? YES! Here's How:

### Option 1: Local Test (Easiest)
Build frontend + mock AI responses
- ✅ Build questionnaire form now
- ✅ Create admin dashboard now
- ⚠️ Use mock data instead of real AI
- 🎯 Test full workflow without API costs

### Option 2: Full Integration (Needs API Key)
Connect real AI API
- Get Claude/OpenAI API key
- Build Lambda functions
- Deploy to AWS
- 🎯 Real AI-generated meal plans

---

## Let's Start with Option 1 (Local Test)

I can build NOW:

### 1. AI Questionnaire Form
- Personal info (age, weight, height, gender)
- Goals (lose weight, gain muscle, maintain, compete)
- Dietary preferences (vegan, keto, paleo, etc.)
- Restrictions (allergies, intolerances)
- Activity level (sedentary to athlete)
- Meal preferences (meals per day, snacks)
- Budget considerations
- Timeline/urgency

### 2. Mock AI Response System
- Pre-written example meal plans
- Simulate AI processing time
- Show what real output looks like
- Test workflow without API costs

### 3. Admin Approval Dashboard
- View pending meal plans
- Edit AI-generated content
- Approve or reject
- Add notes for client
- Send to client

### 4. Client Delivery
- Email notification (mock)
- PDF generation (basic)
- Download meal plan
- Track delivery status

---

## What I Need From You to Proceed:

### For Local Test (Can start NOW):
1. ✅ No API key needed
2. ✅ Build questionnaire form
3. ✅ Create admin dashboard
4. ✅ Use sample meal plans

### For Full Integration (Later):
1. ⏳ Claude or OpenAI API key
2. ⏳ AWS credentials (if separate from existing)
3. ⏳ Admin email for notifications
4. ⏳ Meal plan pricing (if charging)

---

## Time Estimates:

### Local Test Build:
- Questionnaire form: 2-3 hours ✅ Can do now
- Admin dashboard: 3-4 hours ✅ Can do now
- Mock AI system: 1-2 hours ✅ Can do now
- Email templates: 1 hour ✅ Can do now
**Total: 7-10 hours** (Can complete today/tomorrow)

### Full Integration:
- Lambda functions: 4-6 hours
- DynamoDB setup: 2-3 hours
- AI API integration: 3-4 hours
- PDF generation: 2-3 hours
- Testing: 2-3 hours
**Total: 13-19 hours** (Needs API key)

---

## Testing Strategy:

### Phase 3A: Build Frontend (NOW)
```
1. Questionnaire form with all fields
2. Submission success message
3. Admin dashboard to view submissions
4. Approval workflow UI
5. Mock "generated" meal plans
```

### Phase 3B: Add Real AI (Later)
```
1. Get API key
2. Create Lambda functions
3. Connect to Claude/OpenAI
4. Generate real meal plans
5. Deploy to production
```

---

## Sample Questionnaire Fields:

### Personal Information:
- Full Name
- Email
- Age
- Gender
- Height
- Current Weight
- Goal Weight

### Goals & Timeline:
- Primary Goal (dropdown)
  - Lose weight
  - Gain muscle
  - Improve athletic performance
  - Competition preparation
  - General health
- Timeline (how soon?)
- Motivation/Why

### Dietary Preferences:
- Diet Type (dropdown)
  - No preference
  - Keto
  - Paleo
  - Vegan
  - Vegetarian
  - Mediterranean
  - Low-carb
  - High-protein
- Allergies/Intolerances
- Foods to avoid
- Foods you love

### Lifestyle:
- Activity Level (dropdown)
  - Sedentary
  - Lightly active
  - Moderately active
  - Very active
  - Athlete
- Training frequency
- Occupation type
- Sleep quality

### Meal Preferences:
- Meals per day (3, 4, 5, 6)
- Snacks included?
- Meal prep time available
- Cooking skill level
- Budget per week

### Medical:
- Any medical conditions?
- Current medications?
- Previous diet attempts?
- Current supplements?

---

## Cost Breakdown (Phase 3):

### Development (One-time):
- Frontend build: TBD with client
- Lambda setup: TBD with client
- Testing: TBD with client

### Monthly Operations:
- Claude API: $15-30 (usage-based)
- DynamoDB: $2-3
- Lambda: $3-5
- S3: $1-2
- **Total: ~$21-40/month**

### Per Meal Plan:
- AI generation: $0.30-0.50
- Email delivery: $0.00 (free tier)
- PDF storage: $0.01
- **Total per plan: ~$0.31-0.51**

**If charging $20-50 per plan = $19.50-49.50 profit per plan!**

---

## My Recommendation:

### Do NOW (No API key needed):
1. ✅ Build questionnaire form
2. ✅ Build admin dashboard
3. ✅ Create workflow UI
4. ✅ Test with mock data
5. ✅ Show client the system

### Do Later (When client approves):
1. ⏳ Get API key
2. ⏳ Build Lambda functions
3. ⏳ Deploy to production
4. ⏳ Go live with real AI

---

## Want me to build the questionnaire & dashboard NOW?

I can have it working (with mock AI) in a few hours so you can:
- See how it works
- Show the client
- Test the workflow
- Refine questions
- Then add real AI when ready

**Should I start building Phase 3A (frontend + mock AI)?** 🤖
