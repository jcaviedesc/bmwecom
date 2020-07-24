export function numberToCurrency(num) {
    const numberFormat = num ? num
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      : '-'
    return `$${numberFormat}`
  }