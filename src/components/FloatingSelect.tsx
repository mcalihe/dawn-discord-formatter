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
  options,
  ...props
}: FloatingSelectProps) => {
  return (
    <div className="relative w-full mb-4">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="peer w-full bg-zinc-800 border border-zinc-700 text-white placeholder-transparent p-2 pt-5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
        {...props}
      >
        <option value="" disabled hidden>
          {/* Damit der Placeholder invisible ist, aber das Label reagiert */}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <label
        htmlFor={id}
        className="absolute left-2 top-0 text-zinc-400 text-sm transition-all
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-zinc-500
          peer-focus:top-0
          peer-focus:text-sm
          peer-focus:text-blue-400"
      >
        {label}
      </label>
    </div>
  )
}
