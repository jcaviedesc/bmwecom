import { numberToCurrency } from './utils'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const images = [
  'https://firebasestorage.googleapis.com/v0/b/amissa-3497d.appspot.com/o/chaqueta.png?alt=media&token=6e12f983-b759-421a-abad-fe9a3ae84580',
  'https://firebasestorage.googleapis.com/v0/b/amissa-3497d.appspot.com/o/camisa.png?alt=media&token=4246559e-5cd4-428a-8adc-52067e8ca2a6',
  'https://firebasestorage.googleapis.com/v0/b/amissa-3497d.appspot.com/o/chaqueta-negra.png?alt=media&token=46366210-2758-4981-bb0c-04bfeaaf06ce',
  'https://firebasestorage.googleapis.com/v0/b/amissa-3497d.appspot.com/o/maleta-blanca.png?alt=media&token=36c04b8b-b5cb-47ea-a250-ce90a2e75c0f',
  'https://firebasestorage.googleapis.com/v0/b/amissa-3497d.appspot.com/o/termo.png?alt=media&token=647d6e3e-26b0-4933-a512-fbb883aaff15'
]
export const ApiToProducts = productsApi => {
  const productMapper = product => {
    const productCopy = product
    productCopy.price = numberToCurrency(productCopy.price)
    productCopy.productImage = images[getRandomInt(5)]
        return productCopy;
  }
  return productsApi.map(productMapper);
}