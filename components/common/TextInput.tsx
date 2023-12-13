'use client'

import { useId } from 'react'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'id'> {
  type?: 'text' | 'email' | 'password' | 'tel' | 'search'
  label?: string
}

export const TextInput = ({ type = 'text', label, ...attr }: TextInputProps) => {
  const id = useId()
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm capitalize inline-flex gap-1 items-center">
          {label}
          {attr.required && <span className="text-[#ff0000]">*</span>}
        </label>
      )}
      <input type={type} id={id} className={`text-base w-full p-2 focus:outline-2 rounded`} {...attr} />
    </>
  )
}
