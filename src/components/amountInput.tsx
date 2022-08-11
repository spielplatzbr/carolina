import React from 'react'

import Input from '@/components/input'
import useAmount from '@/hooks/useAmount'

export interface AmountInputProps {
  maxDecimals?: number
}

const AmountInput = ({ maxDecimals = 0 }: AmountInputProps) => {
  const ref = React.createRef<HTMLInputElement>()

  const { secureDecimals } = useAmount()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const formatted = secureDecimals(event.target?.value, maxDecimals)

    const inputEl = ref.current as HTMLInputElement
    inputEl.value = formatted
  }

  return <Input ref={ref} onChange={handleChange} />
}

export default AmountInput
