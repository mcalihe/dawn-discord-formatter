import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const FloatingInput = ({ id, label, className, disabled, ...props }: FloatingInputProps) => {
  return (
    <div className={clsx(className, 'relative')}>
      <input
        id={id}
        type="text"
        placeholder=" "
        disabled={disabled}
        className={clsx(
          'peer w-full bg-zinc-800 border border-zinc-700 text-white placeholder-transparent p-2 pt-5 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500',
          {
            'opacity-50 cursor-not-allowed bg-zinc-800 text-zinc-500 border-zinc-600': disabled,
          },
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className={clsx(
          'absolute left-2 top-0 text-zinc-400 text-sm transition-all',
          'peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500',
          'peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400',
          {
            'text-zinc-500': disabled,
          }
        )}
      >
        {label}
      </label>
    </div>
  )
}
