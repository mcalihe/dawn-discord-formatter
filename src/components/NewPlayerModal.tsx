import { X } from 'lucide-react'
import { useState } from 'react'

interface NewPlayerModalProps {
  onClose: () => void
  onConfirm: (name: string) => void
}

export const NewPlayerModal = ({ onClose, onConfirm }: NewPlayerModalProps) => {
  const [name, setName] = useState('')

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold mb-4">Neuen Spieler hinzufügen</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Spielername"
          className="w-full border p-2 rounded mb-4"
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={() => {
            onConfirm(name.trim())
            onClose()
          }}
        >
          Hinzufügen
        </button>
      </div>
    </div>
  )
}
