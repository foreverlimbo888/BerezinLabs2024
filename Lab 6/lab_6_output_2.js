class DataAnalyzer {
  constructor(data) {
    this.data = data;
  }

  _calculateTotalAndCount() {
    const total = this.data.reduce((sum, value) => sum + value, 0);
    const count = this.data.length;
    return { total, count };
  }

  calculateTotal() {
    return this._calculateTotalAndCount().total;
  }

  calculateAverage() {
    const { total, count } = this._calculateTotalAndCount();
    return count !== 0 ? total / count : 0;
  }

  calculateMinimum() {
    return this.data.length ? Math.min(...this.data) : null;
  }

  calculateMaximum() {
    return this.data.length ? Math.max(...this.data) : null;
  }
}