# Champion Nutrition - Modern Website & AI Diet Platform
**Client:** Champion Nutrition NZ
**Test Domain:** champion-test.mccallitsolutions.co.nz
**Production Domain:** championnutrition.net.nz (future migration)

## 📊 Current Situation Analysis

### Problems to Solve:
1. **Cost:** $450/month (way too high for a small business)
2. **Performance:** Slow WooCommerce store
3. **Customization:** Hard to modify/update
4. **No AI Features:** Manual diet plan creation

### Current Tech Stack (Kinsta):
- WordPress + WooCommerce + Bricks Theme
- Cloudflare CDN
- ~8 products currently
- Manual customer service

---

## 🎯 Proposed Solution: Custom Modern Stack

### Option C - Full Custom E-commerce Platform

**Frontend:**
- Modern HTML/CSS/JavaScript (like mccallitsolutions.co.nz)
- Or React/Next.js for more dynamic features
- Mobile-first responsive design
- Fast, clean, accessible

**Backend Services (AWS):**
- **Hosting:** AWS Amplify ($5-15/month)
- **Storage:** S3 for images/assets ($1-5/month)
- **Database:** DynamoDB for products/orders ($1-5/month)
- **Functions:** Lambda for order processing, AI ($5-10/month)
- **Email:** SES for notifications ($1/month)
- **AI:** Claude/OpenAI API (~$10-20/month usage)

**Estimated Monthly Cost:** $25-60/month (vs $450!)
**Savings:** ~$400/month = $4,800/year

---

## 🏗️ Architecture

### Phase 1: Core Website (Week 1-2)
```
champion-test.mccallitsolutions.co.nz/
├── Home
│   ├── Hero section
│   ├── About Champion Nutrition
│   ├── Services overview
│   └── Featured products
├── About
│   ├── Bio/credentials
│   └── Philosophy
├── Products/Shop
│   ├── Product cards (8 initial)
│   ├── Product detail pages
│   ├── Shopping cart (localStorage)
│   └── Inquiry/order form (email-based)
├── Contact
│   └── Contact form (Lambda + SES)
└── AI Diet Plans (Phase 2)
```

### Phase 2: AI Diet Plan System (Week 3-4)
```
AI System Architecture:
┌─────────────────┐
│  Client Form    │ (Questionnaire)
│  - Age/Weight   │
│  - Goals        │
│  - Restrictions │
│  - Activity     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Lambda API     │ (Process & Generate)
│  - Validate     │
│  - Call AI API  │
│  - Store in DB  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Admin Portal   │ (Approval Dashboard)
│  - Review plans │
│  - Edit/Approve │
│  - Send to client│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Email (SES)    │ (Delivery)
│  - PDF attached │
│  - Follow-up    │
└─────────────────┘
```

---

## 🛠️ Development Plan

### IMMEDIATE: Phase 1A - Content Scraping & Structure
**Tasks:**
1. Scrape existing website content
   - Product names, descriptions, prices
   - Images (download and optimize)
   - About/bio content
   - Contact info
2. Create project structure
3. Initialize Git repo
4. Set up AWS Amplify test deployment

### Phase 1B - Core Website Build (1-2 weeks)
**Features:**
- Modern, fast, mobile-responsive design
- Product catalog (8 products, expandable)
- Simple shopping cart (no payment yet)
- Order inquiry form (emails to owner)
- Contact form
- SEO optimization

### Phase 1C - E-commerce Enhancement (2-3 weeks)
**Features:**
- Payment gateway integration (Stripe/Square)
- Order management system
- Email confirmations
- Basic inventory tracking (optional)

### Phase 2 - AI Diet Plan System (3-4 weeks)
**Features:**
- Client questionnaire form
- AI integration (Claude API recommended)
- Admin approval dashboard
- PDF generation
- Email delivery system
- Client history tracking

---

## 💰 Cost Breakdown

### Current (Kinsta + WP):
- **Hosting:** $450/month
- **Total/year:** $5,400

### Proposed (Custom AWS):
**Monthly:**
- Amplify hosting: $10
- S3 storage: $3
- DynamoDB: $3
- Lambda: $5
- SES emails: $1
- AI API: $15 (estimated)
- **Total: ~$37/month**

**Annually:** $444/year
**Savings:** $4,956/year (92% reduction!)

### One-time Development:
- Phase 1 (Website): TBD with client
- Phase 2 (AI System): TBD with client

---

## 📋 Next Steps

### Today:
1. ✅ Scrape existing website content
2. ✅ Create project structure
3. ⏳ Design wireframes/mockups
4. ⏳ Get client approval on design direction

### This Week:
- Build homepage
- Build product catalog
- Set up AWS infrastructure
- Deploy to champion-test.mccallitsolutions.co.nz

### Questions for Client:
1. Brand colors/logo preferences?
2. Any specific design inspiration?
3. Priority: Website first or AI system first?
4. Content approval process?
5. Launch timeline expectations?

---

## 🎨 Design Direction

**Inspiration:** Clean, health-focused, professional
- Modern minimalist design
- High-quality product imagery
- Easy navigation
- Trust indicators (credentials, testimonials)
- Mobile-first approach

**Similar to:**
- Your mccallitsolutions.co.nz (structure)
- Your rapidrentals (product cards, pricing)
- Health/nutrition industry best practices

---

## 🚀 Technology Choices

### Why Custom vs WooCommerce?
✅ **10x faster load times**
✅ **90% cost reduction**
✅ **Full customization control**
✅ **Modern tech stack**
✅ **Scalable for AI features**
✅ **No plugin conflicts**
✅ **Better security**

### Why AWS?
✅ **Professional infrastructure**
✅ **Scales automatically**
✅ **99.99% uptime**
✅ **Pay only for what you use**
✅ **Easy to add features**

---

**Status:** Ready to begin Phase 1A
**Created:** January 7, 2026
