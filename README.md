# UpanPay – Smart Payments. Global Growth.

![UpanPay Banner](https://upanpay.com/assets/og-image.png)

> **A modern global payment solutions discovery platform for online businesses.**

UpanPay helps e-commerce stores, SaaS companies, online marketplaces, subscription businesses, agencies, freelancers, and enterprise merchants **discover, compare, and optimize** payment solutions worldwide.

📧 **Contact:** salatrir@gmail.com  
🌐 **Website:** https://upanpay.com  
📄 **License:** MIT

---

## 🚀 Quick Start

```bash
# Clone or download the project
git clone https://github.com/YOUR_USERNAME/upanpay.git
cd upanpay

# No build step required — open directly in browser
open index.html
# OR serve with any static server:
npx serve .
# OR
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## 📁 Project Structure

```
upanpay/
├── index.html          # Main HTML — all sections, SEO meta, schemas
├── style.css           # Complete design system — dark/light mode, responsive
├── app.js              # Main orchestrator — inits all modules, blog, UI
├── payments.js         # 20+ payment providers DB + Smart Finder logic
├── checkout.js         # Interactive checkout demo flows
├── analytics.js        # Dashboard analytics + canvas chart
├── merchants.js        # Merchant dashboard state management
├── translations.js     # i18n engine + translations (EN/AR/FR/ES/DE)
├── manifest.json       # PWA manifest
├── sitemap.xml         # SEO sitemap (110+ URLs)
├── robots.txt          # Search engine directives
├── .gitignore          # Git ignores
└── README.md           # This file
```

---

## ✨ Features

### 1. Payment Solution Directory
- 20+ real payment providers across 6 categories
- Card Processing, Digital Wallets, Bank Transfer, BNPL, Mobile, Subscriptions
- Filter by category, save favorites, view details

### 2. Smart Payment Finder (4-step wizard)
- Input: Country + Industry + Monthly Volume + Business Model
- AI-scored recommendations from provider database
- Personalized matching algorithm

### 3. One-Click Checkout Showcase
- Interactive phone demo with 3 flow types
- Guest Checkout, Returning Customer, Express Pay
- Conversion metric displays

### 4. Payment Comparison Tool
- Side-by-side table: Stripe vs PayPal vs Adyen vs Square
- Fees, countries, currencies, settlement speed, API rating, BNPL, subscriptions

### 5. Global Payment Map
- 5 world regions with popular payment methods
- Interactive region cards with market data

### 6. Payment Security Center
- 6 security topic cards: fraud, data protection, PCI DSS, secure checkout, risk management, privacy
- Trust badge display

### 7. Merchant Dashboard
- KPI cards (saved solutions, comparisons, recommendations, savings)
- Animated canvas chart (monthly volume)
- Sidebar navigation mockup
- localStorage persistence

### 8. Knowledge Hub / SEO Blog
- **50 English articles** across 6 topics
- **30 Arabic articles** (RTL supported)
- **30 French articles**
- Language + topic filtering, load more pagination

### 9. Pricing Section
- Free / Professional / Enterprise plans
- Monthly ↔ Annual toggle (20% savings)
- Responsive 3-column grid

### 10. Multi-language Support (5 languages)
- English 🇺🇸, Arabic 🇸🇦 (RTL), French 🇫🇷, Spanish 🇪🇸, German 🇩🇪
- `data-i18n` attribute system for all text
- Language switcher in navbar

---

## 🌐 GitHub Pages Deployment

```bash
# 1. Initialize git
git init
git add .
git commit -m "Launch UpanPay"
git branch -M main

# 2. Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/upanpay.git
git push -u origin main

# 3. Enable GitHub Pages:
#    → GitHub repo → Settings → Pages
#    → Source: Deploy from branch → main → / (root)
#    → Save → Your site: https://YOUR_USERNAME.github.io/upanpay/
```

> **Custom domain:** In GitHub Pages settings, add `upanpay.com` as custom domain. Add a CNAME file:
> ```
> echo "upanpay.com" > CNAME
> git add CNAME && git commit -m "Add custom domain" && git push
> ```

---

## 🎨 Customization Guide

### Colors & Branding
Edit CSS variables at the top of `style.css`:

```css
:root {
  --c-blue:    #4f7cf7;   /* Primary brand blue */
  --c-violet:  #7c3aed;   /* Secondary violet */
  --c-teal:    #0ed4c6;   /* Accent teal */
  --c-green:   #10b981;   /* Success/positive */
}
```

### Adding Payment Providers
In `payments.js`, add to the `providers` array:

```javascript
{
  id: 'myprovider',
  name: 'MyProvider',
  emoji: '💳',
  category: 'card', // card|wallet|bank|bnpl|mobile|subscription
  categoryLabel: 'Card Processing',
  desc: 'Provider description here.',
  tags: ['Tag1', 'Tag2'],
  fee: '2.5% + $0.25',
  countries: 50,
  currencies: 40,
  settlement: '2 days',
  apiRating: 4,       // 1-5
  bnpl: false,
  subscriptions: true,
  regions: ['US', 'EU', 'GB'],
  models: ['b2c', 'b2b'],
  volumes: ['growth', 'scale'],
  score: { ecommerce: 88, saas: 80, ... }
}
```

### Adding Blog Articles
In `app.js`, add to `window.BlogData.articles`:

```javascript
{
  id: 'en-51',
  lang: 'en',           // en|ar|fr
  tag: 'gateways',      // gateways|checkout|security|global|digital|growth
  emoji: '💳',
  title: 'Your Article Title',
  excerpt: 'Brief description of the article content.',
  date: 'Jan 15, 2025',
  readTime: '7 min'
}
```

### Adding Translations
In `translations.js`, add keys to each language object:

```javascript
window.UpanPayTranslations.en['my.new.key'] = 'English text';
window.UpanPayTranslations.ar['my.new.key'] = 'النص العربي';
window.UpanPayTranslations.fr['my.new.key'] = 'Texte français';
```

Then use in HTML: `<span data-i18n="my.new.key">Fallback text</span>`

### Dark/Light Mode Default
Change the default theme in `index.html`:
```html
<!-- Dark (default) -->
<html data-theme="dark">

<!-- Light -->
<html data-theme="light">
```

---

## 🔍 SEO Guide

### Current SEO Implementation
- ✅ Full Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter/X Card tags
- ✅ `schema.org/SoftwareApplication` structured data
- ✅ `schema.org/FinancialService` structured data
- ✅ Canonical URLs
- ✅ `hreflang` alternate tags for 5 languages
- ✅ `sitemap.xml` with 110+ URLs
- ✅ `robots.txt` with crawler directives
- ✅ Semantic HTML5 with ARIA labels
- ✅ Mobile-friendly responsive design
- ✅ Core Web Vitals optimized (no JS framework, pure CSS)

### Target Keywords
| Keyword | Priority |
|---------|----------|
| Smart Payments | High |
| Payment Solutions | High |
| Payment Gateway Comparison | High |
| Online Checkout Optimization | High |
| One Click Checkout | Medium |
| Secure Online Payments | Medium |
| Global Payment Processing | Medium |
| Digital Commerce Solutions | Medium |

### Improving SEO Further
1. **Add real blog pages** — create individual HTML files for each article with full content
2. **Build backlinks** — submit to product directories (Product Hunt, G2, Capterra)
3. **Add review schema** — include `schema.org/Review` on testimonials
4. **Image optimization** — add `alt` attributes to all OG images
5. **Page speed** — use Cloudflare CDN, compress images with WebP
6. **Internal linking** — link blog articles to solution cards

---

## 🔌 Future API Integration Notes

### Planned API Integrations

#### 1. Payment Provider APIs (Live Data)
```javascript
// Example: Fetch live Stripe pricing
const stripeData = await fetch('https://api.upanpay.com/providers/stripe');
const { fee, countries, latency } = await stripeData.json();
```

#### 2. Exchange Rate API
```javascript
// For live currency conversion in comparison tool
const rates = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
```

#### 3. Authentication (JWT)
```javascript
// Merchant accounts with saved dashboards
const user = await fetch('/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});
```

#### 4. Newsletter / Email (SendGrid / Mailchimp)
```javascript
// Contact form integration
await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: { Authorization: `Bearer ${SENDGRID_API_KEY}` },
  body: JSON.stringify(emailPayload)
});
```

#### 5. Analytics (Google Analytics 4)
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📊 Monetization Features

The platform includes UI for 3 revenue streams:

| Stream | Implementation |
|--------|---------------|
| **SaaS Plans** | Free / Professional ($49/mo) / Enterprise (Custom) |
| **Featured Listings** | Payment providers pay to be featured in directory |
| **Premium Tools** | Advanced comparison, API access, white-label |

---

## 📧 Contact & Support

- **Email:** salatrir@gmail.com
- **GitHub Issues:** https://github.com/YOUR_USERNAME/upanpay/issues
- **Documentation:** See this README

---

## ⚠️ Legal Disclaimer

UpanPay is a **payment solutions discovery and comparison platform**. It does not operate as a licensed bank, payment processor, or financial institution. All payment processing, security, and compliance responsibilities remain with the actual payment providers listed in the directory.

---

## 📄 License

MIT License — free to use, modify, and distribute with attribution.

```
MIT License
Copyright (c) 2025 UpanPay
Contact: salatrir@gmail.com
```

---

*Built with ❤️ for the global merchant community.*
