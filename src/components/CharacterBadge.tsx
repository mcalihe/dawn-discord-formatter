import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CLASSES } from '../data/Class'
import { Character } from '../models/Character'
import { EditKeystoneModal } from './modals/EditKeystoneModal'

interface CharacterBadgeProps {
  char: Character
  onToggleActive: () => void
  onUpdateKeystone: (newKeystone: Character['keystone']) => void
}

export const CharacterBadge = ({ char, onToggleActive, onUpdateKeystone }: CharacterBadgeProps) => {
  const { t } = useTranslation()
  const [keystoneModalOpen, setKeystoneModalOpen] = useState(false)
  return (
    <div
      className={`flex justify-between p-3 rounded-xl border text-white shadow-sm hover:shadow-md transition-shadow
    ${
      char.active
        ? 'bg-zinc-900/60 border-zinc-700'
        : 'bg-zinc-800/50 border-zinc-800 text-zinc-400'
    }`}
    >
      {' '}
      <div className="flex flex-1 flex-col gap-1 text-sm">
        <span className="font-semibold">
          {char.name} • {char.realm}
        </span>
        <span className="text-xs">
          {CLASSES.find((c) => c.id == char.class)!.label} •{' '}
          {char.roles.map((role) => role).join(', ')}
        </span>
      </div>
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => setKeystoneModalOpen(true)}
          className="text-xs px-2 py-1 rounded border border-zinc-600 bg-zinc-700 text-white
             hover:border-blue-400 hover:bg-blue-500/20
             focus:outline-none focus:ring-2 focus:ring-blue-500
             transition-colors duration-150 cursor-pointer"
          title={t('change.keystone.title')}
        >
          +{char.keystone.level} {char.keystone.dungeon}
        </button>

        <Switch
          checked={char.active}
          onChange={onToggleActive}
          className={`${
            char.active ? 'bg-green-700' : 'bg-orange-700'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer`}
        >
          <span
            className={`${
              char.active ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
      <EditKeystoneModal
        open={keystoneModalOpen}
        onClose={() => setKeystoneModalOpen(false)}
        onSave={(data) => {
          onUpdateKeystone(data)
          setKeystoneModalOpen(false)
        }}
        initialLevel={char.keystone.level}
        initialDungeon={char.keystone.dungeon}
      />
    </div>
  )
}
