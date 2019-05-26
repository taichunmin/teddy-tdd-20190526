const Tax = require('./tax')

test('用含稅價格計算稅金', async () => {
  // act
  let actual = Tax.TaxIncludedToTax(17000)

  // assert
  expect(actual).toEqual(810)
})