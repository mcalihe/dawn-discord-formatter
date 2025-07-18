import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FloatingInput } from '../controls/FloatingInput'

interface EditTeamModalProps {
  open: boolean
  onClose: () => void
  mode: 'create' | 'edit'
  initialName?: string
  onSave: (data: { name: string; discord?: string }) => void
}

export const EditTeamModal = ({ open, onClose, onSave, initialName, mode }: EditTeamModalProps) => {
  const { t } = useTranslation()
  const [name, setName] = useState(initialName ?? '')

  useEffect(() => {
    if (open) {
      setName(initialName ?? '')
    }
  }, [open, initialName])

  const resetData = () => {
    setName(initialName ?? '')
  }

  const handleClose = () => {
    resetData()
    onClose()
  }

  const handleSave = () => {
    onSave({ name })
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-zinc-900 text-white rounded-xl p-6 space-y-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold">
            <div className={'flex flex-row justify-between'}>
              {mode == 'edit' ? t('modal.edit.team.title') : t('modal.add.team.title')}

              <button
                onClick={handleClose}
                className="text-zinc-400 hover:text-white transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Dialog.Title>

          <FloatingInput
            id="team-name"
            label={t('modal.team.name.label')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={handleClose}
              className="text-sm text-zinc-400 hover:text-white transition cursor-pointer"
            >
              {t('modal.cancel')}
            </button>
            <button
              onClick={handleSave}
              disabled={!name.trim()}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {t('modal.save')}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
