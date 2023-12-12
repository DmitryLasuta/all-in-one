'use client'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: React.ReactNode
  font?: 'bold' | 'normal'
}

export const Button = ({ children, font = 'normal', ...attrs }: ButtonProps) => {
  return (
    <button
      className={`focus-visible:outline focus-visible:outline-4 focus-visible:outline-accent text-sm bg-secondary px-4 py-2 rounded text-primary w-full ${
        font === 'bold' ? 'font-bold' : ''
      } disabled:bg-[#616161] disabled:cursor-not-allowed disabled:border-2`}
      {...attrs}
    >
      {children}
    </button>
  )
}
