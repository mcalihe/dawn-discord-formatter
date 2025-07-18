import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import { X } from 'lucide-react'

interface ConfirmModalProps {
  open: boolean
  onClose: () => void
  onSave: () => void
  noLabel: string
  yesLabel: string
  bodyText: string
  title: string
  yesBtnClassNames?: string
}

export const ConfirmModal = ({
  open,
  onClose,
  onSave,
  yesLabel,
  noLabel,
  title,
  bodyText,
  yesBtnClassNames,
}: ConfirmModalProps) => {
  const handleClose = () => {
    onClose()
  }

  const handleSave = () => {
    onSave()
    onClose()
  }

  return (
    <Dialog open={open} onClose={() => handleClose()} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-zinc-900 text-white rounded-xl p-6 space-y-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold">
            <div className="flex justify-between items-center">
              {title}
              <button
                onClick={() => handleClose()}
                className="text-zinc-400 hover:text-white transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Dialog.Title>

          <p>{bodyText}</p>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => handleClose()}
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              {noLabel}
            </button>
            <button
              onClick={handleSave}
              className={clsx(
                'bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
                yesBtnClassNames
              )}
            >
              {yesLabel}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
