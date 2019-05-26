const Invoice = require('./invoice')

const VAT_RATE = 0.05

test('用含稅價格計算稅金', async () => {
  // act
  let invoice = new Invoice(VAT_RATE)
  invoice.setTaxIncludedPrice(17000)

  // assert
  expect(invoice.rate).toEqual(VAT_RATE)
  expect(invoice.taxIncludedPrice).toEqual(17000)
  expect(invoice.tax).toEqual(810)
  expect(invoice.untaxedPrice).toEqual(16190)
})