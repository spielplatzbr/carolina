import {
  CSSProperties,
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef
} from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  style?: CSSProperties
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { defaultValue, type = 'text' } = props

  return (
    <input
      {...props}
      ref={ref as ForwardedRef<HTMLInputElement>}
      autoFocus={true}
      defaultValue={defaultValue}
      type={type}
      className="
        w-full
        rounded-lg
        border-2
        border-gray-700 
        bg-gray-800
        p-4 
        text-lg 
        text-slate-400 
        focus:border-pink-800
        focus:bg-opacity-100 
        focus:text-slate-200
      "
    />
  )
})

export default Input
