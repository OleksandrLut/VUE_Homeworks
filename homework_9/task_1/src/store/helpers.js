export function makeProductListOfData (data, productName) {
  return data[productName].map(({ id, brand, title, link, imgSrc, price, oldPrice }) => ({
  id, brand, title, link, imgSrc, price, oldPrice,}))
}