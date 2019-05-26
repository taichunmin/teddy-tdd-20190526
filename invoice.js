class Invoice {
  constructor (rate) {
    this.rate = rate
    this.taxIncludedPrice = 0
    this.tax = 0
    this.untaxedPrice = 0
  }

  setTaxIncludedPrice (taxIncludedPrice) {
    this.taxIncludedPrice = taxIncludedPrice
    this.tax = 810
    this.untaxedPrice = 16190
  }
}

module.exports = Invoice