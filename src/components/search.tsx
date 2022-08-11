import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Input from '@/components/input'

const SEARCH_TERM_MAX_LENGTH = 40

const SearchWidget = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialSearchTerm = decodeURIComponent(searchParams.get('search') ?? '')

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value
    const encoded = encodeURIComponent(value)

    setSearchParams({ search: encoded })
  }

  return (
    <Input
      placeholder="Search..."
      defaultValue={initialSearchTerm}
      onInput={handleInput}
      maxLength={SEARCH_TERM_MAX_LENGTH}
    />
  )
}

export default SearchWidget
