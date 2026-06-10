/**
 * UpanPay – payments.js
 * Payment providers database + solutions directory rendering
 */

window.PaymentsData = {

  providers: [
    // ─── CARD PROCESSING ───────────────────────────────────────
    {
      id: 'stripe',
      name: 'Stripe',
      emoji: '⚡',
      category: 'card',
      categoryLabel: 'Card Processing',
      desc: 'The developer-first payment platform trusted by millions of businesses globally. Best-in-class API and documentation.',
      tags: ['API', 'Global', 'Subscriptions'],
      fee: '2.9% + $0.30',
      countries: 46,
      currencies: 135,
      settlement: '2 days',
      apiRating: 5,
      bnpl: true,
      subscriptions: true,
      regions: ['US', 'EU', 'CA', 'AU', 'GB'],
      models: ['b2c', 'b2b', 'saas', 'marketplace', 'subscription'],
      volumes: ['starter', 'growth', 'scale', 'enterprise'],
      score: { ecommerce: 95, saas: 98, marketplace: 90, subscription: 97, services: 92, travel: 85, gaming: 90, education: 95 }
    },
    {
      id: 'paypal',
      name: 'PayPal',
      emoji: '🅿️',
      category: 'wallet',
      categoryLabel: 'Digital Wallet',
      desc: 'The world\'s most recognized payment brand. Massive buyer base, instant trust, and global acceptance in 200+ countries.',
      tags: ['Global', 'Trusted', 'BNPL'],
      fee: '3.49% + $0.49',
      countries: 200,
      currencies: 25,
      settlement: '1–3 days',
      apiRating: 3,
      bnpl: true,
      subscriptions: true,
      regions: ['US', 'EU', 'AU', 'GB', 'CA', 'OTHER'],
      models: ['b2c', 'b2b', 'marketplace', 'freelance', 'nonprofit'],
      volumes: ['starter', 'growth', 'scale'],
      score: { ecommerce: 90, saas: 70, marketplace: 88, subscription: 75, services: 85, travel: 90, gaming: 78, education: 82 }
    },
    {
      id: 'adyen',
      name: 'Adyen',
      emoji: '🌐',
      category: 'card',
      categoryLabel: 'Card Processing',
      desc: 'Enterprise-grade unified commerce platform. One API for online, mobile, and point-of-sale payments across 30+ countries.',
      tags: ['Enterprise', 'Omnichannel', 'Custom'],
      fee: 'Custom',
      countries: 30,
      currencies: 150,
      settlement: 'Next day',
      apiRating: 4,
      bnpl: true,
      subscriptions: true,
      regions: ['EU', 'US', 'AU', 'SG'],
      models: ['b2b', 'b2b2c', 'marketplace', 'enterprise'],
      volumes: ['scale', 'enterprise'],
      score: { ecommerce: 85, saas: 80, marketplace: 92, subscription: 85, services: 88, travel: 95, gaming: 85, education: 78 }
    },
    {
      id: 'square',
      name: 'Square',
      emoji: '⬛',
      category: 'card',
      categoryLabel: 'Card Processing',
      desc: 'Simple, flat-rate payment processing for small and medium businesses. Perfect for retail and food service.',
      tags: ['SMB', 'POS', 'Simple'],
      fee: '2.6% + $0.10',
      countries: 8,
      currencies: 10,
      settlement: '1–2 days',
      apiRating: 4,
      bnpl: false,
      subscriptions: true,
      regions: ['US', 'CA', 'AU', 'GB'],
      models: ['b2c', 'b2b'],
      volumes: ['starter', 'growth'],
      score: { ecommerce: 80, saas: 65, marketplace: 60, subscription: 75, services: 88, travel: 72, gaming: 60, education: 78 }
    },
    {
      id: 'braintree',
      name: 'Braintree',
      emoji: '🔵',
      category: 'card',
      categoryLabel: 'Card Processing',
      desc: 'PayPal\'s developer-friendly payment gateway. Flexible, powerful APIs with support for cards, wallets, and local methods.',
      tags: ['Developer', 'Flexible', 'PayPal'],
      fee: '2.59% + $0.49',
      countries: 46,
      currencies: 130,
      settlement: '2 days',
      apiRating: 4,
      bnpl: false,
      subscriptions: true,
      regions: ['US', 'EU', 'AU', 'CA'],
      models: ['b2c', 'b2b', 'marketplace'],
      volumes: ['growth', 'scale', 'enterprise'],
      score: { ecommerce: 88, saas: 85, marketplace: 90, subscription: 88, services: 82, travel: 80, gaming: 85, education: 80 }
    },
    {
      id: 'checkout',
      name: 'Checkout.com',
      emoji: '💳',
      category: 'card',
      categoryLabel: 'Card Processing',
      desc: 'High-performance payment infrastructure for scaling businesses. Superior authorization rates and real-time data.',
      tags: ['High-volume', 'Enterprise', 'Optimized'],
      fee: 'Custom',
      countries: 55,
      currencies: 145,
      settlement: 'Next day',
      apiRating: 5,
      bnpl: true,
      subscriptions: true,
      regions: ['EU', 'US', 'AE', 'SG', 'AU'],
      models: ['b2c', 'b2b', 'marketplace', 'enterprise'],
      volumes: ['scale', 'enterprise'],
      score: { ecommerce: 92, saas: 88, marketplace: 94, subscription: 90, services: 85, travel: 95, gaming: 92, education: 80 }
    },

    // ─── DIGITAL WALLETS ────────────────────────────────────────
    {
      id: 'applepay',
      name: 'Apple Pay',
      emoji: '🍎',
      category: 'wallet',
      categoryLabel: 'Digital Wallet',
      desc: 'Native Apple payment experience with Face ID / Touch ID authentication. Zero card number exposure.',
      tags: ['Mobile', 'Secure', 'iOS'],
      fee: 'Free (via processor)',
      countries: 70,
      currencies: 70,
      settlement: 'Via processor',
      apiRating: 4,
      bnpl: false,
      subscriptions: false,
      regions: ['US', 'EU', 'AU', 'CA', 'GB', 'AE', 'SG', 'JP'],
      models: ['b2c'],
      volumes: ['starter', 'growth', 'scale', 'enterprise'],
      score: { ecommerce: 95, saas: 70, marketplace: 90, subscription: 72, services: 80, travel: 92, gaming: 90, education: 75 }
    },
    {
      id: 'googlepay',
      name: 'Google Pay',
      emoji: '🔵',
      category: 'wallet',
      categoryLabel: 'Digital Wallet',
      desc: 'Fast, secure checkout using saved payment info. Works on Android, Chrome, and across millions of sites.',
      tags: ['Android', 'Fast', 'Cross-device'],
      fee: 'Free (via processor)',
      countries: 70,
      currencies: 70,
      settlement: 'Via processor',
      apiRating: 4,
      bnpl: false,
      subscriptions: false,
      regions: ['US', 'EU', 'AU', 'IN', 'SG'],
      models: ['b2c'],
      volumes: ['starter', 'growth', 'scale', 'enterprise'],
      score: { ecommerce: 94, saas: 68, marketplace: 89, subscription: 70, services: 78, travel: 91, gaming: 92, education: 73 }
    },
    {
      id: 'alipay',
      name: 'Alipay',
      emoji: '🀄',
      category: 'wallet',
      categoryLabel: 'Digital Wallet',
      desc: 'China\'s dominant super-app payment platform with 1.3 billion users. Essential for reaching Chinese consumers.',
      tags: ['China', 'Asia', 'High-volume'],
      fee: '0.55–1%',
      countries: 55,
      currencies: 27,
      settlement: '1–3 days',
      apiRating: 3,
      bnpl: true,
      subscriptions: false,
      regions: ['SG', 'JP', 'AE', 'EU'],
      models: ['b2c', 'marketplace'],
      volumes: ['growth', 'scale', 'enterprise'],
      score: { ecommerce: 85, saas: 55, marketplace: 90, subscription: 50, services: 70, travel: 95, gaming: 88, education: 60 }
    },
    {
      id: 'wechatpay',
      name: 'WeChat Pay',
      emoji: '💬',
      category: 'wallet',
      categoryLabel: 'Digital Wallet',
      desc: 'Ubiquitous Chinese social media payment. QR-code-first transactions for in-app and e-commerce.',
      tags: ['China', 'Social', 'QR'],
      fee: '0.6%',
      countries: 25,
      currencies: 16,
      settlement: '2–3 days',
      apiRating: 3,
      bnpl: false,
      subscriptions: false,
      regions: ['SG', 'JP', 'EU'],
      models: ['b2c', 'marketplace'],
      volumes: ['growth', 'scale', 'enterprise'],
      score: { ecommerce: 82, saas: 50, marketplace: 87, subscription: 45, services: 65, travel: 92, gaming: 85, education: 55 }
    },

    // ─── BANK TRANSFER ──────────────────────────────────────────
    {
      id: 'sepa',
      name: 'SEPA Direct Debit',
      emoji: '🏦',
      category: 'bank',
      categoryLabel: 'Bank Transfer',
      desc: 'Low-cost bank debit for the European Union. Ideal for recurring billing and high-value B2B transactions.',
      tags: ['Europe', 'Low-fee', 'B2B'],
      fee: '0.2–0.8%',
      countries: 36,
      currencies: 1,
      settlement: '3–5 days',
      apiRating: 3,
      bnpl: false,
      subscriptions: true,
      regions: ['EU', 'DE', 'FR'],
      models: ['b2b', 'subscription', 'b2b2c'],
      volumes: ['growth', 'scale', 'enterprise'],
      score: { ecommerce: 75, saas: 88, marketplace: 70, subscription: 92, services: 85, travel: 68, gaming: 60, education: 82 }
    },
    {
      id: 'ideal',
      name: 'iDEAL',
      emoji: '🇳🇱',
      category: 'bank',
      categoryLabel: 'Bank Transfer',
      desc: 'Netherlands\' most popular online banking payment method. Covers 98% of Dutch bank accounts.',
      tags: ['Netherlands', 'Trusted', 'Instant'],
      fee: '€0.29–0.99',
      countries: 1,
      currencies: 1,
      settlement: '1 day',
      apiRating: 4,
      bnpl: false,
      subscriptions: false,
      regions: ['EU'],
      models: ['b2c', 'b2b'],
      volumes: ['starter', 'growth', 'scale'],
      score: { ecommerce: 90, saas: 75, marketplace: 85, subscription: 70, services: 80, travel: 78, gaming: 70, education: 75 }
    },
    {
      id: 'upi',
      name: 'UPI (India)',
      emoji: '🇮🇳',
      category: 'bank',
      categoryLabel: 'Bank Transfer',
      desc: 'India\'s real-time payment system connecting 300+ banks. 10 billion+ monthly transactions.',
      tags: ['India', 'Real-time', 'Massive'],
      fee: '0%',
      countries: 1,
      currencies: 1,
      settlement: 'Instant',
      apiRating: 4,
      bnpl: false,
      subscriptions: true,
      regions: ['IN'],
      models: ['b2c', 'b2b', 'marketplace'],
      volumes: ['starter', 'growth', 'scale', 'enterprise'],
      score: { ecommerce: 92, saas: 80, marketplace: 90, subscription: 82, services: 85, travel: 88, gaming: 90, education: 85 }
    },

    // ─── BNPL ────────────────────────────────────────────────────
    {
      id: 'klarna',
      name: 'Klarna',
      emoji: '🩷',
      category: 'bnpl',
      categoryLabel: 'Buy Now Pay Later',
      desc: 'Europe\'s leading BNPL platform. Pay Later, Pay in 3, and financing options that boost conversion by 40%.',
      tags: ['BNPL', 'Europe', 'Conversion'],
      fee: '3.29% + $0.30',
      countries: 45,
      currencies: 20,
      settlement: '2–3 days',
      apiRating: 4,
      bnpl: true,
      subscriptions: false,
      regions: ['EU', 'US', 'AU', 'GB'],
      models: ['b2c'],
      volumes: ['growth', 'scale', 'enterprise'],
      score: { ecommerce: 95, saas: 60, marketplace: 88, subscription: 55, services: 70, travel: 85, gaming: 72, education: 78 }
    },
    {
      id: 'afterpay',
      name: 'Afterpay / Clearpay',
      emoji: '🟢',
      category: 'bnpl',
      categoryLabel: 'Buy Now Pay Later',
      desc: 'Pay in 4 interest-free installments. Massive younger-demographic user base in US, AU, UK, CA.',
      tags: ['BNPL', 'Gen-Z', 'Installments'],
      fee: '4–6% + $0.30',
      countries: 8,
      currencies: 5,
      settlement: '2 days',
      apiRating: 3,
      bnpl: true,
      subscriptions: false,
      regions: ['US', 'AU', 'GB', 'CA'],
      models: ['b2c'],
      volumes: ['growth', 'scale'],
      score: { ecommerce: 92, saas: 50, marketplace: 85, subscription: 45, services: 65, travel: 78, gaming: 70, education: 72 }
    },
    {
      id: 'tabby',
      name: 'Tabby',
      emoji: '🌙',
      category: 'bnpl',
      categoryLabel: 'Buy Now Pay Later',
      desc: 'Leading BNPL platform for the Middle East and North Africa. Tabby installments in Saudi Arabia, UAE, Egypt, Kuwait.',
      tags: ['MENA', 'BNPL', 'Arabic'],
      fee: '3–5%',
      countries: 4,
      currencies: 4,
      settlement: '2–3 days',
      apiRating: 4,
      bnpl: true,
      subscriptions: false,
      regions: ['SA', 'AE', 'EG'],
      models: ['b2c', 'marketplace'],
      volumes: ['growth', 'scale'],
      score: { ecommerce: 93, saas: 55, marketplace: 90, subscription: 50, services: 72, travel: 82, gaming: 68, education: 70 }
    },
    {
      id: 'tamara',
      name: 'Tamara',
      emoji: '💫',
      category: 'bnpl',
      categoryLabel: 'Buy Now Pay Later',
      desc: 'Saudi Arabia\'s first homegrown BNPL solution. Split payments in 2, 3, or 6 installments across MENA.',
      tags: ['Saudi', 'MENA', 'Local'],
      fee: '3–4%',
      countries: 3,
      currencies: 3,
      settlement: '2 days',
      apiRating: 3,
      bnpl: true,
      subscriptions: false,
      regions: ['SA', 'AE'],
      models: ['b2c', 'marketplace'],
      volumes: ['starter', 'growth', 'scale'],
      score: { ecommerce: 90, saas: 50, marketplace: 87, subscription: 45, services: 68, travel: 80, gaming: 65, education: 68 }
    },

    // ─── MOBILE PAYMENTS ────────────────────────────────────────
    {
      id: 'mpesa',
      name: 'M-Pesa',
      emoji: '🦁',
      category: 'mobile',
      categoryLabel: 'Mobile Payments',
      desc: 'Dominant mobile money platform in East Africa. 51+ million users in Kenya, Tanzania, and beyond.',
      tags: ['Africa', 'Mobile Money', 'Unbanked'],
      fee: '1–2%',
      countries: 7,
      currencies: 7,
      settlement: 'Instant',
      apiRating: 3,
      bnpl: false,
      subscriptions: true,
      regions: ['NG', 'ZA', 'OTHER'],
      models: ['b2c', 'b2b'],
      volumes: ['starter', 'growth', 'scale'],
      score: { ecommerce: 80, saas: 55, marketplace: 75, subscription: 65, services: 85, travel: 70, gaming: 60, education: 72 }
    },
    {
      id: 'stcpay',
      name: 'STC Pay',
      emoji: '📱',
      category: 'mobile',
      categoryLabel: 'Mobile Payments',
      desc: 'Saudi Telecom\'s digital wallet. Widely used in Saudi Arabia for online and in-store payments.',
      tags: ['Saudi', 'Mobile', 'Telecom'],
      fee: '1.5–2.5%',
      countries: 2,
      currencies: 2,
      settlement: '1–2 days',
      apiRating: 3,
      bnpl: false,
      subscriptions: false,
      regions: ['SA', 'AE'],
      models: ['b2c'],
      volumes: ['starter', 'growth'],
      score: { ecommerce: 85, saas: 50, marketplace: 80, subscription: 55, services: 70, travel: 75, gaming: 68, education: 65 }
    },
    {
      id: 'fawry',
      name: 'Fawry',
      emoji: '🇪🇬',
      category: 'mobile',
      categoryLabel: 'Mobile Payments',
      desc: 'Egypt\'s leading digital payment network. Serves 40+ million users via 250,000+ service points.',
      tags: ['Egypt', 'MENA', 'Offline+Online'],
      fee: '1–2.5%',
      countries: 1,
      currencies: 1,
      settlement: '1–2 days',
      apiRating: 3,
      bnpl: false,
      subscriptions: true,
      regions: ['EG'],
      models: ['b2c', 'b2b'],
      volumes: ['starter', 'growth', 'scale'],
      score: { ecommerce: 88, saas: 58, marketplace: 82, subscription: 70, services: 80, travel: 72, gaming: 65, education: 75 }
    },
    {
      id: 'mada',
      name: 'Mada (Saudi Arabia)',
      emoji: '🇸🇦',
      category: 'mobile',
      categoryLabel: 'Mobile Payments',
      desc: 'Saudi Arabia\'s national payment network. Every Saudi bank card with Mada branding. Required for Saudi merchants.',
      tags: ['Saudi', 'National', 'Required'],
      fee: '1–2%',
      countries: 1,
      currencies: 1,
      settlement: '1–2 days',
      apiRating: 3,
      bnpl: false,
      subscriptions: false,
      regions: ['SA'],
      models: ['b2c', 'b2b'],
      volumes: ['starter', 'growth', 'scale', 'enterprise'],
      score: { ecommerce: 95, saas: 65, marketplace: 90, subscription: 60, services: 80, travel: 85, gaming: 70, education: 78 }
    },

    // ─── SUBSCRIPTIONS ──────────────────────────────────────────
    {
      id: 'recurly',
      name: 'Recurly',
      emoji: '🔄',
      category: 'subscription',
      categoryLabel: 'Subscription Billing',
      desc: 'Purpose-built subscription billing platform. Intelligent retry logic, dunning management, and revenue recovery.',
      tags: ['Subscriptions', 'Billing', 'Recovery'],
      fee: '0.9% + processing',
      countries: 42,
      currencies: 20,
      settlement: '2 days',
      apiRating: 4,
      bnpl: false,
      subscriptions: true,
      regions: ['US', 'EU', 'CA', 'AU'],
      models: ['saas', 'subscription', 'b2b'],
      volumes: ['growth', 'scale', 'enterprise'],
      score: { ecommerce: 70, saas: 97, marketplace: 65, subscription: 98, services: 88, travel: 60, gaming: 85, education: 90 }
    },
    {
      id: 'chargebee',
      name: 'Chargebee',
      emoji: '🐝',
      category: 'subscription',
      categoryLabel: 'Subscription Billing',
      desc: 'Revenue growth management for subscription businesses. Automates billing, trials, coupons, and revenue recognition.',
      tags: ['SaaS Billing', 'Revenue Ops', 'Automation'],
      fee: '0.75% + processing',
      countries: 50,
      currencies: 100,
      settlement: 'Via processor',
      apiRating: 5,
      bnpl: false,
      subscriptions: true,
      regions: ['US', 'EU', 'IN', 'SG', 'AU'],
      models: ['saas', 'subscription', 'b2b', 'b2b2c'],
      volumes: ['growth', 'scale', 'enterprise'],
      score: { ecommerce: 72, saas: 98, marketplace: 68, subscription: 98, services: 90, travel: 62, gaming: 82, education: 92 }
    },
    {
      id: 'paddle',
      name: 'Paddle',
      emoji: '🏓',
      category: 'subscription',
      categoryLabel: 'Subscription Billing',
      desc: 'The complete payments & billing solution for software companies. Acts as Merchant of Record — they handle tax and compliance.',
      tags: ['Software', 'MoR', 'Global Tax'],
      fee: '5% + $0.50',
      countries: 200,
      currencies: 20,
      settlement: '2–4 days',
      apiRating: 4,
      bnpl: false,
      subscriptions: true,
      regions: ['US', 'EU', 'GB', 'AU', 'OTHER'],
      models: ['saas', 'subscription'],
      volumes: ['starter', 'growth', 'scale'],
      score: { ecommerce: 60, saas: 96, marketplace: 55, subscription: 95, services: 75, travel: 55, gaming: 88, education: 90 }
    }
  ],

  // ─── FINDER LOGIC ────────────────────────────────────────────
  findSolutions(criteria) {
    const { country, industry, volume, model } = criteria;
    if (!country && !industry && !volume && !model) return this.providers.slice(0, 6);

    return this.providers
      .map(p => {
        let score = 0;
        let matches = 0;

        if (country) {
          const regionMatch = this.getRegionsForCountry(country);
          if (p.regions.some(r => regionMatch.includes(r) || r === 'OTHER')) {
            score += 30; matches++;
          }
        }

        if (industry && p.score[industry]) {
          score += p.score[industry] * 0.4; matches++;
        }

        if (volume && p.volumes.includes(volume)) {
          score += 20; matches++;
        }

        if (model && p.models.some(m =>
          model === 'b2c' ? m === 'b2c' :
          model === 'b2b' ? m === 'b2b' || m === 'b2b2c' :
          m === model
        )) {
          score += 25; matches++;
        }

        return { provider: p, score: matches > 0 ? score / (matches || 1) : 0 };
      })
      .filter(r => r.score > 15)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(r => r.provider);
  },

  getRegionsForCountry(country) {
    const map = {
      'US': ['US'], 'GB': ['GB', 'EU'], 'EU': ['EU', 'DE', 'FR'],
      'CA': ['CA'], 'AU': ['AU'], 'DE': ['EU', 'DE'],
      'FR': ['EU', 'FR'], 'AE': ['AE', 'SA'], 'SA': ['SA', 'AE'],
      'EG': ['EG'], 'IN': ['IN'], 'BR': ['OTHER'], 'MX': ['OTHER'],
      'NG': ['NG', 'ZA'], 'ZA': ['ZA'], 'SG': ['SG'], 'JP': ['JP'],
      'OTHER': ['OTHER']
    };
    return map[country] || ['OTHER'];
  },

  // ─── CATEGORY FILTER ────────────────────────────────────────
  filterByCategory(category) {
    if (category === 'all') return this.providers;
    return this.providers.filter(p => p.category === category);
  }
};

