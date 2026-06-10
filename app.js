/**
 * UpanPay – app.js
 * Main application orchestrator
 * Initializes all modules, blog, UI interactions
 */

// ─── BLOG ARTICLES DATABASE ──────────────────────────────────────

window.BlogData = {
  articles: [
    // ── ENGLISH ARTICLES (50) ─────────────────────────────────
    { id: 'en-1',  lang: 'en', tag: 'gateways',  emoji: '⚡', title: 'The 10 Best Payment Gateways for E-Commerce in 2025', excerpt: 'A comprehensive comparison of the top payment gateways including Stripe, PayPal, Adyen, and Checkout.com — covering fees, features, and global reach.', date: 'Dec 12, 2024', readTime: '8 min' },
    { id: 'en-2',  lang: 'en', tag: 'checkout',  emoji: '🛒', title: 'How to Reduce Cart Abandonment by 65% with Smarter Checkout', excerpt: 'Proven UX strategies, one-click flows, and payment option diversification that dramatically reduce the industry-average 70% cart abandonment rate.', date: 'Dec 10, 2024', readTime: '7 min' },
    { id: 'en-3',  lang: 'en', tag: 'security',  emoji: '🛡️', title: 'PCI DSS Compliance: A Plain-English Guide for Online Merchants', excerpt: 'Everything you need to know about PCI DSS levels, SAQ types, scope reduction, and how to achieve compliance without breaking the bank.', date: 'Dec 8, 2024', readTime: '10 min' },
    { id: 'en-4',  lang: 'en', tag: 'global',    emoji: '🌍', title: 'Accepting Payments in the Middle East: The Complete Guide', excerpt: 'From Mada in Saudi Arabia to Fawry in Egypt, a practical guide to local payment methods across the Arab world and MENA region.', date: 'Dec 5, 2024', readTime: '9 min' },
    { id: 'en-5',  lang: 'en', tag: 'digital',   emoji: '📱', title: 'Apple Pay vs Google Pay: Which Is Better for Your Store?', excerpt: 'Side-by-side analysis of the two dominant mobile wallets — conversion rates, integration complexity, fees, and regional adoption data.', date: 'Dec 3, 2024', readTime: '6 min' },
    { id: 'en-6',  lang: 'en', tag: 'growth',    emoji: '📈', title: 'How Subscription Businesses Can Reduce Failed Payments by 40%', excerpt: 'Dunning management, smart retry logic, account updater services, and proactive communication strategies that recover failed recurring revenue.', date: 'Nov 30, 2024', readTime: '8 min' },
    { id: 'en-7',  lang: 'en', tag: 'gateways',  emoji: '🔵', title: 'Stripe vs PayPal vs Adyen: Which Gateway Wins in 2025?', excerpt: 'The definitive 2025 comparison covering pricing, developer experience, global support, fraud tools, and which payment processor fits your business model.', date: 'Nov 28, 2024', readTime: '12 min' },
    { id: 'en-8',  lang: 'en', tag: 'checkout',  emoji: '⚡', title: 'One-Click Checkout: How to Implement It and Double Conversions', excerpt: 'Technical implementation guide for one-click payments using Stripe Link, Shop Pay, and PayPal One Touch, with real conversion data.', date: 'Nov 26, 2024', readTime: '7 min' },
    { id: 'en-9',  lang: 'en', tag: 'security',  emoji: '🔐', title: 'How 3D Secure 2.0 Reduces Fraud Without Hurting Conversions', excerpt: 'Understanding EMV 3DS2, risk-based authentication, friction-free flows, and how to configure your payment processor for optimal fraud prevention.', date: 'Nov 24, 2024', readTime: '9 min' },
    { id: 'en-10', lang: 'en', tag: 'global',    emoji: '🌏', title: 'Selling in Southeast Asia: Payment Methods That Actually Work', excerpt: 'GrabPay, GoPay, DANA, TrueMoney, and OVO — the complete guide to accepting payments across Indonesia, Thailand, Singapore, and the Philippines.', date: 'Nov 22, 2024', readTime: '10 min' },
    { id: 'en-11', lang: 'en', tag: 'digital',   emoji: '🀄', title: 'How to Accept Alipay and WeChat Pay as a Non-Chinese Business', excerpt: 'Step-by-step guide to enabling Chinese wallet payments on your international e-commerce store — from merchant registration to live transactions.', date: 'Nov 20, 2024', readTime: '8 min' },
    { id: 'en-12', lang: 'en', tag: 'growth',    emoji: '💡', title: '7 Payment Optimizations That Can Add $100K to Your Annual Revenue', excerpt: 'Real case studies of how merchants boosted revenue by optimizing checkout UX, adding local payment methods, and reducing authorization failures.', date: 'Nov 18, 2024', readTime: '9 min' },
    { id: 'en-13', lang: 'en', tag: 'gateways',  emoji: '🏓', title: 'Paddle vs Stripe for SaaS: Which Is Better for Software Companies?', excerpt: 'Merchant of Record vs payment processor model explained, with full fee analysis, tax compliance comparison, and use-case recommendations.', date: 'Nov 16, 2024', readTime: '8 min' },
    { id: 'en-14', lang: 'en', tag: 'checkout',  emoji: '📲', title: 'Mobile Checkout Optimization: 15 Changes That Lift Mobile Conversion', excerpt: 'From thumb-friendly button placement to autofill support and biometric payment integration — practical mobile checkout improvements with A/B test data.', date: 'Nov 14, 2024', readTime: '7 min' },
    { id: 'en-15', lang: 'en', tag: 'security',  emoji: '⚠️', title: 'Chargebacks: How to Prevent, Fight, and Win Them', excerpt: 'A merchant\'s complete guide to chargeback prevention, compelling evidence preparation, representment strategy, and chargeback insurance options.', date: 'Nov 12, 2024', readTime: '10 min' },
    { id: 'en-16', lang: 'en', tag: 'global',    emoji: '🇮🇳', title: 'UPI: India\'s Payment Revolution and What It Means for Global Commerce', excerpt: 'Understanding India\'s Unified Payments Interface — 10 billion monthly transactions, real-time settlement, and how foreign businesses can participate.', date: 'Nov 10, 2024', readTime: '8 min' },
    { id: 'en-17', lang: 'en', tag: 'digital',   emoji: '🩷', title: 'Klarna, Afterpay, or Affirm: Which BNPL Should You Add?', excerpt: 'Detailed comparison of the three largest Buy Now Pay Later providers — customer demographics, merchant fees, conversion impact, and integration effort.', date: 'Nov 8, 2024', readTime: '8 min' },
    { id: 'en-18', lang: 'en', tag: 'growth',    emoji: '🏢', title: 'B2B Payments: How to Accept and Optimize Business-to-Business Transactions', excerpt: 'ACH, SEPA, wire transfers, virtual cards, and invoice financing — the complete guide to B2B payment acceptance for SaaS and service businesses.', date: 'Nov 6, 2024', readTime: '9 min' },
    { id: 'en-19', lang: 'en', tag: 'gateways',  emoji: '🔶', title: 'Checkout.com Review 2025: Is It Worth It for High-Volume Merchants?', excerpt: 'Deep dive into Checkout.com\'s authorization rates, pricing model, risk tools, developer API, and real merchant experiences from enterprise users.', date: 'Nov 4, 2024', readTime: '10 min' },
    { id: 'en-20', lang: 'en', tag: 'checkout',  emoji: '🛍️', title: 'The Psychology of Checkout: Why Customers Abandon and How to Stop It', excerpt: 'Behavioral psychology principles applied to checkout design — trust signals, progress indicators, guest checkout, and price presentation strategies.', date: 'Nov 2, 2024', readTime: '8 min' },
    { id: 'en-21', lang: 'en', tag: 'security',  emoji: '🤖', title: 'AI-Powered Fraud Detection: How Modern Platforms Stop Bad Actors', excerpt: 'Machine learning models, device fingerprinting, behavioral biometrics, and velocity rules — how payment processors use AI to block fraud in real time.', date: 'Oct 31, 2024', readTime: '9 min' },
    { id: 'en-22', lang: 'en', tag: 'global',    emoji: '🌎', title: 'Latin America Payments Guide: Brazil, Mexico, Colombia, and Beyond', excerpt: 'Boleto Bancário, PIX, OXXO, PSE, Mercado Pago — navigating the complex and fast-growing world of Latin American digital payments.', date: 'Oct 28, 2024', readTime: '11 min' },
    { id: 'en-23', lang: 'en', tag: 'digital',   emoji: '🔗', title: 'Crypto Payments for E-Commerce: Opportunity or Liability in 2025?', excerpt: 'Honest assessment of cryptocurrency payment acceptance including Bitcoin, stablecoins, regulatory considerations, and real merchant conversion data.', date: 'Oct 26, 2024', readTime: '8 min' },
    { id: 'en-24', lang: 'en', tag: 'growth',    emoji: '⭐', title: 'How Trust Signals at Checkout Increase Conversions by 27%', excerpt: 'Security badges, money-back guarantees, SSL indicators, reviews, and payment logo placement — A/B test results from 50+ checkout optimizations.', date: 'Oct 24, 2024', readTime: '6 min' },
    { id: 'en-25', lang: 'en', tag: 'gateways',  emoji: '🐝', title: 'Chargebee vs Recurly vs Stripe Billing: Best Subscription Platform?', excerpt: 'Subscription billing platform showdown — feature comparison, pricing, dunning management, integrations, and recommendation by business stage.', date: 'Oct 22, 2024', readTime: '10 min' },
    { id: 'en-26', lang: 'en', tag: 'checkout',  emoji: '💰', title: 'How to Show Pricing in Local Currencies Without Losing Trust', excerpt: 'Currency detection, geolocation accuracy, rounding strategies, and how transparent local pricing increases international conversion rates.', date: 'Oct 20, 2024', readTime: '7 min' },
    { id: 'en-27', lang: 'en', tag: 'security',  emoji: '🔒', title: 'Tokenization vs Encryption: What Every Merchant Needs to Know', excerpt: 'Clear explanation of payment tokenization, encryption, and vault solutions — how they reduce PCI scope and protect customer payment data.', date: 'Oct 18, 2024', readTime: '7 min' },
    { id: 'en-28', lang: 'en', tag: 'global',    emoji: '🌍', title: 'Africa Fintech Boom: M-Pesa, OPay, Wave, and the Unbanked Revolution', excerpt: 'How mobile money is transforming commerce across Sub-Saharan Africa, and how international businesses can tap into 1.3 billion new digital consumers.', date: 'Oct 16, 2024', readTime: '9 min' },
    { id: 'en-29', lang: 'en', tag: 'digital',   emoji: '🏦', title: 'Open Banking Payments: The Future of Account-to-Account Transfers', excerpt: 'PSD2, open banking APIs, bank pay, and how instant account-to-account payments are disrupting traditional card-based commerce in Europe.', date: 'Oct 14, 2024', readTime: '9 min' },
    { id: 'en-30', lang: 'en', tag: 'growth',    emoji: '🎯', title: 'Payment Analytics: The Metrics Every Merchant Must Track', excerpt: 'Authorization rate, chargeback ratio, decline rate, checkout conversion, and LTV by payment method — building a payments analytics dashboard.', date: 'Oct 12, 2024', readTime: '8 min' },
    { id: 'en-31', lang: 'en', tag: 'gateways',  emoji: '🇸🇦', title: 'Best Payment Gateways for Saudi Arabia and the Gulf Region', excerpt: 'Moyasar, HyperPay, PayTabs, and Checkout.com MENA — comparing payment gateway options for Saudi merchants and GCC businesses.', date: 'Oct 10, 2024', readTime: '8 min' },
    { id: 'en-32', lang: 'en', tag: 'checkout',  emoji: '🧠', title: 'Saved Payment Methods: How to Increase Repeat Purchase Rate by 3X', excerpt: 'Implementation guide for saved cards, tokenized wallets, and one-tap repeat checkout — and how they transform customer lifetime value.', date: 'Oct 8, 2024', readTime: '7 min' },
    { id: 'en-33', lang: 'en', tag: 'security',  emoji: '🚨', title: 'Card Testing Attacks: How to Detect and Stop Them Immediately', excerpt: 'What card testing is, how to detect velocity patterns, CAPTCHA implementation, rate limiting, and network rules to stop carding attacks.', date: 'Oct 6, 2024', readTime: '8 min' },
    { id: 'en-34', lang: 'en', tag: 'global',    emoji: '🇯🇵', title: 'Selling in Japan: JCB, PayPay, and the Japanese Payments Landscape', excerpt: 'Japan\'s unique payment culture — why credit card preferences differ, how cash-based convenience store payments still dominate, and how to win.', date: 'Oct 4, 2024', readTime: '8 min' },
    { id: 'en-35', lang: 'en', tag: 'digital',   emoji: '📊', title: 'BNPL in 2025: Growth, Regulation, and What It Means for Merchants', excerpt: 'The global BNPL market outlook, new regulatory pressures, consumer defaults, and how merchants should evaluate BNPL provider partnerships.', date: 'Oct 2, 2024', readTime: '9 min' },
    { id: 'en-36', lang: 'en', tag: 'growth',    emoji: '🚀', title: 'International Expansion Checklist: Payments, Tax, and Compliance', excerpt: 'A practical expansion checklist covering local payment methods, VAT/GST obligations, currency strategy, and banking setup for global commerce.', date: 'Sep 30, 2024', readTime: '11 min' },
    { id: 'en-37', lang: 'en', tag: 'gateways',  emoji: '🌐', title: 'Adyen Review: Is It the Right Payment Platform for Enterprise?', excerpt: 'In-depth analysis of Adyen\'s unified commerce platform, pricing model, authorization rates, data insights, and which business types it suits best.', date: 'Sep 28, 2024', readTime: '10 min' },
    { id: 'en-38', lang: 'en', tag: 'checkout',  emoji: '🎨', title: 'Checkout Page Design: 20 Rules for Maximum Conversion', excerpt: 'Visual hierarchy, form field optimization, error message design, CTA button psychology, and trust indicator placement for checkout pages.', date: 'Sep 26, 2024', readTime: '9 min' },
    { id: 'en-39', lang: 'en', tag: 'security',  emoji: '📋', title: 'GDPR and Payment Data: What Online Businesses Must Do Right Now', excerpt: 'GDPR obligations for payment processors, data retention limits, consent management, DPA requirements, and practical compliance checklist.', date: 'Sep 24, 2024', readTime: '9 min' },
    { id: 'en-40', lang: 'en', tag: 'global',    emoji: '🇩🇪', title: 'German Payments: Why SEPA and Invoice Dominate E-Commerce', excerpt: 'Germany\'s distinct payment preferences — SEPA Direct Debit, Klarna invoice, SOFORT, and why German consumers distrust credit cards.', date: 'Sep 22, 2024', readTime: '7 min' },
    { id: 'en-41', lang: 'en', tag: 'digital',   emoji: '🔮', title: 'The Future of Payments: CBDCs, Embedded Finance, and Real-Time Rails', excerpt: 'Central Bank Digital Currencies, embedded payment APIs, real-time payment networks — how the payments infrastructure of 2030 is being built today.', date: 'Sep 20, 2024', readTime: '10 min' },
    { id: 'en-42', lang: 'en', tag: 'growth',    emoji: '💼', title: 'Freelancer Payment Guide: Getting Paid Globally Without Losing 10% in Fees', excerpt: 'Wise, Payoneer, Stripe Atlas, and direct bank transfers — how freelancers and agencies can receive international payments cheaply and reliably.', date: 'Sep 18, 2024', readTime: '8 min' },
    { id: 'en-43', lang: 'en', tag: 'gateways',  emoji: '💳', title: 'Braintree vs Stripe: Deep Comparison for Marketplace Businesses', excerpt: 'Feature-by-feature comparison of Braintree and Stripe Connect for marketplace payments, split settlements, and multi-party transaction routing.', date: 'Sep 16, 2024', readTime: '9 min' },
    { id: 'en-44', lang: 'en', tag: 'checkout',  emoji: '🏃', title: 'Speed Matters: How Page Load Time Affects Payment Conversion', excerpt: 'Every 100ms matters. Data on how checkout page speed impacts conversions, Core Web Vitals for payment pages, and optimization techniques.', date: 'Sep 14, 2024', readTime: '7 min' },
    { id: 'en-45', lang: 'en', tag: 'security',  emoji: '🕵️', title: 'Friendly Fraud: The $100 Billion Problem Merchants Must Address', excerpt: 'Understanding first-party fraud, compelling evidence strategy, dispute resolution automation, and how to identify and block repeat offenders.', date: 'Sep 12, 2024', readTime: '9 min' },
    { id: 'en-46', lang: 'en', tag: 'global',    emoji: '🌟', title: 'Cross-Border E-Commerce: 5 Payment Mistakes That Cost You Sales', excerpt: 'Currency mismatch, missing local payment methods, hidden fees, checkout language barriers, and compliance gaps that kill international conversion.', date: 'Sep 10, 2024', readTime: '8 min' },
    { id: 'en-47', lang: 'en', tag: 'digital',   emoji: '📲', title: 'Super Apps and Embedded Payments: WeChat, Grab, and the New Commerce', excerpt: 'How super app ecosystems integrate payments into daily life, and why Western merchants need to understand embedded finance to compete in Asia.', date: 'Sep 8, 2024', readTime: '9 min' },
    { id: 'en-48', lang: 'en', tag: 'growth',    emoji: '🎓', title: 'Payment Optimization ROI Calculator: Estimating the Value of Better Checkout', excerpt: 'A framework for calculating the revenue impact of checkout improvements, A/B test methodology for payments, and business case templates.', date: 'Sep 6, 2024', readTime: '7 min' },
    { id: 'en-49', lang: 'en', tag: 'gateways',  emoji: '🇪🇺', title: 'Best Payment Gateways for European Businesses in 2025', excerpt: 'Mollie, Stripe, Adyen, and Worldline compared for European merchants — PSD2 compliance, local payment methods, and multi-currency support.', date: 'Sep 4, 2024', readTime: '9 min' },
    { id: 'en-50', lang: 'en', tag: 'checkout',  emoji: '✅', title: 'The Ultimate Checkout Optimization Checklist: 50 Points to Review', excerpt: 'The most comprehensive checkout optimization checklist covering UX, performance, payment methods, security signals, localization, and accessibility.', date: 'Sep 2, 2024', readTime: '12 min' },

    // ── ARABIC ARTICLES (30) ─────────────────────────────────
    { id: 'ar-1',  lang: 'ar', tag: 'gateways',  emoji: '💳', title: 'أفضل 10 بوابات دفع لمتاجر التجارة الإلكترونية في 2025', excerpt: 'مقارنة شاملة لأبرز بوابات الدفع العالمية والمحلية، تشمل الرسوم والمميزات والتغطية الجغرافية لتساعدك في اختيار الحل الأمثل لمتجرك الإلكتروني.', date: 'ديسمبر 12، 2024', readTime: '8 دقائق' },
    { id: 'ar-2',  lang: 'ar', tag: 'security',  emoji: '🛡️', title: 'دليل الامتثال لمعيار PCI DSS: كل ما يحتاجه التاجر الإلكتروني', excerpt: 'شرح مبسط لمتطلبات معيار PCI DSS وكيفية تحقيق الامتثال وتقليل النطاق وحماية بيانات العملاء، بلغة واضحة بعيدة عن التعقيد التقني.', date: 'ديسمبر 8، 2024', readTime: '10 دقائق' },
    { id: 'ar-3',  lang: 'ar', tag: 'global',    emoji: '🌍', title: 'دليل المدفوعات في السعودية: مدى، STC Pay، وتابي وتمارة', excerpt: 'كل ما تحتاج معرفته عن طرق الدفع في المملكة العربية السعودية، من بطاقة مدى الوطنية إلى محافظ BNPL المحلية والدفع عبر الجوال.', date: 'ديسمبر 5، 2024', readTime: '9 دقائق' },
    { id: 'ar-4',  lang: 'ar', tag: 'checkout',  emoji: '🛒', title: 'كيف تخفض معدل التخلي عن السلة بنسبة 65% بتحسين تجربة الدفع', excerpt: 'استراتيجيات UX مثبتة وتدفقات دفع ذكية وتنويع خيارات الدفع لتقليل معدل التخلي عن السلة بشكل جذري وزيادة معدلات التحويل.', date: 'ديسمبر 2، 2024', readTime: '7 دقائق' },
    { id: 'ar-5',  lang: 'ar', tag: 'digital',   emoji: '📱', title: 'المحافظ الرقمية في الخليج: Apple Pay أم Google Pay أم STC Pay؟', excerpt: 'تحليل مقارن للمحافظ الرقمية الأكثر استخداماً في منطقة الخليج العربي، ومعدلات التحويل ومتطلبات التكامل والتوزيع الجغرافي.', date: 'نوفمبر 28، 2024', readTime: '6 دقائق' },
    { id: 'ar-6',  lang: 'ar', tag: 'gateways',  emoji: '⚡', title: 'Stripe مقابل PayPal: أيهما أفضل للمتاجر العربية في 2025؟', excerpt: 'المقارنة الكاملة بين أبرز بوابتَي دفع عالميتين من حيث الأسعار وتجربة المطور والدعم الإقليمي وأدوات الاحتيال والمزايا المناسبة لكل نموذج أعمال.', date: 'نوفمبر 24، 2024', readTime: '12 دقيقة' },
    { id: 'ar-7',  lang: 'ar', tag: 'growth',    emoji: '📈', title: '7 تحسينات في المدفوعات تضيف 100 ألف دولار لإيراداتك السنوية', excerpt: 'دراسات حالة حقيقية توضح كيف حقق التجار نمواً كبيراً في الإيرادات عبر تحسين تجربة الدفع وإضافة طرق دفع محلية وتقليل معدلات الرفض.', date: 'نوفمبر 20، 2024', readTime: '9 دقائق' },
    { id: 'ar-8',  lang: 'ar', tag: 'security',  emoji: '🔐', title: 'كيف تحمي متجرك من الاحتيال الإلكتروني: الدليل الشامل', excerpt: 'تقنيات كشف الاحتيال بالذكاء الاصطناعي والتحقق الثنائي و3D Secure 2.0 وإدارة المخاطر لحماية أعمالك وعملائك في بيئة الدفع الرقمي.', date: 'نوفمبر 16، 2024', readTime: '9 دقائق' },
    { id: 'ar-9',  lang: 'ar', tag: 'global',    emoji: '🇪🇬', title: 'مدفوعات مصر: فوري وVodafone Cash ومحافظ البنوك الرقمية', excerpt: 'دليل شامل لطرق الدفع الإلكتروني في مصر، من شبكة فوري الواسعة إلى المحافظ الرقمية والبنوك الرقمية والمدفوعات الفورية.', date: 'نوفمبر 12، 2024', readTime: '8 دقائق' },
    { id: 'ar-10', lang: 'ar', tag: 'digital',   emoji: '🩷', title: 'تابي وتمارة: دليل التاجر للاشتري الآن وادفع لاحقاً في منطقة MENA', excerpt: 'مقارنة تفصيلية بين منصتَي BNPL الرائدتين في الشرق الأوسط وشمال أفريقيا، تشمل رسوم التاجر والتحويل والتكامل والجمهور المستهدف.', date: 'نوفمبر 8، 2024', readTime: '8 دقائق' },
    { id: 'ar-11', lang: 'ar', tag: 'checkout',  emoji: '📲', title: 'تحسين الدفع عبر الجوال: 15 تغييراً يرفع معدل التحويل', excerpt: 'من توضع الأزرار الملائم للإبهام إلى دعم الملء التلقائي والمصادقة البيومترية — تحسينات عملية محسوبة بنتائج اختبار A/B حقيقية.', date: 'نوفمبر 4، 2024', readTime: '7 دقائق' },
    { id: 'ar-12', lang: 'ar', tag: 'growth',    emoji: '🚀', title: 'التوسع الدولي: قائمة مراجعة المدفوعات والضرائب والامتثال', excerpt: 'قائمة مراجعة عملية تغطي طرق الدفع المحلية وتزامات ضريبة القيمة المضافة واستراتيجية العملات وإعداد الحسابات البنكية للتجارة العالمية.', date: 'أكتوبر 30، 2024', readTime: '11 دقيقة' },
    { id: 'ar-13', lang: 'ar', tag: 'gateways',  emoji: '🌐', title: 'أفضل بوابات الدفع للسوق السعودي والخليجي في 2025', excerpt: 'مقارنة شاملة لـ Moyasar وHyperPay وPayTabs وCheckout.com لمنطقة MENA — الرسوم ومعدلات الترخيص والتكامل والدعم الفني.', date: 'أكتوبر 26، 2024', readTime: '8 دقائق' },
    { id: 'ar-14', lang: 'ar', tag: 'security',  emoji: '📋', title: 'اللوائح التنظيمية للمدفوعات في السعودية: ما يجب أن يعرفه كل تاجر', excerpt: 'متطلبات ساما وبنك الاحتياطي الفيدرالي الأمريكي ولوائح PCI DSS ومعايير أمان المدفوعات المعتمدة لتشغيل متجر إلكتروني موثوق في المنطقة.', date: 'أكتوبر 22، 2024', readTime: '9 دقائق' },
    { id: 'ar-15', lang: 'ar', tag: 'digital',   emoji: '💰', title: 'كيف تعرض الأسعار بالعملات المحلية دون أن تفقد ثقة العملاء', excerpt: 'استراتيجيات كشف العملة وتحديد الموقع الجغرافي وتقريب الأسعار وكيف يرفع عرض الأسعار المحلية الشفاف معدل تحويل العملاء الدوليين.', date: 'أكتوبر 18، 2024', readTime: '7 دقائق' },
    { id: 'ar-16', lang: 'ar', tag: 'growth',    emoji: '💡', title: 'تحليلات المدفوعات: المقاييس الأساسية التي يجب أن يتابعها كل تاجر', excerpt: 'معدل الترخيص ونسبة الاسترداد ومعدل الرفض وتحويل الدفع ومتوسط القيمة الدائمة بحسب طريقة الدفع — بناء لوحة قياس فعّالة.', date: 'أكتوبر 14، 2024', readTime: '8 دقائق' },
    { id: 'ar-17', lang: 'ar', tag: 'gateways',  emoji: '🔄', title: 'أفضل منصات الفوترة للاشتراكات: Chargebee مقابل Recurly', excerpt: 'مقارنة تفصيلية لمنصتي الفوترة المتكررة الرائدتين — الميزات والأسعار وإدارة إشعارات الفشل والتكاملات والتوصية بحسب مرحلة النمو.', date: 'أكتوبر 10، 2024', readTime: '10 دقائق' },
    { id: 'ar-18', lang: 'ar', tag: 'checkout',  emoji: '✅', title: 'إشارات الثقة في صفحة الدفع: كيف ترفع التحويلات بنسبة 27%', excerpt: 'شارات الأمان وضمانات استرداد المال ومؤشرات SSL وتقييمات العملاء وموضع شعارات الدفع — نتائج اختبارات A/B من أكثر من 50 تحسيناً للدفع.', date: 'أكتوبر 6، 2024', readTime: '6 دقائق' },
    { id: 'ar-19', lang: 'ar', tag: 'security',  emoji: '⚠️', title: 'الاسترداد التعسفي (Chargeback): كيف تمنعه وتحاربه وتكسبه', excerpt: 'الدليل الكامل للتاجر حول منع الاسترداد وإعداد الأدلة الداحضة واستراتيجية التمثيل وخيارات التأمين ضد النزاعات.', date: 'أكتوبر 2، 2024', readTime: '10 دقائق' },
    { id: 'ar-20', lang: 'ar', tag: 'global',    emoji: '🌏', title: 'مدفوعات جنوب شرق آسيا: GrabPay وGoPay وTrueMoney', excerpt: 'GrabPay وGoPay وDANA وTrueMoney وOVO — الدليل الكامل لقبول المدفوعات عبر إندونيسيا وتايلاند وسنغافورة والفلبين.', date: 'سبتمبر 28، 2024', readTime: '10 دقائق' },
    { id: 'ar-21', lang: 'ar', tag: 'digital',   emoji: '🀄', title: 'Alipay وWeChat Pay للتجار غير الصينيين: كيف تبدأ؟', excerpt: 'دليل خطوة بخطوة لتفعيل مدفوعات المحافظ الصينية على متجرك الدولي، من تسجيل التاجر إلى تنفيذ المعاملات الحية.', date: 'سبتمبر 24، 2024', readTime: '8 دقائق' },
    { id: 'ar-22', lang: 'ar', tag: 'growth',    emoji: '🎯', title: 'مدفوعات B2B: كيف تقبل وتحسّن المعاملات بين الشركات', excerpt: 'التحويلات البنكية والبطاقات الافتراضية وتمويل الفواتير — الدليل الكامل لقبول مدفوعات B2B لشركات SaaS ومزودي الخدمات.', date: 'سبتمبر 20، 2024', readTime: '9 دقائق' },
    { id: 'ar-23', lang: 'ar', tag: 'gateways',  emoji: '🇦🇪', title: 'بوابات الدفع في الإمارات: دليل التاجر الإلكتروني الشامل', excerpt: 'Network International وPayTabs وStripe الإمارات وCheckout.com — مقارنة شاملة لخيارات بوابات الدفع لتجار الإمارات العربية المتحدة.', date: 'سبتمبر 16، 2024', readTime: '9 دقائق' },
    { id: 'ar-24', lang: 'ar', tag: 'checkout',  emoji: '🧠', title: 'علم نفس صفحة الدفع: لماذا يتخلى العملاء وكيف توقف ذلك', excerpt: 'مبادئ نفسية سلوكية مطبقة على تصميم صفحة الدفع — مؤشرات الثقة ومؤشرات التقدم ودفع الضيوف واستراتيجيات عرض الأسعار.', date: 'سبتمبر 12، 2024', readTime: '8 دقائق' },
    { id: 'ar-25', lang: 'ar', tag: 'security',  emoji: '🤖', title: 'كشف الاحتيال بالذكاء الاصطناعي: كيف توقف المنصات الحديثة المحتالين', excerpt: 'نماذج التعلم الآلي وبصمة الجهاز والمقاييس الحيوية السلوكية وقواعد السرعة — كيف تستخدم معالجات الدفع الذكاء الاصطناعي لوقف الاحتيال.', date: 'سبتمبر 8، 2024', readTime: '9 دقائق' },
    { id: 'ar-26', lang: 'ar', tag: 'global',    emoji: '🌍', title: 'المدفوعات في أفريقيا: M-Pesa وOPay وwave والثورة المالية', excerpt: 'كيف تحوّل المال عبر الهاتف المحمول التجارة في أفريقيا جنوب الصحراء الكبرى، وكيف يمكن للشركات الدولية الوصول إلى 1.3 مليار مستهلك رقمي جديد.', date: 'سبتمبر 4، 2024', readTime: '9 دقائق' },
    { id: 'ar-27', lang: 'ar', tag: 'digital',   emoji: '🔮', title: 'مستقبل المدفوعات: العملات الرقمية للبنوك المركزية والتمويل المدمج', excerpt: 'العملات الرقمية للبنوك المركزية وواجهات برمجة التطبيقات المصرفية المفتوحة وشبكات الدفع الفوري — كيف يُبنى هيكل المدفوعات لعام 2030 اليوم.', date: 'أغسطس 30، 2024', readTime: '10 دقائق' },
    { id: 'ar-28', lang: 'ar', tag: 'growth',    emoji: '💼', title: 'دليل المستقل والوكالة: كيف تستلم المدفوعات الدولية بأقل الرسوم', excerpt: 'Wise وPayoneer وStripe Atlas والتحويلات البنكية المباشرة — كيف يستقبل المستقلون والوكالات المدفوعات الدولية بشكل رخيص وموثوق.', date: 'أغسطس 26، 2024', readTime: '8 دقائق' },
    { id: 'ar-29', lang: 'ar', tag: 'gateways',  emoji: '🏦', title: 'Open Banking في المنطقة العربية: الفرص والتحديات', excerpt: 'مبادرات الخدمات المصرفية المفتوحة في السعودية والإمارات ومصر وكيف ستغير واجهات برمجة التطبيقات المصرفية مشهد المدفوعات الإقليمي.', date: 'أغسطس 22، 2024', readTime: '9 دقائق' },
    { id: 'ar-30', lang: 'ar', tag: 'checkout',  emoji: '🎨', title: 'تصميم صفحة الدفع: 20 قاعدة لأقصى قدر من التحويل', excerpt: 'التسلسل الهرمي المرئي وتحسين حقول النموذج وتصميم رسائل الخطأ وعلم نفس أزرار CTA وموضع مؤشرات الثقة لصفحات الدفع الفعّالة.', date: 'أغسطس 18، 2024', readTime: '9 دقائق' },

    // ── FRENCH ARTICLES (30) ─────────────────────────────────
    { id: 'fr-1',  lang: 'fr', tag: 'gateways',  emoji: '⚡', title: 'Les 10 Meilleures Passerelles de Paiement pour l\'E-Commerce en 2025', excerpt: 'Comparaison exhaustive des principales passerelles de paiement — Stripe, PayPal, Adyen, Mollie et Checkout.com — couvrant frais, fonctionnalités et portée mondiale.', date: '12 déc. 2024', readTime: '8 min' },
    { id: 'fr-2',  lang: 'fr', tag: 'checkout',  emoji: '🛒', title: 'Comment Réduire l\'Abandon de Panier de 65% avec un Checkout Optimisé', excerpt: 'Stratégies UX éprouvées, flux de paiement en un clic et diversification des options de paiement pour réduire le taux d\'abandon de panier de 70%.', date: '10 déc. 2024', readTime: '7 min' },
    { id: 'fr-3',  lang: 'fr', tag: 'security',  emoji: '🛡️', title: 'Guide PCI DSS en Langage Clair pour les Marchands en Ligne', excerpt: 'Tout ce que vous devez savoir sur les niveaux PCI DSS, les types SAQ, la réduction du périmètre et comment obtenir la conformité sans vous ruiner.', date: '8 déc. 2024', readTime: '10 min' },
    { id: 'fr-4',  lang: 'fr', tag: 'global',    emoji: '🌍', title: 'Vendre en Europe : SEPA, Klarna et les Méthodes de Paiement Locales', excerpt: 'Guide complet des méthodes de paiement préférées en Europe — SEPA, iDEAL, Bancontact, SOFORT, Klarna et pourquoi les Européens évitent les cartes de crédit.', date: '5 déc. 2024', readTime: '9 min' },
    { id: 'fr-5',  lang: 'fr', tag: 'digital',   emoji: '📱', title: 'Apple Pay vs Google Pay : Lequel Choisir pour Votre Boutique ?', excerpt: 'Analyse côte à côte des deux principaux portefeuilles mobiles — taux de conversion, complexité d\'intégration, frais et données d\'adoption régionale.', date: '3 déc. 2024', readTime: '6 min' },
    { id: 'fr-6',  lang: 'fr', tag: 'growth',    emoji: '📈', title: 'Comment les Entreprises SaaS Peuvent Réduire les Échecs de Paiement de 40%', excerpt: 'Gestion des relances, logique de nouvelle tentative intelligente, services de mise à jour des comptes et stratégies de communication proactives pour récupérer les revenus récurrents perdus.', date: '30 nov. 2024', readTime: '8 min' },
    { id: 'fr-7',  lang: 'fr', tag: 'gateways',  emoji: '🔵', title: 'Stripe vs PayPal vs Adyen : Quelle Passerelle Gagne en 2025 ?', excerpt: 'La comparaison définitive 2025 couvrant tarification, expérience développeur, support mondial, outils antifraude et recommandations par modèle commercial.', date: '28 nov. 2024', readTime: '12 min' },
    { id: 'fr-8',  lang: 'fr', tag: 'checkout',  emoji: '⚡', title: 'Paiement en Un Clic : Implémentation et Doublement des Conversions', excerpt: 'Guide d\'implémentation technique pour les paiements en un clic via Stripe Link, Shop Pay et PayPal One Touch, avec données de conversion réelles.', date: '26 nov. 2024', readTime: '7 min' },
    { id: 'fr-9',  lang: 'fr', tag: 'security',  emoji: '🔐', title: 'Comment 3D Secure 2.0 Réduit la Fraude Sans Nuire aux Conversions', excerpt: 'Comprendre EMV 3DS2, l\'authentification basée sur le risque, les flux sans friction et comment configurer votre processeur de paiement.', date: '24 nov. 2024', readTime: '9 min' },
    { id: 'fr-10', lang: 'fr', tag: 'global',    emoji: '🇩🇪', title: 'Paiements en Allemagne : Pourquoi SEPA et la Facture Dominent le E-Commerce', excerpt: 'Les préférences de paiement distinctes de l\'Allemagne — débit direct SEPA, facture Klarna, SOFORT, et pourquoi les consommateurs allemands évitent les cartes.', date: '22 nov. 2024', readTime: '7 min' },
    { id: 'fr-11', lang: 'fr', tag: 'digital',   emoji: '🩷', title: 'Klarna, Afterpay ou Affirm : Quel BNPL Ajouter à Votre Boutique ?', excerpt: 'Comparaison détaillée des trois plus grands fournisseurs BNPL — démographie client, frais marchands, impact sur la conversion et effort d\'intégration.', date: '20 nov. 2024', readTime: '8 min' },
    { id: 'fr-12', lang: 'fr', tag: 'growth',    emoji: '🏢', title: 'Paiements B2B : Accepter et Optimiser les Transactions Inter-Entreprises', excerpt: 'Virement SEPA, cartes virtuelles et financement de factures — le guide complet pour accepter les paiements B2B pour les SaaS et les prestataires de services.', date: '18 nov. 2024', readTime: '9 min' },
    { id: 'fr-13', lang: 'fr', tag: 'gateways',  emoji: '🌐', title: 'Mollie : La Passerelle de Paiement Incontournable pour l\'Europe', excerpt: 'Revue complète de Mollie pour les marchands européens — méthodes locales, tarification, expérience développeur et support client en français.', date: '16 nov. 2024', readTime: '8 min' },
    { id: 'fr-14', lang: 'fr', tag: 'checkout',  emoji: '📲', title: 'Optimisation du Checkout Mobile : 15 Changements qui Boostent les Conversions', excerpt: 'Placement des boutons adapté au pouce, support de la saisie automatique et intégration de l\'authentification biométrique — améliorations concrètes avec données A/B.', date: '14 nov. 2024', readTime: '7 min' },
    { id: 'fr-15', lang: 'fr', tag: 'security',  emoji: '⚠️', title: 'Rétrofacturation : Comment les Prévenir, les Combattre et les Gagner', excerpt: 'Guide complet du marchand sur la prévention des rétrofacturations, la préparation de preuves convaincantes, la stratégie de représentation et les options d\'assurance.', date: '12 nov. 2024', readTime: '10 min' },
    { id: 'fr-16', lang: 'fr', tag: 'global',    emoji: '🌎', title: 'Amérique Latine : Boleto, PIX, OXXO et les Paiements en Croissance', excerpt: 'Boleto Bancário, PIX, OXXO, PSE, Mercado Pago — naviguer dans le monde complexe et en forte croissance des paiements numériques latino-américains.', date: '10 nov. 2024', readTime: '11 min' },
    { id: 'fr-17', lang: 'fr', tag: 'digital',   emoji: '🔮', title: 'L\'Avenir des Paiements : CBDC, Finance Intégrée et Rails Temps Réel', excerpt: 'Monnaies numériques de banques centrales, APIs de finance intégrée, réseaux de paiement instantané — comment l\'infrastructure de paiement 2030 se construit aujourd\'hui.', date: '8 nov. 2024', readTime: '10 min' },
    { id: 'fr-18', lang: 'fr', tag: 'growth',    emoji: '💡', title: '7 Optimisations de Paiement qui Peuvent Ajouter 100K€ à Vos Revenus Annuels', excerpt: 'Études de cas réelles montrant comment les marchands ont boosté leurs revenus en optimisant le checkout, ajoutant des méthodes locales et réduisant les taux de refus.', date: '6 nov. 2024', readTime: '9 min' },
    { id: 'fr-19', lang: 'fr', tag: 'gateways',  emoji: '🔶', title: 'Checkout.com : La Plateforme de Paiement pour les Marchands à Haut Volume', excerpt: 'Analyse approfondie des taux d\'autorisation de Checkout.com, modèle de tarification, outils de risque, API développeur et retours de marchands enterprise.', date: '4 nov. 2024', readTime: '10 min' },
    { id: 'fr-20', lang: 'fr', tag: 'checkout',  emoji: '🛍️', title: 'La Psychologie du Checkout : Pourquoi les Clients Abandonnent et Comment l\'Éviter', excerpt: 'Principes de psychologie comportementale appliqués au design de checkout — signaux de confiance, indicateurs de progression, checkout invité et stratégies de présentation des prix.', date: '2 nov. 2024', readTime: '8 min' },
    { id: 'fr-21', lang: 'fr', tag: 'security',  emoji: '🤖', title: 'Détection de Fraude par IA : Comment les Plateformes Modernes Arrêtent les Fraudeurs', excerpt: 'Modèles de machine learning, empreinte digitale de l\'appareil, biométrie comportementale et règles de vélocité pour bloquer la fraude en temps réel.', date: '31 oct. 2024', readTime: '9 min' },
    { id: 'fr-22', lang: 'fr', tag: 'global',    emoji: '🌍', title: 'Afrique Fintech : M-Pesa, OPay, Wave et la Révolution des Non-Bancarisés', excerpt: 'Comment la monnaie mobile transforme le commerce en Afrique subsaharienne, et comment les entreprises internationales peuvent accéder à 1,3 milliard de nouveaux consommateurs numériques.', date: '28 oct. 2024', readTime: '9 min' },
    { id: 'fr-23', lang: 'fr', tag: 'digital',   emoji: '🏦', title: 'Open Banking : L\'Avenir des Paiements Compte-à-Compte en Europe', excerpt: 'PSD2, APIs d\'open banking, paiement bancaire et comment les paiements instantanés compte-à-compte bouleversent le commerce basé sur les cartes en Europe.', date: '26 oct. 2024', readTime: '9 min' },
    { id: 'fr-24', lang: 'fr', tag: 'growth',    emoji: '🎯', title: 'Analytics de Paiement : Les KPIs Essentiels que Tout Marchand Doit Suivre', excerpt: 'Taux d\'autorisation, ratio de rétrofacturation, taux de refus, conversion checkout et LTV par méthode de paiement — construire un tableau de bord analytics.', date: '24 oct. 2024', readTime: '8 min' },
    { id: 'fr-25', lang: 'fr', tag: 'gateways',  emoji: '🐝', title: 'Chargebee vs Recurly vs Stripe Billing : Meilleure Plateforme d\'Abonnement ?', excerpt: 'Comparatif des plateformes de facturation par abonnement — fonctionnalités, tarification, gestion des relances, intégrations et recommandations par stade de croissance.', date: '22 oct. 2024', readTime: '10 min' },
    { id: 'fr-26', lang: 'fr', tag: 'checkout',  emoji: '💰', title: 'Afficher les Prix en Devises Locales Sans Perdre la Confiance des Clients', excerpt: 'Détection de devise, précision de géolocalisation, stratégies d\'arrondi et comment la tarification locale transparente augmente les taux de conversion internationaux.', date: '20 oct. 2024', readTime: '7 min' },
    { id: 'fr-27', lang: 'fr', tag: 'security',  emoji: '🔒', title: 'Tokenisation vs Chiffrement : Ce que Tout Marchand Doit Savoir', excerpt: 'Explication claire de la tokenisation des paiements, du chiffrement et des solutions vault — comment ils réduisent la portée PCI et protègent les données de paiement.', date: '18 oct. 2024', readTime: '7 min' },
    { id: 'fr-28', lang: 'fr', tag: 'global',    emoji: '🌏', title: 'Asie du Sud-Est : GrabPay, GoPay et le Nouveau Paysage des Paiements', excerpt: 'GrabPay, GoPay, DANA, TrueMoney et OVO — le guide complet pour accepter les paiements en Indonésie, Thaïlande, Singapour et Philippines.', date: '16 oct. 2024', readTime: '10 min' },
    { id: 'fr-29', lang: 'fr', tag: 'digital',   emoji: '📊', title: 'BNPL en 2025 : Croissance, Réglementation et Impact pour les Marchands', excerpt: 'Les perspectives du marché mondial du BNPL, les nouvelles pressions réglementaires, les défauts de paiement des consommateurs et comment évaluer les partenariats.', date: '14 oct. 2024', readTime: '9 min' },
    { id: 'fr-30', lang: 'fr', tag: 'growth',    emoji: '🚀', title: 'Check-list d\'Expansion Internationale : Paiements, Fiscalité et Conformité', excerpt: 'Check-list pratique couvrant les méthodes de paiement locales, les obligations TVA/GST, la stratégie de devises et la configuration bancaire pour le commerce mondial.', date: '12 oct. 2024', readTime: '11 min' }
  ],

  currentLangFilter: 'en',
  currentTagFilter: 'all',
  displayCount: 9,

  getFiltered() {
    return this.articles.filter(a => {
      const langMatch = a.lang === this.currentLangFilter;
      const tagMatch = this.currentTagFilter === 'all' || a.tag === this.currentTagFilter;
      return langMatch && tagMatch;
    });
  }
};

