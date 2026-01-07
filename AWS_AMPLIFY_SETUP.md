# AWS Amplify Deployment - Champion Nutrition

## ✅ GitHub Repository Created
**URL:** https://github.com/marcusl0l/champion-nutrition-test
**Branch:** master
**Status:** ✅ Pushed successfully

---

## 🎯 Multiple Amplify Apps - No Conflicts!

### **Answer: NO, it won't cause errors!**

You can have **multiple AWS Amplify apps** on the same account:
- ✅ mccallitsolutions.co.nz (existing)
- ✅ champion-test.mccallitsolutions.co.nz (new)
- ✅ championnutrition.net.nz (future production)

**They are completely separate apps** - no interference!

---

## 🚀 Deploy Champion Nutrition Now

### Method 1: AWS Console (Easiest - 5 minutes)

#### Step 1: Open Amplify Console
```
https://console.aws.amazon.com/amplify/home
```

#### Step 2: Create New App
1. Click **"New app"** → **"Host web app"**
2. Select **"GitHub"** as source
3. Authenticate (should already be connected from mccallitsolutions)
4. Select repository: **champion-nutrition-test**
5. Select branch: **master**

#### Step 3: Configure Build Settings
Amplify will auto-detect your `amplify.yml` file:
```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo "Building Champion Nutrition website..."
  artifacts:
    baseDirectory: /src
    files:
      - '**/*'
```

Click **"Next"**

#### Step 4: Review and Deploy
1. App name: **champion-nutrition-test**
2. Environment: **production** (or **test**)
3. Click **"Save and deploy"**

⏱️ Wait 2-3 minutes for initial deployment

#### Step 5: Add Custom Domain (champion-test.mccallitsolutions.co.nz)

**Once deployed:**

1. In Amplify console, go to your app
2. Click **"Domain management"** in left sidebar
3. Click **"Add domain"**
4. Select: **mccallitsolutions.co.nz** (should be in dropdown if you own it)
5. Add subdomain: **champion-test**
6. Click **"Configure domain"**

**Amplify will provide DNS records:**
```
champion-test.mccallitsolutions.co.nz → CNAME → [your-app-id].amplifyapp.com
```

#### Step 6: Configure Route 53 DNS

**Option A: Amplify Auto-Setup (if domain in Route 53)**
- Amplify can automatically create DNS records
- Just click "Setup domain" and it handles it

**Option B: Manual DNS Setup**
1. Go to Route 53 console
2. Select hosted zone: **mccallitsolutions.co.nz**
3. Create CNAME record:
   - Name: **champion-test**
   - Type: **CNAME**
   - Value: **[from Amplify]**
   - TTL: **300**

#### Step 7: Wait for SSL Certificate
- AWS Certificate Manager automatically provisions SSL
- Takes 5-15 minutes
- Status will show in Amplify console

---

## 📋 Quick Checklist

- ✅ GitHub repo created
- ✅ Code pushed
- ⏳ Create Amplify app
- ⏳ Connect GitHub repo
- ⏳ Deploy app
- ⏳ Add custom domain
- ⏳ Configure DNS
- ⏳ Wait for SSL
- ⏳ Test site

---

## 🎯 Your Amplify Apps Structure

```
AWS Amplify Account
│
├── App 1: mccallitsolutions-website
│   ├── Domain: mccallitsolutions.co.nz
│   ├── Branch: main → production
│   └── Status: ✅ Running
│
└── App 2: champion-nutrition-test (NEW)
    ├── Domain: champion-test.mccallitsolutions.co.nz
    ├── Branch: master → production
    └── Status: ⏳ Deploying
```

**No conflicts! Each app is independent.**

---

## 💡 Why Multiple Apps Work Fine

### Separate Resources:
- Different CloudFront distributions
- Different S3 buckets
- Different build pipelines
- Different domains/subdomains

### Shared Resources (no issue):
- Same AWS account
- Same billing
- Same GitHub connection (reused)
- Same Route 53 hosted zone

---

## 💰 Cost Impact

**Current:**
- mccallitsolutions.co.nz: ~$5-10/month

**After adding Champion Nutrition:**
- Both sites combined: ~$10-15/month
- Still within free tier limits!

**AWS Free Tier (per account):**
- 1,000 build minutes/month ✅
- 15 GB bandwidth/month ✅
- 5 GB storage ✅

**Both sites easily fit!**

---

## 🔧 Method 2: AWS CLI (Alternative)

If you prefer command line:

```bash
# Install Amplify CLI if needed
npm install -g @aws-amplify/cli

# Configure (if first time)
amplify configure

# Initialize in project
cd ~/champion-nutrition-test
amplify init

# Add hosting
amplify hosting add
# Choose: "Hosting with Amplify Console"
# Choose: "Continuous deployment"

# Publish
amplify publish
```

---

## ✅ Expected Result

### After deployment:

**Temporary URL:**
```
https://master.[app-id].amplifyapp.com
```

**Custom Domain (after DNS):**
```
https://champion-test.mccallitsolutions.co.nz
```

**Features working:**
- ✅ Homepage loads
- ✅ All sections visible
- ✅ Mobile responsive
- ✅ Smooth navigation
- ✅ Shopping cart works
- ⏳ Contact form (needs Lambda)
- ⏳ AI plans (Phase 2)

---

## 🎉 Success Indicators

### In Amplify Console:
- ✅ Build: **Succeed** (green)
- ✅ Deploy: **Succeed** (green)
- ✅ Domain: **Available** (green)
- ✅ SSL: **Active** (green)

### In Browser:
- ✅ Site loads fast (<2 sec)
- ✅ HTTPS works (padlock icon)
- ✅ Mobile responsive
- ✅ No console errors

---

## 🐛 Troubleshooting

### Issue: Build fails
**Solution:** Check `amplify.yml` baseDirectory is `/src`

### Issue: 404 errors
**Solution:** Check artifacts files pattern in `amplify.yml`

### Issue: Domain not working
**Solution:** Wait for DNS propagation (5-60 minutes)

### Issue: SSL pending
**Solution:** Wait 15 minutes, SSL auto-provisions

---

## 📞 Next Steps After Deployment

1. ✅ Verify site at temporary URL
2. ✅ Configure custom domain
3. ✅ Test on mobile devices
4. 📸 Add real product images
5. 📝 Update content
6. 🔧 Connect Lambda for forms
7. 👀 Show client
8. 🤖 Build AI features

---

**Ready to deploy via AWS Console now!**

🚀 Open: https://console.aws.amazon.com/amplify/home
