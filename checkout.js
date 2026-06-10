/**
 * UpanPay – checkout.js
 * Interactive checkout demo flows
 */

window.CheckoutDemo = {
  currentFlow: 'guest',

  flows: {
    guest: {
      title: 'Guest Checkout',
      steps: ['cart', 'details', 'payment', 'confirm']
    },
    returning: {
      title: 'Returning Customer',
      steps: ['cart', 'saved', 'confirm']
    },
    express: {
      title: 'Express Pay',
      steps: ['cart', 'express', 'confirm']
    }
  },

  currentStepIdx: 0,

  init() {
    this.renderScreen();
    this.bindButtons();
  },

  bindButtons() {
    const guestBtn = document.getElementById('demoGuest');
    const returningBtn = document.getElementById('demoReturning');
    const expressBtn = document.getElementById('demoExpress');

    if (guestBtn) guestBtn.addEventListener('click', () => this.startFlow('guest'));
    if (returningBtn) returningBtn.addEventListener('click', () => this.startFlow('returning'));
    if (expressBtn) expressBtn.addEventListener('click', () => this.startFlow('express'));
  },

  startFlow(flowName) {
    this.currentFlow = flowName;
    this.currentStepIdx = 0;
    this.renderScreen();

    // Update active button
    document.querySelectorAll('.demo-btns .btn').forEach(b => b.classList.remove('btn-primary'));
    const map = { guest: 'demoGuest', returning: 'demoReturning', express: 'demoExpress' };
    const activeBtn = document.getElementById(map[flowName]);
    if (activeBtn) {
      activeBtn.classList.remove('btn-outline');
      activeBtn.classList.add('btn-primary');
    }
  },

  renderScreen() {
    const screen = document.getElementById('checkoutDemoScreen');
    if (!screen) return;

    const flow = this.flows[this.currentFlow];
    const step = flow.steps[this.currentStepIdx];

    screen.innerHTML = this.buildStep(step);

    // Bind next step
    const nextBtn = screen.querySelector('.demo-pay-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextStep());
    }
  },

  nextStep() {
    const flow = this.flows[this.currentFlow];
    if (this.currentStepIdx < flow.steps.length - 1) {
      this.currentStepIdx++;
      this.renderScreen();
    } else {
      this.currentStepIdx = 0;
      this.renderScreen();
    }
  },

  buildStep(step) {
    const steps = {
      cart: `
        <div class="checkout-screen">
          <div style="font-size:0.7rem; font-weight:700; color:var(--c-text-3); margin-bottom:10px; text-transform:uppercase; letter-spacing:0.05em;">Your Cart</div>
          <div class="demo-product">
            <div class="demo-product-img">👟</div>
            <div>
              <div class="demo-product-name">Premium Sneakers</div>
              <div class="demo-product-price">Size 42 · Black</div>
            </div>
            <div style="margin-left:auto; font-weight:700; font-size:0.82rem; color:var(--c-heading);">$89</div>
          </div>
          <div class="demo-product">
            <div class="demo-product-img">🧢</div>
            <div>
              <div class="demo-product-name">Logo Cap</div>
              <div class="demo-product-price">One size · White</div>
            </div>
            <div style="margin-left:auto; font-weight:700; font-size:0.82rem; color:var(--c-heading);">$24</div>
          </div>
          <div class="demo-total">Total: <strong>$113.00</strong></div>
          <button class="demo-pay-btn">Proceed to Checkout →</button>
        </div>`,

      details: `
        <div class="checkout-screen">
          <div style="font-size:0.7rem; font-weight:700; color:var(--c-text-3); margin-bottom:10px; text-transform:uppercase; letter-spacing:0.05em;">Shipping Details</div>
          <div class="demo-field">📧 Email address</div>
          <div class="demo-field">👤 Full name</div>
          <div class="demo-field">🏠 Street address</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:8px;">
            <div class="demo-field">City</div>
            <div class="demo-field">ZIP</div>
          </div>
          <div class="demo-field">🌍 Country</div>
          <button class="demo-pay-btn">Continue to Payment →</button>
        </div>`,

      payment: `
        <div class="checkout-screen">
          <div style="font-size:0.7rem; font-weight:700; color:var(--c-text-3); margin-bottom:10px; text-transform:uppercase; letter-spacing:0.05em;">Payment</div>
          <div class="demo-express-buttons">
            <button class="demo-express-btn apple">🍎 Pay with Apple Pay</button>
            <button class="demo-express-btn google">G Pay with Google</button>
          </div>
          <div style="text-align:center; font-size:0.68rem; color:var(--c-text-3); margin:8px 0;">— or enter card details —</div>
          <div class="demo-field">💳 Card number</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:8px;">
            <div class="demo-field">MM/YY</div>
            <div class="demo-field">CVV 🔒</div>
          </div>
          <div style="font-size:0.65rem; color:var(--c-text-3); margin-bottom:8px;">🔐 Secured with 256-bit TLS encryption</div>
          <button class="demo-pay-btn">Pay $113.00 →</button>
        </div>`,

      saved: `
        <div class="checkout-screen">
          <div style="font-size:0.7rem; font-weight:700; color:var(--c-text-3); margin-bottom:10px; text-transform:uppercase; letter-spacing:0.05em;">Welcome back, Alex! 👋</div>
          <div style="background:var(--c-surface); border:1px solid var(--c-border-2); border-radius:8px; padding:10px; margin-bottom:8px;">
            <div style="font-size:0.7rem; color:var(--c-text-3); margin-bottom:4px;">Saved address</div>
            <div style="font-size:0.78rem; color:var(--c-text);">123 Main St, New York, NY 10001</div>
          </div>
          <div style="background:var(--c-surface); border:1px solid var(--c-border-2); border-radius:8px; padding:10px; margin-bottom:8px;">
            <div style="font-size:0.7rem; color:var(--c-text-3); margin-bottom:4px;">Saved card</div>
            <div style="font-size:0.78rem; color:var(--c-text);">💳 Visa ending in 4242</div>
          </div>
          <div class="demo-total">Total: <strong>$113.00</strong></div>
          <button class="demo-pay-btn">Confirm & Pay in 1 Tap ✓</button>
        </div>`,

      express: `
        <div class="checkout-screen">
          <div style="font-size:0.7rem; font-weight:700; color:var(--c-text-3); margin-bottom:10px; text-transform:uppercase; letter-spacing:0.05em;">Express Checkout</div>
          <div class="demo-total" style="margin-bottom:12px;">Order total: <strong>$113.00</strong></div>
          <div class="demo-express-buttons">
            <button class="demo-express-btn apple" style="padding:14px;">🍎 Pay with Apple Pay</button>
            <button class="demo-express-btn google" style="padding:14px;">G Pay with Google Pay</button>
          </div>
          <div style="background:rgba(79,124,247,0.08); border:1px solid rgba(79,124,247,0.2); border-radius:8px; padding:10px; margin-top:10px; text-align:center;">
            <div style="font-size:0.68rem; color:var(--c-blue); font-weight:600;">⚡ Average checkout: 3 seconds</div>
          </div>
          <button class="demo-pay-btn" style="margin-top:10px;">Continue as Guest →</button>
        </div>`,

      confirm: `
        <div class="checkout-screen" style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center;">
          <div style="font-size:3rem; margin-bottom:12px; animation: slideUp 0.5s ease;">✅</div>
          <div style="font-family:var(--font-display); font-size:1rem; font-weight:700; color:var(--c-heading); margin-bottom:6px;">Order Confirmed!</div>
          <div style="font-size:0.78rem; color:var(--c-text-3); margin-bottom:16px;">Order #UP-28471</div>
          <div style="font-size:0.72rem; color:var(--c-text-2); line-height:1.6; margin-bottom:16px;">
            Thank you for your purchase. You'll receive a confirmation email shortly.
          </div>
          <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.2); border-radius:8px; padding:8px 16px; font-size:0.72rem; color:var(--c-green); font-weight:600;">
            Payment Secured · $113.00 paid
          </div>
          <button class="demo-pay-btn" style="margin-top:12px; background: var(--c-surface); color: var(--c-text); border: 1px solid var(--c-border);">← Start Over</button>
        </div>`
    };

    return steps[step] || steps.cart;
  }
};
