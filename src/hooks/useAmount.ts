const useAmount = () => {
  // Strip unwanted decimals
  // 10.999 -> 10    (maxDecimals = 0)
  // 10.999 -> 10.9  (maxDecimals = 1)
  // 10.999 -> 10.99 (maxDecimals = 2)
  const secureDecimals = (raw = '', maxDecimals = 0): string => {
    let newValue: string = raw

    // Replace commas
    newValue = newValue.replace(',', '.')

    // Disallow decimals if wished for
    newValue = maxDecimals > 0 ? newValue : newValue.replace('.', '')

    // Only numbers
    newValue = newValue.replace(/[^0-9.]/g, '')
    if (newValue.startsWith('.')) {
      newValue = '0' + newValue
    }

    if (newValue.split('').filter((char) => char === '.').length > 1) {
      // Remove subsequent separators
      newValue = newValue.replace(/(?<=\..*)\./g, '')
    }
    const [integerDigits, fractionDigits] = newValue.split('.')

    if (fractionDigits?.length > maxDecimals) {
      newValue = `${integerDigits}.${fractionDigits.slice(0, maxDecimals)}`
    }

    return newValue
  }

  return { secureDecimals }
}

export default useAmount
