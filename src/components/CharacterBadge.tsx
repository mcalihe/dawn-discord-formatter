import { Switch } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

import { CLASSES } from '../data/Class'
import { Character } from '../models/Character'

interface CharacterBadgeProps {
  char: Character
  onToggleActive: () => void
}

export const CharacterBadge = ({ char, onToggleActive }: CharacterBadgeProps) => {
  const { t } = useTranslation()

  return (
    <div
      className={`flex justify-between p-3 rounded-lg transition-all
        ${char.active ? 'bg-green-700/30 text-white' : 'bg-zinc-700 text-zinc-400'}`}
    >
      <div className="flex flex-1 flex-col gap-1 text-sm">
        <span className="font-semibold text-white">
          {char.name} • {char.realm}
        </span>
        <span className="text-xs">
          {CLASSES.find((c) => c.id == char.class)!.label} •{' '}
          {char.roles.map((role) => role).join(', ')}
        </span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className={`text-xs px-2 py-1 rounded border border-zinc-600 bg-zinc-700`}>
          +{char.keystone.level} {char.keystone.dungeon}
        </span>

        <Switch.Group>
          <div className="flex items-center gap-3">
            <Switch
              checked={char.active}
              onChange={onToggleActive}
              className={`${
                char.active ? 'bg-green-700' : 'bg-orange-700'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  char.active ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
      </div>
    </div>
  )
}
