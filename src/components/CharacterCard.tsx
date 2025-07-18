import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import { Pencil, Trash } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CLASS_TRANSLATIONS } from '../data/Class'
import { Character } from '../models/Character'
import { ConfirmModal } from './modals/ConfirmModal'
import { EditCharacterModal } from './modals/EditCharacterModal'
import { EditKeystoneModal } from './modals/EditKeystoneModal'

interface CharacterBadgeProps {
  char: Character
  onToggleActive: () => void
  onUpdateChar: (char: Character) => void
  onDeleteChar: () => void
}

export const CharacterCard = ({
  char,
  onToggleActive,
  onUpdateChar,
  onDeleteChar,
}: CharacterBadgeProps) => {
  const { t } = useTranslation()
  const [keystoneModalOpen, setKeystoneModalOpen] = useState(false)
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  return (
    <div
      className={`relative flex justify-between p-3 rounded-xl border text-white shadow-sm hover:shadow-md transition-shadow
      ${
        char.active
          ? 'bg-zinc-900/60 border-zinc-700'
          : 'bg-zinc-800/50 border-zinc-800 text-zinc-400'
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-1 flex-col gap-1 text-sm">
          <span className="font-semibold">
            {char.name} • {char.realm}{' '}
          </span>
          <span className="text-xs">
            {CLASS_TRANSLATIONS[char.class]} • {char.roles.join(', ')}
          </span>
        </div>
        <button
          onClick={() => setKeystoneModalOpen(true)}
          className={clsx(
            char.keystoneAvailable
              ? 'bg-zinc-700 hover:border-blue-400 hover:bg-blue-500/20'
              : 'bg-orange-900/40 hover:border-orange-400 hover:bg-orange-500/20',
            'self-start text-xs px-2 py-1 rounded border border-zinc-600  text-white' +
              'focus:outline-none focus:ring-1 focus:ring-blue-500' +
              'transition-colors duration-150 cursor-pointer'
          )}
          title={t('change.keystone.title')}
        >
          {char.keystoneAvailable
            ? `+${char.keystone.level} ${char.keystone.dungeon}`
            : t('keystone.not.available')}
        </button>
      </div>
      <div className="flex flex-col justify-between items-end gap-2">
        <div className="flex flex-row gap-2">
          <button
            onClick={() => setEditModalOpen(true)}
            className="p-1 h-6 w-6 rounded hover:text-white text-zinc-400 hover:bg-zinc-700 transition cursor-pointer"
            title={t('tooltip.editCharacter')}
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            onClick={() => setDeleteConfirmationModalOpen(true)}
            className="p-1 h-6 w-6 rounded hover:text-white text-zinc-400 hover:bg-red-900 transition cursor-pointer"
            title={t('tooltip.deleteCharacter')}
          >
            <Trash className="w-4 h-4" />
          </button>
        </div>
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
          console.log(data)
          char.keystone = data
          char.keystoneAvailable = data.keystoneAvailable
          onUpdateChar(char)
          setKeystoneModalOpen(false)
        }}
        initialKeystoneAvailable={char.keystoneAvailable}
        initialLevel={char.keystone.level}
        initialDungeon={char.keystone.dungeon}
      />

      <EditCharacterModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={onUpdateChar}
        character={char}
        mode="edit"
      />

      <ConfirmModal
        open={deleteConfirmationModalOpen}
        onClose={() => setDeleteConfirmationModalOpen(false)}
        onSave={onDeleteChar}
        title={t('confirm.modal.delete.char.title')}
        bodyText={t('confirm.modal.delete.char.description')}
        yesLabel={t('confirm.modal.delete.char.delete')}
        noLabel={t('confirm.modal.delete.char.cancel')}
        yesBtnClassNames={'bg-red-900 hover:bg-red-700'}
      />
    </div>
  )
}
