import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type AddNewPlayerCardProps = { onClick?: () => void }

export const AddNewPlayerCard = ({ onClick }: AddNewPlayerCardProps) => {
  const { t } = useTranslation()

  return (
    <div
      onClick={onClick}
      className={
        'card cursor-pointer bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-blue-400 hover:text-blue-300 transition-colors duration-200'
      }
    >
      <Plus className="w-6 h-6" />
      <span className="text-sm font-medium">{t('add.new.player')}</span>
    </div>
  )
}
