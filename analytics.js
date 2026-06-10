/**
 * UpanPay – analytics.js
 * Dashboard analytics, charts, and KPI cards
 */

window.UpanPayAnalytics = {

  // Sample analytics data
  data: {
    kpis: [
      { icon: '💳', label: 'Payment Methods Explored', value: '47', change: '+12%', direction: 'up' },
      { icon: '🌍', label: 'Countries Covered', value: '38', change: '+5 this month', direction: 'up' },
      { icon: '💰', label: 'Avg. Fee Saved', value: '1.2%', change: 'vs. industry avg', direction: 'up' },
      { icon: '⚡', label: 'Checkout Speed', value: '3.1s', change: '-0.8s optimized', direction: 'up' },
      { icon: '🛡️', label: 'Security Score', value: '94/100', change: 'PCI Aware', direction: 'up' },
      { icon: '📈', label: 'Conversion Lift', value: '+34%', change: 'after optimization', direction: 'up' },
      { icon: '🔄', label: 'Providers Compared', value: '23', change: 'this session', direction: 'up' },
      { icon: '⭐', label: 'Top Rated Match', value: 'Stripe', change: '98% fit score', direction: 'up' }
    ],

    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Payment Volume ($K)',
          data: [42, 58, 71, 65, 89, 104, 118, 132, 115, 148, 162, 189],
          color: '#4f7cf7'
        },
        {
          label: 'Fees Saved ($)',
          data: [310, 440, 520, 490, 680, 790, 890, 1020, 870, 1140, 1240, 1450],
          color: '#10b981'
        }
      ]
    }
  },

  init() {
    this.renderAnalyticsCards();
    this.renderDashboardChart();
    this.updateDashDate();
  },

  renderAnalyticsCards() {
    const grid = document.getElementById('analyticsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    this.data.kpis.forEach((kpi, i) => {
      const card = document.createElement('div');
      card.className = 'analytics-card';
      card.style.animationDelay = `${i * 80}ms`;
      card.innerHTML = `
        <div class="analytics-icon" aria-hidden="true">${kpi.icon}</div>
        <div class="analytics-label">${kpi.label}</div>
        <div class="analytics-value">${kpi.value}</div>
        <div class="analytics-change ${kpi.direction}">${kpi.direction === 'up' ? '↑' : '↓'} ${kpi.change}</div>
      `;
      grid.appendChild(card);
    });
  },

  renderDashboardChart() {
    const canvas = document.getElementById('analyticsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth || 600;
    canvas.height = container.offsetHeight || 140;

    const w = canvas.width;
    const h = canvas.height;
    const pad = { top: 16, right: 20, bottom: 24, left: 12 };
    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    ctx.clearRect(0, 0, w, h);

    const data = this.data.chartData.datasets[0].data;
    const max = Math.max(...data) * 1.1;
    const points = data.map((v, i) => ({
      x: pad.left + (i / (data.length - 1)) * chartW,
      y: pad.top + chartH - (v / max) * chartH
    }));

    // Draw grid lines
    ctx.strokeStyle = 'rgba(79,124,247,0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (i / 4) * chartH;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + chartW, y);
      ctx.stroke();
    }

    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
    gradient.addColorStop(0, 'rgba(79,124,247,0.3)');
    gradient.addColorStop(1, 'rgba(79,124,247,0.02)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      ctx.bezierCurveTo(cpx, prev.y, cpx, curr.y, curr.x, curr.y);
    }
    ctx.lineTo(points[points.length - 1].x, pad.top + chartH);
    ctx.lineTo(points[0].x, pad.top + chartH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      ctx.bezierCurveTo(cpx, prev.y, cpx, curr.y, curr.x, curr.y);
    }
    ctx.strokeStyle = '#4f7cf7';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw labels (every 3 months)
    ctx.fillStyle = 'rgba(155,165,192,0.8)';
    ctx.font = '9px Inter, sans-serif';
    ctx.textAlign = 'center';
    const labels = this.data.chartData.labels;
    labels.forEach((label, i) => {
      if (i % 3 === 0) {
        const x = pad.left + (i / (labels.length - 1)) * chartW;
        ctx.fillText(label, x, h - 4);
      }
    });

    // Draw dots on last 3 points
    points.slice(-3).forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#4f7cf7';
      ctx.fill();
      ctx.strokeStyle = 'var(--c-bg-2, #0f1629)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  },

  updateDashDate() {
    const el = document.getElementById('dashDate');
    if (!el) return;
    const now = new Date();
    el.textContent = now.toLocaleDateString('en-US', {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    });
  },

  // Animate KPI counters
  animateCounters() {
    const saved = document.getElementById('kpiSaved');
    const compared = document.getElementById('kpiCompared');
    const recos = document.getElementById('kpiRecos');

    if (saved) this.countUp(saved, 0, 7, 600);
    if (compared) this.countUp(compared, 0, 12, 800);
    if (recos) this.countUp(recos, 0, 3, 500);
  },

  countUp(el, from, to, duration) {
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
};
