export default {
  isDef(val) {
    return val !== undefined && val !== null
  },
  formatMoney(num, fix = 2) {
    return this.isDef(num) ? (num / 100).toFixed(fix) : 0.00
  }
}
