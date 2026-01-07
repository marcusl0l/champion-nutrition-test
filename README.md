# Champion Nutrition - Modern Website & AI Diet Platform

**Test Site:** champion-test.mccallitsolutions.co.nz  
**Production:** championnutrition.net.nz (future)  
**Status:** 🚧 In Development

## Overview
Modern, custom-built nutrition website replacing slow WordPress/WooCommerce setup.

### Key Features:
- ⚡ Fast, lightweight custom site (no WordPress)
- 🛒 Simple product catalog (8+ products)
- 🤖 AI-powered diet plan recommendations
- 📧 Admin approval workflow for AI plans
- 💰 92% cost reduction ($450/mo → $37/mo)

## Tech Stack
- **Frontend:** Modern HTML/CSS/JavaScript
- **Hosting:** AWS Amplify
- **Database:** DynamoDB
- **Functions:** AWS Lambda
- **Email:** AWS SES
- **AI:** Claude API

## Project Structure
```
champion-nutrition-test/
├── src/
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript
│   └── images/       # Optimized images
├── scraped-content/  # Original site content
├── docs/             # Documentation
└── PROJECT_PLAN.md   # Detailed project plan
```

## Development Phases
1. **Phase 1A:** Content scraping & structure ✅ In Progress
2. **Phase 1B:** Core website build
3. **Phase 1C:** E-commerce features
4. **Phase 2:** AI diet plan system

## Cost Comparison
| Item | Current (Kinsta) | New (AWS) | Savings |
|------|------------------|-----------|---------|
| Monthly | $450 | $37 | $413 (92%) |
| Annual | $5,400 | $444 | $4,956 |

## Getting Started
```bash
# Clone repository
cd ~/champion-nutrition-test

# View project plan
cat PROJECT_PLAN.md

# Check scraped content
cat scraped-content/CONTENT_INVENTORY.md
```

## Questions?
Contact: Marcus @ McCall IT Solutions
