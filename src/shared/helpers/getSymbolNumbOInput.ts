export function getSymbolNumbOInput(quantity: number) {
  return !Number.isNaN(quantity) ? String(quantity).length : 1
}
