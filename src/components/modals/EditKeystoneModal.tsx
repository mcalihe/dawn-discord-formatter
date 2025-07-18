import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { DungeonId, Dungeons } from '../../data/Dungeons'
import { FloatingInput } from '../FloatingInput'
import { FloatingSelect } from '../FloatingSelect'

interface EditKeystoneModalProps {
  open: boolean
  onClose: () => void
  onSave: (data: { level: number; dungeon: DungeonId }) => void
  initialLevel: number
  initialDungeon: DungeonId
}

export const EditKeystoneModal = ({
  open,
  onClose,
  onSave,
  initialLevel,
  initialDungeon,
}: EditKeystoneModalProps) => {
  const { t } = useTranslation()

  const [level, setLevel] = useState(initialLevel)
  const [dungeon, setDungeon] = useState<DungeonId>(initialDungeon)

  useEffect(() => {
    if (open) {
      setLevel(initialLevel)
      setDungeon(initialDungeon)
    }
  }, [open, initialLevel, initialDungeon])

  const handleSave = () => {
    onSave({ level, dungeon })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-zinc-900 text-white rounded-xl p-6 space-y-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold">
            <div className="flex justify-between items-center">
              {t('modal.editKeystone.title', 'Edit Keystone')}
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Dialog.Title>

          <div className="flex gap-4">
            <FloatingInput
              id="keystone-level"
              label={t('modal.newCharacter.keystone.level')}
              type="number"
              value={level}
              className={'flex-1'}
              onChange={(e) => setLevel(Number(e.target.value))}
              required
            />
            <FloatingSelect
              id="keystone-dungeon"
              label={t('modal.newCharacter.keystone.dungeon')}
              value={dungeon}
              className={'flex-4'}
              onChange={(e) => setDungeon(e.target.value as DungeonId)}
              options={Dungeons.map((d) => ({ value: d.id, label: d.name }))}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="text-sm text-zinc-400 hover:text-white transition cursor-pointer"
            >
              {t('modal.cancel')}
            </button>
            <button
              onClick={handleSave}
              disabled={!level || !dungeon}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('modal.save')}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
