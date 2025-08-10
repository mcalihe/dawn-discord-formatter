import { Dialog, Field, Label, Switch } from '@headlessui/react'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { DungeonId, useDungeonTranslations } from '../../data/Dungeons'
import { FloatingInput } from '../controls/FloatingInput'
import { FloatingSelect } from '../controls/FloatingSelect'

interface EditKeystoneModalProps {
  open: boolean
  onClose: () => void
  onSave: (data: { level: number; dungeon: DungeonId; keystoneAvailable: boolean }) => void
  initialKeystoneAvailable: boolean
  initialLevel: number
  initialDungeon: DungeonId
}

export const EditKeystoneModal = ({
  open,
  onClose,
  onSave,
  initialKeystoneAvailable,
  initialLevel,
  initialDungeon,
}: EditKeystoneModalProps) => {
  const { t } = useTranslation()
  const dungeonTranslations = useDungeonTranslations()

  const dungeonExists = (value: string): boolean => {
    return Object.values(DungeonId).includes(value as DungeonId)
  }

  const [keystoneAvailable, setKeystoneAvailable] = useState(initialKeystoneAvailable)
  const [level, setLevel] = useState(initialLevel)
  const [dungeon, setDungeon] = useState<DungeonId>(
    dungeonExists(initialDungeon) ? initialDungeon : DungeonId.Ara
  )

  useEffect(() => {
    if (open) {
      setLevel(initialLevel)
      setDungeon(dungeonExists(initialDungeon) ? initialDungeon : DungeonId.Ara)
      setKeystoneAvailable(initialKeystoneAvailable)
    }
  }, [open, initialLevel, initialDungeon])

  const handleSave = () => {
    onSave({ level, dungeon, keystoneAvailable })
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

          <Field>
            <div className="flex items-center gap-3">
              <Switch
                id={'keystone-available'}
                checked={keystoneAvailable}
                onChange={setKeystoneAvailable}
                className={`${
                  keystoneAvailable ? 'bg-blue-600' : 'bg-zinc-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    keystoneAvailable ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <Label className="text-sm text-white">
                {t('modal.newCharacter.keystone.available')}
              </Label>
            </div>
          </Field>

          <div className="flex gap-4">
            <FloatingInput
              id="keystone-level"
              label={t('modal.newCharacter.keystone.level')}
              type="number"
              value={level}
              className={'flex-1'}
              onChange={(e) => setLevel(Number(e.target.value))}
              required={true}
              disabled={!keystoneAvailable}
            />
            <FloatingSelect
              id="keystone-dungeon"
              label={t('modal.newCharacter.keystone.dungeon')}
              value={dungeon}
              className={'flex-2'}
              onChange={(e) => setDungeon(e.target.value as DungeonId)}
              options={Object.entries(dungeonTranslations).map(([key, label]) => ({
                value: key,
                label: label,
              }))}
              required={true}
              disabled={!keystoneAvailable}
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
