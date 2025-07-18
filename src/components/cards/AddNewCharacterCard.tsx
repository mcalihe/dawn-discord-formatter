import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface AddNewCharacterBadgeProps {
  onClick: () => void
}

export const AddNewCharacterCard = ({ onClick }: AddNewCharacterBadgeProps) => {
  const { t } = useTranslation()

  return (
    <button
      onClick={onClick}
      title={t('character.add')}
      className="flex items-center cursor-pointer justify-center gap-2 p-3 rounded-lg border border-dashed border-zinc-500 text-zinc-400 hover:border-blue-400 hover:text-blue-300 hover:bg-white/5 transition-colors w-full"
    >
      <Plus className="w-4 h-4" />
    </button>
  )
}
