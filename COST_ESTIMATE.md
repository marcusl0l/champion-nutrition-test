# Cost Estimate - AI Integration & Shop Features

## Current Monthly Cost: ~$37/month

### Breakdown:
- AWS Amplify Hosting: $10
- S3 Storage: $3
- Lambda Functions: $5
- SES Email: $1
- CloudFront CDN: $3
- Route 53 DNS: $1
- **Subtotal: $23/month**

---

## Adding Shopping Cart (No Payment Gateway)

### Additional Costs: ~$5-10/month

**What's needed:**
1. **DynamoDB for orders** - $2-3/month
   - Store cart data
   - Order tracking
   - Customer information

2. **Lambda for order processing** - $2-3/month  
   - Process cart submissions
   - Send order emails
   - Inventory checks (optional)

3. **SES for order confirmations** - $0-1/month
   - Already included in base cost

**Shopping Cart Subtotal: +$5-10/month**

---

## Adding AI Diet Plan System

### Additional Costs: ~$15-30/month

**What's needed:**

1. **Claude API (Anthropic)** - $10-20/month
   - Cost per diet plan: ~$0.10-0.50
   - Assuming 20-100 plans/month
   - Pay as you go pricing
   - **Example:** 50 plans/month × $0.30 = $15/month

2. **DynamoDB for plan storage** - $2-3/month
   - Store questionnaire responses
   - Store generated plans
   - Approval workflow data
   - Client history

3. **Lambda functions** - $3-5/month
   - AI plan generation
   - Admin approval workflow
   - Email delivery
   - PDF generation

4. **S3 for PDF storage** - $1-2/month
   - Store generated meal plans
   - Archive old plans

5. **Additional SES emails** - $1/month
   - Plan delivery
   - Approval notifications

**AI System Subtotal: +$15-30/month**

---

## TOTAL MONTHLY COSTS

| Scenario | Monthly Cost | Annual Cost |
|----------|-------------|-------------|
| **Current (basic site)** | $23 | $276 |
| **+ Shopping Cart** | $28-33 | $336-396 |
| **+ AI Diet Plans** | $43-53 | $516-636 |
| **Full Stack (Cart + AI)** | $48-63 | $576-756 |

### vs Current WordPress:
- **Current:** $450/month ($5,400/year)
- **Full Stack:** $48-63/month ($576-756/year)
- **Savings:** ~$400/month ($4,644-4,824/year) 86-88% reduction

---

## AI Pricing Details

### Claude API (Recommended):
- **Model:** Claude 3 Haiku (fast, affordable)
- **Input:** $0.25 per million tokens (~$0.01 per questionnaire)
- **Output:** $1.25 per million tokens (~$0.25 per meal plan)
- **Total per plan:** ~$0.30-0.50

### Alternative: OpenAI GPT-4:
- **Input:** $10 per million tokens
- **Output:** $30 per million tokens
- **Total per plan:** ~$0.50-1.00
- **More expensive but very capable**

### Usage Examples:
| Plans/Month | Claude Cost | OpenAI Cost |
|-------------|-------------|-------------|
| 10 plans | $3-5 | $5-10 |
| 50 plans | $15-25 | $25-50 |
| 100 plans | $30-50 | $50-100 |

**Recommendation:** Start with Claude Haiku for best cost/quality ratio

---

## One-Time Development Costs

### Shopping Cart Feature:
- Frontend: Shopping cart UI, product pages
- Backend: Lambda functions, DynamoDB setup
- Testing: Cart flow, order emails
- **Time estimate:** 8-12 hours
- **Cost:** TBD with client

### AI Diet Plan System:
- Frontend: Questionnaire form, admin dashboard
- Backend: Claude integration, approval workflow
- PDF generation: Meal plan templates
- Testing: AI quality, approval flow
- **Time estimate:** 20-30 hours
- **Cost:** TBD with client

---

## Scalability

### As Business Grows:
All AWS services auto-scale with usage:
- More orders = slightly higher costs
- More AI plans = pay per plan generated
- No need to upgrade "hosting tier"
- Costs grow linearly with usage

### Break-even Analysis:
If client charges $20 per AI meal plan:
- Cost per plan: $0.30
- Profit per plan: $19.70
- **Need only 3 plans/month to cover ALL hosting costs!**

---

## Implementation Priority

### Phase 1: Shopping Cart (This week)
- Add to cart functionality ✅ (already in JS)
- Checkout page with form
- Order confirmation emails
- No payment gateway yet
- **Cost:** +$5-10/month

### Phase 2: Payment Integration (Later)
- Stripe or Square integration
- Secure checkout
- Transaction fees: 2.9% + 30¢ per transaction
- **Cost:** Transaction fees only

### Phase 3: AI Diet Plans (Next)
- Questionnaire form
- Claude API integration  
- Admin approval dashboard
- PDF generation & email
- **Cost:** +$15-30/month

---

## Summary

**Can we add shopping cart now?** ✅ YES!
- Already have "Add to Cart" buttons
- Need: Checkout page + order processing
- Time: 2-3 hours
- Additional cost: ~$5-10/month

**Total with shopping:** ~$33-38/month
**vs Current WordPress:** $450/month
**Still saving:** $412-417/month (92% reduction!)

---

**Want me to add the shopping cart/checkout now?** 🛒