// ─── SOLUTIONS DIRECTORY RENDERER ─────────────────────────────
window.SolutionsDirectory = {
  currentFilter: 'all',
  displayCount: 9,

  init() {
    this.render();
    this.bindFilters();
  },

  render() {
    const grid = document.getElementById('solutionsGrid');
    if (!grid) return;

    const providers = window.PaymentsData.filterByCategory(this.currentFilter)
                                          .slice(0, this.displayCount);
    grid.innerHTML = '';

    if (providers.length === 0) {
      grid.innerHTML = '<p style="color: var(--c-text-3); text-align:center; grid-column: 1/-1; padding: 2rem;">No solutions found for this category.</p>';
      return;
    }

    providers.forEach((p, i) => {
      const card = this.buildCard(p);
      card.style.animationDelay = `${i * 60}ms`;
      card.style.animation = 'slideUp 0.4s ease both';
      grid.appendChild(card);
    });
  },

  buildCard(p) {
    const stars = '★'.repeat(p.apiRating) + '☆'.repeat(5 - p.apiRating);
    const card = document.createElement('div');
    card.className = 'solution-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="solution-logo" aria-hidden="true">${p.emoji}</div>
      <div class="solution-category">${p.categoryLabel}</div>
      <div class="solution-name">${p.name}</div>
      <div class="solution-desc">${p.desc}</div>
      <div class="solution-meta">
        ${p.tags.map(t => `<span class="solution-tag">${t}</span>`).join('')}
      </div>
      <div class="solution-fee">Transaction fee: <strong>${p.fee}</strong></div>
      <div class="solution-extra" style="font-size:0.78rem; color:var(--c-text-3); margin-bottom:1rem;">
        🌍 ${p.countries} countries &nbsp;·&nbsp; 💱 ${p.currencies} currencies &nbsp;·&nbsp; API ${stars}
      </div>
      <div class="solution-actions">
        <button class="btn btn-outline btn-sm" onclick="window.MerchantDash.saveSolution('${p.id}', '${p.name}')">Save</button>
        <button class="btn btn-primary btn-sm" onclick="window.SolutionsDirectory.viewDetails('${p.id}')">Details</button>
      </div>
    `;
    return card;
  },

  viewDetails(id) {
    const p = window.PaymentsData.providers.find(x => x.id === id);
    if (!p) return;
    window.showToast(`Opening ${p.name} details…`, 'success');
  },

  bindFilters() {
    document.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        this.currentFilter = btn.dataset.filter;
        this.render();
      });
    });
  }
};

// ─── SMART PAYMENT FINDER ──────────────────────────────────────
window.PaymentFinder = {
  currentStep: 1,
  totalSteps: 4,
  selections: { country: '', industry: '', volume: '', model: '' },

  init() {
    this.bindNavigation();
    this.bindSelections();
  },

  bindNavigation() {
    const prevBtn = document.getElementById('finderPrev');
    const nextBtn = document.getElementById('finderNext');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentStep < this.totalSteps) {
          this.goToStep(this.currentStep + 1);
        } else {
          this.showResults();
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentStep > 1) {
          this.goToStep(this.currentStep - 1);
        }
      });
    }

    const resetBtn = document.getElementById('finderReset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.reset());
    }
  },

  bindSelections() {
    // Country
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
      countrySelect.addEventListener('change', e => {
        this.selections.country = e.target.value;
      });
    }

    // Industry
    document.querySelectorAll('.industry-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.industry-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selections.industry = btn.dataset.value;
      });
    });

    // Volume
    document.querySelectorAll('[name="volume"]').forEach(radio => {
      radio.addEventListener('change', e => {
        this.selections.volume = e.target.value;
      });
    });

    // Model
    document.querySelectorAll('.model-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selections.model = btn.dataset.value;
      });
    });
  },

  goToStep(step) {
    // Hide current
    const current = document.querySelector(`.finder-step-content[data-step="${this.currentStep}"]`);
    if (current) current.classList.remove('active');

    // Update indicators
    const currentIndicator = document.querySelector(`.step[data-step="${this.currentStep}"]`);
    if (currentIndicator) {
      currentIndicator.classList.remove('active');
      currentIndicator.classList.add('completed');
    }

    this.currentStep = step;

    // Show new
    const next = document.querySelector(`.finder-step-content[data-step="${this.currentStep}"]`);
    if (next) next.classList.add('active');

    const nextIndicator = document.querySelector(`.step[data-step="${this.currentStep}"]`);
    if (nextIndicator) nextIndicator.classList.add('active');

    // Update buttons
    const prevBtn = document.getElementById('finderPrev');
    const nextBtn = document.getElementById('finderNext');

    if (prevBtn) prevBtn.style.display = this.currentStep > 1 ? 'inline-flex' : 'none';
    if (nextBtn) {
      nextBtn.textContent = this.currentStep === this.totalSteps ? 'Find My Solutions →' : 'Continue →';
    }
  },

  showResults() {
    const form = document.querySelector('.finder-card');
    const results = document.getElementById('finderResults');
    const grid = document.getElementById('resultsGrid');

    if (!results || !grid) return;

    const recommendations = window.PaymentsData.findSolutions(this.selections);

    grid.innerHTML = '';
    recommendations.forEach(p => {
      const card = window.SolutionsDirectory.buildCard(p);
      grid.appendChild(card);
    });

    if (form) form.style.display = 'none';
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  reset() {
    this.currentStep = 1;
    this.selections = { country: '', industry: '', volume: '', model: '' };

    const form = document.querySelector('.finder-card');
    const results = document.getElementById('finderResults');

    if (form) form.style.display = 'block';
    if (results) results.style.display = 'none';

    // Reset steps UI
    document.querySelectorAll('.finder-step-content').forEach(s => s.classList.remove('active'));
    const first = document.querySelector('.finder-step-content[data-step="1"]');
    if (first) first.classList.add('active');

    document.querySelectorAll('.step').forEach(s => {
      s.classList.remove('active', 'completed');
    });
    const firstStep = document.querySelector('.step[data-step="1"]');
    if (firstStep) firstStep.classList.add('active');

    const prevBtn = document.getElementById('finderPrev');
    const nextBtn = document.getElementById('finderNext');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.textContent = 'Continue →';

    // Clear selections UI
    document.querySelectorAll('.industry-btn, .model-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[name="volume"]').forEach(r => r.checked = false);
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) countrySelect.value = '';
  }
};
