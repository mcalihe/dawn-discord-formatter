import { UserRoundPlus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type AddNewPlayerCardProps = { onClick?: () => void }

export const AddNewPlayerCard = ({ onClick }: AddNewPlayerCardProps) => {
  const { t } = useTranslation()

  return (
    <div
      onClick={onClick}
      className={'card selectable justify-center items-center cursor-pointer border-dashed  '}
    >
      <UserRoundPlus className="w-6 h-6" />
      <h2 className="text-sm font-medium">{t('add.new.player')}</h2>
    </div>
  )
}
