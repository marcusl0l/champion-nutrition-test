# Deployment Guide - Champion Nutrition

## 🚀 Quick Deployment to AWS Amplify

### Prerequisites:
- AWS Account
- GitHub repository
- Domain: champion-test.mccallitsolutions.co.nz

---

## Step 1: Create GitHub Repository

```bash
# Initialize and push to GitHub
cd ~/champion-nutrition-test
git add -A
git commit -m "Initial website build - ready for deployment"

# Create repo on GitHub (via gh cli or web)
gh repo create champion-nutrition-test --public --source=. --push
# OR manually create on github.com and:
git remote add origin https://github.com/marcusl0l/champion-nutrition-test.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to AWS Amplify

### Option A: AWS Console (Recommended for first time)

1. **Open AWS Amplify Console:**
   - Go to: https://console.aws.amazon.com/amplify/
   - Click "New app" → "Host web app"

2. **Connect Repository:**
   - Choose "GitHub"
   - Authenticate and select repository: `champion-nutrition-test`
   - Branch: `main`

3. **Configure Build Settings:**
   - Amplify will auto-detect the `amplify.yml` config
   - Review and confirm

4. **Add Environment Variables (if needed):**
   - None required for static site initially
   - Add later for Lambda functions

5. **Deploy:**
   - Click "Save and deploy"
   - Wait 2-3 minutes for build

### Option B: AWS CLI (Faster for experienced users)

```bash
# Install AWS Amplify CLI if not already installed
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting
# Choose: "Hosting with Amplify Console"
# Choose: "Continuous deployment"

# Publish
amplify publish
```

---

## Step 3: Configure Custom Domain

### In AWS Amplify Console:

1. **Go to your app** → "Domain management"

2. **Add domain:**
   - Domain: `mccallitsolutions.co.nz`
   - Subdomain: `champion-test`

3. **Configure DNS (Route 53):**
   - Amplify will provide DNS records
   - Add CNAME record in Route 53:
     ```
     champion-test.mccallitsolutions.co.nz → [amplify-domain].cloudfront.net
     ```

4. **Wait for SSL certificate:**
   - Automatic SSL via AWS Certificate Manager
   - Takes 5-15 minutes

---

## Step 4: Verify Deployment

**Test these URLs:**
- Temporary: `https://[app-id].amplifyapp.com`
- Custom: `https://champion-test.mccallitsolutions.co.nz`

**Check:**
- ✅ Homepage loads
- ✅ All sections visible
- ✅ Mobile responsive
- ✅ Forms work (once Lambda connected)
- ✅ Images load (after adding real images)
- ✅ Navigation smooth scrolls
- ✅ SSL certificate valid

---

## Step 5: Connect Contact Form Lambda

### Create Lambda Function:

```bash
# Create Lambda function directory
mkdir lambda-contact-form
cd lambda-contact-form

# Create function (similar to mccallitsolutions.co.nz)
# See: ~/mccallitsolutions-website/lambda/ for reference
```

### Configure API Gateway:
1. Create REST API
2. Enable CORS
3. Connect to Lambda
4. Get API endpoint

### Update JavaScript:
```javascript
// In src/js/main.js, replace:
const response = await fetch('YOUR_LAMBDA_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

---

## CI/CD Pipeline (Automatic Deploys)

Once connected to GitHub, every push to `main` triggers:
1. Build (Amplify runs `amplify.yml`)
2. Test (checks for errors)
3. Deploy (updates live site)
4. Notification (email on success/failure)

### Branch Strategy:
```
main → production (champion-test.mccallitsolutions.co.nz)
dev → development branch (for testing)
feature/* → feature branches (no auto-deploy)
```

---

## Environment Management

### Development:
```bash
# Local testing
cd ~/champion-nutrition-test/src
python3 -m http.server 8000
# Visit: http://localhost:8000
```

### Staging (Test Site):
- `champion-test.mccallitsolutions.co.nz`
- Connected to `main` branch
- Full AWS infrastructure

### Production (Future):
- `championnutrition.net.nz`
- Connected to `production` branch
- After client approval

---

## Cost Monitoring

**AWS Amplify Free Tier:**
- 1,000 build minutes/month
- 15 GB data transfer/month
- Usually stays FREE for small sites

**Monitor costs:**
```bash
aws ce get-cost-and-usage \
    --time-period Start=2026-01-01,End=2026-01-31 \
    --granularity MONTHLY \
    --metrics "BlendedCost"
```

---

## Troubleshooting

### Build fails:
- Check `amplify.yml` syntax
- Verify all files committed
- Check Amplify console logs

### Images not loading:
- Add actual images to `src/images/`
- Check file paths in HTML
- Verify image formats (jpg, png, webp)

### Forms not working:
- Lambda endpoint not configured yet
- Check browser console for errors
- Verify CORS settings

### Domain not working:
- DNS propagation (wait 1-24 hours)
- Check Route 53 records
- Verify SSL certificate status

---

## Next Steps After Deployment:

1. ✅ Verify test site works
2. 📸 Add real product images
3. 📝 Update content with actual text
4. 🔧 Configure Lambda functions
5. 🤖 Build AI diet plan system
6. 🎨 Client review and design tweaks
7. 🚀 Launch to production domain

---

**Status:** Ready for deployment
**Estimated time:** 15-30 minutes for full setup
**Cost:** $0 (within free tier)

🎉 **Let's get this live!**
