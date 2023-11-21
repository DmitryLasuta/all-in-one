'use client'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...attrs }: ButtonProps) => {
  return (
    <button className="text-sm bg-secondary px-4 py-2 rounded text-primary" {...attrs}>
      {children}
    </button>
  )
}
