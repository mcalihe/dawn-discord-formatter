import clsx from 'clsx'
import { SelectHTMLAttributes } from 'react'

interface FloatingSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  label: string
  options: { value: string; label: string }[]
}

export const FloatingSelect = ({
  id,
  label,
  value,
  onChange,
  className,
  options,
  disabled,
  ...props
}: FloatingSelectProps) => {
  return (
    <div className={clsx(className, 'relative')}>
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          'peer w-full bg-zinc-800 border border-zinc-700 text-white placeholder-transparent p-2 pt-5 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500',
          {
            'opacity-50 cursor-not-allowed text-zinc-500 border-zinc-600': disabled,
          }
        )}
        {...props}
      >
        <option value="" disabled hidden />
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

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
