import { Listbox } from '@headlessui/react'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { ARMOR_SLOT_TRANSLATIONS, ArmorSlot } from '../../data/AmorSlot'

interface SpecSelectProps {
  disabled: boolean
  armorSlots: ArmorSlot[]
  setArmorSlots: (value: ArmorSlot[]) => void
}
const ARMOR_OPTIONS = Object.values(ArmorSlot).map((slot) => ({
  value: slot,
  label: slot.charAt(0).toUpperCase() + slot.slice(1), // z.B. "head" -> "Head"
}))
export const ArmorMultiSelect = ({ disabled, armorSlots, setArmorSlots }: SpecSelectProps) => {
  const { t } = useTranslation()

  const handleChange = (value: ArmorSlot[]) => {
    setArmorSlots(value)
  }

  return (
    <Listbox as="div" value={armorSlots} onChange={handleChange} multiple disabled={disabled}>
      {({ open }) => (
        <div className="relative w-full" title={disabled ? t('tooltip.selectClassFirst') : ''}>
          <Listbox.Button
            className={`peer w-full bg-zinc-800 border border-zinc-700 text-white text-left p-2 pt-5 rounded
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            `}
          >
            {armorSlots.length > 0 ? (
              armorSlots.map((at) => ARMOR_SLOT_TRANSLATIONS[at]).join(', ')
            ) : (
              <span className="text-zinc-500">
                {t('modal.newCharacter.cant.trade.placeholder')}
              </span>
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
            {t('modal.newCharacter.cant.trade.label')}
          </label>

          {open && !disabled && (
            <Listbox.Options className="absolute z-10 mt-1 w-full rounded bg-zinc-800 border border-zinc-700 shadow-lg max-h-60 overflow-auto focus:outline-none text-sm">
              {ARMOR_OPTIONS.map(({ value, label }) => (
                <Listbox.Option
                  key={value}
                  value={value}
                  className={({ active, selected }) =>
                    `relative px-4 py-2 cursor-pointer select-none flex items-center gap-2 rounded
          ${selected ? 'bg-blue-500/10' : ''}
          ${active ? 'bg-blue-600/20' : ''}`
                  }
                >
                  {({ selected }) => (
                    <>
                      {selected ? (
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      ) : (
                        <span className="w-4 h-4 shrink-0" />
                      )}
                      <span className={selected ? 'font-medium text-white' : 'text-white'}>
                        {label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </div>
      )}
    </Listbox>
  )
}
