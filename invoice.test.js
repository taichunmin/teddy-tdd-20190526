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

test('用含稅價格計算稅金，需要四捨五入', async () => {
  // act
  let invoice = new Invoice(VAT_RATE)
  invoice.setTaxIncludedPrice(99)

  // assert
  expect(invoice.rate).toEqual(VAT_RATE)
  expect(invoice.taxIncludedPrice).toEqual(99)
  expect(invoice.tax).toEqual(5)
  expect(invoice.untaxedPrice).toEqual(94)
})

test('含稅價格 10 塊免稅', async () => {
  // act
  let invoice = new Invoice(VAT_RATE)
  invoice.setTaxIncludedPrice(10)

  // assert
  expect(invoice.rate).toEqual(VAT_RATE)
  expect(invoice.taxIncludedPrice).toEqual(10)
  expect(invoice.tax).toEqual(0)
  expect(invoice.untaxedPrice).toEqual(10)
})

test('未稅價格 10 元稅金 1 元', async () => {
  // act
  let invoice = new Invoice(VAT_RATE)
  invoice.setUntaxedPrice(10)

  // assert
  expect(invoice.rate).toEqual(VAT_RATE)
  expect(invoice.taxIncludedPrice).toEqual(11)
  expect(invoice.tax).toEqual(1)
  expect(invoice.untaxedPrice).toEqual(10)
})