// ─── MAIN APP INIT ───────────────────────────────────────────────

window.UpanPayApp = {

  init() {
    this.initTheme();
    this.initNavbar();
    this.initMobileMenu();
    this.initLanguageSwitcher();
    this.initScrollEffects();
    this.initBackToTop();
    this.initContactForm();
    this.initPricingToggle();
    this.initMapRegions();
    this.initBlogGrid();

    // Module inits
    if (window.SolutionsDirectory) window.SolutionsDirectory.init();
    if (window.PaymentFinder)       window.PaymentFinder.init();
    if (window.CheckoutDemo)        window.CheckoutDemo.init();
    if (window.UpanPayAnalytics)    window.UpanPayAnalytics.init();
    if (window.MerchantDash)        window.MerchantDash.init();

    // Animate hero stats on load
    this.animateHeroStats();

    // Apply translations from URL param if set
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && window.I18n) window.I18n.setLang(urlLang);
  },

  // ── THEME ────────────────────────────────────
  initTheme() {
    const saved = localStorage.getItem('upanpay_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);

    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('upanpay_theme', next);
      });
    }
  },

  // ── NAVBAR ───────────────────────────────────
  initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }, { passive: true });

    // Smooth anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu
          document.getElementById('mobileMenu')?.classList.remove('open');
          document.getElementById('navToggle')?.classList.remove('open');
          document.getElementById('navToggle')?.setAttribute('aria-expanded', 'false');
        }
      });
    });
  },

  // ── MOBILE MENU ──────────────────────────────
  initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');

    toggle?.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!toggle?.contains(e.target) && !menu?.contains(e.target)) {
        menu?.classList.remove('open');
        toggle?.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    });
  },

  // ── LANGUAGE SWITCHER ─────────────────────────
  initLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    const langBtn = document.getElementById('langBtn');
    const currentLangEl = document.getElementById('currentLang');

    langBtn?.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle('open');
      switcher.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', () => {
      switcher?.classList.remove('open');
      switcher?.setAttribute('aria-expanded', 'false');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        const lang = opt.dataset.lang;

        // Update active
        document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');

        // Update display
        const labels = { en: 'EN', ar: 'AR', fr: 'FR', es: 'ES', de: 'DE' };
        if (currentLangEl) currentLangEl.textContent = labels[lang] || lang.toUpperCase();

        // Apply
        if (window.I18n) {
          window.I18n.setLang(lang);
          // Update blog filter to match
          window.BlogData.currentLangFilter = lang === 'en' ? 'en' : lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en';
          this.renderBlog();
        }

        switcher?.classList.remove('open');
        window.showToast(`Language changed to ${opt.textContent.trim()}`, 'success');
      });
    });
  },

  // ── SCROLL EFFECTS ────────────────────────────
  initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);

          // Trigger analytics animation when dashboard is visible
          if (entry.target.id === 'dashboard' && window.UpanPayAnalytics) {
            window.UpanPayAnalytics.animateCounters();
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  },

  // ── BACK TO TOP ───────────────────────────────
  initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      btn?.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },

  // ── CONTACT FORM ─────────────────────────────
  initContactForm() {
    const submit = document.getElementById('contactSubmit');
    submit?.addEventListener('click', () => {
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const msg = document.getElementById('contactMsg')?.value.trim();

      if (!name || !email || !msg) {
        window.showToast('Please fill in all required fields', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        window.showToast('Please enter a valid email address', 'error');
        return;
      }

      // Simulate submission
      submit.textContent = 'Sending…';
      submit.disabled = true;
      setTimeout(() => {
        window.showToast('Message sent! We\'ll reply within 24 hours ✓', 'success');
        submit.textContent = 'Send Message';
        submit.disabled = false;
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactMsg').value = '';
      }, 1500);
    });
  },

  // ── PRICING TOGGLE ────────────────────────────
  initPricingToggle() {
    const toggle = document.getElementById('billingToggle');
    toggle?.addEventListener('change', () => {
      const annual = toggle.checked;
      document.querySelectorAll('.price-amount[data-monthly]').forEach(el => {
        el.textContent = annual ? el.dataset.annual : el.dataset.monthly;
      });
    });
  },

  // ── MAP REGIONS ──────────────────────────────
  initMapRegions() {
    const regions = document.querySelectorAll('.map-region');
    const cards = document.querySelectorAll('.region-card');

    regions.forEach(region => {
      region.addEventListener('click', () => {
        const name = region.dataset.region;
        cards.forEach(c => c.classList.toggle('active', c.dataset.region === name));
      });

      region.addEventListener('mouseenter', () => {
        region.style.opacity = '1';
        region.style.cursor = 'pointer';
      });

      region.addEventListener('mouseleave', () => {
        region.style.opacity = '0.7';
      });
    });

    // Blog tabs for language
    document.querySelectorAll('.blog-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.blog-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        window.BlogData.currentLangFilter = tab.dataset.langFilter;
        window.BlogData.displayCount = 9;
        this.renderBlog();
      });
    });

    // Blog tag filters
    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.BlogData.currentTagFilter = btn.dataset.tag;
        window.BlogData.displayCount = 9;
        this.renderBlog();
      });
    });

    // Load more
    document.getElementById('loadMoreBtn')?.addEventListener('click', () => {
      window.BlogData.displayCount += 6;
      this.renderBlog();
    });
  },

  // ── BLOG GRID ────────────────────────────────
  initBlogGrid() {
    this.renderBlog();
  },

  renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;

    const articles = window.BlogData.getFiltered().slice(0, window.BlogData.displayCount);
    grid.innerHTML = '';

    if (articles.length === 0) {
      grid.innerHTML = '<p style="color:var(--c-text-3); text-align:center; grid-column:1/-1; padding:2rem;">No articles found for this filter.</p>';
      return;
    }

    articles.forEach((article, i) => {
      const card = document.createElement('article');
      card.className = 'blog-card';
      card.setAttribute('role', 'listitem');
      card.style.animationDelay = `${i * 50}ms`;
      card.style.animation = 'slideUp 0.4s ease both';

      const tagColors = {
        gateways: '#4f7cf7',
        checkout: '#10b981',
        security: '#ef4444',
        global: '#f59e0b',
        digital: '#8b5cf6',
        growth: '#0ed4c6'
      };
      const tagColor = tagColors[article.tag] || '#4f7cf7';

      card.innerHTML = `
        <div class="blog-card-img" style="background: linear-gradient(135deg, ${tagColor}22, ${tagColor}44);">
          <span style="font-size:3.5rem; z-index:1; position:relative;" aria-hidden="true">${article.emoji}</span>
        </div>
        <div class="blog-card-body">
          <div class="blog-card-tags">
            <span class="blog-tag" style="background:${tagColor}20; color:${tagColor};">${article.tag}</span>
            <span class="blog-card-lang">${article.lang.toUpperCase()}</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <div class="blog-card-meta">
            <span>${article.date}</span>
            <span>📖 ${article.readTime}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        window.showToast(`Opening: "${article.title.substring(0, 40)}…"`, 'success');
      });
      card.style.cursor = 'pointer';

      grid.appendChild(card);
    });

    // Hide/show load more
    const total = window.BlogData.getFiltered().length;
    const loadBtn = document.getElementById('loadMoreBtn');
    if (loadBtn) {
      loadBtn.style.display = window.BlogData.displayCount >= total ? 'none' : 'inline-flex';
    }
  },

  // ── HERO STATS ANIMATION ──────────────────────
  animateHeroStats() {
    const stats = [
      { el: 'statProviders', end: 200, suffix: '+' },
      { el: 'statCountries', end: 150, suffix: '+' },
      { el: 'statMerchants', end: 12,  suffix: 'K+' },
    ];

    setTimeout(() => {
      stats.forEach(({ el, end, suffix }) => {
        const element = document.getElementById(el);
        if (!element) return;
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();
        const update = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = Math.round(start + (end - start) * eased) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      });
    }, 600);
  }
};

// ─── TOAST UTILITY ──────────────────────────────────────────────
window.showToast = function(msg, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3200);
};

// ─── BOOT ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  window.UpanPayApp.init();
});
