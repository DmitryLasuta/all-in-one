'use client'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> {
  type?: 'text' | 'email' | 'password' | 'tel' | 'search'
  icon?: JSX.Element
}

export const TextInput = ({ icon, type = 'text', ...attr }: TextInputProps) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#616161] pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={`text-base w-full p-2 focus:outline-2 rounded ${icon ? 'pl-10' : 'pl-2'}`}
        {...attr}
      />
    </div>
  )
}
