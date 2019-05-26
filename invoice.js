class Invoice {
  constructor (rate) {
    this.rate = rate
    this.taxIncludedPrice = 0
    this.tax = 0
    this.untaxedPrice = 0
  }

  setTaxIncludedPrice (taxIncludedPrice) {
    this.taxIncludedPrice = taxIncludedPrice
    this.tax = Math.round(taxIncludedPrice / (1 + this.rate) * this.rate)
    this.untaxedPrice = Math.round(taxIncludedPrice / (1 + this.rate))
  }

  setUntaxedPrice (untaxedPrice) {
    this.untaxedPrice = untaxedPrice
    this.tax = Math.round(untaxedPrice * this.rate)
    this.taxIncludedPrice = Math.round(untaxedPrice * (1 + this.rate))
  }
}

module.exports = Invoice