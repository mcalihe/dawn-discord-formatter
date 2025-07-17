import { Listbox } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

import { Classes } from '../data/Classes'
import { CharacterRole } from '../data/Roles'
import { CharacterSpec, SPECS_BY_CLASS } from '../data/Specs'

interface SpecSelectProps {
  charClass: Classes | ''
  specs: CharacterSpec[]
  setSpecs: (value: CharacterSpec[]) => void
  setRoles: (roles: CharacterRole[]) => void
}

export const SpecMultiSelect = ({ charClass, specs, setSpecs, setRoles }: SpecSelectProps) => {
  const { t } = useTranslation()
  const disabled = !charClass

  const handleChange = (value: CharacterSpec[]) => {
    setSpecs(value)
    const roles = value.map(
      (s) => SPECS_BY_CLASS[charClass as Classes]?.find((entry) => entry.spec === s)?.role
    ) as CharacterRole[]
    setRoles([...new Set(roles)])
  }

  return (
    <Listbox as="div" value={specs} onChange={handleChange} multiple disabled={disabled}>
      {({ open }) => (
        <div className="relative w-full mb-4" title={disabled ? t('tooltip.selectClassFirst') : ''}>
          <Listbox.Button
            className={`peer w-full bg-zinc-800 border border-zinc-700 text-white text-left p-2 pt-5 rounded
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            `}
          >
            {specs.length > 0 ? (
              specs.join(', ')
            ) : (
              <span className="text-zinc-500">{t('modal.newCharacter.spec.placeholder')}</span>
            )}
          </Listbox.Button>

          <label
            className="absolute left-2 top-0 text-zinc-400 text-sm transition-all
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-zinc-500
        peer-focus:top-0
        peer-focus:text-sm
        peer-focus:text-blue-400"
          >
            {t('modal.newCharacter.spec.label')}
          </label>

          {open && charClass && (
            <Listbox.Options className="absolute z-10 mt-1 w-full rounded bg-zinc-800 border border-zinc-700 shadow-lg max-h-60 overflow-auto focus:outline-none text-sm">
              {SPECS_BY_CLASS[charClass].map(({ spec }) => (
                <Listbox.Option
                  key={spec}
                  value={spec}
                  className={({ active, selected }) =>
                    `px-4 py-2 select-none ${
                      active ? 'bg-blue-500 text-white' : 'text-white'
                    } ${selected ? 'font-semibold' : ''}`
                  }
                >
                  {spec}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </div>
      )}
    </Listbox>
  )
}
