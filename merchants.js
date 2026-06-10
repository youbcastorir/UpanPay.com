/**
 * UpanPay – merchants.js
 * Merchant dashboard: saved solutions, comparisons, notes
 */

window.MerchantDash = {

  storageKey: 'upanpay_merchant',

  // Default state
  defaultState: {
    savedSolutions: [],
    comparedPairs: [],
    notes: {},
    preferences: {
      industry: '',
      country: '',
      volume: ''
    }
  },

  state: null,

  init() {
    this.state = this.load();
    this.updateKPIs();
    this.renderSavedList();
  },

  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? { ...this.defaultState, ...JSON.parse(raw) } : { ...this.defaultState };
    } catch {
      return { ...this.defaultState };
    }
  },

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn('UpanPay: Could not persist merchant data.', e);
    }
  },

  saveSolution(id, name) {
    if (!this.state.savedSolutions.find(s => s.id === id)) {
      this.state.savedSolutions.push({
        id,
        name,
        savedAt: new Date().toISOString(),
        note: ''
      });
      this.save();
      this.updateKPIs();
      window.showToast(`${name} saved to your dashboard ✓`, 'success');
    } else {
      window.showToast(`${name} is already saved`, '');
    }
  },

  removeSolution(id) {
    this.state.savedSolutions = this.state.savedSolutions.filter(s => s.id !== id);
    this.save();
    this.updateKPIs();
  },

  addComparison(provider1, provider2) {
    this.state.comparedPairs.push({
      provider1,
      provider2,
      comparedAt: new Date().toISOString()
    });
    this.save();
    this.updateKPIs();
  },

  addNote(solutionId, note) {
    this.state.notes[solutionId] = note;
    this.save();
  },

  updateKPIs() {
    const savedEl = document.getElementById('kpiSaved');
    const comparedEl = document.getElementById('kpiCompared');

    if (savedEl) {
      const count = this.state.savedSolutions.length;
      savedEl.textContent = count > 0 ? count : 7;
    }
    if (comparedEl) {
      const count = this.state.comparedPairs.length;
      comparedEl.textContent = count > 0 ? count : 12;
    }
  },

  renderSavedList() {
    // Could render into a modal or dedicated dashboard panel
    // For now, updates are reflected in KPIs
  },

  getSavedCount() {
    return this.state.savedSolutions.length;
  },

  exportData() {
    const dataStr = JSON.stringify(this.state, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'upanpay-merchant-data.json';
    a.click();
    URL.revokeObjectURL(url);
    window.showToast('Dashboard data exported ✓', 'success');
  }
};
