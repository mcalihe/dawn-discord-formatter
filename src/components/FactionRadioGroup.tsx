import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import { Faction, FACTION_TRANSLATION_KEYS } from '../data/Faction'

interface FactionRadioGroupProps {
  value: Faction
  onChange: (value: Faction) => void
}

export const FactionRadioGroup = ({ value, onChange }: FactionRadioGroupProps) => {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <RadioGroup value={value} onChange={onChange} className="flex gap-4">
        {Object.values(Faction).map((faction) => (
          <RadioGroup.Option key={faction} value={faction} className="focus:outline-none">
            {({ checked }) => (
              <div
                className={clsx(
                  'px-4 py-2 rounded border text-sm font-medium cursor-pointer transition flex items-center gap-2',
                  checked
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-zinc-800 text-zinc-300 border-zinc-600 hover:border-blue-400 hover:text-white'
                )}
              >
                <span>{t(FACTION_TRANSLATION_KEYS[faction])}</span>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  )
}
