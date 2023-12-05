'use client'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: React.ReactNode
  isFontBold?: boolean
}

export const Button = ({ children, isFontBold, ...attrs }: ButtonProps) => {
  return (
    <button
      className={`text-sm bg-secondary px-4 py-2 rounded text-primary w-full ${isFontBold ? 'font-bold' : ''}`}
      {...attrs}
    >
      {children}
    </button>
  )
}
