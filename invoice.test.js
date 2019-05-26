const Invoice = require('./invoice')

test('用含稅價格計算稅金', async () => {
  // act
  let invoice = new Invoice()
  invoice.setTaxIncludedPrice(17000)
  let actual = invoice.tax

  // assert
  expect(actual).toEqual(810)
})