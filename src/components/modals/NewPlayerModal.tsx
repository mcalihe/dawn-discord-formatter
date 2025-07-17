import { X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FloatingInput } from '../FloatingInput'

interface NewPlayerModalProps {
  onClose: () => void
  onConfirm: (name: string, discord?: string) => void
}

export const NewPlayerModal = ({ onClose, onConfirm }: NewPlayerModalProps) => {
  const [name, setName] = useState('')
  const [discord, setDiscord] = useState('')
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-zinc-900 rounded-xl p-6 w-[90%] max-w-sm relative shadow-xl border border-white/10 text-white">
        <button onClick={onClose} className="absolute top-3 right-3 text-zinc-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold mb-4">{t('modal.newPlayer.title')}</h2>

        <FloatingInput
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={t('modal.newPlayer.name.label')}
        />

        <FloatingInput
          id="discord"
          value={discord}
          onChange={(e) => {
            setDiscord(e.target.value)
          }}
          label={t('modal.newPlayer.discord.label')}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
          onClick={() => {
            onConfirm(name.trim() || 'Unknown', discord.trim() || undefined)
            onClose()
          }}
        >
          {t('modal.newPlayer.confirm')}
        </button>
      </div>
    </div>
  )
}
