import { useTranslation } from 'react-i18next'

export const AddNewPlayerCard = () => {
  const { t } = useTranslation()

  return (
    <div className={'card border-dashed flex justify-center items-center'}>
      {t('add.new.player')}
    </div>
  )
}
